import { useState, useCallback } from 'react';
import { Download, ChevronDown } from 'lucide-react';

interface ExportMenuProps {
  playlistId: string;
  playlistName: string;
  templateType: 'tile' | 'story' | 'social';
  backgroundColor: string;
  artistImage: string;
  artistName: string;
  singleTitle: string;
  logoColor: 'white' | 'black';
}

// Library loading and caching
const getExportLibs = async () => {
  const [domtoimage, jsPDF, JSZip] = await Promise.all([
    import("dom-to-image").then(mod => mod.default),
    import("jspdf").then(mod => mod.jsPDF),
    import("jszip").then(mod => mod.default),
  ]);
  return { domtoimage, jsPDF, JSZip };
};

export function ExportMenu({
  playlistName,
  templateType,
}: ExportMenuProps) {
  const [showMenu, setShowMenu] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  const exportTemplate = useCallback(async (format: 'png' | 'jpeg' | 'webp' | 'pdf') => {
    setIsExporting(true);
    setShowMenu(false);

    try {
      const { domtoimage, jsPDF } = await getExportLibs();
      
      // Get the hidden export template element
      const templateId = `export-${templateType}`;
      const templateElement = document.getElementById(templateId);
      
      if (!templateElement) {
        throw new Error('Template element not found');
      }

      // Get exact dimensions based on template type
      const dimensions = templateType === 'tile' 
        ? { width: 2400, height: 2400 }
        : { width: 1080, height: 1920 };

      // Convert all images to data URLs to avoid CORS/blob issues
      const images = templateElement.querySelectorAll('img');
      const imageDataMap = new Map<HTMLImageElement, string>();
      
      await Promise.all(
        Array.from(images).map(async (img) => {
          try {
            // Wait for image to load
            if (!img.complete) {
              await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
                setTimeout(() => resolve(null), 5000);
              });
            }
            
            // Convert to data URL using canvas
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth || img.width;
            canvas.height = img.naturalHeight || img.height;
            const ctx = canvas.getContext('2d');
            
            if (ctx && canvas.width > 0 && canvas.height > 0) {
              ctx.drawImage(img, 0, 0);
              const dataUrl = canvas.toDataURL('image/png');
              imageDataMap.set(img, img.src);
              img.src = dataUrl;
            }
          } catch (error) {
            console.warn('Failed to convert image:', error);
          }
        })
      );

      // Additional stabilization wait
      await new Promise(resolve => setTimeout(resolve, 300));

      // Use dom-to-image for pixel-perfect export
      const dataUrl = await domtoimage.toPng(templateElement, {
        width: dimensions.width,
        height: dimensions.height,
        style: {
          transform: 'none',
          transformOrigin: 'top left',
          margin: '0',
          padding: '0'
        },
        quality: 1.0,
        cacheBust: false,
      });

      // Restore original image sources
      imageDataMap.forEach((originalSrc, img) => {
        img.src = originalSrc;
      });

      const fileName = `${playlistName}_${templateType}_${dimensions.width}x${dimensions.height}`;

      if (format === 'pdf') {
        const pdf = new jsPDF({
          orientation: dimensions.width > dimensions.height ? 'landscape' : 'portrait',
          unit: 'px',
          format: [dimensions.width, dimensions.height],
        });

        pdf.addImage(dataUrl, 'PNG', 0, 0, dimensions.width, dimensions.height);
        pdf.save(`${fileName}.pdf`);
      } else {
        // Convert data URL to blob
        const response = await fetch(dataUrl);
        let blob = await response.blob();
        
        // Convert to desired format if not PNG
        if (format !== 'png') {
          const img = new Image();
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
            img.src = dataUrl;
          });
          
          const canvas = document.createElement('canvas');
          canvas.width = dimensions.width;
          canvas.height = dimensions.height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0);
            
            const mimeType = format === 'jpeg' ? 'image/jpeg' : 'image/webp';
            const quality = format === 'jpeg' ? 0.95 : 1.0;
            
            blob = await new Promise<Blob>((resolve) => {
              canvas.toBlob((b) => resolve(b!), mimeType, quality);
            });
          }
        }

        // Try to use showSaveFilePicker for better UX
        const canUseSaveFilePicker = 'showSaveFilePicker' in window;
        
        if (canUseSaveFilePicker) {
          try {
            const extension = format;
            const mimeTypes: Record<string, string> = {
              'png': 'image/png',
              'jpeg': 'image/jpeg',
              'webp': 'image/webp'
            };
            const mimeType = mimeTypes[extension];
            
            const fileHandle = await (window as any).showSaveFilePicker({
              suggestedName: `${fileName}.${extension}`,
              types: [{
                description: `${extension.toUpperCase()} File`,
                accept: { [mimeType]: [`.${extension}`] }
              }],
              startIn: 'downloads'
            });
            
            const writable = await fileHandle.createWritable();
            await writable.write(blob);
            await writable.close();
            
            return;
          } catch (error) {
            if ((error as Error).name === 'AbortError') {
              return;
            }
            console.log('showSaveFilePicker failed, using fallback download:', error);
          }
        }
        
        // Fallback: regular download
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${fileName}.${format}`;
        link.click();
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Export failed:', error);
      alert('Export failed. Please try again.');
    } finally {
      setIsExporting(false);
    }
  }, [playlistName, templateType]);

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        disabled={isExporting}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Download className="w-4 h-4" />
        {isExporting ? 'Exporting...' : 'Export Template'}
        <ChevronDown className="w-4 h-4" />
      </button>

      {showMenu && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setShowMenu(false)}
          />
          <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-20">
            <button
              onClick={() => exportTemplate('png')}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              Export as PNG
            </button>
            <button
              onClick={() => exportTemplate('jpeg')}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              Export as JPEG
            </button>
            <button
              onClick={() => exportTemplate('webp')}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100"
            >
              Export as WebP
            </button>
            <button
              onClick={() => exportTemplate('pdf')}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors"
            >
              Export as PDF
            </button>
          </div>
        </>
      )}
    </div>
  );
}
