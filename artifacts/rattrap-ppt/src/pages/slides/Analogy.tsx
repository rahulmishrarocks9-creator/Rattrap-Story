export default function Analogy() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink px-[6vw] py-[7vh] flex flex-col">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-gold font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            Reasoning · Match the Pair
          </p>
          <h1 className="font-display font-bold text-[4vw] leading-none mt-[1.2vh] text-sapphire">
            Analogy
          </h1>
        </div>
        <span className="font-display text-[1.5vw] text-muted">06 pairs</span>
      </div>
      <div className="mt-[5vh] grid grid-cols-3 grid-rows-2 gap-[2vw] flex-1">
        <div className="rounded-[0.6vw] bg-white border border-sapphire/20 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-sapphire">Rattrap : Temptation</p>
          <p className="text-gold text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-emerald">Forest : Confusion</p>
        </div>
        <div className="rounded-[0.6vw] bg-white border border-emerald/20 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-sapphire">Edla : Compassion</p>
          <p className="text-gold text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-emerald">Crofter : Loneliness</p>
        </div>
        <div className="rounded-[0.6vw] bg-white border border-plum/20 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-sapphire">Peddler : Vagabond</p>
          <p className="text-gold text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-emerald">Ironmaster : Host</p>
        </div>
        <div className="rounded-[0.6vw] bg-white border border-teal/20 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-sapphire">Cheese : Bait</p>
          <p className="text-gold text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-emerald">Money : Lure</p>
        </div>
        <div className="rounded-[0.6vw] bg-white border border-copper/20 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-sapphire">Christmas : Hope</p>
          <p className="text-gold text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-emerald">Forge : Shelter</p>
        </div>
        <div className="rounded-[0.6vw] bg-white border border-indigo/20 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-sapphire">Theft : Guilt</p>
          <p className="text-gold text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-emerald">Gift : Redemption</p>
        </div>
      </div>
    </div>
  );
}
