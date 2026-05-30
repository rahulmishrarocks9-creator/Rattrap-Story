const base = import.meta.env.BASE_URL;

export default function Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-navy font-body text-ivory">
      <img
        src={`${base}images/cover-road.png`}
        crossOrigin="anonymous"
        alt="A lone peddler walking an old road at dusk"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/40" />

      <div className="absolute -right-[14vw] top-1/2 -translate-y-1/2 w-[44vw] h-[44vw] rounded-full border border-gold/25" />
      <div className="absolute -right-[8vw] top-1/2 -translate-y-1/2 w-[30vw] h-[30vw] rounded-full border border-gold/20" />
      <div className="absolute right-[2vw] top-1/2 -translate-y-1/2 w-[17vw] h-[17vw] rounded-full border border-gold/15" />
      <div className="absolute right-[10.5vw] top-[36vh] w-[1vw] h-[1vw] rounded-full bg-gold/80" />
      <div className="absolute right-[6vw] top-[62vh] w-[0.7vw] h-[0.7vw] rounded-full bg-goldbright/70" />

      <div className="relative h-full flex flex-col justify-center px-[8vw]">
        <p className="text-gold font-semibold tracking-[0.42em] text-[1.65vw] uppercase">
          Class XII English · Flamingo
        </p>
        <h1 className="font-display font-black text-[12vw] leading-[0.86] mt-[3vh] text-ivory [text-wrap:balance]">
          The Rattrap
        </h1>
        <div className="mt-[3vh] h-[2px] w-[12vw] bg-gold" />
        <p className="mt-[3vh] font-display italic text-[3vw] text-goldbright leading-tight">
          By Selma Lagerlöf
        </p>
        <p className="mt-[2.5vh] text-[2vw] text-ivory/80 font-light max-w-[46vw] leading-relaxed">
          A story of temptation, kindness, and transformation.
        </p>
      </div>

      <div className="absolute bottom-[6vh] left-[8vw] right-[8vw] flex items-center justify-between border-t border-ivory/15 pt-[3vh]">
        <p className="font-display italic text-[1.7vw] text-gold/90">
          “The world is a rattrap.”
        </p>
        <p className="text-[1.6vw] tracking-[0.3em] uppercase text-ivory/55">
          Premium Study Edition
        </p>
      </div>
    </div>
  );
}
