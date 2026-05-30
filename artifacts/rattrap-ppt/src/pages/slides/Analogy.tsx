export default function Analogy() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-emerald via-teal to-sapphire font-body text-ivory px-[6vw] py-[7vh] flex flex-col">
      <div className="absolute -left-[10vw] -bottom-[16vh] w-[32vw] h-[32vw] rounded-full border border-goldbright/12" />

      <div className="relative flex items-end justify-between">
        <div>
          <p className="text-goldbright font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            Reasoning · Match the Pair
          </p>
          <h1 className="font-display font-bold text-[4vw] leading-none mt-[1.2vh] text-ivory">
            Analogy
          </h1>
        </div>
        <span className="font-display text-[1.5vw] text-ivory/55">06 pairs</span>
      </div>
      <div className="relative mt-[5vh] grid grid-cols-3 grid-rows-2 gap-[2vw] flex-1">
        <div className="rounded-[0.6vw] bg-white/8 border border-goldbright/25 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-ivory">Rattrap : Temptation</p>
          <p className="text-goldbright text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-goldbright">Forest : Confusion</p>
        </div>
        <div className="rounded-[0.6vw] bg-white/8 border border-goldbright/25 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-ivory">Edla : Compassion</p>
          <p className="text-goldbright text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-goldbright">Crofter : Loneliness</p>
        </div>
        <div className="rounded-[0.6vw] bg-white/8 border border-goldbright/25 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-ivory">Peddler : Vagabond</p>
          <p className="text-goldbright text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-goldbright">Ironmaster : Host</p>
        </div>
        <div className="rounded-[0.6vw] bg-white/8 border border-goldbright/25 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-ivory">Cheese : Bait</p>
          <p className="text-goldbright text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-goldbright">Money : Lure</p>
        </div>
        <div className="rounded-[0.6vw] bg-white/8 border border-goldbright/25 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-ivory">Christmas : Hope</p>
          <p className="text-goldbright text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-goldbright">Forge : Shelter</p>
        </div>
        <div className="rounded-[0.6vw] bg-white/8 border border-goldbright/25 p-[2vw] flex flex-col justify-center text-center">
          <p className="font-display text-[1.9vw] text-ivory">Theft : Guilt</p>
          <p className="text-goldbright text-[1.6vw] my-[1vh]">∷</p>
          <p className="font-display text-[1.9vw] text-goldbright">Gift : Redemption</p>
        </div>
      </div>
    </div>
  );
}
