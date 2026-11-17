# Bali Prices in Pesos

A single-page price reference for Bali, quoted in Indonesian rupiah with Philippine pesos alongside.

`index.html` is self-contained — no build step, no dependencies beyond two Google Fonts. Open it directly or serve the folder.

## What it does

- **One rate control.** Every peso figure on the page is derived from the rate box at the top. Change it and the whole sheet re-prices, with a brief highlight so the change is visible.
- **Trip calculator.** Headcount, days, eating style, transport and ticked activities produce a per-person and group total, with an optional peso budget and a usage bar.
- **Prep checklist.** Ticks persist in `localStorage`. Clearing it offers an undo rather than a confirmation prompt.

## Data

Prices were gathered in November 2026 and are hard-coded as `data-idr` attributes on each figure, so there is a single source of truth per price. Entrance fees, boat fares and water-sports rates change without notice — every source is linked at the bottom of the page.

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| Grape | `#540D6E` | Brand, headings, table headers |
| Coral | `#EE4266` | Peso figures, warnings, over budget |
| Sun | `#FFD23F` | Section markers, rate badge, re-price flash |
| Lagoon | `#3BCEAC` | Focus rings, selection, interactive accent |
| Palm | `#0EAD69` | Free entries, savings, progress |

Light and dark palettes are both defined; brand colours get darkened variants for body text so contrast holds on light surfaces.
