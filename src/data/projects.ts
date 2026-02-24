export type Project = {
  slug: string;
  org: string;
  headline: string;
  summary: string;
  bullets: string[];
  ctaLabel: string;
  microSignals: string[];
  image: string;

  caseHeroLine?: string;
  role: string;
  scope: string;
  tenure: string;
  environment: string;
  technologies: string;
  team?: string;

  challenge: string;
  contributions: string[];
  impact: string[];
  impactNote?: string;
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

    caseHeroLine:
      "Designing within compliance constraints to improve quote progression and structural clarity.",
    role: "Senior Product Designer",
    scope: "Property and Auto quoting flows",
    tenure: "4 months",
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
      "Led UX for enterprise XR training in healthcare and public safety, translating complex simulation workflows into usable systems.",
    bullets: [
      "Designed interaction models for high-stakes training scenarios",
      "Ran participatory workshops and research to guide strategy",
      "Collaborated with Unity engineers to ship iterative improvements",
    ],
    ctaLabel: "View Case Study",
    microSignals: ["15,000+ enterprise users", "Healthcare and public safety deployment"],
    image: "/lumeto-2026.png",

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
      "Selected as an AR Creator Resident at Snap, rapidly prototyping interactive experiences combining narrative, behavior design, and spatial interaction.",
    bullets: [
      "Created proof-of-concept AR experiences in fast iteration cycles",
      "Explored interaction storytelling and engagement through spatial design",
      "Continued as an Official Lens Creator post-residency",
    ],
    ctaLabel: "View Case Study",
    microSignals: ["AR Creator Resident at Snap", "Rapid proof-of-concept delivery"],
    image: "/snap-2026.png",

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
];

export const writingPosts: WritingPost[] = [
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
