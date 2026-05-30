const base = import.meta.env.BASE_URL;

export default function ThankYou() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ink font-body text-ivory">
      <img
        src={`${base}images/thankyou.png`}
        crossOrigin="anonymous"
        alt="A soft glowing winter night with distant warm light"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-[10vw]">
        <p className="text-gold font-semibold tracking-[0.4em] text-[1.6vw] uppercase">
          The Rattrap · Selma Lagerlöf
        </p>
        <h1 className="font-display font-bold text-[7vw] leading-none mt-[2.5vh] text-ivory">
          Thank You
        </h1>
        <div className="mt-[4vh] w-[8vw] h-[2px] bg-gold" />
        <p className="mt-[4vh] font-display italic text-[2.6vw] text-goldbright leading-tight [text-wrap:balance]">
          Kindness transforms everything.
        </p>
      </div>
    </div>
  );
}
