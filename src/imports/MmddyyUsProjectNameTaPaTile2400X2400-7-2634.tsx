import img from "figma:asset/123b17e7b2e0d7d419b627d35fbb50cd03085af0.png";
import { img2, img3 } from "./svg-3mdbq";

function MmddyyUsProjectNameTaPaTile2400X({ className }: { className?: string }) {
  return (
    <div className={className} data-name="MMDDYY_US_ProjectName_TA_PA_Tile_2400x2400">
      <div className="absolute h-[2400px] left-[calc(50%-0.5px)] top-[0.12px] translate-x-[-50%] w-[2401px]" data-name="Images">
        <div className="absolute left-0 size-[2400px] top-0" data-name="Artist Image_01">
          <div className="absolute aspect-[1083/1083] left-[0.04%] right-[-0.04%] top-[-1.07px]" data-name="Sample_image">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
          </div>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex flex-col gap-[10px] items-end pb-[79px] pt-[98px] px-[120px] right-0 size-[2400px] top-0" data-name="AM Logotype">
        <div className="h-[234.676px] relative shrink-0 w-[405.794px]" data-name="Amazon Music Logotype">
          <div className="absolute bottom-[-0.12%] left-0 right-[0.22%] top-[0.12%]" data-name="Smile Only">
            <img alt="" className="block max-w-none size-full" src={img2} />
          </div>
        </div>
      </div>
      <div className="absolute h-[600px] left-0 top-[calc(50%+600px)] w-[2400px]" data-name="Background">
        <div className="absolute bg-[#ff2c2c] inset-0" data-name="Background" />
      </div>
      <div className="absolute bottom-0 box-border content-stretch flex flex-col items-center justify-end left-1/2 p-[120px] size-[2400px] translate-x-[-50%]" data-name="Playlist Title">
        <div className="flex flex-col font-['Ember_Modern_Display_Standard:Bold',sans-serif] h-[363px] justify-end leading-[0] not-italic relative shrink-0 text-[450px] text-white tracking-[4.5px] w-full">
          <p className="leading-[0.9]">Rock</p>
        </div>
      </div>
      <div className="absolute h-[404px] left-[-12.11px] top-[calc(50%+285px)] w-[783px]" data-name="Fresh_Word_mark">
        <div className="absolute h-[403px] left-[-0.31px] rounded-[48.429px] top-0 w-[783px]" data-name="Fresh Device">
          <div className="absolute h-[403.106px] left-[-0.66px] top-[-0.53px] w-[783.334px]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <img alt="" className="block max-w-none size-full" src={img3} />
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col font-['Ember_Modern_Display_Standard:Bold',sans-serif] justify-center leading-[0] left-[calc(50%-260.81px)] not-italic text-[219.025px] text-nowrap top-1/2 -translate-y-1/2 tracking-[2.1902px]">
          <p className="leading-none whitespace-pre">Fresh</p>
        </div>
      </div>
    </div>
  );
}

export default function MmddyyUsProjectNameTaPaTile2400X1() {
  return <MmddyyUsProjectNameTaPaTile2400X className="bg-[#565656] relative size-full" />;
}