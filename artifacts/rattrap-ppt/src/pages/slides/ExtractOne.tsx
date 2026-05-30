export default function ExtractOne() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink px-[6vw] py-[6vh] flex flex-col">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-gold font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            Extract-Based Questions
          </p>
          <h1 className="font-display font-bold text-[4vw] leading-none mt-[1.2vh] text-sapphire">
            Reading the Text · I
          </h1>
        </div>
        <span className="font-display text-[1.5vw] text-muted">Extract 01</span>
      </div>

      <div className="mt-[4vh] grid grid-cols-[38%_1fr] gap-[3vw] flex-1">
        <div className="relative rounded-[0.6vw] bg-sapphire text-pearl p-[2.6vw] flex flex-col justify-center">
          <span className="font-display text-[6vw] leading-[0.6] text-goldbright/60">“</span>
          <p className="font-display italic text-[1.55vw] leading-relaxed text-ivory mt-[-1vh]">
            The world had never existed for him except as a public highway and
            temporary resting places, and the rattraps he sold were made by
            himself at odd moments from the material he got by begging in the
            stores or at the big farms.
          </p>
          <p className="mt-[2.5vh] text-[1.5vw] tracking-[0.2em] uppercase text-goldbright">
            — from The Rattrap
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <p className="text-[1.65vw] font-semibold text-ink">Q1. Why had the world existed only as a public highway for the peddler?</p>
            <div className="mt-[1.4vh] grid grid-cols-2 gap-[1vw] text-[1.55vw]">
              <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-sapphire/6 text-ink/70">a) He loved travelling</span>
              <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-emerald text-pearl font-semibold">b) He had no permanent home ✓</span>
              <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-sapphire/6 text-ink/70">c) He was a tourist</span>
              <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-sapphire/6 text-ink/70">d) He searched for treasure</span>
            </div>
          </div>

          <div className="mt-[2vh] grid grid-cols-1 gap-[1.6vh]">
            <div className="border-b border-gold/25 pb-[1.2vh]">
              <p className="text-[1.6vw] font-semibold text-ink">Q2. What does “temporary resting places” suggest about his life?</p>
              <p className="mt-[0.5vh] text-[1.55vw] italic text-emerald">His life was unstable, rootless, and homeless.</p>
            </div>
            <div className="border-b border-gold/25 pb-[1.2vh]">
              <p className="text-[1.6vw] font-semibold text-ink">Q3. Which quality of the peddler is highlighted here?</p>
              <p className="mt-[0.5vh] text-[1.55vw] italic text-emerald">Resourcefulness and resilience in hardship.</p>
            </div>
            <div>
              <p className="text-[1.6vw] font-semibold text-ink">Q4. Identify the literary device used in the extract.</p>
              <p className="mt-[0.5vh] text-[1.55vw] italic text-emerald">Metaphor — the world seen as a highway.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
