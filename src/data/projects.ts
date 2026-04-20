export type Project = {
  slug: string;
  org: string;
  headline: string;
  summary: string;
  bullets: string[];
  ctaLabel: string;
  microSignals: string[];
  image: string;
  imageAlt: string;

  caseHeroLine?: string;
  role: string;
  scope: string;
  tenure: string;
  environment: string;
  technologies: string;
  team?: string;

  challengeHeading?: string;
  challenge: string;
  contributionsHeading?: string;
  contributionsImage?: string;
  contributionsImageAlt?: string;
  contributionsImageCaption?: string;
  contributions: string[];
  gallery?: Array<{
    src: string;
    alt: string;
    caption: string;
    orientation: "portrait" | "landscape";
  }>;
  followUpHeading?: string;
  followUp?: string[];
  impact: Array<
    | string
    | {
        text: string;
        href: string;
        highlightMetrics?: boolean;
      }
  >;
  impactMedia?: {
    src: string;
    alt: string;
  };
  impactNote?: string;
  nextHeading?: string;
  nextOpportunity: string;
};

export type WritingPost = {
  title: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    slug: "td",
    org: "TD",
    headline: "Scaling Digital Insurance Within Regulatory Constraints",
    summary:
      "Senior Product Designer contributing to measurable FY25 growth, including 146,000+ quotes initiated.",
    bullets: [
      "Structured complex eligibility logic using progressive disclosure",
      "Reduced input friction with reusable interaction patterns",
      "Shipped multiple production improvements across Property and Auto flows",
    ],
    ctaLabel: "View Case Study",
    microSignals: ["146,000+ quotes initiated (FY25 team outcome)", "2\u20133 production releases shipped"],
    image: "/td-2026.png",
    imageAlt:
      "TD small business insurance quoting interface showing a structured enterprise workflow for eligibility, accessibility, and progressive disclosure.",

    caseHeroLine:
      "Designing within compliance constraints to improve quote progression and structural clarity.",
    role: "Senior Product Designer",
    scope: "Property and Auto quoting flows",
    tenure: "Aug 2025 – Dec 2025",
    environment: "Compliance-heavy, analytics-driven",
    technologies: "Figma, analytics tooling, internal component systems",
    team: "Cross-functional collaboration with Product, Engineering, Compliance, and Content",

    challenge:
      "Small business insurance quoting required users to navigate conditional eligibility logic, disclosures, and multi-step data entry. The goal was to improve progression without removing necessary regulatory constraints.",
    contributions: [
      "Simplified conditional logic through progressive disclosure and clearer sequencing",
      "Introduced reusable interaction patterns (dynamic sliders, cascading dropdowns, predictive search)",
      "Partnered with analytics to identify high-friction steps and refine guidance and field flow",
      "Worked closely with Engineering, Compliance, and Content to ship improvements safely",
    ],
    impact: [
      "FY25 team outcome: 146,000+ quotes initiated",
      "FY25 team outcome: 16,000+ quotes completed",
      "FY25 team outcome: 2,600+ sales",
    ],
    impactNote:
      "Team-level FY25 outcomes shown for system scale. My contributions supported multiple production improvements during my tenure.",
    nextOpportunity:
      "Redesign the intake experience into a compact, card-based layout to reduce scroll fatigue, condense related fields, and strengthen contextual microcopy to sustain narrative momentum and reduce drop-off.",
  },

  {
    slug: "bmo",
    org: "BMO",
    headline: "Modernizing Wealth Infrastructure at Scale",
    summary:
      "Led UX modernization of a high-net-worth investment platform, increasing usage by 63% and achieving 71% satisfaction.",
    bullets: [
      "Modernized core platform workflows with a focus on clarity and trust",
      "Built reusable, WCAG-compliant UI components bridging design and code",
      "Advanced design system adoption to unblock delivery across teams",
    ],
    ctaLabel: "View Case Study",
    microSignals: ["+63% platform usage", "71% user satisfaction"],
    image: "/bmo-2026.png",
    imageAlt:
      "BMO wealth platform interface illustrating accessible design-system modernization for enterprise investment workflows.",

    caseHeroLine:
      "Modernizing a wealth platform by improving usability, accessibility, and system-level consistency.",
    role: "Product Designer and UI Developer",
    scope: "High-net-worth investment platform modernization",
    tenure: "Nov 2021 \u2013 Jun 2025",
    environment: "Enterprise finance, design system and component delivery",
    technologies: "Figma, HTML, CSS, Angular, Storybook",

    challenge:
      "Improve usability and confidence across critical investment workflows while modernizing UI patterns and raising accessibility quality, without slowing delivery in a complex enterprise environment.",
    contributions: [
      "Led UX modernization across core workflows, aligning design decisions with measurable outcomes",
      "Developed reusable, WCAG-compliant components to bridge Figma intent and production behavior",
      "Partnered with Engineering to ensure component architecture supported scalability and consistency",
      "Supported adoption of internal design system patterns to accelerate implementation",
    ],
    impact: ["+63% usage", "71% satisfaction", "Reusable accessible component library contributions"],
    impactNote:
      "Impact reflects platform-level outcomes associated with the modernization effort.",
    nextOpportunity:
      "Continue consolidating interaction patterns into a tighter component ecosystem and strengthen instrumentation so UX changes can be evaluated faster and with higher confidence.",
  },

  {
    slug: "lumeto",
    org: "Lumeto",
    headline: "Designing Immersive Training Systems for 15,000+ Users",
    summary:
      "Led UX for enterprise XR training in healthcare and public safety, translating complex simulation workflows into usable systems. Built from concept to scalable deployment within 12 months, supporting 15,000+ users across healthcare and public safety training environments.",
    bullets: [
      "Designed interaction models for high-stakes training scenarios",
      "Ran participatory workshops and research to guide strategy",
      "Collaborated with Unity engineers to ship iterative improvements",
    ],
    ctaLabel: "View Case Study",
    microSignals: ["15,000+ enterprise users", "Healthcare and public safety deployment"],
    image: "/lumeto-2026.png",
    imageAlt:
      "Lumeto XR training product scene showing immersive enterprise simulation design for healthcare and public safety learning systems.",

    caseHeroLine:
      "Turning complex simulation and learning goals into structured, usable XR training experiences.",
    role: "UX/UI Designer",
    scope: "Involve XR enterprise training product",
    tenure: "Jan 2021 \u2013 Nov 2021",
    environment: "Enterprise XR, research-led design, Unity collaboration",
    technologies: "Figma, Unity (collaborative), XR interaction design",

    challenge:
      "Design an immersive training experience that balances realism, usability, and learning outcomes for enterprise users in high-stakes domains, while aligning with technical constraints of XR delivery.",
    contributions: [
      "Led UX across key training flows and interaction patterns for simulated scenarios",
      "Conducted workshops and user research to validate workflows and reduce ambiguity",
      "Worked with Unity engineers to implement interaction logic and iterate based on feedback",
      "Created structured information flow to support comprehension and task success",
    ],
    impact: ["Deployed to 15,000+ users", "Adopted in healthcare and public safety contexts"],
    impactNote:
      "User scale reflects product deployment scale during and after the engagement.",
    nextOpportunity:
      "Refine onboarding and in-experience guidance to reduce time-to-competence for new users while preserving training realism and scenario fidelity.",
  },

  {
    slug: "snap",
    org: "Snap Inc.",
    headline: "Exploring Behavior Design Through Augmented Reality",
    summary:
      "Selected for Snapchat's AR Creator Residency, where I rapidly prototyped and launched an ML-driven AR experience within a constrained program timeline.",
    bullets: [
      "Created proof-of-concept AR experiences in fast iteration cycles",
      "Explored interaction storytelling and engagement through spatial design",
      "Continued as an Official Lens Creator post-residency",
    ],
    ctaLabel: "View Case Study",
    microSignals: ["AR Creator Resident at Snap", "Rapid proof-of-concept delivery"],
    image: "/snap-2026.png",
    imageAlt:
      "Snap augmented reality experience concept demonstrating AR interaction design, behavior design, and rapid prototyping.",

    caseHeroLine:
      "Rapid prototyping and interaction storytelling to test how AR can shape habits and engagement.",
    role: "AR Creator Resident / Product Designer",
    scope: "AR lens concepting, prototyping, and iteration",
    tenure: "Oct 2020 \u2013 Nov 2020",
    environment: "Creative tech, rapid experimentation, emerging platform constraints",
    technologies: "Lens Studio, AR prototyping tools, ML",

    challenge:
      "Design an engaging AR experience that communicates a clear behavioral idea through interaction and narrative, delivered quickly under platform constraints and short timelines.",
    contributions: [
      "Designed and prototyped an interactive lens concept focused on healthy habit cues",
      "Developed a proof of concept to secure buy-in and validate interaction clarity",
      "Iterated quickly to improve usability, pacing, and engagement signals",
      "Extended work post-residency as an Official Lens Creator",
    ],
    impact: ["Proof of concept delivered within residency timeline", "Demonstrated applied fluency in spatial interaction systems and platform-specific AR constraints"],
    impactNote:
      "This case emphasizes rapid prototyping, interaction storytelling, and platform-specific constraint handling.",
    nextOpportunity:
      "Apply the same experimentation rigor to product surfaces with deeper metrics by pairing interaction prototypes with stronger instrumentation and ongoing measurement.",
  },

  {
    slug: "madethisway",
    org: "CFC Media Lab",
    headline:
      "From Photography Project to an Interactive VR Documentary at Venice Film Festival",
    summary:
      "Co-wrote, co-directed, and co-produced an 18-minute interactive mixed-media VR experience exploring transgender identity and fluid masculinity, selected for Venice Virtual Reality at the 75th Venice Film Festival.",
    bullets: [
      "Originated the project from a personal photography series, pitched and secured co-production with CFC Media Lab after prototyping with DepthKit volumetric capture",
      "Designed spatial interaction and narrative architecture across photographic and VR layers, balancing emotional intimacy with technical constraints",
      "Conducted post-Venice usability testing with participants, iterated on navigation and experience design, and returned to production for the festival circuit",
    ],
    ctaLabel: "View Case Study",
    microSignals: [
      "Venice Film Festival 2018",
      "Canadian Screen Awards nominee, Best Immersive Experience",
      "Hot Docs, FNC, Busan",
    ],
    image: "/MADE THIS WAY- DEVYN.png",
    imageAlt:
      "Made This Way VR documentary still featuring Devyn for the CFC Media Lab immersive case study.",

    caseHeroLine:
      "From personal photography to an interactive VR documentary selected for Venice Virtual Reality.",
    role: "Co-Writer, Co-Director, Co-Producer, Interaction Designer",
    scope: "Interactive mixed-media VR documentary",
    tenure: "2018",
    environment: "Festival-circuit immersive storytelling",
    technologies: "DepthKit, volumetric capture, spatial interaction design",
    team: "Co-produced with CFC Media Lab",
    challengeHeading: "Origin",
    contributionsHeading: "From Prototype to Venice",
    contributionsImage: "/MADE THIS WAY- DEVYN.png",
    contributionsImageAlt:
      "Made This Way VR documentary still featuring Devyn.",
    contributionsImageCaption:
      'Devyn in "Made This Way: Redefining Masculinity"',

    challenge:
      "I spent ten years as a fashion photographer. By 2016 I was feeling stuck; technically proficient, creatively restless, and drawn to something more personal.\n\nAround that time, trans men were becoming more visible publicly, but in daily life they remained largely invisible. Passing was a survival mechanism. Being seen meant risk. I started attending support groups, spending time in people's homes, being invited into the private spaces where they felt most like themselves.\n\nIt changed me. The intimacy of those encounters, the specificity of how each person had built their own identity against enormous resistance, felt urgent to share. I wanted to build a bridge. Not explain trans experience to outsiders, but let them feel what I had felt standing in those rooms.\n\nMy co-director Elli Raynai was working in VR production at the time. We both understood immediately that VR was the only medium that could approximate the experience of being physically present with someone; the scale of another body, the sense of shared space, the feeling of being trusted with someone's story.",
    contributions: [
      "We started with a prototype. Using DepthKit volumetric capture, we developed an early proof of concept that combined my photographic series with spatial VR testimonials; letting viewers move physically around the subjects as they spoke.",
      "We pitched the prototype in Los Angeles, New York, and Toronto. CFC Media Lab came on board as co-producer, marking their first project to compete at Venice Film Festival.",
      "The final experience ran 18 minutes and placed viewers inside the personal spaces of two participants, Devyn Farries and Elijah Miley. The interaction design had to solve a specific problem: how do you let someone move freely through an intimate space without the navigation itself breaking the emotional connection? We designed spatial interaction around presence rather than control; minimal interface, body-scale volumetric captures, the participant's own artwork integrated into the environment around them.",
      "The experience was selected for Venice Virtual Reality at the 75th Venice Film Festival in 2018.",
    ],
    gallery: [
      {
        src: "/MadeThisWay-Poster.png",
        alt: "Made This Way poster.",
        caption: "Made This Way poster",
        orientation: "portrait",
      },
      {
        src: "/BrooklynBois.png",
        alt: "Brooklyn Bois still from Made This Way.",
        caption: "Brooklyn Bois",
        orientation: "landscape",
      },
      {
        src: "/Devyn Art.png",
        alt: "Devyn's Art in VR from Made This Way.",
        caption: "Devyn's Art in VR",
        orientation: "landscape",
      },
      {
        src: "/MadeThisWay-BTS.png",
        alt: "Behind the scenes from Made This Way.",
        caption: "Volumetric capture set",
        orientation: "landscape",
      },
    ],
    followUpHeading: "Usability Testing and Iteration",
    followUp: [
      "After Venice we ran structured usability testing with four participants. I recruited the participants, designed the testing plan, and facilitated the sessions.",
      "What we found was that the entry sequence and navigation created friction at the wrong moments — points where the emotional immersion was highest but the interaction was least clear. We redesigned the menu structure and refined the navigation flow based on what we observed.",
      "We returned to production, shot additional footage, and submitted the revised experience to the broader festival circuit.",
    ],
    impact: [
      {
        text: "Selected for Venice Virtual Reality, 75th Venice Film Festival, 2018",
        href: "https://www.labiennale.org/en/cinema/2018/lineup/venice-virtual-reality/made-way-redefining-masculinity",
        highlightMetrics: false,
      },
      {
        text: "Canadian Screen Awards nominee, Best Immersive Experience, 2019",
        href: "https://www.academy.ca/2019/made-this-way-redefining-masculinity/",
        highlightMetrics: false,
      },
      "Screened at Festival du Nouveau Cinema, HotDocs, Busan International Film Festival, Regent's Park Open Air Theatre, and Inside Out Toronto",
    ],
    impactMedia: {
      src: "/mtw-gif2.gif",
      alt: "Animated scene from Made This Way.",
    },
    nextHeading: "Reflection",
    nextOpportunity:
      "This project taught me that the most important design decisions aren't always structural. Sometimes they are about what you leave out; how much interface, how much guidance, how much mediation stands between a viewer and an experience.\n\nWorking at the intersection of documentary, photography, and spatial interaction design also clarified something about how I approach all design work: I'm most interested in the moments where technology disappears and something human takes over.",
  },
];

export const writingPosts: WritingPost[] = [
  {
    title: "The Box Was Never About AI",
    description:
      "The gatekeeping in the industry predates algorithm. It always did.",
    href: "https://open.substack.com/pub/iremharnak/p/the-box-was-never-about-ai?r=7pknbb&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
  },
  {
    title: "I Stopped Optimizing for Output",
    description:
      "A reflection on stepping away from output as the default metric and choosing a more sustainable pace.",
    href: "https://open.substack.com/pub/iremharnak/p/i-stopped-optimizing-for-output-i?r=7pknbb&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
  },
  {
    title: "Accessibility Is a System Constraint, Not a Final Step",
    description:
      "Why accessibility breaks when it\u2019s treated as a final layer instead of a structural decision.",
    href: "https://iremharnak.substack.com/p/accessibility-is-a-system-constraint",
  },
  {
    title: "The 3 Conversion Gaps I Keep Finding in E-commerce Teams",
    description:
      "Patterns that quietly reduce trust and progression, and what strong teams fix first.",
    href: "https://iremharnak.substack.com/p/the-3-conversion-gaps-i-keep-finding",
  },
  {
    title: "Creative Careers Aren\u2019t Linear. Systems Thinking Is.",
    description:
      "What stayed consistent across photography, immersive design, and product systems work.",
    href: "https://iremharnak.substack.com/p/creative-careers-arent-linear-systems",
  },
];
