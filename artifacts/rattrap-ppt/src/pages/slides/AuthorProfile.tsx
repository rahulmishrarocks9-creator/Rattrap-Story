{
  /* RIGHT PANEL */
}
<div className="relative flex-1 px-[80px] py-[60px] flex flex-col h-full">
  {/* TOP LABEL */}
  <div>
    <p
      className="
        uppercase
        tracking-[0.65em]
        text-[#D4B06A]
        text-[12px]
        font-medium
      "
    >
      NOBEL PRIZE ARCHIVE
    </p>

    <div className="mt-4 w-[180px] h-px bg-[#D4B06A]/30" />
  </div>

  {/* TITLE */}
  <div className="mt-[40px]">
    <h1
      className="
        text-[#F5F1E8]
        text-[118px]
        leading-[0.85]
        tracking-[-0.05em]
      "
      style={{
        fontFamily: "Playfair Display, serif",
        fontWeight: 900,
      }}
    >
      Selma
    </h1>

    <h1
      className="
        text-[#F5F1E8]
        text-[118px]
        leading-[0.85]
        tracking-[-0.05em]
      "
      style={{
        fontFamily: "Playfair Display, serif",
        fontWeight: 900,
      }}
    >
      Lagerlöf
    </h1>
  </div>

  {/* DESCRIPTION */}
  <div className="mt-[28px] max-w-[900px]">
    <p
      className="
        text-[#D9D1C5]
        text-[24px]
        leading-[1.7]
      "
    >
      A Swedish novelist whose works blended folklore, mythology, morality, and
      imagination into timeless literary masterpieces. Her storytelling reshaped
      Scandinavian literature and established a legacy that transcended national
      boundaries. In 1909, she became the first woman to receive the Nobel Prize
      in Literature.
    </p>
  </div>

  {/* RULE */}
  <div className="mt-[35px] w-[900px] h-px bg-[#D4B06A]/20" />

  {/* STATS */}
  <div className="mt-[40px] grid grid-cols-2 gap-y-[35px] max-w-[850px]">
    <div>
      <h2
        className="
          text-[#F5F1E8]
          text-[62px]
          leading-none
        "
        style={{
          fontFamily: "Playfair Display, serif",
        }}
      >
        1858
      </h2>

      <p className="mt-2 uppercase tracking-[0.35em] text-[#D4B06A] text-[11px]">
        BORN
      </p>
    </div>

    <div>
      <h2
        className="
          text-[#F5F1E8]
          text-[62px]
          leading-none
        "
        style={{
          fontFamily: "Playfair Display, serif",
        }}
      >
        1940
      </h2>

      <p className="mt-2 uppercase tracking-[0.35em] text-[#D4B06A] text-[11px]">
        DIED
      </p>
    </div>

    <div>
      <h2
        className="
          text-[#F5F1E8]
          text-[62px]
          leading-none
        "
        style={{
          fontFamily: "Playfair Display, serif",
        }}
      >
        Swedish
      </h2>

      <p className="mt-2 uppercase tracking-[0.35em] text-[#D4B06A] text-[11px]">
        NATIONALITY
      </p>
    </div>

    <div>
      <h2
        className="
          text-[#F5F1E8]
          text-[62px]
          leading-none
        "
        style={{
          fontFamily: "Playfair Display, serif",
        }}
      >
        1909
      </h2>

      <p className="mt-2 uppercase tracking-[0.35em] text-[#D4B06A] text-[11px]">
        NOBEL PRIZE
      </p>
    </div>
  </div>

  {/* LEGACY */}
  <div className="mt-[35px]">
    <p className="uppercase tracking-[0.5em] text-[#D4B06A] text-[11px]">
      LITERARY LEGACY
    </p>

    <div className="flex flex-wrap gap-3 mt-5">
      {[
        "Folklore",
        "Moral Allegory",
        "Nordic Mythology",
        "Symbolism",
        "Emotional Storytelling",
      ].map((item) => (
        <span
          key={item}
          className="
            px-5
            py-2
            border
            border-[#D4B06A]/25
            rounded-full
            text-[#F5F1E8]
            text-[14px]
          "
        >
          {item}
        </span>
      ))}
    </div>
  </div>

  {/* QUOTE */}
  <div className="mt-[35px] max-w-[780px]">
    <p
      className="
        text-[#D4B06A]
        text-[40px]
        italic
        leading-tight
      "
      style={{
        fontFamily: "Playfair Display, serif",
      }}
    >
      “Literature preserves the soul of a nation.”
    </p>
  </div>

  {/* SIGNATURE */}
  <svg
    viewBox="0 0 900 240"
    className="
      absolute
      bottom-[35px]
      right-[60px]
      w-[250px]
      opacity-[0.12]
    "
  >
    <path
      d="
      M55 160
      C90 80 140 80 160 150
      C170 180 200 180 230 130
      C280 50 330 60 360 130
      C380 170 430 180 470 120
      C520 50 570 60 610 130
      C640 180 710 180 770 120
      C800 90 830 100 860 150
      "
      fill="none"
      stroke="#D4B06A"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>;
