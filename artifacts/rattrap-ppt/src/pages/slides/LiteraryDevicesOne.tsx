export default function LiteraryDevicesOne() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink px-[6vw] py-[7vh] flex flex-col">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-gold font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            Craft & Technique · Part One
          </p>
          <h1 className="font-display font-bold text-[4.4vw] leading-none mt-[1.5vh] text-sapphire">
            Literary Devices
          </h1>
        </div>
        <span className="font-display text-[1.6vw] text-muted">01 – 04</span>
      </div>

      <div className="mt-[5vh] grid grid-cols-2 grid-rows-2 gap-[2vw] flex-1">
        <div className="rounded-[0.6vw] bg-sapphire text-pearl p-[2.2vw] flex flex-col justify-center">
          <p className="text-[1.5vw] tracking-[0.24em] uppercase text-goldbright">01 · Extended Metaphor</p>
          <p className="mt-[1.4vh] font-display italic text-[1.9vw] leading-tight text-ivory">“The world is a rattrap.”</p>
          <p className="mt-[1.4vh] text-[1.6vw] leading-snug text-pearl/85">The whole story compares the world to a trap of temptations.</p>
        </div>

        <div className="rounded-[0.6vw] bg-pearl border border-emerald/30 p-[2vw] flex flex-col justify-center">
          <p className="text-[1.5vw] tracking-[0.24em] uppercase text-emerald">02 · Symbolism</p>
          <div className="mt-[1.2vh] grid grid-cols-2 gap-x-[1.4vw] gap-y-[0.7vh] text-[1.55vw] leading-snug text-ink/80">
            <p><span className="text-emerald font-semibold">Rattrap</span> — world & temptation</p>
            <p><span className="text-emerald font-semibold">Cheese</span> — material comforts</p>
            <p><span className="text-emerald font-semibold">Forest</span> — confusion, punishment</p>
            <p><span className="text-emerald font-semibold">Christmas</span> — hope & renewal</p>
            <p><span className="text-emerald font-semibold">Money</span> — the lure</p>
            <p><span className="text-emerald font-semibold">Gift</span> — redemption</p>
          </div>
        </div>

        <div className="rounded-[0.6vw] bg-pearl border border-plum/30 p-[2.2vw] flex flex-col justify-center">
          <p className="text-[1.5vw] tracking-[0.24em] uppercase text-plum">03 · Irony</p>
          <p className="mt-[1.4vh] text-[1.65vw] leading-snug text-ink/82">The thief becomes morally better by the end — the man expected to cheat others is the one who is transformed.</p>
        </div>

        <div className="rounded-[0.6vw] bg-teal text-pearl p-[2.2vw] flex flex-col justify-center">
          <p className="text-[1.5vw] tracking-[0.24em] uppercase text-goldbright">04 · Imagery</p>
          <p className="mt-[1.4vh] text-[1.65vw] leading-snug text-pearl/90">The forest, the cottage, the forge, and the old-fashioned scenes create vivid, lasting pictures.</p>
        </div>
      </div>
    </div>
  );
}
