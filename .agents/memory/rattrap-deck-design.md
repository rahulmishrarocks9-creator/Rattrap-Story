---
name: Rattrap deck visual rhythm
description: How the "midnight-jazz" jewel slide deck balances dark and light slides; what "premium" means to this user
---

# Rattrap deck — "jewel cabinet" design rhythm

The user repeatedly rejects decks that read as "light" or "common." For this deck,
premium means **rich, saturated jewel tones must be visible**, not just light cards on
a light powder-sapphire background.

**Rule:** keep a deliberate alternation — deep full-bleed gem-gradient slides
punctuating lighter content slides. Do not let many light slides run consecutively.

**Why:** after the background was lightened to powder-sapphire, too many slides
became uniformly light/white-card and the user complained they looked "common."

**How to apply:**
- Deep jewel slides use `bg-gradient-to-br` across the theme tokens (e.g. navy→sapphire→plum,
  navy→sapphire→navy, emerald→teal→sapphire) with `text-ivory`, `goldbright` eyebrows/accents,
  and translucent `bg-white/6`–`/8` cards with `border-goldbright/20`–`/25`.
- On dark slides, do NOT use `text-emerald`/`text-sapphire` for body (too dark on dark) —
  use `ivory/85`, `goldbright`, or `jade` for highlights.
- Light slides should still carry color: cards get cycling jewel `border-l-[4px]` accent bars
  (sapphire/teal/emerald/plum/copper/indigo) rather than plain underline rows.
- Constraints that always apply: static inline JSX (no map — better for the visual editor),
  vw/vh units, ≥1.5vw text floor, root `relative w-screen h-screen overflow-hidden`,
  no emoji (glyphs ✓ ◆ ∷ → OK), avoid backdrop-blur (breaks 1920x1080 PNG export;
  translucent `bg-white/X` over a gradient rasterizes fine).
- After editing slides: `pnpm --filter @workspace/rattrap-ppt run validate-slides`, then
  screenshot `/slideN` (1-indexed by manifest position) — verify no overflow.
