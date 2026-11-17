import { Code, FileSearch, LayoutDashboard, Plug, RefreshCw, Workflow } from "lucide-react";

export const site = {
  name: "Telio Software & Co.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://telio.example",
  projectFormUrl: process.env.NEXT_PUBLIC_PROJECT_FORM_URL ?? "#contact",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  description:
    "Telio Software & Co. designs and engineers custom software, AI workflow automation, and system integrations that simplify operations and remove repetitive work.",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "How we work", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const problems = [
  { before: "Customer data lives across five spreadsheets.", after: "One system your whole team updates, with a single source of truth." },
  { before: "Someone retypes the same details from one tool into another.", after: "An integration moves the data once, with checks along the way." },
  { before: "Documents arrive as PDFs and emails and get read by hand.", after: "Key fields are extracted automatically and flagged for human review." },
];

export const services = [
  { icon: Code, title: "Custom business software", text: "Web applications and back-office systems designed around how your team actually works." },
  { icon: Workflow, title: "AI workflow automation", text: "Automations that read, route, and act on information, with human review where it matters." },
  { icon: Plug, title: "API & system integrations", text: "Connect the tools you already use so data moves accurately without retyping." },
  { icon: LayoutDashboard, title: "Internal tools & dashboards", text: "Clear views and simple tools that replace spreadsheets and status-chasing." },
  { icon: FileSearch, title: "Document intelligence", text: "Extract, check, and structure information from PDFs, forms, and emails." },
  { icon: RefreshCw, title: "Software modernization", text: "Move legacy systems forward in stages, without stopping day-to-day operations." },
];

export const steps = [
  { title: "Discover", text: "We learn the workflow, the people in it, and where time is being lost.", output: "A written summary of the problem and goals" },
  { title: "Scope", text: "We agree what gets built first, what it connects to, and how success is measured.", output: "Milestones and a clearly defined first release" },
  { title: "Engineer", text: "We build in small increments you can review, with validation and testing at each step.", output: "Working software on a shared preview" },
  { title: "Deploy & improve", text: "We launch securely, support your team, and refine the system from real use.", output: "A production release and a prioritized improvement list" },
];

export const principles = [
  { title: "Engineers on your project", text: "The people you talk to are the people building the software." },
  { title: "Built around your process", text: "We adapt to your workflow instead of asking you to adopt ours." },
  { title: "Secure by design", text: "Validation, least-privilege access, and careful handling of your data from the first commit." },
  { title: "Transparent delivery", text: "Clear milestones, regular demos, and plain-language status updates." },
];

export const faqs = [
  { q: "How does a project start?", a: "With a conversation about the workflow you want to improve. If it looks like a fit, we scope a first release together and agree milestones before any build begins." },
  { q: "Can you work with the tools we already use?", a: "Usually, yes. Most of our work connects existing systems through their APIs, file exports, or email. We confirm what is possible during scoping." },
  { q: "How do you handle our data?", a: "We collect only what a project needs, keep secrets out of code, and agree where data is stored and who can access it before we start." },
  { q: "Will people stay in control of decisions?", a: "Yes. Automation handles repetitive steps, and anything uncertain is flagged for a person to review." },
  { q: "What happens after launch?", a: "We can continue to support and improve the system. Ownership, hosting, and support terms are agreed in writing during scoping." },
];

export const about = {
  heading: "A software engineering company for operations-heavy teams.",
  body: [
    "Telio Software & Co. designs, builds, and maintains custom software for businesses that have outgrown spreadsheets, manual handoffs, and disconnected tools.",
    "Our engineers work directly on every project, from the first conversation to launch and beyond, so the people who understand your problem are the people building the solution.",
  ],
};

export const teams = [
  { title: "Operations", text: "Replace manual tracking and status-chasing with one reliable system." },
  { title: "Finance & admin", text: "Cut retyping, reconcile data between tools, and review exceptions only." },
  { title: "Sales & customer service", text: "Route requests, prepare documents, and keep records in sync automatically." },
  { title: "Engineering & product", text: "Add capacity for integrations, internal tools, and legacy modernization." },
];
