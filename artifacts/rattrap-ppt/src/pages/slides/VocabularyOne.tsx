export default function VocabularyOne() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink px-[6vw] py-[7vh] flex flex-col">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-teal font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            Glossary · Part One
          </p>
          <h1 className="font-display font-bold text-[4.4vw] leading-none mt-[1.5vh] text-sapphire">
            Vocabulary
          </h1>
        </div>
        <span className="font-display text-[1.6vw] text-muted">A – K</span>
      </div>

      <div className="mt-[4.5vh] grid grid-cols-2 gap-x-[2.4vw] gap-y-[1.6vh] flex-1 content-start">
        <div className="rounded-[0.5vw] bg-white border-l-[4px] border-sapphire shadow-[0_2px_8px_rgba(20,32,46,0.06)] px-[1.5vw] py-[1.2vh] flex items-baseline gap-[0.7vw]">
          <span className="font-display text-[1.75vw] text-sapphire shrink-0">Peddler</span>
          <span className="text-[1.5vw] leading-snug text-ink/70">— a travelling seller</span>
        </div>
        <div className="rounded-[0.5vw] bg-white border-l-[4px] border-teal shadow-[0_2px_8px_rgba(20,32,46,0.06)] px-[1.5vw] py-[1.2vh] flex items-baseline gap-[0.7vw]">
          <span className="font-display text-[1.75vw] text-teal shrink-0">Rattrap</span>
          <span className="text-[1.5vw] leading-snug text-ink/70">— a device to catch rats</span>
        </div>
        <div className="rounded-[0.5vw] bg-white border-l-[4px] border-emerald shadow-[0_2px_8px_rgba(20,32,46,0.06)] px-[1.5vw] py-[1.2vh] flex items-baseline gap-[0.7vw]">
          <span className="font-display text-[1.75vw] text-emerald shrink-0">Crofter</span>
          <span className="text-[1.5vw] leading-snug text-ink/70">— one who farms a small rented plot</span>
        </div>
        <div className="rounded-[0.5vw] bg-white border-l-[4px] border-plum shadow-[0_2px_8px_rgba(20,32,46,0.06)] px-[1.5vw] py-[1.2vh] flex items-baseline gap-[0.7vw]">
          <span className="font-display text-[1.75vw] text-plum shrink-0">Temptation</span>
          <span className="text-[1.5vw] leading-snug text-ink/70">— attraction toward something desirable</span>
        </div>
        <div className="rounded-[0.5vw] bg-white border-l-[4px] border-copper shadow-[0_2px_8px_rgba(20,32,46,0.06)] px-[1.5vw] py-[1.2vh] flex items-baseline gap-[0.7vw]">
          <span className="font-display text-[1.75vw] text-copper shrink-0">Hospitality</span>
          <span className="text-[1.5vw] leading-snug text-ink/70">— friendly treatment of guests</span>
        </div>
        <div className="rounded-[0.5vw] bg-white border-l-[4px] border-indigo shadow-[0_2px_8px_rgba(20,32,46,0.06)] px-[1.5vw] py-[1.2vh] flex items-baseline gap-[0.7vw]">
          <span className="font-display text-[1.75vw] text-indigo shrink-0">Compassion</span>
          <span className="text-[1.5vw] leading-snug text-ink/70">— sympathy and concern for others</span>
        </div>
        <div className="rounded-[0.5vw] bg-white border-l-[4px] border-sapphire shadow-[0_2px_8px_rgba(20,32,46,0.06)] px-[1.5vw] py-[1.2vh] flex items-baseline gap-[0.7vw]">
          <span className="font-display text-[1.75vw] text-sapphire shrink-0">Dignity</span>
          <span className="text-[1.5vw] leading-snug text-ink/70">— self-respect and worth</span>
        </div>
        <div className="rounded-[0.5vw] bg-white border-l-[4px] border-emerald shadow-[0_2px_8px_rgba(20,32,46,0.06)] px-[1.5vw] py-[1.2vh] flex items-baseline gap-[0.7vw]">
          <span className="font-display text-[1.75vw] text-emerald shrink-0">Redemption</span>
          <span className="text-[1.5vw] leading-snug text-ink/70">— improvement after wrongdoing</span>
        </div>
        <div className="rounded-[0.5vw] bg-white border-l-[4px] border-teal shadow-[0_2px_8px_rgba(20,32,46,0.06)] px-[1.5vw] py-[1.2vh] flex items-baseline gap-[0.7vw]">
          <span className="font-display text-[1.75vw] text-teal shrink-0">Solitary</span>
          <span className="text-[1.5vw] leading-snug text-ink/70">— lonely, alone</span>
        </div>
        <div className="rounded-[0.5vw] bg-white border-l-[4px] border-copper shadow-[0_2px_8px_rgba(20,32,46,0.06)] px-[1.5vw] py-[1.2vh] flex items-baseline gap-[0.7vw]">
          <span className="font-display text-[1.75vw] text-copper shrink-0">Vagabond</span>
          <span className="text-[1.5vw] leading-snug text-ink/70">— a wanderer without a home</span>
        </div>
        <div className="rounded-[0.5vw] bg-white border-l-[4px] border-plum shadow-[0_2px_8px_rgba(20,32,46,0.06)] px-[1.5vw] py-[1.2vh] flex items-baseline gap-[0.7vw]">
          <span className="font-display text-[1.75vw] text-plum shrink-0">Enticed</span>
          <span className="text-[1.5vw] leading-snug text-ink/70">— attracted or tempted</span>
        </div>
      </div>
    </div>
  );
}
