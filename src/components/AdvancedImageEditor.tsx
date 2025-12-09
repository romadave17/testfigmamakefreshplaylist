import { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2, RotateCw, Grid3x3, FlipHorizontal2, FlipVertical2, RotateCcw } from 'lucide-react';

interface AdvancedImageEditorProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (imageDataUrl: string) => void;
  initialImage?: string;
}

export function AdvancedImageEditor({ isOpen, onClose, onSave, initialImage }: AdvancedImageEditorProps) {
  const [activeTab, setActiveTab] = useState<'transform' | 'adjust'>('transform');
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [flipHorizontal, setFlipHorizontal] = useState(false);
  const [flipVertical, setFlipVertical] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<string | null>(initialImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (initialImage) {
      setUploadedImage(initialImage);
    }
  }, [initialImage]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target?.result as string);
        // Auto-fit on upload
        setZoom(100);
        setPositionX(0);
        setPositionY(0);
        setRotation(0);
        setFlipHorizontal(false);
        setFlipVertical(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleZoomChange = (value: number) => {
    setZoom(Math.max(10, Math.min(500, value)));
  };

  const handleFitFull = () => {
    if (!uploadedImage) return;
    
    // Create temporary image to get dimensions
    const img = new Image();
    img.onload = () => {
      const previewSize = 600;
      const imgAspect = img.width / img.height;
      
      // Calculate zoom to fill the entire 600x600 area
      let fillZoom;
      if (imgAspect > 1) {
        // Wider than tall - fit to height to fill
        fillZoom = (previewSize / (previewSize / imgAspect)) * 100;
      } else {
        // Taller than wide - fit to width to fill
        fillZoom = (previewSize / (previewSize * imgAspect)) * 100;
      }
      
      setZoom(Math.round(fillZoom));
      setPositionX(0);
      setPositionY(0);
    };
    img.src = uploadedImage;
  };

  const handleRotationPreset = (angle: number) => {
    setRotation(angle);
  };

  const movePosition = (dx: number, dy: number) => {
    setPositionX(prev => prev + dx);
    setPositionY(prev => prev + dy);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!uploadedImage) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - positionX, y: e.clientY - positionY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPositionX(e.clientX - dragStart.x);
    setPositionY(e.clientY - dragStart.y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 1;
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        movePosition(0, -step);
        break;
      case 'ArrowDown':
        e.preventDefault();
        movePosition(0, step);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        movePosition(-step, 0);
        break;
      case 'ArrowRight':
        e.preventDefault();
        movePosition(step, 0);
        break;
      case '+':
      case '=':
        e.preventDefault();
        handleZoomChange(zoom + 1);
        break;
      case '-':
      case '_':
        e.preventDefault();
        handleZoomChange(zoom - 1);
        break;
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, zoom, positionX, positionY]);

  const handleReset = () => {
    setZoom(100);
    setRotation(0);
    setPositionX(0);
    setPositionY(0);
    setFlipHorizontal(false);
    setFlipVertical(false);
  };

  const handleApply = () => {
    if (!uploadedImage || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Use the already loaded image from preview if available
    const processImage = (img: HTMLImageElement) => {
      // Set canvas to final export size (2400x2400)
      canvas.width = 2400;
      canvas.height = 2400;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Save context state
      ctx.save();

      // Move to center of canvas
      ctx.translate(canvas.width / 2, canvas.height / 2);

      // Apply rotation
      ctx.rotate((rotation * Math.PI) / 180);

      // Apply flip
      ctx.scale(flipHorizontal ? -1 : 1, flipVertical ? -1 : 1);

      // Calculate how the image naturally fits in the 600x600 preview
      const previewSize = 600;
      const imgAspect = img.width / img.height;
      let previewWidth, previewHeight;
      
      if (imgAspect > 1) {
        // Wider than tall - fit to width
        previewWidth = previewSize;
        previewHeight = previewSize / imgAspect;
      } else {
        // Taller than wide or square - fit to height
        previewHeight = previewSize;
        previewWidth = previewSize * imgAspect;
      }

      // Calculate the scale factor based on zoom (100 = original fitted size)
      const scale = zoom / 100;
      const scaledWidth = previewWidth * scale;
      const scaledHeight = previewHeight * scale;

      // Scale up to 2400x2400 export size (4x the preview)
      const exportScale = 2400 / 600;
      const finalWidth = scaledWidth * exportScale;
      const finalHeight = scaledHeight * exportScale;

      // Apply position offset (scaled for 2400x2400 export)
      const offsetX = positionX * exportScale;
      const offsetY = positionY * exportScale;

      // Draw image centered with transformations
      ctx.drawImage(
        img,
        -finalWidth / 2 + offsetX,
        -finalHeight / 2 + offsetY,
        finalWidth,
        finalHeight
      );

      // Restore context state
      ctx.restore();

      // Export as optimized JPEG with 92% quality
      // This significantly reduces file size while maintaining excellent visual quality
      const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
      onSave(dataUrl);
      onClose();
    };

    // Try to use the already loaded preview image first (instant!)
    if (imageRef.current && imageRef.current.complete && imageRef.current.naturalWidth > 0) {
      processImage(imageRef.current);
    } else {
      // Fallback: create new image (has delay)
      const img = new Image();
      img.onload = () => processImage(img);
      img.src = uploadedImage;
    }
  };

  if (!isOpen) return null;

  const previewStyle = {
    transform: `
      translate(${positionX}px, ${positionY}px)
      rotate(${rotation}deg)
      scale(${flipHorizontal ? -1 : 1}, ${flipVertical ? -1 : 1})
      scale(${zoom / 100})
    `,
    transformOrigin: 'center center',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-[95vw] max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold">Advanced Image Editor - Square Format</h2>
            <p className="text-sm text-gray-500 mt-1">
              Perfect your artist image for square templates (2400x2400px)
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Preview */}
            <div className="flex-shrink-0">
              <div className="relative w-[600px] h-[600px] border-4 border-blue-500 rounded-xl overflow-hidden bg-gray-100">
                {/* Grid Overlay */}
                {showGrid && (
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    <svg className="w-full h-full">
                      <defs>
                        <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
                          <path d="M 120 0 L 0 0 0 120" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>
                )}

                {/* Image Preview */}
                <div
                  ref={previewRef}
                  className="absolute inset-0 flex items-center justify-center cursor-move"
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  {uploadedImage ? (
                    <img
                      ref={imageRef}
                      src={uploadedImage}
                      alt="Preview"
                      className="max-w-full max-h-full"
                      style={{
                        transform: `
                          translate(${positionX}px, ${positionY}px)
                          rotate(${rotation}deg)
                          scale(${flipHorizontal ? -1 : 1}, ${flipVertical ? -1 : 1})
                          scale(${zoom / 100})
                        `,
                        transformOrigin: 'center center',
                      }}
                      draggable={false}
                    />
                  ) : (
                    <div className="text-center text-gray-400">
                      <p className="text-sm">No image uploaded</p>
                    </div>
                  )}
                </div>

                {/* Info Badge */}
                <div className="absolute bottom-2 left-2 bg-black/75 text-white text-xs px-2 py-1 rounded z-20">
                  2400×2400px Preview
                </div>

                {/* Position/Zoom Info */}
                {uploadedImage && (
                  <div className="absolute top-2 left-2 bg-black/75 text-white text-xs px-2 py-1 rounded font-mono z-20">
                    X: {positionX} Y: {positionY}<br />
                    Zoom: {zoom}%
                  </div>
                )}
              </div>
            </div>

            {/* Right: Controls */}
            <div className="flex-1">
              {/* Tabs */}
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('transform')}
                  className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'transform'
                      ? 'bg-gray-200 font-medium'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  Transform
                </button>
                <button
                  onClick={() => setActiveTab('adjust')}
                  className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'adjust'
                      ? 'bg-gray-200 font-medium'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  Adjust
                </button>
              </div>

              {/* Transform Tab */}
              {activeTab === 'transform' && (
                <div className="space-y-4">
                  {/* Upload Button */}
                  {!uploadedImage && (
                    <div className="mb-4">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                      >
                        📁 Upload Image
                      </button>
                    </div>
                  )}

                  {/* Zoom */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <ZoomIn className="w-4 h-4" />
                        <span className="font-medium">Zoom</span>
                      </div>
                      <input
                        type="number"
                        value={zoom}
                        onChange={(e) => handleZoomChange(Number(e.target.value))}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-center text-sm"
                        min="10"
                        max="500"
                      />
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      value={zoom}
                      onChange={(e) => handleZoomChange(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleZoomChange(zoom - 10)}
                        className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        -10
                      </button>
                      <button
                        onClick={handleFitFull}
                        className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                      >
                        Fit Full
                      </button>
                      <button
                        onClick={() => handleZoomChange(zoom + 10)}
                        className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        +10
                      </button>
                    </div>
                  </div>

                  {/* Rotation */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <RotateCw className="w-4 h-4" />
                        <span className="font-medium">Rotation</span>
                      </div>
                      <span className="text-sm font-mono">{rotation}°</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="360"
                      value={rotation}
                      onChange={(e) => setRotation(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="grid grid-cols-4 gap-2 mt-2">
                      {[0, 90, 180, 270].map((angle) => (
                        <button
                          key={angle}
                          onClick={() => handleRotationPreset(angle)}
                          className={`px-3 py-1.5 border rounded-lg transition-colors ${
                            rotation === angle
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {angle}°
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Position Fine-tune */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Maximize2 className="w-4 h-4" />
                      <span className="font-medium">Position (Fine-tune)</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-2">
                      <div>
                        <label className="text-xs text-gray-600 mb-1 block">X Position</label>
                        <input
                          type="number"
                          value={positionX}
                          onChange={(e) => setPositionX(Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-600 mb-1 block">Y Position</label>
                        <input
                          type="number"
                          value={positionY}
                          onChange={(e) => setPositionY(Number(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-center"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <button onClick={() => movePosition(-5, -5)} className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">↖</button>
                      <button onClick={() => movePosition(0, -5)} className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">↑</button>
                      <button onClick={() => movePosition(5, -5)} className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">↗</button>
                      <button onClick={() => movePosition(-5, 0)} className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">←</button>
                      <button onClick={() => { setPositionX(0); setPositionY(0); }} className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">⊙</button>
                      <button onClick={() => movePosition(5, 0)} className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">→</button>
                      <button onClick={() => movePosition(-5, 5)} className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">↙</button>
                      <button onClick={() => movePosition(0, 5)} className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">↓</button>
                      <button onClick={() => movePosition(5, 5)} className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">↘</button>
                    </div>
                  </div>

                  {/* Flip */}
                  <div>
                    <div className="font-medium mb-2">Flip</div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setFlipHorizontal(!flipHorizontal)}
                        className={`flex-1 px-3 py-2 border rounded-lg transition-colors flex items-center justify-center gap-2 ${
                          flipHorizontal
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <FlipHorizontal2 className="w-4 h-4" />
                        Horizontal
                      </button>
                      <button
                        onClick={() => setFlipVertical(!flipVertical)}
                        className={`flex-1 px-3 py-2 border rounded-lg transition-colors flex items-center justify-center gap-2 ${
                          flipVertical
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        <FlipVertical2 className="w-4 h-4" />
                        Vertical
                      </button>
                    </div>
                  </div>

                  {/* Show Grid */}
                  <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Grid3x3 className="w-4 h-4" />
                      <span className="font-medium">Show Grid</span>
                    </div>
                    <button
                      onClick={() => setShowGrid(!showGrid)}
                      className={`w-12 h-6 rounded-full transition-colors relative ${
                        showGrid ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                          showGrid ? 'translate-x-6' : 'translate-x-0.5'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Reset Button */}
                  <button
                    onClick={handleReset}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset All Changes
                  </button>
                </div>
              )}

              {/* Adjust Tab */}
              {activeTab === 'adjust' && (
                <div className="text-center text-gray-500 py-8">
                  <p>Adjustment controls coming soon</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-white transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            disabled={!uploadedImage}
            className="flex-1 px-4 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <ZoomIn className="w-4 h-4" />
            Apply & Save (2400x2400)
          </button>
        </div>

        {/* Hidden canvas for export */}
        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
}