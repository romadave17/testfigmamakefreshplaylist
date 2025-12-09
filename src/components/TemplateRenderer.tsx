import { useMemo } from 'react';

// Import Fresh Pop templates
import FreshPopTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400';
import FreshPopStory from '../imports/MmddyyUsProjectNameIgs1089X1920';
import FreshPopSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920';

// Import Rock templates
import RockTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-2634';
import RockStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-2696';
import RockSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-2808';

// Import Christian templates
import ChristianTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-2883';
import ChristianStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-2945';
import ChristianSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-3055';

// Import Afro templates
import AfroTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-3149';
import AfroStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-3211';
import AfroSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-3321';

// Import Alternative templates
import AlternativeTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-3394';
import AlternativeStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-3456';
import AlternativeSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-3566';

// Import Classical templates
import ClassicalTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-3639';
import ClassicalStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-3701';
import ClassicalSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-3811';

// Import Country templates
import CountryTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-3884';
import CountryStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-3946';
import CountrySocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-4056';

// Import Dance templates
import DanceTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-4129';
import DanceStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-4191';
import DanceSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-4301';

// Import EDM templates
import EdmTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-4374';
import EdmStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-4436';
import EdmSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-4546';

// Import Electronic templates
import ElectronicTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-4619';
import ElectronicStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-4681';
import ElectronicSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-4791';

// Import Folk & Acoustic templates
import FolkAcousticTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-4865';
import FolkAcousticStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-4927';
import FolkAcousticSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-5037';

// Import Folk & Americana templates
import FolkAmericanaTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-5110';
import FolkAmericanaStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-5172';
import FolkAmericanaSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-5282';

// Import Gospel templates
import GospelTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-5355';
import GospelStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-5417';
import GospelSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-5527';

// Import Hip-Hop templates
import HipHopTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-5600';
import HipHopStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-5662';
import HipHopSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-5772';

// Import Indie templates
import IndieTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-5845';
import IndieStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-5907';
import IndieSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-6017';

// Import Jazz templates
import JazzTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-6090';
import JazzStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-6152';
import JazzSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-6262';

// Import R&B templates
import RnbTile from '../imports/MmddyyUsProjectNameTaPaTile2400X2400-7-6345';
import RnbStory from '../imports/MmddyyUsProjectNameIgs1089X1920-7-6407';
import RnbSocial from '../imports/MmddyyUsProjectNameSocialXLarge1080X1920-7-6517';

// ============================================================
// BRAZIL (BR) PLAYLIST IMPORTS
// ============================================================

// Import BR Funk templates
import BrFunkTile from '../imports/MmddyyBrFreshFunkTile2400X2400';
import BrFunkStory from '../imports/MmddyyBrFreshFunkIgs1089X1920';
import BrFunkSocial from '../imports/MmddyyBrFreshFunkSocialXLarge1080X1920';

// Import BR Rap templates
import BrRapTile from '../imports/MmddyyBrFreshRapTile2400X2400';
import BrRapStory from '../imports/MmddyyBrFreshRapIgs1089X1920';
import BrRapSocial from '../imports/MmddyyBrFreshRapSocialXLarge1080X1920';

// Import BR Eletronica Brasil templates
import BrEletronicaTile from '../imports/MmddyyBrFreshEletronicaBrasilTile2400X2400';
import BrEletronicaStory from '../imports/MmddyyBrFreshEletronicaBrasilIgs1089X1920';
import BrEletronicaSocial from '../imports/MmddyyBrFreshEletronicaBrasilSocialXLarge1080X1920';

// Import BR Rap & Trap templates
import BrRapTrapTile from '../imports/MmddyyBrFreshRapTrapTile2400X2400';
import BrRapTrapStory from '../imports/MmddyyBrFreshRapTrapIgs1089X1920';
import BrRapTrapSocial from '../imports/MmddyyBrFreshRapTrapSocialXLarge1080X1920';

// Import BR Forro templates
import BrForroTile from '../imports/MmddyyBrFreshForroTile2400X2400';
import BrForroStory from '../imports/MmddyyBrFreshForroIgs1089X1920';
import BrForroSocial from '../imports/MmddyyBrFreshForroSocialXLarge1080X1920';

// Import BR Pagode templates
import BrPagodeTile from '../imports/MmddyyBrFreshPagodeTile2400X2400';
import BrPagodeStory from '../imports/MmddyyBrFreshPagodeIgs1089X1920';
import BrPagodeSocial from '../imports/MmddyyBrFreshPagodeSocialXLarge1080X1920';

// Import BR MPB templates
import BrMpbTile from '../imports/MmddyyBrFreshMpbTile2400X2400';
import BrMpbStory from '../imports/MmddyyBrFreshMpbIgs1089X1920';
import BrMpbSocial from '../imports/MmddyyBrFreshMpbSocialXLarge1080X1920';

// Import BR Sertanejo templates
import BrSertanejoTile from '../imports/MmddyyBrFreshSertanejoTile2400X2400';
import BrSertanejoStory from '../imports/MmddyyBrFreshSertanejoIgs1089X1920';
import BrSertanejoSocial from '../imports/MmddyyBrFreshSertanejoSocialXLarge1080X1920';

// Import BR Samba templates
import BrSambaTile from '../imports/MmddyyBrFreshSambaTile2400X2400';
import BrSambaStory from '../imports/MmddyyBrFreshSambaIgs1089X1920';
import BrSambaSocial from '../imports/MmddyyBrFreshSambaSocialXLarge1080X1920';

// Import BR Pop templates
import BrPopTile from '../imports/MmddyyBrFreshPopTile2400X2400';
import BrPopStory from '../imports/MmddyyBrFreshPopIgs1089X1920';
import BrPopSocial from '../imports/MmddyyBrFreshPopSocialXLarge1080X1920';

// Import BR Gospel templates
import BrGospelTile from '../imports/MmddyyBrFreshGospelTile2400X2400';
import BrGospelStory from '../imports/MmddyyBrFreshGospelIgs1089X1920';
import BrGospelSocial from '../imports/MmddyyBrFreshGospelSocialXLarge1080X1920';

interface TemplateRendererProps {
  playlistId: string;
  playlistName: string;
  templateType: 'tile' | 'story' | 'social';
  backgroundColor: string;
  artistImage: string;
  artistName: string;
  singleTitle: string;
  logoColor: 'white' | 'black';
  useBlackText: boolean;
  isExport?: boolean;
}

const TEMPLATE_MAP: Record<string, any> = {
  'fresh-pop': {
    tile: FreshPopTile,
    story: FreshPopStory,
    social: FreshPopSocial,
  },
  'rock': {
    tile: RockTile,
    story: RockStory,
    social: RockSocial,
  },
  'christian': {
    tile: ChristianTile,
    story: ChristianStory,
    social: ChristianSocial,
  },
  'afro': {
    tile: AfroTile,
    story: AfroStory,
    social: AfroSocial,
  },
  'alternative': {
    tile: AlternativeTile,
    story: AlternativeStory,
    social: AlternativeSocial,
  },
  'classical': {
    tile: ClassicalTile,
    story: ClassicalStory,
    social: ClassicalSocial,
  },
  'country': {
    tile: CountryTile,
    story: CountryStory,
    social: CountrySocial,
  },
  'dance': {
    tile: DanceTile,
    story: DanceStory,
    social: DanceSocial,
  },
  'edm': {
    tile: EdmTile,
    story: EdmStory,
    social: EdmSocial,
  },
  'electronic': {
    tile: ElectronicTile,
    story: ElectronicStory,
    social: ElectronicSocial,
  },
  'folk-acoustic': {
    tile: FolkAcousticTile,
    story: FolkAcousticStory,
    social: FolkAcousticSocial,
  },
  'folk-americana': {
    tile: FolkAmericanaTile,
    story: FolkAmericanaStory,
    social: FolkAmericanaSocial,
  },
  'gospel': {
    tile: GospelTile,
    story: GospelStory,
    social: GospelSocial,
  },
  'hip-hop': {
    tile: HipHopTile,
    story: HipHopStory,
    social: HipHopSocial,
  },
  'indie': {
    tile: IndieTile,
    story: IndieStory,
    social: IndieSocial,
  },
  'jazz': {
    tile: JazzTile,
    story: JazzStory,
    social: JazzSocial,
  },
  'rnb': {
    tile: RnbTile,
    story: RnbStory,
    social: RnbSocial,
  },
  // ============================================================
  // BRAZIL (BR) PLAYLISTS - Use US (Fresh Pop) Template Structure
  // All BR playlists inherit pixel-perfect US layout while maintaining
  // their unique colors, titles, and branding from playlistsData.ts
  // ============================================================
  'br-funk': {
    tile: BrFunkTile,
    story: BrFunkStory,
    social: BrFunkSocial,
  },
  'br-rap': {
    tile: BrRapTile,
    story: BrRapStory,
    social: BrRapSocial,
  },
  'br-eletronica-brasil': {
    tile: BrEletronicaTile,
    story: BrEletronicaStory,
    social: BrEletronicaSocial,
  },
  'br-rap&trap': {
    tile: BrRapTrapTile,
    story: BrRapTrapStory,
    social: BrRapTrapSocial,
  },
  'br-forro': {
    tile: BrForroTile,
    story: BrForroStory,
    social: BrForroSocial,
  },
  'br-pagode': {
    tile: BrPagodeTile,
    story: BrPagodeStory,
    social: BrPagodeSocial,
  },
  'br-mpb': {
    tile: BrMpbTile,
    story: BrMpbStory,
    social: BrMpbSocial,
  },
  'br-sertanejo': {
    tile: BrSertanejoTile,
    story: BrSertanejoStory,
    social: BrSertanejoSocial,
  },
  'br-samba': {
    tile: BrSambaTile,
    story: BrSambaStory,
    social: BrSambaSocial,
  },
  'br-pop': {
    tile: BrPopTile,
    story: BrPopStory,
    social: BrPopSocial,
  },
  'br-gospel': {
    tile: BrGospelTile,
    story: BrGospelStory,
    social: BrGospelSocial,
  },
};

export function TemplateRenderer({
  playlistId,
  templateType,
  backgroundColor,
  artistImage,
  artistName,
  singleTitle,
  logoColor,
  useBlackText,
  isExport,
}: TemplateRendererProps) {
  const TemplateComponent = TEMPLATE_MAP[playlistId]?.[templateType];

  if (!TemplateComponent) {
    return (
      <div className="text-center text-gray-500">
        Template not found for {playlistId} - {templateType}
      </div>
    );
  }

  const scale = isExport ? 1 : (templateType === 'tile' ? 0.25 : 0.35);
  const dimensions = templateType === 'tile' 
    ? { width: 2400, height: 2400 }
    : { width: 1080, height: 1920 };

  // Check if this is a BR playlist
  const isBRPlaylist = playlistId.startsWith('br-');

  // Determine all colors based on Christian Yellow vs Dance Indigo pattern
  const textColor = useBlackText ? '#000000' : '#FFFFFF';
  const smileLogoColor = logoColor === 'white' ? '#FFFFFF' : '#000000'; // Use logoColor prop
  const freshDeviceFillColor = useBlackText ? '#000000' : '#FFFFFF';
  const freshTextColor = useBlackText ? '#FFFFFF' : '';
  
  // ============================================================
  // DARK BACKGROUND OVERRIDE
  // ============================================================
  // Exception rule for improved readability on specific dark backgrounds
  // Pink (#F83EDA), Red (#FF2C2C), Violet (#C400F5), Indigo (#5032FF)
  
  const isDarkBackground = ['#F83EDA', '#FF2C2C', '#C400F5', '#5032FF'].includes(backgroundColor);
  
  // DARK BACKGROUND OVERRIDE: Social Post Artist Name & Single Title
  // Always use BLACK text on dark backgrounds for better contrast in polaroid layout
  const socialPostTextColor = (templateType === 'social' && isDarkBackground) ? '#000000' : textColor;
  
  // DARK BACKGROUND OVERRIDE: Fresh Text (Specific Templates Only)
  // These specific templates require black Fresh text for optimal readability
  const needsBlackFreshText = 
    (playlistId === 'afro' && templateType === 'tile' && backgroundColor === '#FF2C2C') ||
    (playlistId === 'edm' && templateType === 'social' && backgroundColor === '#C400F5') ||
    (playlistId === 'electronic' && templateType === 'social' && backgroundColor === '#C400F5') ||
    (playlistId === 'hip-hop' && templateType === 'social' && backgroundColor === '#FF2C2C');
  
  const finalFreshTextColor = needsBlackFreshText ? '#000000' : freshTextColor;

  return (
    <div
      className="origin-top-left relative"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        width: `${dimensions.width}px`,
        height: `${dimensions.height}px`,
      }}
    >
      {/* Base Template */}
      <div className="absolute inset-0">
        <TemplateComponent />
      </div>

      {/* Universal Color Standardization */}
      <style dangerouslySetInnerHTML={{
        __html: `
        /* ============================================================ */
        /* BACKGROUND COLOR */
        /* ============================================================ */
        [data-name="Background"] {
          background-color: ${backgroundColor} !important;
        }

        /* ============================================================ */
        /* PLAYLIST TITLE TEXT COLOR */
        /* Same as Christian Yellow (black) or Dance Indigo (white) */
        /* ============================================================ */
        [data-name="Playlist Title"] p,
        [data-name="Playlist Title"] div {
          color: ${textColor} !important;
        }

        /* ============================================================ */
        /* AMAZON SMILE LOGO - Always White (Same as both templates) */
        /* SMILE LOGO SPECIFICITY FIX: Enhanced selectors for all cases */
        /* ============================================================ */
        [data-name="Smile Only"] svg path,
        [data-name="Smile Only"] path,
        [data-name="Smile Only"] svg path[fill],
        [data-name="Smile Only"] path[fill],
        [data-name="Smile Only"] > div path,
        [data-name="Smile Only"] div svg path {
          fill: ${smileLogoColor} !important;
        }

        /* Override img-based logos with filter */
        [data-name="Smile Only"] img,
        [data-name="Smile Only"] > div img,
        [data-name="Smile Only"] div img {
          filter: brightness(0) saturate(100%) ${logoColor === 'white' ? 'invert(100%)' : 'invert(0%)'} !important;
        }

        /* ============================================================ */
        /* FRESH DEVICE FILL */
        /* Christian Yellow: black (#000) | Dance Indigo: white (#FFF) */
        /* ============================================================ */
        [data-name="Fresh Device"] [data-name="Vector"] > div {
          --fill-0: ${freshDeviceFillColor} !important;
        }
        
        /* Use filter to change SVG color in img data URIs */
        [data-name="Fresh Device"] [data-name="Vector"] img {
          ${useBlackText 
            ? 'filter: brightness(0) saturate(100%) invert(0%) !important;' 
            : 'filter: brightness(0) saturate(100%) invert(100%) !important;'
          }
        }

        /* ============================================================ */
        /* FRESH TEXT COLOR (inside device) */
        /* Christian Yellow: white | Dance Indigo: inherits */
        /* ============================================================ */
        ${finalFreshTextColor ? `
        [data-name="Fresh_Word_mark"] p {
          color: ${finalFreshTextColor} !important;
        }
        ` : ''}

        /* ============================================================ */
        /* INSTAGRAM STORY & SOCIAL POST TEXT */
        /* ============================================================ */
        [data-name="Copy"] p,
        [data-name="Event Name-Headline"] p,
        [data-name="Container"] p {
          color: ${textColor} !important;
        }

        /* ============================================================ */
        /* AMAZON MUSIC LOGOTYPE (Instagram Story) */
        /* All parts follow text color */
        /* ============================================================ */
        [data-name="Vector"] path,
        [data-name="Amazon_Master_RD4"] path,
        [data-name="RD4 Master Logo"] path,
        [data-name="AM Logotype"] path,
        svg path[fill="var(--fill-0, white)"],
        svg path[fill="var(--fill-0, black)"] {
          fill: ${textColor} !important;
        }

        /* \"Only on\" text */
        [data-name="Amazon Music Logotype"] p {
          color: ${textColor} !important;
        }

        /* ============================================================ */
        /* BR LOCALIZATION: \"Disponível só no\" (Only on) */
        /* ============================================================ */
        ${isBRPlaylist ? `
        [data-name="Amazon Music Logotype"] p {
          font-size: 0 !important;
          position: relative !important;
        }
        [data-name="Amazon Music Logotype"] p::after {
          content: "Disponível só no" !important;
          font-size: 35px !important;
          color: ${textColor} !important;
          position: absolute !important;
          left: 50% !important;
          top: 0 !important;
          transform: translateX(-50%) !important;
          white-space: nowrap !important;
        }
        ` : ''}

        /* ============================================================ */
        /* OVERRIDE ARTIST IMAGE */
        /* ============================================================ */
        ${artistImage ? `
        [data-name="Sample_image"] img {
          content: url(${artistImage}) !important;
        }
        [data-name="Container Image Area"] {
          background-image: url(${artistImage}) !important;
          background-size: cover !important;
          background-position: center !important;
        }
        ` : ''}

        /* ============================================================ */
        /* TEXT CONTENT OVERRIDES */
        /* ============================================================ */
        
        /* Single Title in Social Post */
        /* DARK BACKGROUND OVERRIDE: Uses socialPostTextColor for contrast */
        p[class*="text-[82.405px]"] {
          font-size: 0 !important;
          position: relative !important;
        }
        p[class*="text-[82.405px]"]::after {
          content: "${singleTitle.replace(/"/g, '\\"')}" !important;
          font-size: 82.405px !important;
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          color: ${socialPostTextColor} !important;
        }

        /* Artist Name in Social Post */
        /* DARK BACKGROUND OVERRIDE: Uses socialPostTextColor for contrast */
        p[class*="text-[61.803px]"] {
          font-size: 0 !important;
          position: relative !important;
        }
        p[class*="text-[61.803px]"]::after {
          content: "${artistName.replace(/"/g, '\\"')}" !important;
          font-size: 61.803px !important;
          position: absolute !important;
          left: 0 !important;
          top: 0 !important;
          color: ${socialPostTextColor} !important;
        }

        /* Artist Name in Instagram Story */
        [data-name="Copy"] > p:last-child {
          font-size: 0 !important;
        }
        [data-name="Copy"] > p:last-child::after {
          content: "${isBRPlaylist ? 'com' : 'feat.'} ${artistName.replace(/\"/g, '\\\"')}" !important;
          font-size: 65px !important;
          color: ${textColor} !important;
        }

        /* ============================================================ */
        /* HIDE GUIDES */
        /* ============================================================ */
        [data-name="Guides"] {
          display: none !important;
        }

        /* ============================================================ */
        /* REMOVE BLUR GRADIENT (Instagram Story) */
        /* ============================================================ */
        [data-name="Primary Fade for IGS"],
        [data-name="Option 1"] {
          display: none !important;
        }
      `}} />
    </div>
  );
}