// Studio page content. Images are built from assets-raw/studio/ by scripts/optimize-studio.mjs.
// Colors marked `sampled` were read from the screens with sharp (most frequent pixel in a flat region).

export const PARTNER_NAME = "Elli Raynai"; // Irem fills this in.

export type StudioImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type Swatch = {
  label: string;
  hex: string;
  sampled?: string;
};

export type TemplateFont = {
  role: "Display" | "Body" | "Buttons";
  name: string;
  licensed: boolean;
  specimen?: StudioImage;
  live?: "ibm-plex-mono" | "spectral";
};

export type StudioTemplate = {
  slug: string;
  name: string;
  headline: string;
  fonts: TemplateFont[];
  palette: Swatch[];
  logic: string;
  hero: StudioImage;
  screens: StudioImage[];
};

export type SlideGroup = {
  layout: "full" | "pair" | "half";
  slides: StudioImage[];
  caption?: string;
};

const slide = (file: string, alt: string): StudioImage => ({
  src: `/studio/multitouch/${file}`,
  width: 1920,
  height: 1080,
  alt,
});

const screen = (path: string, alt: string): StudioImage => ({
  src: `/studio/${path}`,
  width: 2400,
  height: 1800,
  alt,
});

export const multitouch = {
  name: "Multitouch Studio",
  palette: [
    { label: "Sapphire", hex: "#000080" },
    { label: "Coral", hex: "#FF7F50" },
    { label: "Slate", hex: "#708090" },
    { label: "Mint", hex: "#3CB371" },
    { label: "Logo dark grey", hex: "#3F3F3F", sampled: "Logo-02.png, reverse lockup" },
  ] satisfies Swatch[],
  fonts: { heading: "Montserrat", body: "Lato" },
  slides: [
    {
      layout: "full",
      slides: [
        slide(
          "multitouch-mission.png",
          "Multitouch brand deck slide, Mission Statement: We design and develop dynamic websites for small businesses, using user-friendly platforms to empower them with the full potential to thrive and excel."
        ),
      ],
    },
    {
      layout: "pair",
      slides: [
        slide(
          "multitouch-logo-bw.png",
          "Multitouch logo in black and white: the condensed MULTITOUCH wordmark as default and reverse lockups, a square M icon, and a horizontal version."
        ),
        slide(
          "multitouch-logo-colour.png",
          "The condensed MULTITOUCH wordmark on coral, slate, sapphire and mint backgrounds, in dark grey or white type."
        ),
      ],
      caption:
        "A condensed wordmark, an M icon, and reverse and horizontal lockups, with clear space based on the logo height.",
    },
    {
      layout: "full",
      slides: [
        slide(
          "multitouch-color.png",
          "Multitouch palette slide with four tall columns: Deep Sapphire Blue #000080, Vibrant Coral Orange #FF7F50, Slate Gray #708090 and Mint Green #3CB371."
        ),
      ],
      caption: "Sapphire for trust, coral for energy, slate and mint to keep it calm.",
    },
    {
      layout: "pair",
      slides: [
        slide(
          "multitouch-type-montserrat.png",
          "Typography slide for Montserrat, the heading face: a large Aa, a Design and Development sample line, and bold and regular character sets."
        ),
        slide(
          "multitouch-type-lato.png",
          "Typography slide for Lato, the body face: a large Aa, a Design and Development sample line, and regular and light character sets."
        ),
      ],
      caption: "Montserrat for headings, Lato for body.",
    },
    {
      layout: "full",
      slides: [
        slide(
          "multitouch-voice-tone.png",
          "Voice and tone slide titled How we communicate, with three sliders placing the brand toward friendly over informative, near the middle between casual and formal, and toward funny over serious."
        ),
      ],
      caption: "Friendly, a little funny, and balanced between casual and formal.",
    },
    {
      layout: "full",
      slides: [
        slide(
          "multitouch-values.png",
          "Brand values slide listing Creativity, Quality, Excellence and Consistency with a short line each, beside four black and white image tiles, each overlaid with its value in white caps."
        ),
      ],
      caption:
        "Four values that came from our backgrounds as creatives who moved into design and development.",
    },
    {
      layout: "half",
      slides: [
        slide(
          "multitouch-logo-clearspace.png",
          "Logo clear space diagram: the MULTITOUCH wordmark at height A, with whitespace of A/3 above and below."
        ),
      ],
    },
  ] satisfies SlideGroup[],
};

export const templates: StudioTemplate[] = [
  {
    slug: "alba",
    name: "Alba",
    headline: "A calm, personal system for wellness coaches and practitioners.",
    fonts: [
      {
        role: "Display",
        name: "New Spirit Condensed",
        licensed: true,
        specimen: {
          src: "/studio/alba/alba-specimen-display.png",
          width: 316,
          height: 76,
          alt: "New Spirit Condensed specimen from the Alba marquee: Why Work With Me, in butter yellow on black.",
        },
      },
      { role: "Body", name: "IBM Plex Mono", licensed: false, live: "ibm-plex-mono" },
      { role: "Buttons", name: "Clarkson", licensed: true },
    ],
    palette: [
      { label: "Background", hex: "#E9E9E9" },
      { label: "Olive, text and band", hex: "#655A3F" },
      { label: "Butter accent", hex: "#FBE19F" },
      { label: "Cream section", hex: "#FEF5D9", sampled: "alba-modern-trio.png, freebie section" },
      { label: "Ink", hex: "#000000" },
    ],
    logic:
      "Condensed serif over a monospace body, color-blocked in olive, butter yellow and cream, with a scrolling marquee band as the divider.",
    hero: screen(
      "alba/alba-hero-collage.jpg",
      "Angled collage of Alba template pages on tablets: condensed serif headlines, small monospace body text, rounded black and butter yellow buttons, and a butter yellow marquee band."
    ),
    screens: [
      screen(
        "alba/alba-tablet-trio.jpg",
        "Three Alba pages on tablets: a home page with an olive feature band, a programs page with a butter yellow marquee and a cream freebie section, and an about page with a black marquee band."
      ),
      screen(
        "alba/alba-desktop-mobile.jpg",
        "The Alba about page on a phone and as a full-length desktop page: a condensed serif header, a black marquee band, a three-column reasons grid, split image and text rows, and an FAQ list with hairline dividers."
      ),
    ],
  },
  {
    slug: "mackenzie",
    name: "Mackenzie",
    headline: "A bold, photo-first system for photographers and visual creatives.",
    fonts: [
      {
        role: "Display",
        name: "Pragmatica Extended",
        licensed: true,
        specimen: {
          src: "/studio/mackenzie/mackenzie-specimen-display.png",
          width: 580,
          height: 90,
          alt: "Pragmatica Extended specimen from Mackenzie: SELECTED WORKS in wide, tightly tracked black caps.",
        },
      },
      {
        role: "Body",
        name: "Helvetica Neue",
        licensed: true,
        specimen: {
          src: "/studio/mackenzie/mackenzie-specimen-body.png",
          width: 680,
          height: 120,
          alt: "Helvetica Neue specimen from Mackenzie: three lines of small black body copy on grey.",
        },
      },
      { role: "Buttons", name: "Clarkson", licensed: true },
    ],
    palette: [
      { label: "Background", hex: "#FAFAFA" },
      { label: "Section grey", hex: "#DCDCDC", sampled: "mackenzie-test.png, hero section" },
      { label: "About panel", hex: "#1C1C1C", sampled: "mackenzie-hero.png, About section" },
      { label: "Text", hex: "#000000" },
    ],
    logic:
      "Wide, tightly tracked grotesque caps on a flat grey and white grid, with hairline rules and outlined buttons. The photography carries the color.",
    hero: screen(
      "mackenzie/mackenzie-hero-collage.jpg",
      "Angled collage of Mackenzie template pages on tablets: wide, tightly tracked grotesque caps, hairline rules, outlined buttons and rounded form fields on grey and near-black sections."
    ),
    screens: [
      screen(
        "mackenzie/mackenzie-tablet-trio.jpg",
        "Three Mackenzie pages on tablets: a two-by-two portrait gallery above a black footer, a contact page with a full-bleed header and an outlined form, and an about page with a selected works grid."
      ),
      {
        src: "/studio/mackenzie/mackenzie-desktop-mobile.png",
        width: 2400,
        height: 3376,
        alt: "The Mackenzie home page at full desktop length beside the contact page on a phone: wide caps headlines, a grey split hero, a three-column selected works grid with small labels, and a grey footer.",
      },
    ],
  },
  {
    slug: "angela",
    name: "Angela",
    headline: "A soft, editorial system for wedding and portrait photographers.",
    fonts: [
      {
        role: "Display",
        name: "Fino",
        licensed: true,
        specimen: {
          src: "/studio/angela/angela-specimen-display.png",
          width: 400,
          height: 180,
          alt: "Fino specimen from Angela: HAVE QUESTIONS? in tall white uppercase serif on terracotta.",
        },
      },
      { role: "Body", name: "Spectral", licensed: false, live: "spectral" },
      { role: "Buttons", name: "Clarkson", licensed: true },
    ],
    palette: [
      { label: "Background", hex: "#FFFFFF" },
      { label: "Terracotta band", hex: "#D4967D", sampled: "angela-multi-size.png, header band" },
      { label: "Warm grey block", hex: "#DCD9D0", sampled: "angela-modern-trio.png, services section" },
      { label: "Text", hex: "#3F4A49" },
    ],
    logic:
      "Tall uppercase serif over a Spectral text face, with a terracotta header band and soft grey blocks. Quiet and editorial.",
    hero: screen(
      "angela/angela-hero-collage.jpg",
      "Angled collage of Angela template pages on tablets: tall uppercase serif headings, terracotta header bands and buttons, and warm grey content blocks."
    ),
    screens: [
      screen(
        "angela/angela-tablet-trio.jpg",
        "Three Angela pages on tablets: services in three priced columns, an about page with a serif testimonial on warm grey, and an engagements gallery in a staggered grid."
      ),
      screen(
        "angela/angela-devices.jpg",
        "Angela on a laptop, tablet and phone: a terracotta contact header with a tall serif headline, a services list with hairline dividers, and a centered serif testimonial."
      ),
    ],
  },
];
