import svgPaths from "./svg-amp089owfb";
import imgSampleImage from "figma:asset/123b17e7b2e0d7d419b627d35fbb50cd03085af0.png";

function Background() {
  return <div className="absolute bg-[#f83eda] inset-0" data-name="Background" />;
}

function Background1() {
  return (
    <div className="absolute bottom-0 left-[-0.02%] right-[0.02%] top-0" data-name="Background">
      <Background />
    </div>
  );
}

function AmazonMusicLogotype() {
  return <div className="absolute h-[82.292px] left-[calc(50%-171.44px)] top-[calc(50%+601.36px)] w-[142.296px]" data-name="Amazon Music Logotype" />;
}

function PlayButton() {
  return (
    <div className="absolute left-[636.19px] size-[130.024px] top-[819.67px]" data-name="Play button">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131 131">
        <g id="Play button">
          <circle cx="65.0118" cy="65.0118" fill="var(--fill-0, #25D1DA)" id="Ellipse 7286" r="65.0118" />
          <path d={svgPaths.p5157300} fill="var(--fill-0, black)" id="Polygon 3" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[985.282px] left-[calc(50%-410px)] top-[calc(50%-578.61px)] w-[824.031px]" data-name="Container">
      <div className="absolute bg-white h-[985.282px] left-0 rounded-[30.387px] top-0 w-[824.031px]" data-name="Device Container" />
      <PlayButton />
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute inset-[26.62%_0.07%_30.2%_58.82%]" data-name="Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 141 44">
        <g id="Vector">
          <path d={svgPaths.p514da72} fill="var(--fill-0, white)" id="Vector_2" />
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
            <path d={svgPaths.p13c597f0} fill="var(--fill-0, white)" id="Vector" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p33304900} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1460b900} fill="var(--fill-0, white)" />
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

function AmazonMusicLogotype1() {
  return (
    <div className="absolute h-[101.15px] left-[calc(50%-171.44px)] top-[calc(50%+601.36px)] w-[342.882px]" data-name="Amazon Music Logotype">
      <Vector />
      <AmazonMasterRd />
      <p className="absolute bottom-[72.88%] font-['Ember_Modern_Display_Standard:Regular',sans-serif] leading-[normal] left-[calc(50%-0.23px)] not-italic text-[30.241px] text-center text-nowrap text-white top-[-8.47%] translate-x-[-50%] whitespace-pre">Only on</p>
    </div>
  );
}

function Guides() {
  return (
    <div className="absolute contents inset-[-30.96%_-52.64%_-50.64%_-54.64%]" data-name="Guides">
      <div className="absolute bg-[#d8d8d8] inset-[-30.96%_-52.64%_-50.64%_-54.64%] opacity-40" data-name="Background_Image">
        <div aria-hidden="true" className="absolute border-[#f4f4f4] border-[2.909px] border-dashed inset-0 pointer-events-none" />
      </div>
      <div className="absolute font-['Amazon_Ember_Display:Regular',sans-serif] inset-[71.52%_0.57%_15.43%_-0.57%] leading-[1.1] not-italic opacity-50 text-[#f4f4f4] text-[53.155px] text-center tracking-[0.5315px]">
        <p className="mb-0">Replace me</p>
        <p>with Artist Imagery</p>
      </div>
      <div className="absolute inset-[4.14%_11.27%_17.19%_9.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 575 573">
          <path d={svgPaths.p2b00c00} fill="var(--fill-0, #F4F4F4)" id="Vector" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
}

function ArtistImage() {
  return (
    <div className="absolute left-0 size-[727.839px] top-0" data-name="Artist Image_01">
      <Guides />
      <div className="absolute aspect-[1083/1083] left-[0.04%] right-[-0.04%] top-[-0.32px]" data-name="Sample_image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSampleImage} />
      </div>
    </div>
  );
}

function Images() {
  return (
    <div className="absolute h-[727.839px] left-[363.85px] top-[0.04px] translate-x-[-50%] w-[728.142px]" data-name="Images">
      <ArtistImage />
    </div>
  );
}

function SmileOnly() {
  return (
    <div className="absolute bottom-[-0.12%] left-0 right-[0.22%] top-[0.12%]" data-name="Smile Only">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 97 56">
        <g id="Smile Only">
          <g id="Vector">
            <path d={svgPaths.p187e4600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1d097400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2169f980} fill="var(--fill-0, white)" />
            <path d={svgPaths.p24b0b080} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1181ee00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3a3b2600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3c223310} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AmazonMusicLogotype2() {
  return (
    <div className="h-[55.749px] relative shrink-0 w-[96.4px]" data-name="Amazon Music Logotype">
      <SmileOnly />
    </div>
  );
}

function AmLogotype() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[3.033px] items-end pb-[23.958px] pt-[29.72px] px-[36.392px] right-[-0.16px] size-[727.839px] top-0" data-name="AM Logotype">
      <AmazonMusicLogotype2 />
    </div>
  );
}

function Background2() {
  return <div className="absolute bg-[#f83eda] inset-0" data-name="Background" />;
}

function Background3() {
  return (
    <div className="absolute h-[181.96px] left-0 top-[calc(100%-181.88px)] w-[727.839px]" data-name="Background">
      <Background2 />
    </div>
  );
}

function PlaylistTitle() {
  return (
    <div className="absolute bottom-[-0.16px] box-border content-stretch flex flex-col items-center justify-end left-[calc(100%-363.84px)] p-[36.392px] size-[727.839px] translate-x-[-50%]" data-name="Playlist Title">
      <div className="flex flex-col font-['Ember_Modern_Display_Standard:Bold',sans-serif] h-[110.086px] justify-end leading-[0] not-italic relative shrink-0 text-[136.47px] text-white tracking-[1.3647px] w-full" style={{ transform: 'translateY(10px)' }}>
        <p className="leading-[0.9]">Gospel</p>
      </div>
    </div>
  );
}

function FreshDevice() {
  return (
    <div className="absolute h-[122.216px] left-[-0.09px] top-0 w-[237.457px]" data-name="Fresh Device">
      <div className="absolute bottom-0 left-[-0.08%] right-0 top-[-0.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 238 123">
          <g id="Fresh Device">
            <path d={svgPaths.p2a84c080} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FreshWordMark() {
  return (
    <div className="absolute h-[122.519px] left-[-3.67px] top-[calc(100%-257.39px)] w-[237.457px]" data-name="Fresh_Word_mark">
      <FreshDevice />
      <div className="absolute flex flex-col font-['Ember_Modern_Display_Standard:Bold',sans-serif] inset-0 items-center justify-center leading-[0] not-italic text-[66.423px] text-black text-nowrap tracking-[0.6642px]">
        <p className="leading-none whitespace-pre">Fresh</p>
      </div>
    </div>
  );
}

function MmddyyBrFreshGospelTaPaTile2400X() {
  return (
    <div className="absolute bg-[#565656] left-[calc(50%-362.67px)] rounded-[20px] size-[727.839px] top-[calc(50%-528.53px)]" data-name="MMDDYY_BR_FreshGospel_TA_PA_Tile_2400x2400">
      <div className="overflow-clip relative rounded-[inherit] size-[727.839px]">
        <Images />
        <AmLogotype />
        <Background3 />
        <PlaylistTitle />
        <FreshWordMark />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d8d8d8] border-solid inset-[-1px] pointer-events-none rounded-[21px]" />
    </div>
  );
}

export default function MmddyyBrFreshGospelSocialXLarge1080X() {
  return (
    <div className="relative size-full" data-name="MMDDYY_BR_FreshGospel_Social_XLarge_1080x1920">
      <Background1 />
      <AmazonMusicLogotype />
      <Container />
      <p className="absolute font-['Ember_Modern_Display_Standard:Bold',sans-serif] leading-none left-[calc(50%-362.67px)] not-italic text-[82.405px] text-black text-nowrap top-[calc(50%+245.06px)] tracking-[0.824px] whitespace-pre">Single Title</p>
      <p className="absolute font-['Ember_Modern_Display_Standard:Regular',sans-serif] leading-none left-[calc(50%-362.67px)] not-italic text-[61.803px] text-black text-nowrap top-[calc(50%+324.53px)] tracking-[0.618px] whitespace-pre">Artist Name</p>
      <AmazonMusicLogotype1 />
      <MmddyyBrFreshGospelTaPaTile2400X />
    </div>
  );
}
