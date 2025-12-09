import { useState, useRef, useCallback } from 'react';
import { X, Check } from 'lucide-react';

interface ImageCropperProps {
  image: string;
  onCropComplete: (croppedImage: string) => void;
  onCancel: () => void;
}

export function ImageCropper({ image, onCropComplete, onCancel }: ImageCropperProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleCrop = useCallback(() => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imageRef.current;
    const size = 400;
    canvas.width = size;
    canvas.height = size;

    // Calculate crop dimensions
    const scale = zoom;
    const cropWidth = size / scale;
    const cropHeight = size / scale;

    ctx.drawImage(
      img,
      crop.x,
      crop.y,
      cropWidth,
      cropHeight,
      0,
      0,
      size,
      size
    );

    const croppedImage = canvas.toDataURL('image/png');
    onCropComplete(croppedImage);
  }, [crop, zoom, onCropComplete]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex items-center justify-between mb-4">
          <h3>Crop Artist Image</h3>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4" style={{ height: '400px' }}>
          <img
            ref={imageRef}
            src={image}
            alt="Crop preview"
            className="absolute inset-0 w-full h-full object-contain"
            style={{
              transform: `scale(${zoom}) translate(${crop.x}px, ${crop.y}px)`,
            }}
          />
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm mb-2">Zoom</label>
            <input
              type="range"
              min="1"
              max="3"
              step="0.1"
              value={zoom}
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Position X</label>
            <input
              type="range"
              min="-200"
              max="200"
              step="1"
              value={crop.x}
              onChange={(e) => setCrop({ ...crop, x: parseInt(e.target.value) })}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Position Y</label>
            <input
              type="range"
              min="-200"
              max="200"
              step="1"
              value={crop.y}
              onChange={(e) => setCrop({ ...crop, y: parseInt(e.target.value) })}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleCrop}
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            Apply Crop
          </button>
        </div>

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
}
