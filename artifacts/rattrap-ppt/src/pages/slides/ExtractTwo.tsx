export default function ExtractTwo() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink px-[6vw] py-[6vh] flex flex-col">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-gold font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            Extract-Based Questions
          </p>
          <h1 className="font-display font-bold text-[4vw] leading-none mt-[1.2vh] text-sapphire">
            Reading the Text · II
          </h1>
        </div>
        <span className="font-display text-[1.5vw] text-muted">Extract 02</span>
      </div>

      <div className="mt-[4vh] grid grid-cols-[1fr_38%] gap-[3vw] flex-1">
        <div className="flex flex-col justify-center gap-[2.2vh]">
          <div className="border-b border-gold/25 pb-[1.4vh]">
            <p className="text-[1.65vw] font-semibold text-ink">Q1. Who is speaking these lines?</p>
            <p className="mt-[0.5vh] text-[1.55vw] italic text-emerald">The ironmaster.</p>
          </div>
          <div className="border-b border-gold/25 pb-[1.4vh]">
            <p className="text-[1.65vw] font-semibold text-ink">Q2. Why does the speaker decide to treat the peddler with respect despite his suspicions?</p>
            <p className="mt-[0.5vh] text-[1.55vw] italic text-emerald">Because he believes in showing dignity and respect to a guest.</p>
          </div>
          <div className="border-b border-gold/25 pb-[1.4vh]">
            <p className="text-[1.65vw] font-semibold text-ink">Q3. What character trait of the speaker is revealed here?</p>
            <p className="mt-[0.5vh] text-[1.55vw] italic text-emerald">Generosity and compassion.</p>
          </div>
          <div>
            <p className="text-[1.65vw] font-semibold text-ink">Q4. What central theme of the chapter is reflected?</p>
            <p className="mt-[0.5vh] text-[1.55vw] italic text-emerald">Human dignity and the power of kindness.</p>
          </div>
        </div>

        <div className="relative rounded-[0.6vw] bg-plum text-pearl p-[2.6vw] flex flex-col justify-center">
          <span className="font-display text-[6vw] leading-[0.6] text-goldbright/60">“</span>
          <p className="font-display italic text-[1.55vw] leading-relaxed text-ivory mt-[-1vh]">
            If he had not been raised to the position of captain, because of his
            own poor clothes, he should at least be treated as an honest
            captain — with warmth, respect, and a place at the table.
          </p>
          <p className="mt-[2.5vh] text-[1.5vw] tracking-[0.2em] uppercase text-goldbright">
            — from The Rattrap
          </p>
        </div>
      </div>
    </div>
  );
}
