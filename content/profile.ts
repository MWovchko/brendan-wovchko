/**
 * All of the site's content lives in this one file.
 * Everything here comes from public sources (podcasts, publisher pages, company sites).
 * The full source list is in RESEARCH.md at the repo root.
 */

export type AchievementCategory = "Leadership" | "Business" | "Teaching" | "Recognition";

export interface Achievement {
  title: string;
  org?: string;
  date: string;
  category: AchievementCategory;
  description: string;
  metric?: string;
  /** Public source for the item. */
  link?: string;
  image?: string;
  featured?: boolean;
  placeholder?: boolean;
}

export interface Strength {
  name: string;
  description: string;
  /** Concrete proof points for the strength. */
  evidence: string[];
}

export interface Stat {
  value: number;
  suffix?: string;
  label: string;
  placeholder?: boolean;
}

export interface MediaItem {
  show: string;
  episode: string;
  title: string;
  date: string;
  href: string;
  quote?: string;
}

export const profile = {
  name: "Brendan Wovchko",
  firstName: "Brendan",
  initials: "BW",
  headline: "CTO · Entrepreneur · Kanban Trainer",
  tagline:
    "Technology leader, lifelong entrepreneur and teacher of leaders, building consumer software since the late 1990s.",
  location: "Nashville, TN",
  bio: [
    "Brendan Wovchko is the CTO and a member of the Operating Board at Ramsey Solutions, where he leads a software organization of roughly 300 engineers, product managers, project managers and agile coaches. He has been building consumer-facing software since the late 1990s.",
    "Before Ramsey he was a lifelong entrepreneur. He founded ArtistData, a platform that let more than 25,000 musicians publish their shows everywhere at once, and HUGE I/O, an accredited Kanban training firm. Ramsey became his biggest client, and he sold the company to join them full time.",
    "Today he describes himself as a problem guy who knows how to leverage technology, and he talks openly about the people side of leadership: hard conversations, shared urgency, and teams that either act or argue.",
  ],
  roles: ["CTO", "Entrepreneur", "Kanban Trainer", "Leader"],
  stats: [
    { value: 300, suffix: "", label: "People in the software org he leads (approx.)" },
    { value: 2016, label: "Joined Ramsey Solutions" },
    { value: 25, suffix: "K+", label: "Artists who used ArtistData" },
    { value: 5, label: "Podcast episodes featuring him" },
  ] as Stat[],
  contact: {
    /** No public email is listed anywhere, so the site points to LinkedIn. */
    email: "",
    phone: "",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/wovchko/" },
      { label: "Ramsey Solutions", href: "https://www.ramseysolutions.com/" },
      { label: "HUGE I/O", href: "https://www.hugeio.com/" },
    ] as { label: string; href: string; placeholder?: boolean }[],
  },
};

/** "What he's doing now." Powers the Now section. */
export const now = {
  updated: "November 2026",
  goalsLabel: "IDEAS HE TEACHES",
  alsoLabel: "ALSO KNOWN FOR",
  venture: {
    name: "Ramsey Solutions",
    url: "https://www.ramseysolutions.com/",
    role: "CTO & Operating Board",
    since: "2022",
    oneLiner: "Leading technology at one of America's best-known personal finance companies.",
    description:
      "Ramsey Solutions was founded by Dave Ramsey in 1992 and has more than 1,000 team members. Brendan joined in 2016 as Senior Technology Officer and became CTO in 2022. His teams build Ramsey's digital products, such as the EveryDollar budgeting app, and he has spoken about using voice AI to make digital experiences feel more human.",
    status: "CTO since 2022",
    facts: [
      { label: "Software org", value: "~300", note: "engineers, PMs and agile coaches" },
      { label: "At Ramsey", value: "2016", note: "Senior Technology Officer until 2021" },
      { label: "CTO", value: "2022", note: "and Operating Board member" },
    ],
  },
  goals: [
    { title: "Act or argue", detail: "If you agree, act. If you disagree, argue. Ignoring a decision isn't an option.", done: false },
    { title: "Shared urgency", detail: "Most companies have a shared urgency problem: a missing commitment to courageous action.", done: false },
    { title: "Hard conversations", detail: "A step-by-step approach to uncomfortable conversations, including the \"emotional firing\".", done: false },
    { title: "Be a coach, not a cop", detail: "Coach people first, then make the decision when coaching doesn't work.", done: false },
  ],
  alsoWorkingOn: [
    "Humanizing digital products with voice AI",
    "Leading agile teams inside a fast-moving, 1,000-person company",
    "Teaching Kanban through his Addison-Wesley video course",
  ],
};

export const media: MediaItem[] = [
  {
    show: "Modern CTO",
    episode: "Tech Titans #944",
    title: "Your Team Should be Acting or Arguing",
    date: "May 13, 2026",
    href: "https://moderncto.io/brendan-wovchko-act-or-argue-tt/",
    quote: "If somebody agrees with me, I expect them to act. And if somebody disagrees with me, I expect them to argue.",
  },
  {
    show: "Agile Mentors · Mountain Goat Software",
    episode: "#146",
    title: "Agile Leadership That Actually Works",
    date: "May 14, 2025",
    href: "https://mountaingoatsoftware.com/agile/podcast/146-agile-leadership-that-actually-works-with-brendan-wovchko",
  },
  {
    show: "Modern CTO",
    episode: "Tech Titans #802",
    title: "Emotional Firings & Tough Conversations",
    date: "Aug 12, 2024",
    href: "https://moderncto.io/brendan-wovchko-tt/",
  },
  {
    show: "Modern CTO",
    episode: "#778",
    title: "Coaching Your Team to Act or Argue",
    date: "Apr 29, 2024",
    href: "https://moderncto.io/brendan-wovchko-2/",
    quote: "The greatest idea behind AI, particularly voice AI, is to humanize things that are not human today.",
  },
  {
    show: "Modern CTO",
    episode: "#505",
    title: "Hard Conversations in the Workplace",
    date: "Jun 27, 2022",
    href: "https://moderncto.io/brendan-wovchko/",
  },
  {
    show: "SEP",
    episode: "Podcast",
    title: "Brendan Wovchko on the SEP podcast",
    date: "Listen",
    href: "https://sep.com/podcasts/brendan-wovchko/",
  },
];

/** The quick-facts card and the printable resume at /resume. */
export const resume = {
  lookingFor: "Podcasts, talks and conversations about technology leadership. Connect on LinkedIn.",
  availability: "CTO & Operating Board · Ramsey Solutions",
  /** Shown under "Credentials". */
  education: [
    { school: "Accredited Kanban Trainer", detail: "Lean Kanban University", date: "AKT" },
    { school: "Certified ScrumMaster", detail: "Scrum Alliance", date: "CSM" },
    { school: "Certified Scrum Product Owner", detail: "Scrum Alliance", date: "CSPO" },
  ] as { school: string; detail: string; date: string; placeholder?: boolean }[],
  experience: [
    {
      title: "CTO & Operating Board",
      org: "Ramsey Solutions",
      date: "2022 – Present",
      points: [
        "Leads a software organization of about 300 engineers, product managers, project managers and agile coaches.",
        "Sits on the operating board of a 1,000+ person company founded by Dave Ramsey.",
      ],
    },
    {
      title: "Senior Technology Officer",
      org: "Ramsey Solutions",
      date: "2016 – 2021",
      points: ["Joined full time after Ramsey became his company's biggest client and he sold the business."],
    },
    {
      title: "Founder",
      org: "HUGE I/O",
      date: "Before 2016",
      points: [
        "Boutique Agile and Lean consultancy and Lean Kanban University accredited training organization.",
        "Taught certified Starting Kanban classes and ran webinars for LeanKit.",
      ],
    },
    {
      title: "Founder",
      org: "ArtistData",
      date: "Earlier",
      points: ["Built a platform that let musicians enter their data once and publish it to many sites; used by 25,000+ artists."],
    },
  ],
  skills: {
    Leadership: ["Engineering leadership", "Hard conversations", "Coaching", "Org design"],
    Delivery: ["Kanban", "Scrum", "Agile coaching", "Lean"],
    Product: ["Consumer software", "Product management", "Information architecture", "Voice AI"],
  } as Record<string, string[]>,
  interests: ["Act or argue", "Shared urgency", "Be a coach, not a cop", "Humanizing technology"],
};

export const achievements: Achievement[] = [
  {
    title: "CTO & Operating Board, Ramsey Solutions",
    org: "Ramsey Solutions · Brentwood, TN",
    date: "2022 – Present",
    category: "Leadership",
    description:
      "Leads technology for Ramsey Solutions and a software organization of roughly 300 people, and serves on the company's operating board.",
    metric: "CTO",
    link: "https://moderncto.io/brendan-wovchko-2/",
    featured: true,
  },
  {
    title: "Starting Kanban video course",
    org: "Addison-Wesley Professional",
    date: "2020",
    category: "Teaching",
    description: "Created a 4+ hour video training course on starting Kanban, published by Addison-Wesley Professional on InformIT.",
    metric: "4+ hrs",
    link: "https://www.informit.com/store/starting-kanban-video-training-9780136709947",
    featured: true,
  },
  {
    title: "Starting Kanban certified class",
    org: "HUGE I/O · Franklin, TN",
    date: "Oct 2017",
    category: "Teaching",
    description: "Taught a one-day Lean Kanban University certified class at Ramsey's EntreLeadership space in Franklin, Tennessee.",
    link: "https://ti.to/hugeio/sk-bna-2017-10-A/",
  },
  {
    title: "Joined Ramsey Solutions",
    org: "Senior Technology Officer",
    date: "2016",
    category: "Business",
    description:
      "Ramsey became his company's biggest client over a couple of years. He sold the business and took what he calls the first full-time job he's ever had.",
    metric: "Exit",
    link: "https://moderncto.io/brendan-wovchko/",
  },
  {
    title: "Kanban webinars and articles for LeanKit",
    org: "LeanKit / Planview",
    date: "2016",
    category: "Teaching",
    description:
      "Presented \"Evolving Your Daily Standup with Kanban\" and \"Kanban Essentials for IT Ops\", and wrote \"How to Sell Kanban to Your Boss\".",
    link: "https://blog.planview.com/author/brendan-wovchko/",
  },
  {
    title: "Founded HUGE I/O",
    org: "Agile & Lean consultancy",
    date: "Founder",
    category: "Business",
    description:
      "Started a boutique consultancy and accredited Kanban training organization that helped businesses fix operational problems with Agile and Lean methods.",
    link: "https://www.hugeio.com/",
  },
  {
    title: "Accredited Kanban Trainer, CSM and CSPO",
    org: "Lean Kanban University · Scrum Alliance",
    date: "Credentials",
    category: "Recognition",
    description: "Accredited to teach Kanban through Lean Kanban University, and certified as a ScrumMaster and Scrum Product Owner.",
    link: "https://www.scrumalliance.org/members/149057",
  },
  {
    title: "Named a social networking expert by Entrepreneur",
    org: "Entrepreneur Magazine",
    date: "May 2008",
    category: "Recognition",
    description: "Recognized by Entrepreneur magazine as a \"social networking expert\" during his years building web products for brands like Sony, Warner Music and Universal Music.",
    link: "https://www.scrumalliance.org/members/149057",
  },
  {
    title: "Founded ArtistData",
    org: "Music technology",
    date: "Early career",
    category: "Business",
    description:
      "Built a service that let musicians and managers enter show and profile data once and push it to many sites and local media. More than 25,000 artists used it.",
    metric: "25K+",
    link: "https://www.crunchbase.com/organization/artistdata",
    featured: true,
  },
];

export const strengths: Strength[] = [
  {
    name: "People leadership",
    description: "Leads a large software org with a clear rule: agree and act, or disagree and argue.",
    evidence: ["~300-person org", "Act or argue"],
  },
  {
    name: "Hard conversations",
    description: "Teaches a practical approach to uncomfortable conversations so problems get named early.",
    evidence: ["Modern CTO #505", "Emotional firing"],
  },
  {
    name: "Agile & Kanban",
    description: "Accredited Kanban Trainer and certified Scrum practitioner whose training firm served the North American market.",
    evidence: ["AKT", "CSM · CSPO"],
  },
  {
    name: "Entrepreneurship",
    description: "Founded two companies before joining Ramsey, and sold one to join them full time.",
    evidence: ["ArtistData", "HUGE I/O"],
  },
  {
    name: "Product building",
    description: "Building consumer software since the late 1990s, from music tech to personal finance.",
    evidence: ["EveryDollar", "Voice AI"],
  },
  {
    name: "Teaching",
    description: "Turns what he learns into courses, webinars and podcast conversations for other leaders.",
    evidence: ["Addison-Wesley course", "5 podcast episodes"],
  },
];
