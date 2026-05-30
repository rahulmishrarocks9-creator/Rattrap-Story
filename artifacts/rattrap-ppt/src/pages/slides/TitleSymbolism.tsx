const base = import.meta.env.BASE_URL;

export default function TitleSymbolism() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink flex">
      <div className="relative w-[42vw] h-full overflow-hidden">
        <img
          src={`${base}images/rattrap.png`}
          crossOrigin="anonymous"
          alt="An old wire rattrap baited with cheese"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-ivory/40" />
        <div className="absolute bottom-[6vh] left-[3vw] right-[3vw]">
          <p className="font-display italic text-[1.9vw] text-pearl drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            “The world is a rattrap.”
          </p>
        </div>
      </div>

      <div className="relative flex-1 h-full flex flex-col justify-center px-[5vw]">
        <p className="text-gold font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
          The Title, Decoded
        </p>
        <h1 className="font-display font-bold text-[4.4vw] leading-[0.95] mt-[1.5vh] text-sapphire [text-wrap:balance]">
          The World as a Rattrap
        </h1>

        <p className="mt-[3.5vh] text-[1.7vw] leading-relaxed text-ink/80 max-w-[42vw] [text-wrap:pretty]">
          A symbolic title. The world becomes a rattrap when people are tempted
          by money, comfort, and false security. The peddler believes every
          pleasure is bait and every desire can trap human beings.
        </p>

        <div className="mt-[5vh] flex flex-col gap-[2.3vh] max-w-[42vw]">
          <div className="flex items-baseline gap-[1.5vw]">
            <span className="font-display text-[1.9vw] text-gold w-[10vw] shrink-0">Rattrap</span>
            <span className="text-[1.6vw] text-ink/85">symbol of temptation</span>
          </div>
          <div className="flex items-baseline gap-[1.5vw]">
            <span className="font-display text-[1.9vw] text-gold w-[10vw] shrink-0">World</span>
            <span className="text-[1.6vw] text-ink/85">a trap of desires</span>
          </div>
          <div className="flex items-baseline gap-[1.5vw]">
            <span className="font-display text-[1.9vw] text-gold w-[10vw] shrink-0">Bait</span>
            <span className="text-[1.6vw] text-ink/85">riches, comfort, pride</span>
          </div>
          <div className="flex items-baseline gap-[1.5vw]">
            <span className="font-display text-[1.9vw] text-emerald w-[10vw] shrink-0">Escape</span>
            <span className="text-[1.6vw] text-ink/85">kindness, dignity, self-realization</span>
          </div>
        </div>
      </div>
    </div>
  );
}
