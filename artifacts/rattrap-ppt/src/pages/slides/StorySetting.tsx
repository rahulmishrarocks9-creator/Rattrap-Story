const base = import.meta.env.BASE_URL;

export default function StorySetting() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink flex">
      <div className="relative flex-1 h-full flex flex-col px-[6vw] py-[7vh]">
        <p className="text-teal font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
          Background of the Story
        </p>
        <h1 className="font-display font-bold text-[4.4vw] leading-none mt-[1.5vh] text-sapphire">
          Story Setting & Route
        </h1>
        <p className="mt-[2.5vh] text-[1.55vw] leading-relaxed text-ink/75 max-w-[40vw] [text-wrap:pretty]">
          The story moves through rural roads, lonely paths, a forest, a
          crofter’s cottage, a forge, and the ironmaster’s house. The journey is
          both physical and symbolic.
        </p>

        <div className="relative mt-[6vh] flex-1">
          <div className="absolute left-[1.6vw] top-[1vh] bottom-[1vh] w-[2px] bg-gradient-to-b from-teal via-gold to-emerald" />

          <div className="flex flex-col justify-between h-full">
            <div className="flex items-center gap-[2vw]">
              <span className="relative z-10 w-[3.2vw] h-[3.2vw] rounded-full bg-teal text-pearl font-display text-[1.5vw] flex items-center justify-center shrink-0">1</span>
              <div>
                <p className="font-display text-[2vw] text-sapphire leading-tight">Road</p>
                <p className="text-[1.55vw] text-muted">Wandering, homeless survival</p>
              </div>
            </div>
            <div className="flex items-center gap-[2vw]">
              <span className="relative z-10 w-[3.2vw] h-[3.2vw] rounded-full bg-sapphire text-pearl font-display text-[1.5vw] flex items-center justify-center shrink-0">2</span>
              <div>
                <p className="font-display text-[2vw] text-sapphire leading-tight">Crofter’s Cottage</p>
                <p className="text-[1.55vw] text-muted">Temptation and theft</p>
              </div>
            </div>
            <div className="flex items-center gap-[2vw]">
              <span className="relative z-10 w-[3.2vw] h-[3.2vw] rounded-full bg-indigo text-pearl font-display text-[1.5vw] flex items-center justify-center shrink-0">3</span>
              <div>
                <p className="font-display text-[2vw] text-sapphire leading-tight">Forest</p>
                <p className="text-[1.55vw] text-muted">Confusion and entrapment</p>
              </div>
            </div>
            <div className="flex items-center gap-[2vw]">
              <span className="relative z-10 w-[3.2vw] h-[3.2vw] rounded-full bg-copper text-pearl font-display text-[1.5vw] flex items-center justify-center shrink-0">4</span>
              <div>
                <p className="font-display text-[2vw] text-sapphire leading-tight">Forge</p>
                <p className="text-[1.55vw] text-muted">Shelter and mistaken identity</p>
              </div>
            </div>
            <div className="flex items-center gap-[2vw]">
              <span className="relative z-10 w-[3.2vw] h-[3.2vw] rounded-full bg-plum text-pearl font-display text-[1.5vw] flex items-center justify-center shrink-0">5</span>
              <div>
                <p className="font-display text-[2vw] text-sapphire leading-tight">Ironmaster’s House</p>
                <p className="text-[1.55vw] text-muted">Dignity and hospitality</p>
              </div>
            </div>
            <div className="flex items-center gap-[2vw]">
              <span className="relative z-10 w-[3.2vw] h-[3.2vw] rounded-full bg-emerald text-pearl font-display text-[1.5vw] flex items-center justify-center shrink-0">6</span>
              <div>
                <p className="font-display text-[2vw] text-sapphire leading-tight">Christmas Turning Point</p>
                <p className="text-[1.55vw] text-muted">Guilt to redemption</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-[30vw] h-full overflow-hidden">
        <img
          src={`${base}images/forest-path.png`}
          crossOrigin="anonymous"
          alt="A winding path into a dense forest"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pearl via-transparent to-navy/30" />
        <div className="absolute bottom-[6vh] left-[2vw] right-[2vw]">
          <p className="font-body text-[1.6vw] italic text-pearl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
            From wandering to temptation, from confusion to shelter, and finally
            from guilt to redemption.
          </p>
        </div>
      </div>
    </div>
  );
}
