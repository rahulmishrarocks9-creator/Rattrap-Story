export default function KeyPoints() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink px-[6vw] py-[7vh] flex flex-col">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-gold font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            The Narrative in Eight Beats
          </p>
          <h1 className="font-display font-bold text-[4.4vw] leading-none mt-[1.5vh] text-sapphire">
            Key Points
          </h1>
        </div>
        <span className="font-display text-[1.6vw] text-muted">02 / 06</span>
      </div>

      <div className="mt-[5vh] grid grid-cols-2 grid-rows-4 gap-x-[5vw] gap-y-[2.6vh] flex-1">
        <div className="flex items-center gap-[1.6vw] border-b border-sapphire/12 pb-[1.6vh]">
          <span className="font-display text-[3vw] text-gold leading-none w-[4vw] shrink-0">1</span>
          <p className="text-[1.55vw] leading-snug text-ink/85">The peddler survives by making and selling rattraps.</p>
        </div>
        <div className="flex items-center gap-[1.6vw] border-b border-sapphire/12 pb-[1.6vh]">
          <span className="font-display text-[3vw] text-gold leading-none w-[4vw] shrink-0">2</span>
          <p className="text-[1.55vw] leading-snug text-ink/85">He has no permanent home and lives a wandering life.</p>
        </div>
        <div className="flex items-center gap-[1.6vw] border-b border-sapphire/12 pb-[1.6vh]">
          <span className="font-display text-[3vw] text-gold leading-none w-[4vw] shrink-0">3</span>
          <p className="text-[1.55vw] leading-snug text-ink/85">He steals the crofter’s money after being tempted.</p>
        </div>
        <div className="flex items-center gap-[1.6vw] border-b border-sapphire/12 pb-[1.6vh]">
          <span className="font-display text-[3vw] text-gold leading-none w-[4vw] shrink-0">4</span>
          <p className="text-[1.55vw] leading-snug text-ink/85">The forest traps him physically and mentally.</p>
        </div>
        <div className="flex items-center gap-[1.6vw] border-b border-sapphire/12 pb-[1.6vh]">
          <span className="font-display text-[3vw] text-gold leading-none w-[4vw] shrink-0">5</span>
          <p className="text-[1.55vw] leading-snug text-ink/85">He reaches the forge and is mistaken for a captain.</p>
        </div>
        <div className="flex items-center gap-[1.6vw] border-b border-sapphire/12 pb-[1.6vh]">
          <span className="font-display text-[3vw] text-gold leading-none w-[4vw] shrink-0">6</span>
          <p className="text-[1.55vw] leading-snug text-ink/85">Edla treats him with kindness and dignity.</p>
        </div>
        <div className="flex items-center gap-[1.6vw] border-b border-sapphire/12 pb-[1.6vh]">
          <span className="font-display text-[3vw] text-gold leading-none w-[4vw] shrink-0">7</span>
          <p className="text-[1.55vw] leading-snug text-ink/85">The peddler returns the money as a rattrap gift.</p>
        </div>
        <div className="flex items-center gap-[1.6vw] border-b border-emerald/30 pb-[1.6vh]">
          <span className="font-display text-[3vw] text-emerald leading-none w-[4vw] shrink-0">8</span>
          <p className="text-[1.55vw] leading-snug text-emerald font-semibold">Kindness transforms him.</p>
        </div>
      </div>
    </div>
  );
}
