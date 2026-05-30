export default function ThemePlotCharacters() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink px-[6vw] py-[5vh] flex flex-col">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-gold font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            The Story at a Glance
          </p>
          <h1 className="font-display font-bold text-[4vw] leading-none mt-[1.2vh] text-sapphire">
            Theme, Plot & Characters
          </h1>
        </div>
        <span className="font-display text-[1.6vw] text-muted">01 / 06</span>
      </div>

      <div className="mt-[3vh] grid grid-cols-2 grid-rows-2 gap-[1.6vw] flex-1 min-h-0">
        <div className="rounded-[0.6vw] bg-emerald text-pearl p-[1.9vw] flex flex-col justify-center overflow-hidden">
          <p className="text-[1.5vw] tracking-[0.26em] uppercase text-goldbright">Theme</p>
          <p className="mt-[1.2vh] font-display text-[2.1vw] leading-snug [text-wrap:balance]">
            Human goodness can reform a broken or lost person.
          </p>
        </div>

        <div className="rounded-[0.6vw] bg-pearl border border-gold/30 p-[1.9vw] flex flex-col justify-center overflow-hidden">
          <p className="text-[1.5vw] tracking-[0.26em] uppercase text-gold">Subthemes</p>
          <div className="mt-[1.2vh] flex flex-wrap gap-[0.6vw] text-[1.5vw] font-medium text-sapphire">
            <span className="bg-sapphire/8 px-[1.1vw] py-[0.5vh] rounded-full">Temptation</span>
            <span className="bg-sapphire/8 px-[1.1vw] py-[0.5vh] rounded-full">Dignity</span>
            <span className="bg-sapphire/8 px-[1.1vw] py-[0.5vh] rounded-full">Compassion</span>
            <span className="bg-sapphire/8 px-[1.1vw] py-[0.5vh] rounded-full">Redemption</span>
            <span className="bg-sapphire/8 px-[1.1vw] py-[0.5vh] rounded-full">Trust & suspicion</span>
            <span className="bg-sapphire/8 px-[1.1vw] py-[0.5vh] rounded-full">Loneliness & survival</span>
            <span className="bg-sapphire/8 px-[1.1vw] py-[0.5vh] rounded-full">The power of kindness</span>
          </div>
        </div>

        <div className="rounded-[0.6vw] bg-sapphire text-pearl p-[1.9vw] flex flex-col justify-center overflow-hidden">
          <p className="text-[1.5vw] tracking-[0.26em] uppercase text-goldbright">Plot</p>
          <p className="mt-[1.2vh] text-[1.5vw] leading-snug text-pearl/90 [text-wrap:pretty]">
            A poor peddler who sells rattraps wanders from place to place, steals
            money from a crofter, gets trapped in a forest, reaches a forge, is
            welcomed by the ironmaster’s daughter Edla, and finally returns the
            stolen money after being moved by kindness.
          </p>
        </div>

        <div className="rounded-[0.6vw] bg-pearl border border-plum/30 p-[1.9vw] flex flex-col justify-center overflow-hidden">
          <p className="text-[1.5vw] tracking-[0.26em] uppercase text-plum">Characters</p>
          <div className="mt-[1.2vh] grid grid-cols-2 gap-x-[1.5vw] gap-y-[1vh] text-[1.6vw] font-semibold text-ink">
            <span>The Peddler</span>
            <span>The Crofter</span>
            <span>The Ironmaster</span>
            <span>Edla</span>
          </div>
          <p className="mt-[1.4vh] text-[1.5vw] text-muted leading-snug">
            Set against forest, forge, road, cottage, and a Christmas atmosphere.
          </p>
        </div>
      </div>
    </div>
  );
}
