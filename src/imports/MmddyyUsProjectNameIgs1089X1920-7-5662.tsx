import svgPaths from "./svg-nclkw7jede";
import imgSampleImage from "figma:asset/123b17e7b2e0d7d419b627d35fbb50cd03085af0.png";
import img1080X1920Ui from "figma:asset/43f082bbe3d79e6396852af3e6ef0f9ddc60f9bd.png";

function Guides() {
  return (
    <div className="absolute contents inset-[-30.96%_-52.64%_-50.64%_-54.64%]" data-name="Guides">
      <div className="absolute bg-[#d8d8d8] inset-[-30.96%_-52.64%_-50.64%_-54.64%] opacity-40" data-name="Background_Image">
        <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[4.379px] border-dashed inset-0 pointer-events-none" />
      </div>
      <div className="absolute font-['Amazon_Ember_Display:Regular',sans-serif] inset-[71.52%_0.57%_15.24%_-0.57%] leading-[1.1] not-italic opacity-50 text-[#f4f4f4] text-[80.007px] text-center tracking-[0.8001px]">
        <p className="mb-0">Replace me</p>
        <p>with Artist Imagery</p>
      </div>
      <div className="absolute inset-[4.14%_11.27%_17.19%_9.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 852 850">
          <path d={svgPaths.p31533800} fill="var(--fill-0, #F4F4F4)" id="Vector" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function ArtistImage() {
  return (
    <div className="absolute left-[354.98px] size-[1080px] top-[224.98px]" data-name="Artist Image_01">
      <Guides />
      <div className="absolute aspect-[1083/1083] left-[0.04%] right-[-0.04%] top-[-0.49px]" data-name="Sample_image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSampleImage} />
      </div>
    </div>
  );
}

function ArtistImageHere() {
  return (
    <div className="absolute left-[calc(50%-7.49px)] size-[1774.98px] top-[-224.86px] translate-x-[-50%]" data-name="Artist Image Here">
      <ArtistImage />
    </div>
  );
}

function PrimaryFadeForIgs() {
  return (
    <div className="absolute contents left-[-212px] top-[calc(50%+87px)]" data-name="Primary Fade for IGS">
      <div className="absolute bg-[rgba(0,0,0,0.35)] blur-[125px] filter h-[1193px] left-[-212px] top-[calc(50%+87px)] w-[1594px]" data-name="Option 1" />
    </div>
  );
}

function Background() {
  return <div className="absolute bg-[#ffd000] inset-0" data-name="Background" />;
}

function Background1() {
  return (
    <div className="absolute bottom-0 left-[0.02%] right-[-0.02%] top-[50.05%]" data-name="Background">
      <Background />
    </div>
  );
}

function EventNameHeadline() {
  return (
    <div className="content-stretch flex flex-col font-['Ember_Modern_Display_Standard:Bold',sans-serif] gap-[35px] items-start justify-center relative shrink-0 w-full" data-name="Event Name-Headline">
      <p className="[white-space-collapse:collapse] leading-none overflow-ellipsis overflow-hidden relative shrink-0 text-[50px] text-nowrap tracking-[1px] w-[1096px]">Playlist</p>
      <p className="leading-[0.9] relative shrink-0 text-[110px] tracking-[1.1px] w-[1096px]">
        <span>{`Fresh `}</span>
        <span className="font-['Ember_Modern_Display_Standard:Bold',sans-serif] not-italic">Hip-Hop</span>
      </p>
    </div>
  );
}

function Copy() {
  return (
    <div className="content-stretch flex flex-col gap-[36.67px] h-[393px] items-start justify-center not-italic relative shrink-0 text-black w-full" data-name="Copy">
      <EventNameHeadline />
      <p className="-webkit-box font-['Ember_Modern_Display_Standard:Regular',sans-serif] leading-none overflow-ellipsis overflow-hidden relative shrink-0 text-[65px] tracking-[0.65px] w-full">feat. Artist Name</p>
    </div>
  );
}

function Layout() {
  return (
    <div className="content-stretch flex flex-col gap-[66px] items-start relative shrink-0 w-full" data-name="Layout">
      <Copy />
    </div>
  );
}

function PaddingLeftAligned() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[959px] items-start left-[calc(50%-0.3px)] pl-[120px] pr-[60px] py-0 top-[calc(50%+480.5px)] translate-x-[-50%] translate-y-[-50%] w-[1081px]" data-name="Padding - Left Aligned">
      <Layout />
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute inset-[26.62%_0.07%_30.2%_58.82%]" data-name="Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141 44">
        <g id="Vector">
          <path d={svgPaths.p514da72} fill="var(--fill-0, black)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Rd4MasterLogo() {
  return (
    <div className="absolute inset-[0.28%_0.18%_2.1%_0.06%]" data-name="RD4 Master Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 189 65">
        <g id="RD4 Master Logo">
          <g id="Group 1321318986">
            <path d={svgPaths.p13c597f0} fill="var(--fill-0, black)" id="Vector" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p33304900} fill="var(--fill-0, black)" />
            <path d={svgPaths.p1460b900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AmazonMasterRd() {
  return (
    <div className="absolute inset-[35.83%_45.03%_-1.64%_-0.04%] overflow-clip" data-name="Amazon_Master_RD4">
      <Rd4MasterLogo />
    </div>
  );
}

function AmazonMusicLogotype() {
  return (
    <div className="absolute h-[101.15px] left-[calc(50%-171.24px)] top-[calc(50%+601.36px)] w-[342.882px]" data-name="Amazon Music Logotype">
      <Vector />
      <AmazonMasterRd />
      <p className="absolute bottom-[72.88%] font-['Ember_Modern_Display_Standard:Regular',sans-serif] leading-[normal] left-[calc(50%-0.23px)] not-italic text-[30.241px] text-black text-center text-nowrap top-[-8.47%] translate-x-[-50%] whitespace-pre">Only on</p>
    </div>
  );
}

export default function MmddyyUsProjectNameIgs1089X() {
  return (
    <div className="relative size-full" data-name="MMDDYY_US_ProjectName_IGS_1089x1920">
      <div className="absolute h-[1920px] left-0 top-0 w-[1080px]" data-name="1080x1920_UI">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1080X1920Ui} />
      </div>
      <ArtistImageHere />
      <PrimaryFadeForIgs />
      <Background1 />
      <PaddingLeftAligned />
      <AmazonMusicLogotype />
    </div>
  );
}