# Asset structure

All campaign imagery and founder photography on this site is currently an art-directed
placeholder, clearly labelled "Asset pending". Nothing has been substituted with stock photography.

Drop supplied files into these folders, then reference the path in the matching content field.

```
public/
  brand/            Extracted logo marks used by the site (mark-yellow, mark-black, lockup-yellow)
  clients/          Client logo files used by the home page "Trusted by" wall
  assets/
    founder/        Gabriel Christian portrait and supporting agency photography
    clients/        Additional client logos, supplied as SVG or transparent PNG (never redraw or distort)
    work/
      ugc/          Insidious, Sariwangi, McDonald's campaign stills and video thumbnails
      kol/          KOI Teppanyaki, KOI Home Service, GOGI, ADVAN, DERMAFIRM, MILAI
      threads/      SIRKA, Waroeng Sambal Bakar content and conversation screenshots
      performance/  Atalon, INSA Yacht Festival creative and dashboard exports
      activation/   INSA Yacht Festival event photography
```

## Client logos

The home page logo wall is driven by `src/data/clients.ts`. Each entry takes a `name`, a `logo`
path under `public/clients/`, a `sector`, and an optional `square: true` for compact or round marks
that need more vertical room. The supplied PNGs were cropped to their artwork and had flat
light/white backgrounds removed so they sit evenly on the white cells; replace a file with a
cleaner original at any time without touching the code. Confirm usage rights for each mark before
publishing.

## Campaign result cards

The three cards in the home hero are driven by `src/data/campaignProof.ts`: client mark, discipline,
reported figures and a short note. Logo files live in `public/clients/campaign/`. KOI's supplied mark
has a white background, so it renders on a white plate; the Insidious and INSA (iyf) marks were
knocked out of their dark backgrounds. Figures are transcribed from the supplied campaign reporting
artwork and are presented per campaign — never summed into an agency total.

## Replacing a placeholder

Each gallery item in `src/data/projects.ts` accepts an `image` path:

```ts
{ caption: 'Creator video still — campaign set 01', image: '/assets/work/ugc/insidious-01.jpg', play: true }
```

- Add `image` and the frame renders the real asset instead of the placeholder.
- Add `play: true` for video thumbnails; wire an actual video player when the file is supplied.
- Keep captions factual. Do not add years or metrics that are not in the source material.

## Founder photography

Add the portrait to `public/assets/founder/` and replace the placeholder block in
`src/pages/About.tsx` (section `id="founder"`) with an `<img>` using that path. Do not generate
a portrait or use unrelated stock photography.

## Metrics and verification

Metrics live in `results` on each project in `src/data/projects.ts`. Uncertain fields are listed
under `verification` and render as visible, editable notes rather than invented facts. Update
those strings once the campaign report is confirmed.

## Contact form endpoint

The contact form POSTs JSON to `VITE_CONTACT_ENDPOINT`. Add it to an untracked `.env.local`:

```
VITE_CONTACT_ENDPOINT=https://your-form-endpoint.example/submit
```

Until it is set, the form validates input and then states plainly that nothing has been sent.
