export default function AssertionReasoning() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink px-[6vw] py-[6vh] flex flex-col">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-gold font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            Assertion & Reasoning
          </p>
          <h1 className="font-display font-bold text-[4vw] leading-none mt-[1.2vh] text-sapphire">
            Test Your Understanding
          </h1>
        </div>
        <span className="font-display text-[1.5vw] text-muted">Q1 – Q2</span>
      </div>
      <div className="mt-[4vh] grid grid-cols-2 gap-[3vw] flex-1">
        <div className="rounded-[0.6vw] bg-pearl border border-sapphire/20 p-[2.4vw] flex flex-col">
          <p className="text-[1.5vw] tracking-[0.24em] uppercase text-sapphire">Question 1</p>
          <div className="mt-[1.6vh] space-y-[1.4vh]">
            <p className="text-[1.65vw] leading-snug"><span className="font-semibold text-gold">A:</span> The peddler returned the stolen money to the crofter.</p>
            <p className="text-[1.65vw] leading-snug"><span className="font-semibold text-gold">R:</span> Edla’s kindness and respect transformed him.</p>
          </div>
          <div className="mt-auto pt-[2vh] flex flex-col gap-[1vh] text-[1.55vw]">
            <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-emerald text-pearl font-semibold">A) Both A and R are true, and R explains A           ✓</span>
            <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-sapphire/6 text-ink/70">B) Both true, but R does not explain A</span>
            <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-sapphire/6 text-ink/70">C) A true, R false</span>
            <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-sapphire/6 text-ink/70">D) A false, R true</span>
          </div>
        </div>

        <div className="rounded-[0.6vw] bg-pearl border border-plum/25 p-[2.4vw] flex flex-col">
          <p className="text-[1.5vw] tracking-[0.24em] uppercase text-plum">Question 2</p>
          <div className="mt-[1.6vh] space-y-[1.4vh]">
            <p className="text-[1.65vw] leading-snug"><span className="font-semibold text-gold">A:</span> The forest symbolizes confusion and entrapment.</p>
            <p className="text-[1.65vw] leading-snug"><span className="font-semibold text-gold">R:</span> The peddler easily found his way out of the forest.</p>
          </div>
          <div className="mt-auto pt-[2vh] flex flex-col gap-[1vh] text-[1.55vw]">
            <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-sapphire/6 text-ink/70">A) Both A and R are true, and R explains A</span>
            <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-sapphire/6 text-ink/70">B) Both true, but R does not explain A</span>
            <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-emerald text-pearl font-semibold">C) A is true, but R is false                                                   ✓</span>
            <span className="px-[1.2vw] py-[0.9vh] rounded-full bg-sapphire/6 text-ink/70">D) A false, R true</span>
          </div>
        </div>
      </div>
    </div>
  );
}
