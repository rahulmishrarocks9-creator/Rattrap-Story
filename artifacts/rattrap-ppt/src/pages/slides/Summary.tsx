const base = import.meta.env.BASE_URL;

export default function Summary() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory font-body text-ink flex">
      <div className="relative flex-1 h-full flex flex-col justify-center px-[6vw] py-[7vh]">
        <p className="text-gold font-semibold tracking-[0.34em] text-[1.55vw] uppercase">
          The Story, In Brief
        </p>
        <h1 className="font-display font-bold text-[4.4vw] leading-none mt-[1.5vh] text-sapphire">
          Summary
        </h1>

        <p className="mt-[4vh] text-[1.75vw] leading-relaxed text-ink/82 max-w-[46vw] [text-wrap:pretty]">
          The Rattrap follows a poor peddler who lives by selling rattraps and
          begging for survival. He feels the world itself is a rattrap that
          tempts people with riches and comforts. After stealing money from a
          crofter, he gets lost in a forest and later finds shelter at a forge.
          The ironmaster mistakes him for an old acquaintance, and Edla’s
          kindness and respect deeply affect him. In the end, he returns the
          stolen money — showing that compassion can awaken goodness and lead to
          redemption.
        </p>

        <div className="mt-[5vh] border-l-[3px] border-gold pl-[1.8vw] max-w-[40vw]">
          <p className="font-display italic text-[2.3vw] text-emerald leading-tight">
            Temptation traps, but kindness transforms.
          </p>
        </div>
      </div>

      <div className="relative w-[34vw] h-full overflow-hidden">
        <img
          src={`${base}images/cottage.png`}
          crossOrigin="anonymous"
          alt="A warm rustic cottage interior at night"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory via-transparent to-transparent" />
      </div>
    </div>
  );
}
