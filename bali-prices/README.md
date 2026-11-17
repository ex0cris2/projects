# Bali Trip Kit

A single-page trip planner for Bali, based in Nusa Dua, priced in rupiah with Philippine pesos alongside.

`index.html` is self-contained — no build step, no dependencies beyond two Google Fonts. Open it directly or serve the folder.

## Tabs

All seven are in-page: one URL, no navigation, no hash routing.

| Tab | What it does |
| --- | --- |
| **Map** | Drawn map of south Bali with drive times from the hotel to each area |
| **Day planner** | Stack stops, pick a start time and a traffic level, get the real finish time |
| **Prices** | Entrance fees, water sports, food, transport and the levy, in collapsible sections |
| **Places** | Souvenirs, tattoo studios, cafés and rainy-day indoor options |
| **Wallet** | Trip cost estimator, plus a pocket-money tracker for spending on the ground |
| **Packing** | Wet-season essentials list and a pre-flight admin checklist |
| **Docs** | Screenshots of tickets and IDs, stored in IndexedDB on the viewer's own device |

## How it works

- **One rate control.** Every peso figure is derived from the rate box; changing it re-prices the page and flashes each updated figure. Prices live in `data-idr` attributes so each has a single source of truth.
- **Travel times** are per-place estimates from Nusa Dua, multiplied by a traffic factor. The first leg always uses the real drive time from the hotel; later hops inside the same area assume 20 minutes (30 in the Ubud area).
- **State** persists in `localStorage` (itinerary, spending log, checklists) except documents, which use IndexedDB.

## Privacy

The documents tab never uploads anything. Images stay in the viewer's own browser, are not part of the published page, and are not visible to anyone the link is shared with. Clearing browser data deletes them.

## Palette

| Token | Hex | Role |
| --- | --- | --- |
| Grape | `#540D6E` | Brand, headings, selected state |
| Coral | `#EE4266` | Peso figures, warnings, over budget |
| Sun | `#FFD23F` | Rate badge, re-price flash, accents on inverted rows |
| Lagoon | `#3BCEAC` | Focus rings, hover, sea |
| Palm | `#0EAD69` | Free entries, completed items, remaining budget |

Light and dark palettes are both defined; brand colours get darkened variants for body text so contrast holds on light surfaces.
