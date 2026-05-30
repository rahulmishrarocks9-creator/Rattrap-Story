import React from "react";

export default function AuthorProfilePremium() {
  return (
    <div
      className="relative w-full h-full overflow-hidden bg-[#0A0A0A] flex"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {/* OUTER MUSEUM FRAME */}
      <div className="absolute inset-[18px] border border-[#D4B06A]/15 pointer-events-none z-50" />
      <div className="absolute inset-[34px] border border-[#D4B06A]/8 pointer-events-none z-50" />

      {/* FILM GRAIN */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      {/* WATERMARK */}
      <div
        className="absolute right-[2%] top-[-5%] leading-none opacity-[0.025] select-none text-[#D4B06A] font-black z-0 pointer-events-none"
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "clamp(80px, 18vw, 430px)",
        }}
      >
        1909
      </div>

      {/* NOBEL MEDAL */}
      <svg
        viewBox="0 0 200 200"
        className="absolute top-[4%] right-[3%] opacity-[0.08] z-20"
        style={{ width: "clamp(36px, 5vw, 90px)", height: "clamp(36px, 5vw, 90px)" }}
      >
        <circle cx="100" cy="100" r="75" fill="none" stroke="#D4B06A" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="#D4B06A" strokeWidth="1" />
        <circle cx="100" cy="100" r="18" fill="#D4B06A" opacity="0.35" />
      </svg>

      {/* LEFT PANEL */}
      <div className="relative w-[37%] h-full overflow-hidden flex-shrink-0">
        <img
          src="https://plain-apac-prod-public.komododecks.com/202605/30/X8ruKDp9ggDEZHyRcmhg/image.png"
          alt="Selma Lagerlöf"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.35] brightness-[0.92] sepia-[0.18]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/15 to-transparent" />

        {/* GOLD VERTICAL LINE + LABEL */}
        <div
          className="absolute flex items-start gap-3 z-10"
          style={{
            left: "clamp(16px, 6%, 70px)",
            top: "clamp(16px, 7%, 90px)",
          }}
        >
          <div
            className="w-px bg-[#D4B06A]/30 flex-shrink-0"
            style={{ height: "clamp(60px, 12%, 180px)", marginTop: "2px" }}
          />
          <p
            className="text-[#D4B06A] uppercase tracking-[0.45em] pt-1"
            style={{ fontSize: "clamp(8px, 0.9vw, 12px)" }}
          >
            AUTHOR PROFILE
          </p>
        </div>

        {/* CAPTION */}
        <div
          className="absolute z-10"
          style={{
            left: "clamp(16px, 6%, 70px)",
            bottom: "clamp(16px, 5%, 90px)",
          }}
        >
          <div
            className="h-px bg-[#D4B06A]"
            style={{ width: "clamp(50px, 8vw, 100px)" }}
          />
          <h3
            className="text-[#F5F1E8] leading-none mt-4"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 700,
              fontSize: "clamp(18px, 3.5vw, 48px)",
              marginTop: "clamp(8px, 1.5%, 24px)",
            }}
          >
            Selma Lagerlöf
          </h3>
          <p
            className="uppercase text-[#D4B06A] leading-[2.3]"
            style={{
              letterSpacing: "0.45em",
              fontSize: "clamp(7px, 0.85vw, 13px)",
              marginTop: "clamp(6px, 1%, 16px)",
            }}
          >
            First Woman To Win The
            <br />
            Nobel Prize In Literature
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        className="relative flex-1 flex flex-col overflow-hidden"
        style={{ padding: "clamp(20px, 5%, 80px) clamp(20px, 5%, 90px)" }}
      >
        {/* TOP LABEL */}
        <div>
          <p
            className="uppercase text-[#D4B06A] font-medium tracking-[0.65em]"
            style={{ fontSize: "clamp(8px, 0.85vw, 12px)" }}
          >
            NOBEL PRIZE ARCHIVE
          </p>
          <div
            className="mt-4 h-px bg-[#D4B06A]/30"
            style={{ width: "clamp(80px, 12%, 180px)" }}
          />
        </div>

        {/* TITLE */}
        <div style={{ marginTop: "clamp(12px, 3%, 60px)" }}>
          <h1
            className="text-[#F5F1E8] leading-[0.86] tracking-[-0.05em]"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 10vw, 145px)",
            }}
          >
            Selma
          </h1>
          <h1
            className="text-[#F5F1E8] leading-[0.86] tracking-[-0.05em]"
            style={{
              fontFamily: "Playfair Display, serif",
              fontWeight: 900,
              fontSize: "clamp(36px, 10vw, 145px)",
            }}
          >
            Lagerlöf
          </h1>
        </div>

        {/* DESCRIPTION */}
        <div style={{ marginTop: "clamp(10px, 2%, 40px)" }}>
          <p
            className="text-[#D9D1C5] leading-[1.95]"
            style={{ fontSize: "clamp(11px, 1.6vw, 29px)" }}
          >
            A Swedish novelist whose works blended folklore, mythology, morality,
            and imagination into timeless literary masterpieces. Her storytelling
            reshaped Scandinavian literature and established a legacy that
            transcended national boundaries. In 1909, she became the first woman
            to receive the Nobel Prize in Literature.
          </p>
        </div>

        {/* RULE */}
        <div
          className="h-px bg-[#D4B06A]/20"
          style={{ marginTop: "clamp(10px, 2.5%, 55px)" }}
        />

        {/* STATS */}
        <div
          className="grid grid-cols-2"
          style={{
            marginTop: "clamp(10px, 2.5%, 65px)",
            gap: "clamp(8px, 2%, 60px) clamp(10px, 2%, 40px)",
          }}
        >
          {[
            { value: "1858", label: "BORN" },
            { value: "1940", label: "DIED" },
            { value: "Swedish", label: "NATIONALITY" },
            { value: "1909", label: "NOBEL PRIZE" },
          ].map(({ value, label }) => (
            <div key={label}>
              <h2
                className="text-[#F5F1E8] leading-none"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "clamp(20px, 5vw, 82px)",
                }}
              >
                {value}
              </h2>
              <p
                className="uppercase text-[#D4B06A] font-medium mt-2"
                style={{ letterSpacing: "0.4em", fontSize: "clamp(7px, 0.75vw, 12px)" }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* LITERARY LEGACY */}
        <div style={{ marginTop: "clamp(10px, 2.5%, 60px)" }}>
          <p
            className="uppercase text-[#D4B06A] font-medium"
            style={{ letterSpacing: "0.55em", fontSize: "clamp(7px, 0.75vw, 12px)" }}
          >
            LITERARY LEGACY
          </p>
          <div
            className="flex flex-wrap"
            style={{ gap: "clamp(4px, 0.8%, 16px)", marginTop: "clamp(6px, 1%, 32px)" }}
          >
            {["Folklore", "Moral Allegory", "Nordic Mythology", "Symbolism", "Emotional Storytelling"].map(
              (item) => (
                <span
                  key={item}
                  className="border border-[#D4B06A]/25 rounded-full text-[#F5F1E8]"
                  style={{
                    padding: "clamp(3px, 0.4%, 12px) clamp(8px, 1.2%, 24px)",
                    fontSize: "clamp(8px, 1vw, 15px)",
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        {/* QUOTE */}
        <div style={{ marginTop: "clamp(10px, 2.5%, 70px)" }}>
          <p
            className="text-[#D4B06A] italic leading-tight"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(12px, 2.5vw, 52px)",
            }}
          >
            "Literature preserves the soul of a nation."
          </p>
        </div>

        {/* SIGNATURE SVG */}
        <svg
          viewBox="0 0 900 240"
          className="absolute bottom-[4%] right-[4%] opacity-[0.13]"
          style={{ width: "clamp(80px, 18%, 340px)" }}
        >
          <path
            d="M55 160 C90 80 140 80 160 150 C170 180 200 180 230 130 C280 50 330 60 360 130 C380 170 430 180 470 120 C520 50 570 60 610 130 C640 180 710 180 770 120 C800 90 830 100 860 150"
            fill="none"
            stroke="#D4B06A"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
