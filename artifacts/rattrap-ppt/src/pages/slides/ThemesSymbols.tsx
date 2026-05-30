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
        <div className="rounded-[0.7vw] bg-white/6 border border-white/12 border-t-[3px] border-t-copper p-[1.8vw] flex flex-col text-center overflow-hidden">
          <p className="font-display text-[2.5vw] text-goldbright leading-none">Rattrap</p>
          <p className="text-copper text-[2.4vw] my-[1.4vh] leading-none">↓</p>
          <p className="font-display text-[1.9vw] text-ivory leading-tight">Temptation</p>
          <p className="mt-auto pt-[2vh] text-[1.5vw] leading-snug text-ivory/80 [text-wrap:pretty]">
            The world baits us with riches and comfort — every desire can snap shut like a trap.
          </p>
        </div>

        <div className="rounded-[0.7vw] bg-white/6 border border-white/12 border-t-[3px] border-t-jade p-[1.8vw] flex flex-col text-center overflow-hidden">
          <p className="font-display text-[2.5vw] text-goldbright leading-none">Forest</p>
          <p className="text-jade text-[2.4vw] my-[1.4vh] leading-none">↓</p>
          <p className="font-display text-[1.9vw] text-ivory leading-tight">Entrapment</p>
          <p className="mt-auto pt-[2vh] text-[1.5vw] leading-snug text-ivory/80 [text-wrap:pretty]">
            Lost among the dark trees, the peddler mirrors his own moral confusion.
          </p>
        </div>

        <div className="rounded-[0.7vw] bg-white/6 border border-white/12 border-t-[3px] border-t-royal p-[1.8vw] flex flex-col text-center overflow-hidden">
          <p className="font-display text-[2.5vw] text-goldbright leading-none">Forge</p>
          <p className="text-royal text-[2.4vw] my-[1.4vh] leading-none">↓</p>
          <p className="font-display text-[1.9vw] text-ivory leading-tight">Awakening</p>
          <p className="mt-auto pt-[2vh] text-[1.5vw] leading-snug text-ivory/80 [text-wrap:pretty]">
            Fire, warmth, and human contact — the place where change quietly begins.
          </p>
        </div>

        <div className="rounded-[0.7vw] bg-white/8 border border-goldbright/25 border-t-[3px] border-t-goldbright p-[1.8vw] flex flex-col text-center overflow-hidden">
          <p className="font-display text-[2.5vw] text-goldbright leading-none">Christmas</p>
          <p className="text-goldbright text-[2.4vw] my-[1.4vh] leading-none">↓</p>
          <p className="font-display text-[1.9vw] text-ivory leading-tight">Redemption</p>
          <p className="mt-auto pt-[2vh] text-[1.5vw] leading-snug text-ivory/90 [text-wrap:pretty]">
            The season of goodness turns guilt into grace and a theft into a gift.
          </p>
        </div>
      </div>
    </div>
  );
}
