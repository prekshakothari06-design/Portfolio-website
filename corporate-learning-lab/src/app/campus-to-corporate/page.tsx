"use client";

import {
  GraduationCap,
  Briefcase,
  Target,
  Route,
  Users,
  FileText,
  MessageSquare,
  Compass,
  ChevronRight,
  ArrowRight,
  Brain,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

/* ── CAREER READINESS SUPPORT ── */
const careerReadinessAreas = [
  {
    icon: FileText,
    title: "Resume Strategy for L&D Roles",
    description: "Translating academic projects, internships, and research into language that resonates with corporate hiring managers. Focus on outcomes, methodologies applied, and measurable impact — not just task descriptions.",
    tips: [
      "Lead with design methodology (ADDIE, UDL) rather than course titles",
      "Quantify impact: learners reached, retention improvements, completion rates",
      "Highlight tools used: Articulate 360, SCORM, LMS platforms",
      "Frame academic work as 'projects' with stakeholders, not 'assignments'",
    ],
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation for ID Roles",
    description: "Corporate instructional design interviews focus on process thinking, stakeholder management, and design rationale — not just portfolio showcase. Preparing for scenario-based questions and design challenges.",
    tips: [
      "Practice explaining your design process using ADDIE phases",
      "Prepare a 'project walkthrough' that covers problem → analysis → design → impact",
      "Be ready for 'how would you handle...' stakeholder scenarios",
      "Know the difference between learning objectives and business objectives",
    ],
  },
  {
    icon: Users,
    title: "Professional Communication",
    description: "Bridging the gap between academic communication (research papers, presentations) and corporate communication (executive summaries, stakeholder updates, SME collaboration). Learning to communicate design decisions to non-designers.",
    tips: [
      "Write in outcomes, not process: 'This reduces ramp-up time' vs 'This uses Bloom's Taxonomy'",
      "Practice structuring updates as: Context → Action → Result",
      "Learn to present design rationale to non-expert stakeholders",
      "Develop comfort with receiving and incorporating feedback iteratively",
    ],
  },
];

/* ── TRANSITION COACHING ── */
const transitionDomains = [
  {
    title: "College to Corporate Mindset Shifts",
    items: [
      { campus: "Individual achievement", corporate: "Collaborative delivery", bridge: "Practice cross-functional project work; seek feedback from diverse stakeholders" },
      { campus: "Theoretical knowledge", corporate: "Applied problem-solving", bridge: "Frame every project as 'solving a business problem' with measurable outcomes" },
      { campus: "Semester-long timelines", corporate: "Sprint-based delivery", bridge: "Practice breaking deliverables into 2-week milestones with check-ins" },
      { campus: "Professor as evaluator", corporate: "Stakeholder as partner", bridge: "Learn to manage expectations, negotiate scope, and present options (not just solutions)" },
    ],
  },
  {
    title: "Academic Skills → Corporate Roles Mapping",
    items: [
      { campus: "Research methodology", corporate: "Training Needs Analysis", bridge: "Apply survey design, data analysis, and literature review skills to organisational gap analysis" },
      { campus: "Curriculum planning", corporate: "Learning pathway design", bridge: "Use backward design principles to architect competency-aligned learning experiences" },
      { campus: "Classroom facilitation", corporate: "Workshop design & delivery", bridge: "Adapt facilitation for time-constrained corporate audiences with diverse expertise levels" },
      { campus: "Academic writing", corporate: "Storyboarding & content design", bridge: "Translate long-form writing into visual, chunked, interaction-ready content formats" },
    ],
  },
];

/* ── LEARNING STRATEGY COACHING ── */
const learningStrategies = [
  {
    icon: Brain,
    title: "How to Learn: Metacognitive Strategies",
    description: "Understanding your own learning process — spacing, retrieval practice, interleaving, and elaborative interrogation. These evidence-based strategies accelerate skill acquisition regardless of domain.",
    strategies: [
      "Spaced repetition: Review key concepts at increasing intervals (1 day, 3 days, 7 days, 14 days)",
      "Retrieval practice: Test yourself before re-reading — active recall strengthens memory",
      "Interleaving: Mix different skill areas in practice sessions rather than blocking",
      "Elaborative interrogation: Ask 'why does this work?' and 'how does this connect?' for deeper encoding",
    ],
  },
  {
    icon: Target,
    title: "Skill-Building Roadmaps",
    description: "Structured pathways for building competencies in instructional design, e-learning development, and L&D practice — from foundational knowledge through applied proficiency.",
    strategies: [
      "Foundation (Month 1–2): ADDIE, Bloom's Taxonomy, adult learning theory, basic authoring tools",
      "Application (Month 3–4): Build 2–3 portfolio projects, practice TNA, learn SCORM/LMS",
      "Specialisation (Month 5–6): Choose a focus — scenario design, assessment engineering, or inclusive design",
      "Professional practice: Seek mentorship, contribute to ID communities, pursue certifications",
    ],
  },
  {
    icon: Compass,
    title: "Career Direction: Finding Your L&D Niche",
    description: "The learning design field is broader than most new professionals realise. Understanding the landscape helps you make informed career decisions.",
    strategies: [
      "Instructional Designer: Focus on content architecture, learning objectives, and assessment design",
      "E-Learning Developer: Focus on authoring tools, interaction design, and SCORM packaging",
      "L&D Consultant: Focus on needs analysis, stakeholder management, and program evaluation",
      "Learning Experience Designer: Focus on user research, journey mapping, and learner-centred design",
    ],
  },
];

/* ── RIASEC ── */
const riasecDimensions = [
  { code: "R", name: "Realistic", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", description: "Prefers hands-on, practical work. Enjoys building, fixing, and working with tools or systems.", ldAlignment: "E-Learning Development, LMS Administration, Technical Training Design" },
  { code: "I", name: "Investigative", color: "bg-sky-500/10 text-sky-400 border-sky-500/20", description: "Enjoys research, analysis, and problem-solving. Drawn to understanding how things work.", ldAlignment: "Training Needs Analysis, Learning Analytics, Research-Based Design, Evaluation" },
  { code: "A", name: "Artistic", color: "bg-violet-500/10 text-violet-400 border-violet-500/20", description: "Values creativity, self-expression, and innovative approaches. Enjoys designing and creating.", ldAlignment: "Visual Design, Storyboarding, Content Design, Creative Module Development" },
  { code: "S", name: "Social", color: "bg-amber-500/10 text-amber-400 border-amber-500/20", description: "Enjoys teaching, mentoring, and helping others develop. Drawn to collaborative work.", ldAlignment: "Facilitation, Coaching, Faculty Development, Inclusive Design, Mentoring" },
  { code: "E", name: "Enterprising", color: "bg-rose-500/10 text-rose-400 border-rose-500/20", description: "Enjoys leadership, persuasion, and strategic planning. Drawn to managing projects and influencing outcomes.", ldAlignment: "L&D Strategy, Program Management, Stakeholder Consulting, Vendor Management" },
  { code: "C", name: "Conventional", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", description: "Values organisation, accuracy, and systematic processes. Enjoys structured, detail-oriented work.", ldAlignment: "Assessment Design, Quality Assurance, SCORM Compliance, Curriculum Mapping" },
];

export default function CampusToCorporatePage() {
  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Campus → Corporate"
          title="Career Development & Transition Support"
          description="Career readiness coaching, campus-to-corporate transition support, learning strategy guidance, and career assessment tools — designed for emerging professionals entering the L&D and instructional design field."
        />

        {/* Transition Visual */}
        <AnimatedSection>
          <div className="mb-16 p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-bold">Campus</p>
                  <p className="text-[10px] text-muted">Academic Foundation</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-border" />
                <div className="flex items-center gap-1 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                  <Route className="h-3 w-3 text-accent" />
                  <span className="text-[10px] font-mono font-semibold text-accent">GUIDED TRANSITION</span>
                </div>
                <div className="h-px w-8 bg-border" />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-sky-400" />
                </div>
                <div>
                  <p className="text-sm font-bold">Corporate</p>
                  <p className="text-[10px] text-muted">Professional Practice</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ── SECTION 1: Career Readiness Support ── */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Career Readiness Support
              </span>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {careerReadinessAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <AnimatedSection key={area.title} delay={i * 0.08}>
                  <div className="card-glow rounded-2xl bg-card border border-border p-6 sm:p-8 hover:border-accent/20 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold">{area.title}</h3>
                        <p className="text-xs text-muted leading-relaxed mt-1">{area.description}</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 pl-14">
                      {area.tips.map((tip, ti) => (
                        <div key={ti} className="flex items-start gap-2 p-3 rounded-lg bg-surface border border-border">
                          <ChevronRight className="h-3 w-3 text-accent mt-0.5 shrink-0" />
                          <p className="text-xs text-muted leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* ── SECTION 2: Transition Coaching ── */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Transition Coaching
              </span>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {transitionDomains.map((domain, di) => (
              <AnimatedSection key={domain.title} delay={di * 0.08}>
                <div className="card-glow rounded-2xl bg-card border border-border p-6 sm:p-8">
                  <h3 className="text-base font-bold mb-4">{domain.title}</h3>
                  <div className="space-y-3">
                    {domain.items.map((item, ii) => (
                      <div key={ii} className="rounded-xl bg-surface border border-border p-4">
                        <div className="grid sm:grid-cols-3 gap-3">
                          <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                            <p className="text-[10px] font-mono font-semibold text-amber-400 mb-1">CAMPUS</p>
                            <p className="text-xs text-muted">{item.campus}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-accent/5 border border-accent/10">
                            <p className="text-[10px] font-mono font-semibold text-accent mb-1">CORPORATE</p>
                            <p className="text-xs text-muted">{item.corporate}</p>
                          </div>
                          <div className="p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/10">
                            <p className="text-[10px] font-mono font-semibold text-cyan-400 mb-1">BRIDGE ACTION</p>
                            <p className="text-xs text-muted">{item.bridge}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* ── SECTION 3: Learning Strategy Coaching ── */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Learning Strategy Coaching
              </span>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {learningStrategies.map((strategy, si) => {
              const Icon = strategy.icon;
              return (
                <AnimatedSection key={strategy.title} delay={si * 0.08}>
                  <div className="card-glow rounded-2xl bg-card border border-border p-6 h-full hover:border-accent/20 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-sm font-bold">{strategy.title}</h3>
                    </div>
                    <p className="text-xs text-muted leading-relaxed mb-4">{strategy.description}</p>
                    <div className="space-y-2">
                      {strategy.strategies.map((s, si2) => (
                        <div key={si2} className="flex items-start gap-2 text-xs text-muted">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* ── SECTION 4: RIASEC Career Assessment ── */}
        <div>
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                RIASEC Career Assessment Overview
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card-glow rounded-2xl bg-card border border-border p-6 sm:p-8 mb-6">
              <h3 className="text-base font-bold mb-2">What is RIASEC?</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                The RIASEC model (Holland&apos;s Career Typology) classifies career interests into six dimensions: Realistic, Investigative, Artistic, Social, Enterprising, and Conventional. Understanding your dominant dimensions helps align career choices with natural interests and strengths — particularly valuable for professionals exploring the broad field of Learning & Development.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-surface border border-border">
                  <p className="text-xs font-semibold mb-1">What It Measures</p>
                  <p className="text-[11px] text-muted leading-relaxed">Career interest patterns across six dimensions, revealing which work environments, activities, and roles align with your natural preferences and strengths.</p>
                </div>
                <div className="p-3 rounded-lg bg-surface border border-border">
                  <p className="text-xs font-semibold mb-1">How to Interpret Results</p>
                  <p className="text-[11px] text-muted leading-relaxed">Your top 2–3 dimensions form your career code (e.g., &quot;ISA&quot; = Investigative-Social-Artistic). This code maps to specific L&D career pathways shown below.</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {riasecDimensions.map((dim, di) => (
              <AnimatedSection key={dim.code} delay={di * 0.06}>
                <div className="card-glow rounded-xl bg-card border border-border p-5 h-full hover:border-accent/20 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-10 w-10 rounded-lg border flex items-center justify-center ${dim.color}`}>
                      <span className="text-lg font-bold">{dim.code}</span>
                    </div>
                    <h4 className="text-sm font-bold">{dim.name}</h4>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-3">{dim.description}</p>
                  <div className="p-3 rounded-lg bg-accent/5 border border-accent/10">
                    <p className="text-[10px] font-mono font-semibold text-accent mb-1">L&D CAREER ALIGNMENT</p>
                    <p className="text-[11px] text-muted leading-relaxed">{dim.ldAlignment}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="mt-16 p-8 rounded-2xl bg-card border border-border text-center">
            <h3 className="text-lg font-bold mb-2">Need Transition Support?</h3>
            <p className="text-xs text-muted mb-6 max-w-md mx-auto">
              Whether you&apos;re a student exploring L&D careers or a professional transitioning into instructional design, I offer guidance grounded in real project experience.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prekshakothari06@gmail.com&su=Career+Transition+Support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dim text-white text-sm font-semibold rounded-xl transition-colors"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
