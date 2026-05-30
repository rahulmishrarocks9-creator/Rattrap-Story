const base = import.meta.env.BASE_URL;

export default function ThemesSymbols() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-indigo via-plum to-navy font-body text-ivory px-[6vw] py-[6vh] flex flex-col">
      <div className="absolute -right-[12vw] top-[8vh] w-[34vw] h-[34vw] rounded-full border border-goldbright/12" />
      <div className="absolute -left-[6vw] -bottom-[14vh] w-[22vw] h-[22vw] rounded-full border border-goldbright/10" />

      <div className="relative flex items-end justify-between">
        <div>
          <p className="text-goldbright font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            Reading the Symbols
          </p>
          <h1 className="font-display font-bold text-[4.2vw] leading-none mt-[1.2vh] text-ivory">
            Themes &amp; Symbols
          </h1>
        </div>
        <span className="font-display text-[1.6vw] text-ivory/55">04 symbols</span>
      </div>

      <div className="relative mt-[4vh] grid grid-cols-4 gap-[1.8vw] flex-1 min-h-0">
        <div className="rounded-[0.7vw] bg-white/6 border border-white/12 border-t-[3px] border-t-copper flex flex-col text-center overflow-hidden">
          <div className="relative h-[20vh] w-full overflow-hidden">
            <img src={`${base}images/sym-rattrap.png`} crossOrigin="anonymous" alt="An antique wire rattrap baited with cheese" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1140]/85 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col flex-1 p-[1.6vw]">
            <p className="font-display text-[2.3vw] text-goldbright leading-none">Rattrap</p>
            <p className="text-copper text-[1.9vw] my-[0.8vh] leading-none">↓</p>
            <p className="font-display text-[1.8vw] text-ivory leading-tight">Temptation</p>
            <p className="mt-auto pt-[1.4vh] text-[1.5vw] leading-snug text-ivory/80 [text-wrap:pretty]">
              The world baits us with riches — every desire can snap shut like a trap.
            </p>
          </div>
        </div>

        <div className="rounded-[0.7vw] bg-white/6 border border-white/12 border-t-[3px] border-t-jade flex flex-col text-center overflow-hidden">
          <div className="relative h-[20vh] w-full overflow-hidden">
            <img src={`${base}images/sym-forest.png`} crossOrigin="anonymous" alt="A dark snowy pine forest at dusk" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1140]/85 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col flex-1 p-[1.6vw]">
            <p className="font-display text-[2.3vw] text-goldbright leading-none">Forest</p>
            <p className="text-jade text-[1.9vw] my-[0.8vh] leading-none">↓</p>
            <p className="font-display text-[1.8vw] text-ivory leading-tight">Entrapment</p>
            <p className="mt-auto pt-[1.4vh] text-[1.5vw] leading-snug text-ivory/80 [text-wrap:pretty]">
              Lost among dark trees, the peddler mirrors his own moral confusion.
            </p>
          </div>
        </div>

        <div className="rounded-[0.7vw] bg-white/6 border border-white/12 border-t-[3px] border-t-royal flex flex-col text-center overflow-hidden">
          <div className="relative h-[20vh] w-full overflow-hidden">
            <img src={`${base}images/sym-forge.png`} crossOrigin="anonymous" alt="An old iron forge glowing with firelight" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1140]/85 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col flex-1 p-[1.6vw]">
            <p className="font-display text-[2.3vw] text-goldbright leading-none">Forge</p>
            <p className="text-royal text-[1.9vw] my-[0.8vh] leading-none">↓</p>
            <p className="font-display text-[1.8vw] text-ivory leading-tight">Awakening</p>
            <p className="mt-auto pt-[1.4vh] text-[1.5vw] leading-snug text-ivory/80 [text-wrap:pretty]">
              Fire, warmth, and human contact — where change quietly begins.
            </p>
          </div>
        </div>

        <div className="rounded-[0.7vw] bg-white/8 border border-goldbright/25 border-t-[3px] border-t-goldbright flex flex-col text-center overflow-hidden">
          <div className="relative h-[20vh] w-full overflow-hidden">
            <img src={`${base}images/sym-christmas.png`} crossOrigin="anonymous" alt="A lit candle and pine sprig on Christmas eve" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1140]/85 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col flex-1 p-[1.6vw]">
            <p className="font-display text-[2.3vw] text-goldbright leading-none">Christmas</p>
            <p className="text-goldbright text-[1.9vw] my-[0.8vh] leading-none">↓</p>
            <p className="font-display text-[1.8vw] text-ivory leading-tight">Redemption</p>
            <p className="mt-auto pt-[1.4vh] text-[1.5vw] leading-snug text-ivory/90 [text-wrap:pretty]">
              The season of goodness turns guilt into grace and a theft into a gift.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
