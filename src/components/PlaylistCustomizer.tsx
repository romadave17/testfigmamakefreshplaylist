import { useState } from 'react';
import { Upload, Download, Image as ImageIcon } from 'lucide-react';
import { AdvancedImageEditor } from './AdvancedImageEditor';
import { TemplateRenderer } from './TemplateRenderer';
import { ExportMenu } from './ExportMenu';

const BRAND_COLORS = {
  red: '#FF2C2C',
  violet: '#C400F5',
  pink: '#F83EDA',
  yellow: '#FFD000',
  orange: '#FF8000',
  lime: '#B7EF00',
  indigo: '#5032FF',
  cyan: '#25D1DA',
};

// ============================================================
// LOCALE & PLAYLIST CONFIGURATION
// ============================================================

type Locale = 'US' | 'BR';

interface Playlist {
  id: string;
  name: string;
  colors: string[];
  locale: Locale;
}

const PLAYLISTS: Playlist[] = [
  // US Playlists (17 total)
  { id: 'fresh-pop', name: 'Fresh Pop', colors: ['pink', 'violet'], locale: 'US' },
  { id: 'rock', name: 'Rock', colors: ['red', 'indigo'], locale: 'US' },
  { id: 'christian', name: 'Christian', colors: ['yellow', 'lime'], locale: 'US' },
  { id: 'afro', name: 'Afro', colors: ['red', 'orange'], locale: 'US' },
  { id: 'alternative', name: 'Alternative', colors: ['yellow', 'lime'], locale: 'US' },
  { id: 'classical', name: 'Classical', colors: ['red', 'orange'], locale: 'US' },
  { id: 'country', name: 'Country', colors: ['yellow', 'orange'], locale: 'US' },
  { id: 'dance', name: 'Dance', colors: ['pink', 'indigo'], locale: 'US' },
  { id: 'edm', name: 'EDM', colors: ['cyan', 'violet'], locale: 'US' },
  { id: 'electronic', name: 'Electronic', colors: ['cyan', 'violet'], locale: 'US' },
  { id: 'folk-acoustic', name: 'Folk & Acoustic', colors: ['red', 'orange'], locale: 'US' },
  { id: 'folk-americana', name: 'Folk & Americana', colors: ['red', 'orange'], locale: 'US' },
  { id: 'gospel', name: 'Gospel', colors: ['yellow', 'lime'], locale: 'US' },
  { id: 'hip-hop', name: 'Hip-Hop', colors: ['yellow', 'red'], locale: 'US' },
  { id: 'indie', name: 'Indie', colors: ['lime', 'cyan'], locale: 'US' },
  { id: 'jazz', name: 'Jazz', colors: ['indigo', 'cyan'], locale: 'US' },
  { id: 'rnb', name: 'R&B', colors: ['yellow', 'orange'], locale: 'US' },
  
  // BR Playlists (11 total)
  { id: 'br-pop', name: 'Fresh Pop', colors: ['pink', 'violet'], locale: 'BR' },
  { id: 'br-funk', name: 'Fresh Funk', colors: ['violet', 'lime'], locale: 'BR' },
  { id: 'br-rap', name: 'Fresh Rap', colors: ['yellow', 'indigo'], locale: 'BR' },
  { id: 'br-forro', name: 'Fresh Forró', colors: ['red', 'orange'], locale: 'BR' },
  { id: 'br-eletronica-brasil', name: 'Fresh Eletrônica Brasil', colors: ['cyan', 'lime'], locale: 'BR' },
  { id: 'br-pagode', name: 'Fresh Pagode', colors: ['yellow', 'cyan'], locale: 'BR' },
  { id: 'br-mpb', name: 'Fresh MPB', colors: ['lime', 'cyan'], locale: 'BR' },
  { id: 'br-sertanejo', name: 'Fresh Sertanejo', colors: ['indigo', 'orange'], locale: 'BR' },
  { id: 'br-gospel', name: 'Fresh Gospel', colors: ['yellow', 'lime'], locale: 'BR' },
  { id: 'br-samba', name: 'Fresh Samba', colors: ['yellow', 'cyan'], locale: 'BR' },
  { id: 'br-rap&trap', name: 'Fresh Rap&Trap', colors: ['yellow', 'indigo'], locale: 'BR' },
];

// Light backgrounds require BLACK text (like Christian Yellow)
// Dark backgrounds require WHITE text (like Dance Indigo)
const LIGHT_BACKGROUNDS = ['yellow', 'orange', 'lime', 'cyan'];

export function PlaylistCustomizer() {
  const [activeLocale, setActiveLocale] = useState<Locale>('US');
  const [activePlaylist, setActivePlaylist] = useState(PLAYLISTS[0]);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [artistImage, setArtistImage] = useState<string>('');
  const [artistName, setArtistName] = useState('Artist Name');
  const [singleTitle, setSingleTitle] = useState('Single Title');
  const [logoColor, setLogoColor] = useState<'white' | 'black'>('white');
  const [activeTemplate, setActiveTemplate] = useState<'tile' | 'story' | 'social'>('tile');
  const [showImageEditor, setShowImageEditor] = useState(false);
  const [tempImage, setTempImage] = useState<string>('');

  const selectedColor = activePlaylist.colors[selectedColorIndex];
  const backgroundColor = BRAND_COLORS[selectedColor as keyof typeof BRAND_COLORS];
  const useBlackText = LIGHT_BACKGROUNDS.includes(selectedColor);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setTempImage(event.target?.result as string);
        setShowImageEditor(true);
      };
      reader.readAsDataURL(file);
    }
    // Reset the input value so the same file can be selected again
    e.target.value = '';
  };

  const handleSaveImage = (imageDataUrl: string) => {
    setArtistImage(imageDataUrl);
    setShowImageEditor(false);
    setTempImage('');
  };

  // Filter playlists by active locale
  const filteredPlaylists = PLAYLISTS.filter((playlist) => playlist.locale === activeLocale);

  // Handle locale change
  const handleLocaleChange = (locale: Locale) => {
    setActiveLocale(locale);
    // Switch to first playlist of the new locale
    const firstPlaylist = PLAYLISTS.find((p) => p.locale === locale);
    if (firstPlaylist) {
      setActivePlaylist(firstPlaylist);
      setSelectedColorIndex(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-3">
          <h1 className="mb-3 text-lg sm:text-xl">Amazon Music Template Customizer</h1>
          
          {/* Locale Tabs */}
          <div className="flex gap-2 mb-3">
            <button
              onClick={() => handleLocaleChange('US')}
              className={`px-4 py-2 text-sm rounded-md transition-all flex items-center gap-2 ${
                activeLocale === 'US'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-base">🇺🇸</span>
              <span>US</span>
            </button>
            <button
              onClick={() => handleLocaleChange('BR')}
              className={`px-4 py-2 text-sm rounded-md transition-all flex items-center gap-2 ${
                activeLocale === 'BR'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-base">🇧🇷</span>
              <span>BR</span>
            </button>
          </div>
          
          {/* Playlist Tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-thin">
            {filteredPlaylists.map((playlist) => (
              <button
                key={playlist.id}
                onClick={() => {
                  setActivePlaylist(playlist);
                  setSelectedColorIndex(0);
                }}
                className={`px-3 py-1.5 text-sm rounded-md whitespace-nowrap transition-all ${
                  activePlaylist.id === playlist.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {playlist.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hidden full-size templates for export */}
      <div style={{ position: 'fixed', left: '-99999px', top: '0', pointerEvents: 'none' }}>
        <div 
          id="export-tile" 
          style={{ 
            width: '2400px', 
            height: '2400px', 
            overflow: 'hidden', 
            position: 'relative',
            transform: 'none',
            margin: 0,
            padding: 0
          }}
        >
          <TemplateRenderer
            playlistId={activePlaylist.id}
            playlistName={activePlaylist.name}
            templateType="tile"
            backgroundColor={backgroundColor}
            artistImage={artistImage}
            artistName={artistName}
            singleTitle={singleTitle}
            logoColor={logoColor}
            useBlackText={useBlackText}
            isExport={true}
          />
        </div>
        <div 
          id="export-story" 
          style={{ 
            width: '1080px', 
            height: '1920px', 
            overflow: 'hidden', 
            position: 'relative',
            transform: 'none',
            margin: 0,
            padding: 0
          }}
        >
          <TemplateRenderer
            playlistId={activePlaylist.id}
            playlistName={activePlaylist.name}
            templateType="story"
            backgroundColor={backgroundColor}
            artistImage={artistImage}
            artistName={artistName}
            singleTitle={singleTitle}
            logoColor={logoColor}
            useBlackText={useBlackText}
            isExport={true}
          />
        </div>
        <div 
          id="export-social" 
          style={{ 
            width: '1080px', 
            height: '1920px', 
            overflow: 'hidden', 
            position: 'relative',
            transform: 'none',
            margin: 0,
            padding: 0
          }}
        >
          <TemplateRenderer
            playlistId={activePlaylist.id}
            playlistName={activePlaylist.name}
            templateType="social"
            backgroundColor={backgroundColor}
            artistImage={artistImage}
            artistName={artistName}
            singleTitle={singleTitle}
            logoColor={logoColor}
            useBlackText={useBlackText}
            isExport={true}
          />
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr] xl:grid-cols-[290px_1fr] gap-4 lg:gap-5">
          {/* Controls Panel */}
          <div className="lg:sticky lg:top-[120px] h-fit">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h2 className="mb-3 text-base">Controls</h2>

              {/* Artist Image Upload */}
              <div className="mb-4">
                <label className="block mb-2 text-sm">Artist Image</label>
                <div className="space-y-2">
                  {artistImage && (
                    <div className="relative w-full aspect-square rounded-md overflow-hidden bg-gray-100">
                      <img src={artistImage} alt="Artist" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex gap-2">
                    <label className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer transition-colors">
                      <Upload className="w-4 h-4" />
                      {artistImage ? 'Change' : 'Upload'}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                    {artistImage && (
                      <button
                        onClick={() => {
                          setTempImage(artistImage);
                          setShowImageEditor(true);
                        }}
                        className="px-3 py-2 text-sm bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors flex items-center gap-1.5"
                      >
                        <ImageIcon className="w-4 h-4" />
                        Edit
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Artist Name */}
              <div className="mb-4">
                <label className="block mb-2 text-sm">Artist Name</label>
                <input
                  type="text"
                  value={artistName}
                  onChange={(e) => setArtistName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Single Title */}
              <div className="mb-4">
                <label className="block mb-2 text-sm">Single Title</label>
                <textarea
                  value={singleTitle}
                  onChange={(e) => setSingleTitle(e.target.value)}
                  rows={2}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Background Color */}
              <div className="mb-4">
                <label className="block mb-2 text-sm">Background Color</label>
                <div className="flex gap-2">
                  {activePlaylist.colors.map((color, index) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColorIndex(index)}
                      className={`flex-1 h-11 rounded-md transition-all ${
                        selectedColorIndex === index
                          ? 'ring-3 ring-blue-500 ring-offset-2'
                          : 'hover:ring-2 hover:ring-gray-300'
                      }`}
                      style={{ backgroundColor: BRAND_COLORS[color as keyof typeof BRAND_COLORS] }}
                    />
                  ))}
                </div>
              </div>

              {/* Amazon Smile Logo */}
              <div className="mb-4">
                <label className="block mb-2 text-sm">Amazon Logo</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setLogoColor('white')}
                    className={`px-3 py-2 text-sm rounded-md transition-colors ${
                      logoColor === 'white'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    White
                  </button>
                  <button
                    onClick={() => setLogoColor('black')}
                    className={`px-3 py-2 text-sm rounded-md transition-colors ${
                      logoColor === 'black'
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Black
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1.5">
                  {useBlackText ? '→ Black recommended' : '→ White recommended'}
                </p>
              </div>

              {/* Template Type Selector */}
              <div className="mb-4">
                <label className="block mb-2 text-sm">Template Format</label>
                <div className="grid grid-cols-1 gap-1.5">
                  <button
                    onClick={() => setActiveTemplate('tile')}
                    className={`px-3 py-2 text-sm rounded-md transition-colors text-left ${
                      activeTemplate === 'tile'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Square Tile <span className="text-xs opacity-75">(2400×2400)</span>
                  </button>
                  <button
                    onClick={() => setActiveTemplate('story')}
                    className={`px-3 py-2 text-sm rounded-md transition-colors text-left ${
                      activeTemplate === 'story'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    IG Story <span className="text-xs opacity-75">(1080×1920)</span>
                  </button>
                  <button
                    onClick={() => setActiveTemplate('social')}
                    className={`px-3 py-2 text-sm rounded-md transition-colors text-left ${
                      activeTemplate === 'social'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Social Post <span className="text-xs opacity-75">(1080×1920)</span>
                  </button>
                </div>
              </div>

              {/* Export Button */}
              <ExportMenu
                playlistId={activePlaylist.id}
                playlistName={activePlaylist.name}
                templateType={activeTemplate}
                backgroundColor={backgroundColor}
                artistImage={artistImage}
                artistName={artistName}
                singleTitle={singleTitle}
                logoColor={logoColor}
              />
            </div>
          </div>

          {/* Preview Panel */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base">Preview - All Formats</h2>
              <div className="text-xs text-gray-500">
                Click a format below to export
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-4">
              {/* Square Tile */}
              <div 
                className={`bg-gray-50 rounded-lg border-2 transition-all cursor-pointer overflow-hidden ${
                  activeTemplate === 'tile' 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveTemplate('tile')}
              >
                <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
                  <h3 className="text-sm font-medium">Square Tile</h3>
                  <span className="text-xs text-gray-500 font-mono">2400×2400</span>
                </div>
                <div className="flex items-center justify-center p-3 bg-white" style={{ minHeight: '480px' }}>
                  <div style={{ width: '440px', height: '440px', overflow: 'hidden', position: 'relative' }}>
                    <div style={{ transform: 'scale(0.1833)', transformOrigin: 'top left', width: '2400px', height: '2400px' }}>
                      <TemplateRenderer
                        playlistId={activePlaylist.id}
                        playlistName={activePlaylist.name}
                        templateType="tile"
                        backgroundColor={backgroundColor}
                        artistImage={artistImage}
                        artistName={artistName}
                        singleTitle={singleTitle}
                        logoColor={logoColor}
                        useBlackText={useBlackText}
                        isExport={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram Story */}
              <div 
                className={`bg-gray-50 rounded-lg border-2 transition-all cursor-pointer overflow-hidden ${
                  activeTemplate === 'story' 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveTemplate('story')}
              >
                <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
                  <h3 className="text-sm font-medium">IG Story</h3>
                  <span className="text-xs text-gray-500 font-mono">1080×1920</span>
                </div>
                <div className="flex items-center justify-center p-3 bg-white" style={{ minHeight: '480px' }}>
                  <div style={{ width: '240px', height: '427px', overflow: 'visible', position: 'relative' }}>
                    <div style={{ transform: 'scale(0.222)', transformOrigin: 'top left', width: '1080px', height: '1920px' }}>
                      <TemplateRenderer
                        playlistId={activePlaylist.id}
                        playlistName={activePlaylist.name}
                        templateType="story"
                        backgroundColor={backgroundColor}
                        artistImage={artistImage}
                        artistName={artistName}
                        singleTitle={singleTitle}
                        logoColor={logoColor}
                        useBlackText={useBlackText}
                        isExport={true}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Post */}
              <div 
                className={`bg-gray-50 rounded-lg border-2 transition-all cursor-pointer overflow-hidden ${
                  activeTemplate === 'social' 
                    ? 'border-blue-500 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveTemplate('social')}
              >
                <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
                  <h3 className="text-sm font-medium">Social Post</h3>
                  <span className="text-xs text-gray-500 font-mono">1080×1920</span>
                </div>
                <div className="flex items-center justify-center p-3 bg-white" style={{ minHeight: '480px' }}>
                  <div style={{ width: '240px', height: '427px', overflow: 'visible', position: 'relative' }}>
                    <div style={{ transform: 'scale(0.222)', transformOrigin: 'top left', width: '1080px', height: '1920px' }}>
                      <TemplateRenderer
                        playlistId={activePlaylist.id}
                        playlistName={activePlaylist.name}
                        templateType="social"
                        backgroundColor={backgroundColor}
                        artistImage={artistImage}
                        artistName={artistName}
                        singleTitle={singleTitle}
                        logoColor={logoColor}
                        useBlackText={useBlackText}
                        isExport={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Image Editor Modal */}
      <AdvancedImageEditor
        isOpen={showImageEditor}
        onClose={() => {
          setShowImageEditor(false);
          setTempImage('');
        }}
        onSave={handleSaveImage}
        initialImage={tempImage}
      />
    </div>
  );
}