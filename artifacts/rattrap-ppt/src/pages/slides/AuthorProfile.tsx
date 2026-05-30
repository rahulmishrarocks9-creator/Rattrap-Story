export default function AuthorProfile() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink flex">
      <div className="relative w-[40vw] h-full overflow-hidden bg-sapphire flex flex-col justify-center items-center px-[3vw]">
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-sapphire" />
        <div className="absolute -left-[14vw] -top-[14vw] w-[34vw] h-[34vw] rounded-full border border-gold/20" />
        <div className="absolute -right-[16vw] bottom-[6vh] w-[30vw] h-[30vw] rounded-full border border-gold/15" />
        <div className="relative flex flex-col items-center text-center">
          <span className="font-display text-[16vw] leading-none text-gold">SL</span>
          <div className="mt-[3vh] h-[2px] w-[8vw] bg-gold/70" />
          <p className="mt-[3vh] font-display italic text-[2.4vw] text-ivory leading-tight">
            Selma Lagerlöf
          </p>
          <p className="mt-[2vh] text-[1.65vw] tracking-[0.22em] uppercase text-goldbright/90 leading-relaxed">
            First woman to win the
            <span className="block">Nobel Prize in Literature</span>
          </p>
        </div>
      </div>

      <div className="relative flex-1 h-full flex flex-col justify-center px-[5vw]">
        <p className="text-gold font-semibold tracking-[0.36em] text-[1.6vw] uppercase">
          Author Profile
        </p>
        <h1 className="font-display font-bold text-[5vw] leading-none mt-[2vh] text-sapphire">
          Selma Lagerlöf
        </h1>
        <p className="mt-[3.5vh] text-[1.85vw] leading-relaxed text-ink/80 max-w-[44vw] [text-wrap:pretty]">
          A Swedish writer known for her imaginative storytelling, moral themes,
          and use of folklore and legend. She became the first woman to win the
          Nobel Prize in Literature in 1909.
        </p>

        <div className="mt-[5vh] grid grid-cols-2 gap-x-[3vw] gap-y-[3.2vh] max-w-[44vw]">
          <div className="border-l-2 border-gold pl-[1.4vw]">
            <p className="text-[1.5vw] tracking-[0.2em] uppercase text-muted">Born</p>
            <p className="font-display text-[2.4vw] text-sapphire leading-tight">1858</p>
          </div>
          <div className="border-l-2 border-gold pl-[1.4vw]">
            <p className="text-[1.5vw] tracking-[0.2em] uppercase text-muted">Died</p>
            <p className="font-display text-[2.4vw] text-sapphire leading-tight">1940</p>
          </div>
          <div className="border-l-2 border-gold pl-[1.4vw]">
            <p className="text-[1.5vw] tracking-[0.2em] uppercase text-muted">Nationality</p>
            <p className="font-display text-[2.4vw] text-sapphire leading-tight">Swedish</p>
          </div>
          <div className="border-l-2 border-gold pl-[1.4vw]">
            <p className="text-[1.5vw] tracking-[0.2em] uppercase text-muted">Nobel Prize</p>
            <p className="font-display text-[2.4vw] text-sapphire leading-tight">1909</p>
          </div>
        </div>

        <div className="mt-[4.5vh] max-w-[44vw]">
          <p className="text-[1.5vw] tracking-[0.2em] uppercase text-muted">Literary Style</p>
          <p className="mt-[1vh] text-[1.7vw] text-emerald font-medium leading-snug">
            Imaginative · moral · folkloric · emotional · symbolic
          </p>
        </div>
      </div>
    </div>
  );
}
