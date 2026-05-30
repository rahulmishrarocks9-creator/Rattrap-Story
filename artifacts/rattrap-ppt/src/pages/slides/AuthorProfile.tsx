export default function AuthorProfile() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ivory flex font-body">

      {/* LEFT PREMIUM PANEL */}
      <div className="relative w-[40%] h-full overflow-hidden bg-[#0D2C5A] flex flex-col justify-center items-center px-10">

        {/* Decorative circles */}
        <div className="absolute -left-40 -top-40 w-[500px] h-[500px] rounded-full border border-[#C9A14A]/15" />
        <div className="absolute -right-44 bottom-10 w-[450px] h-[450px] rounded-full border border-[#C9A14A]/10" />

        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_40%)]" />

        {/* Portrait */}
        <div className="relative z-10 flex flex-col items-center">

          <div className="relative">
            {/* Outer ring */}
            <div className="absolute -inset-4 rounded-full border border-[#C9A14A]/40" />

            {/* Main portrait */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/11/Selma_Lagerl%C3%B6f.jpg"
              alt="Selma Lagerlöf"
              className="w-[320px] h-[320px] object-cover rounded-full border-[6px] border-[#C9A14A] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* Divider */}
          <div className="mt-10 w-24 h-[2px] bg-[#C9A14A]" />

          {/* Name */}
          <h2 className="mt-8 text-white italic text-[42px] font-serif">
            Selma Lagerlöf
          </h2>

          {/* Achievement */}
          <div className="mt-8 text-center">
            <p className="uppercase tracking-[0.35em] text-[#D6B267] text-[22px] leading-relaxed">
              First Woman To Win The
            </p>
            <p className="uppercase tracking-[0.35em] text-[#D6B267] text-[22px] leading-relaxed">
              Nobel Prize In Literature
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT PANEL */}
      <div className="relative flex-1 flex flex-col justify-center px-24">

        {/* Header */}
        <div>
          <p className="uppercase tracking-[0.45em] text-[#C9A14A] text-[20px] font-medium">
            Author Profile
          </p>

          <h1 className="mt-5 text-[92px] font-serif font-bold leading-none text-[#153D7A]">
            Selma Lagerlöf
          </h1>

          <div className="mt-10 w-32 h-[3px] bg-[#C9A14A]" />
        </div>

        {/* Description */}
        <p className="mt-10 text-[30px] leading-[1.8] text-[#4A4A4A] max-w-[900px]">
          A Swedish writer known for her imaginative storytelling,
          moral themes, and use of folklore and legend.
          She became the first woman to win the Nobel Prize in
          Literature in 1909, paving the way for generations of
          women writers around the world.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-x-24 gap-y-12 mt-16 max-w-[900px]">

          <div className="border-l-[3px] border-[#C9A14A] pl-6">
            <p className="uppercase tracking-[0.25em] text-[#7A7A7A] text-lg">
              Born
            </p>
            <p className="mt-2 text-[#153D7A] text-5xl font-serif">
              1858
            </p>
          </div>

          <div className="border-l-[3px] border-[#C9A14A] pl-6">
            <p className="uppercase tracking-[0.25em] text-[#7A7A7A] text-lg">
              Died
            </p>
            <p className="mt-2 text-[#153D7A] text-5xl font-serif">
              1940
            </p>
          </div>

          <div className="border-l-[3px] border-[#C9A14A] pl-6">
            <p className="uppercase tracking-[0.25em] text-[#7A7A7A] text-lg">
              Nationality
            </p>
            <p className="mt-2 text-[#153D7A] text-5xl font-serif">
              Swedish
            </p>
          </div>

          <div className="border-l-[3px] border-[#C9A14A] pl-6">
            <p className="uppercase tracking-[0.25em] text-[#7A7A7A] text-lg">
              Nobel Prize
            </p>
            <p className="mt-2 text-[#153D7A] text-5xl font-serif">
              1909
            </p>
          </div>
        </div>

        {/* Literary Style */}
        <div className="mt-16">
          <p className="uppercase tracking-[0.25em] text-[#7A7A7A] text-lg">
            Literary Style
          </p>

          <p className="mt-5 text-[30px] leading-relaxed text-[#0F6A58] font-medium">
            Imaginative • Moral • Folkloric • Emotional • Symbolic
          </p>
        </div>
      </div>
    </div>
  );
}