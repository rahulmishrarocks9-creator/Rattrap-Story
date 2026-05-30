export default function LiteraryDevicesTwo() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-pearl font-body text-ink px-[6vw] py-[7vh] flex flex-col">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-gold font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            Craft & Technique · Part Two
          </p>
          <h1 className="font-display font-bold text-[4.4vw] leading-none mt-[1.5vh] text-sapphire">
            Literary Devices
          </h1>
        </div>
        <span className="font-display text-[1.6vw] text-muted">05 – 08</span>
      </div>

      <div className="mt-[5vh] grid grid-cols-2 grid-rows-2 gap-[2vw] flex-1">
        <div className="rounded-[0.6vw] bg-indigo text-pearl p-[2vw] flex flex-col justify-center">
          <p className="text-[1.5vw] tracking-[0.24em] uppercase text-goldbright">05 · Contrast</p>
          <div className="mt-[1.4vh] grid grid-cols-2 gap-x-[1.4vw] gap-y-[1vh] text-[1.6vw] leading-snug text-pearl/90">
            <p>Trust vs suspicion</p>
            <p>Poverty vs wealth</p>
            <p>Cruelty vs compassion</p>
            <p>Temptation vs redemption</p>
          </div>
        </div>

        <div className="rounded-[0.6vw] bg-white border border-copper/30 p-[2.2vw] flex flex-col justify-center">
          <p className="text-[1.5vw] tracking-[0.24em] uppercase text-copper">06 · Foreshadowing</p>
          <p className="mt-[1.4vh] text-[1.65vw] leading-snug text-ink/82">The idea of the world as a trap prepares the reader for the peddler’s later moral and physical entrapment.</p>
        </div>

        <div className="rounded-[0.6vw] bg-white border border-sapphire/25 p-[2.2vw] flex flex-col justify-center">
          <p className="text-[1.5vw] tracking-[0.24em] uppercase text-sapphire">07 · Personification</p>
          <p className="mt-[1.4vh] text-[1.65vw] leading-snug text-ink/82">The world is presented as if it actively lays traps for unsuspecting people.</p>
        </div>

        <div className="rounded-[0.6vw] bg-emerald text-pearl p-[2.2vw] flex flex-col justify-center">
          <p className="text-[1.5vw] tracking-[0.24em] uppercase text-goldbright">08 · Moral Allegory</p>
          <p className="mt-[1.4vh] text-[1.65vw] leading-snug text-pearl/90">The story works like a symbolic moral lesson about human weakness and the power of goodness.</p>
        </div>
      </div>
    </div>
  );
}
