"use client";

import Link from "next/link";
import {
  FolderKanban,
  Briefcase,
  Wrench,
  MessageSquare,
  GraduationCap,
  PenTool,
  BookOpen,
  ArrowRight,
  Layers,
  Users,
  TrendingUp,
  Award,
  Target,
  Zap,
  ChevronRight,
  Linkedin,
  Mail,
  Star,
  FileText,
  ClipboardCheck,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const metrics = [
  { value: "5+", label: "E-Learning Modules", sub: "ADDIE-based, SCORM-compliant", icon: Layers },
  { value: "20+", label: "Assessments Built", sub: "Quizzes, simulations, scenarios", icon: ClipboardCheck },
  { value: "200+", label: "Learners Impacted", sub: "Frontline & academic learners", icon: Users },
  { value: "25%", label: "Retention Uplift", sub: "Onboarding knowledge gains", icon: TrendingUp },
  { value: "30%", label: "Task Completion Gain", sub: "Inclusive learning pilot", icon: Target },
  { value: "10+", label: "Workshops Led", sub: "Faculty & institutional programs", icon: Award },
];

const tools = [
  "Articulate 360",
  "SCORM",
  "ADDIE",
  "Bloom's Taxonomy",
  "LMS Platforms",
  "Canva",
  "UDL Framework",
  "Storyboarding",
  "MS Office Suite",
];

const navTiles = [
  {
    href: "/experiments",
    icon: FolderKanban,
    title: "Projects",
    desc: "Case studies from corporate onboarding, TNA, and inclusive design projects.",
    color: "from-sky-500/20 to-cyan-500/20",
  },
  {
    href: "/services",
    icon: Briefcase,
    title: "Services",
    desc: "Corporate L&D, academic consulting, and individual career readiness.",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    href: "/toolkits",
    icon: Wrench,
    title: "Stakeholder Toolkits",
    desc: "Templates, frameworks, and blueprints for L&D, educators, and learners.",
    color: "from-teal-500/20 to-emerald-500/20",
  },
  {
    href: "/roundtable",
    icon: MessageSquare,
    title: "Learning Roundtable",
    desc: "Thought leadership, design debates, and tool comparisons.",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    href: "/campus-to-corporate",
    icon: GraduationCap,
    title: "Campus → Corporate",
    desc: "Career counselling, transition coaching, and workplace readiness.",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    href: "/design-studio",
    icon: PenTool,
    title: "Prototypes",
    desc: "Storyboards, wireframes, content chunking, and module prototypes.",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    href: "/lab-notebook",
    icon: BookOpen,
    title: "Reflections & Learnings",
    desc: "Design learnings, project reflections, and growth insights.",
    color: "from-slate-500/20 to-gray-500/20",
  },
  {
    href: "/testimonials",
    icon: Star,
    title: "Testimonials",
    desc: "Feedback from supervisors, faculty, stakeholders, and learners.",
    color: "from-yellow-500/20 to-amber-500/20",
  },
  {
    href: "/resume",
    icon: FileText,
    title: "Resume",
    desc: "Download or view my professional resume.",
    color: "from-emerald-500/20 to-green-500/20",
  },
];

export default function Home() {
  return (
    <div className="grid-bg">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        {/* overlay removed for visibility */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-4xl">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-accent" />
                <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-accent">
                  Professional Overview
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 style={{ color: '#ffffff' }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
                Designing Learning
                <br />
                <span className="text-gradient">Systems That Work</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p style={{ color: '#a8b4cc' }} className="mt-6 text-lg sm:text-xl max-w-2xl leading-relaxed">
                For workplaces, campuses, and career transitions — blending instructional design, 
                educational psychology, and performance engineering into measurable learning outcomes.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/experiments"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dim text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent/50 text-sm font-semibold rounded-xl transition-colors hover:bg-card"
                >
                  Explore Services
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── BIO CARD ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatedSection>
          <div className="card-glow rounded-2xl bg-card border border-border p-8 sm:p-10">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xl font-bold text-accent">
                    PK
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Preksha Kothari</h2>
                    <p className="text-xs text-accent font-mono tracking-wide">
                      Learning Experience Architect
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  Instructional designer bridging corporate L&D and educational psychology. I architect
                  ADDIE-based learning systems — from training needs analysis and storyboarding through
                  SCORM-compliant deployment — engineered to close skill gaps, accelerate onboarding,
                  and drive measurable performance outcomes across diverse learner populations.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  My work spans corporate onboarding design for frontline staff, faculty development
                  programs, inclusive learning interventions for neurodiverse learners, and competency-mapped
                  assessment architectures — always grounded in evidence-based design and systems thinking.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://www.linkedin.com/in/kothari-preksha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors"
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </a>
                  <span className="text-border">|</span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=prekshakothari06@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5" /> prekshakothari06@gmail.com
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                  Credentials
                </h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-surface border border-border">
                    <p className="text-xs font-semibold">M.Sc. Educational Psychology</p>
                    <p className="text-xs text-muted">Christ University · 2024–Present</p>
                  </div>
                  <div className="p-3 rounded-lg bg-surface border border-border">
                    <p className="text-xs font-semibold">B.Sc. Psychology (Honors)</p>
                    <p className="text-xs text-muted">Christ University · 2021–2024</p>
                  </div>
                </div>
                <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-accent pt-2">
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Articulate Storyline 360",
                    "AI for Course Design",
                    "Learning Innovation",
                    "Media Psychology",
                    "Peer Instruction",
                  ].map((cert) => (
                    <span
                      key={cert}
                      className="px-2 py-1 text-[10px] font-medium bg-surface border border-border rounded-md text-muted"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── IMPACT METRICS ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
              Impact Metrics
            </span>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <AnimatedSection key={metric.label} delay={i * 0.08}>
                <div
                  className="card-glow rounded-xl bg-card border border-border p-5 text-center hover:border-accent/30 transition-colors group"
                >
                  <Icon className="h-5 w-5 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl sm:text-3xl font-bold text-gradient">{metric.value}</p>
                  <p className="text-xs font-semibold mt-1">{metric.label}</p>
                  <p className="text-[10px] text-muted mt-1 leading-tight">{metric.sub}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ── TOOL STACK ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
              Tool Stack & Frameworks
            </span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <div
                key={tool}
                className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-xl hover:border-accent/40 transition-colors cursor-default"
              >
                <Zap className="h-3 w-3 text-accent" />
                <span className="text-xs font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── NAVIGATION TILES ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-accent" />
            <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
              Explore Portfolio
            </span>
          </div>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {navTiles.map((tile, i) => {
            const Icon = tile.icon;
            return (
              <AnimatedSection key={tile.href} delay={i * 0.06}>
                <Link href={tile.href} className="block group">
                  <div
                    className="card-glow rounded-xl bg-card border border-border p-6 h-full hover:border-accent/30 transition-all"
                  >
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${tile.color} mb-4`}
                    >
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="text-sm font-bold mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                      {tile.title}
                      <ChevronRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">{tile.desc}</p>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to redesign how your workforce learns?
              </h2>
              <p className="text-sm text-muted mb-8">
                From training needs analysis to SCORM-compliant deployment — let&apos;s architect
                learning systems that drive measurable performance outcomes.
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=prekshakothari06@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dim text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  Start a Conversation <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent/50 text-sm font-semibold rounded-xl transition-colors hover:bg-card"
                >
                  View Services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
