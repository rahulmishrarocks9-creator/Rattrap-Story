export default function CharacterSketches() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-navy via-sapphire to-plum font-body text-ivory px-[6vw] py-[6vh] flex flex-col">
      <div className="absolute -right-[10vw] -top-[14vh] w-[34vw] h-[34vw] rounded-full border border-goldbright/15" />
      <div className="absolute -left-[8vw] -bottom-[18vh] w-[26vw] h-[26vw] rounded-full border border-goldbright/10" />

      <div className="relative flex items-end justify-between">
        <div>
          <p className="text-goldbright font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
            The Four Figures
          </p>
          <h1 className="font-display font-bold text-[4.2vw] leading-none mt-[1.2vh] text-ivory">
            Character Sketches
          </h1>
        </div>
        <span className="font-display text-[1.6vw] text-ivory/55">04 figures</span>
      </div>

      <div className="relative mt-[3.5vh] grid grid-cols-2 grid-rows-2 gap-[1.8vw] flex-1 min-h-0">
        <div className="rounded-[0.7vw] bg-white/6 border border-white/12 border-t-[3px] border-t-copper p-[2vw] flex flex-col overflow-hidden">
          <div className="flex items-baseline justify-between gap-[1vw]">
            <h2 className="font-display text-[2.3vw] text-goldbright leading-none">The Peddler</h2>
            <span className="text-[1.5vw] tracking-[0.2em] uppercase text-copper shrink-0">Protagonist</span>
          </div>
          <p className="mt-[1.6vh] text-[1.55vw] leading-snug text-ivory/85 [text-wrap:pretty]">
            A poor, wandering seller of rattraps. Lonely and bitter, he sees the
            world as a trap baited with riches — until kindness reforms him.
          </p>
          <div className="mt-auto pt-[1.6vh] flex flex-wrap gap-[0.7vw] text-[1.5vw]">
            <span className="bg-white/12 text-pearl px-[1vw] py-[0.4vh] rounded-full">Wandering</span>
            <span className="bg-white/12 text-pearl px-[1vw] py-[0.4vh] rounded-full">Cynical</span>
            <span className="bg-white/12 text-pearl px-[1vw] py-[0.4vh] rounded-full">Transformed</span>
          </div>
        </div>

        <div className="rounded-[0.7vw] bg-white/6 border border-white/12 border-t-[3px] border-t-teal p-[2vw] flex flex-col overflow-hidden">
          <div className="flex items-baseline justify-between gap-[1vw]">
            <h2 className="font-display text-[2.3vw] text-goldbright leading-none">The Crofter</h2>
            <span className="text-[1.5vw] tracking-[0.2em] uppercase text-jade shrink-0">The Host I</span>
          </div>
          <p className="mt-[1.6vh] text-[1.55vw] leading-snug text-ivory/85 [text-wrap:pretty]">
            A lonely old man who welcomes the peddler, shares his food and his
            confidence — and becomes the trusting victim of the theft.
          </p>
          <div className="mt-auto pt-[1.6vh] flex flex-wrap gap-[0.7vw] text-[1.5vw]">
            <span className="bg-white/12 text-pearl px-[1vw] py-[0.4vh] rounded-full">Lonely</span>
            <span className="bg-white/12 text-pearl px-[1vw] py-[0.4vh] rounded-full">Generous</span>
            <span className="bg-white/12 text-pearl px-[1vw] py-[0.4vh] rounded-full">Trusting</span>
          </div>
        </div>

        <div className="rounded-[0.7vw] bg-white/6 border border-white/12 border-t-[3px] border-t-royal p-[2vw] flex flex-col overflow-hidden">
          <div className="flex items-baseline justify-between gap-[1vw]">
            <h2 className="font-display text-[2.3vw] text-goldbright leading-none">The Ironmaster</h2>
            <span className="text-[1.5vw] tracking-[0.2em] uppercase text-royal shrink-0">The Host II</span>
          </div>
          <p className="mt-[1.6vh] text-[1.55vw] leading-snug text-ivory/85 [text-wrap:pretty]">
            Owner of the Ramsjö forge. Proud and impulsive, he mistakes the
            peddler for an old comrade and offers him warmth and shelter.
          </p>
          <div className="mt-auto pt-[1.6vh] flex flex-wrap gap-[0.7vw] text-[1.5vw]">
            <span className="bg-white/12 text-pearl px-[1vw] py-[0.4vh] rounded-full">Proud</span>
            <span className="bg-white/12 text-pearl px-[1vw] py-[0.4vh] rounded-full">Impulsive</span>
            <span className="bg-white/12 text-pearl px-[1vw] py-[0.4vh] rounded-full">Hospitable</span>
          </div>
        </div>

        <div className="rounded-[0.7vw] bg-white/8 border border-goldbright/25 border-t-[3px] border-t-goldbright p-[2vw] flex flex-col overflow-hidden">
          <div className="flex items-baseline justify-between gap-[1vw]">
            <h2 className="font-display text-[2.3vw] text-goldbright leading-none">Edla Willmansson</h2>
            <span className="text-[1.5vw] tracking-[0.2em] uppercase text-goldbright shrink-0">The Catalyst</span>
          </div>
          <p className="mt-[1.6vh] text-[1.55vw] leading-snug text-ivory/90 [text-wrap:pretty]">
            The ironmaster’s daughter. Kind and perceptive, she treats the
            peddler with dignity even after the truth — and awakens his goodness.
          </p>
          <div className="mt-auto pt-[1.6vh] flex flex-wrap gap-[0.7vw] text-[1.5vw]">
            <span className="bg-goldbright/20 text-pearl px-[1vw] py-[0.4vh] rounded-full">Kind</span>
            <span className="bg-goldbright/20 text-pearl px-[1vw] py-[0.4vh] rounded-full">Perceptive</span>
            <span className="bg-goldbright/20 text-pearl px-[1vw] py-[0.4vh] rounded-full">Compassionate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
