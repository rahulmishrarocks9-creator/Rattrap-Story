const base = import.meta.env.BASE_URL;

export default function Conclusion() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-navy font-body text-ivory">
      <img
        src={`${base}images/conclusion.png`}
        crossOrigin="anonymous"
        alt="Warm dawn light breaking across an old wooden surface"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/35" />

      <div className="relative h-full flex flex-col justify-center px-[8vw] max-w-[64vw]">
        <p className="text-gold font-semibold tracking-[0.36em] text-[1.6vw] uppercase">
          Conclusion
        </p>
        <h1 className="font-display font-bold text-[5vw] leading-[0.95] mt-[2vh] text-ivory [text-wrap:balance]">
          Goodness awakens goodness.
        </h1>

        <p className="mt-[4vh] text-[1.8vw] leading-relaxed text-ivory/85 [text-wrap:pretty]">
          The Rattrap is a story about temptation, loneliness, kindness, and
          change. It shows that even a person who has lost trust in the world can
          be transformed through dignity and compassion. Selma Lagerlöf delivers
          a moral message with deep simplicity.
        </p>

        <div className="mt-[5vh] border-l-[3px] border-gold pl-[2vw]">
          <p className="font-display italic text-[2.6vw] text-goldbright leading-tight">
            Compassion is stronger than temptation.
          </p>
        </div>
      </div>
    </div>
  );
}
