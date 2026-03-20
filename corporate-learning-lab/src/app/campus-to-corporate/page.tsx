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
import RIASECAssessment from "@/components/RIASECAssessment";

/* ── CAREER READINESS SUPPORT (broadened for ALL careers) ── */
const careerReadinessAreas = [
  {
    icon: FileText,
    title: "Resume Strategy",
    description: "Translating academic projects, internships, and research into language that resonates with hiring managers across industries. Focus on outcomes, methodologies applied, and measurable impact \u2014 not just task descriptions.",
    tips: [
      "Lead with results and impact rather than responsibilities or course titles",
      "Quantify achievements: users served, efficiency gains, completion rates, revenue impact",
      "Highlight relevant tools and technologies specific to your target industry",
      "Frame academic work as \u2018projects\u2019 with stakeholders and deliverables, not \u2018assignments\u2019",
      "Tailor your resume for each role \u2014 mirror the language used in the job description",
      "Include a professional summary that connects your skills to the employer\u2019s needs",
    ],
  },
  {
    icon: MessageSquare,
    title: "Interview Preparation",
    description: "Modern interviews across all industries focus on behavioural competencies, problem-solving approach, and cultural fit. Preparing for scenario-based questions, case studies, and design/technical challenges.",
    tips: [
      "Master the STAR method (Situation, Task, Action, Result) for behavioural questions",
      "Prepare a \u2018project walkthrough\u2019 that covers problem \u2192 approach \u2192 execution \u2192 impact",
      "Research the company\u2019s mission, recent projects, and industry challenges",
      "Practice articulating your decision-making process and how you handle ambiguity",
      "Prepare thoughtful questions that demonstrate genuine interest in the role",
      "Know the difference between role-specific skills and transferable competencies",
    ],
  },
  {
    icon: Users,
    title: "Professional Communication",
    description: "Bridging the gap between academic communication (research papers, presentations) and corporate communication (executive summaries, stakeholder updates, cross-functional collaboration).",
    tips: [
      "Write in outcomes, not process: \u2018This improved efficiency by 20%\u2019 vs \u2018This used a specific framework\u2019",
      "Practice structuring updates as: Context \u2192 Action \u2192 Result",
      "Learn to present technical decisions to non-technical stakeholders",
      "Develop comfort with receiving and incorporating feedback iteratively",
      "Master email etiquette: clear subject lines, concise body, explicit next steps",
      "Build your professional network through informational interviews and industry events",
    ],
  },
];

/* ── LEARNING STRATEGY COACHING ── */
const learningStrategies = [
  {
    icon: Brain,
    title: "How to Learn: Metacognitive Strategies",
    description: "Understanding your own learning process \u2014 spacing, retrieval practice, interleaving, and elaborative interrogation. These evidence-based strategies accelerate skill acquisition regardless of domain.",
    strategies: [
      "Spaced repetition: Review key concepts at increasing intervals (1 day, 3 days, 7 days, 14 days)",
      "Retrieval practice: Test yourself before re-reading \u2014 active recall strengthens memory",
      "Interleaving: Mix different skill areas in practice sessions rather than blocking",
      "Elaborative interrogation: Ask \u2018why does this work?\u2019 and \u2018how does this connect?\u2019 for deeper encoding",
    ],
  },
  {
    icon: Target,
    title: "Skill-Building Roadmaps",
    description: "Structured pathways for building competencies in any professional domain \u2014 from foundational knowledge through applied proficiency.",
    strategies: [
      "Foundation (Month 1\u20132): Core concepts, terminology, foundational tools, industry overview",
      "Application (Month 3\u20134): Build 2\u20133 portfolio projects, practice real-world scenarios",
      "Specialisation (Month 5\u20136): Choose a focus area, deepen expertise, seek mentorship",
      "Professional practice: Contribute to communities, pursue certifications, build your brand",
    ],
  },
  {
    icon: Compass,
    title: "Career Direction: Finding Your Niche",
    description: "Every professional field is broader than new professionals realise. Understanding the landscape helps you make informed career decisions aligned with your strengths.",
    strategies: [
      "Take the RIASEC assessment below to discover your career interest profile",
      "Research roles that combine your top 2\u20133 interest dimensions",
      "Conduct informational interviews with professionals in your target roles",
      "Build a portfolio that demonstrates your unique combination of skills and interests",
    ],
  },
];

export default function CampusToCorporatePage() {
  return (
    <div className="warm-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Campus \u2192 Corporate"
          title="Career Development & Transition Support"
          description="Career readiness coaching, interview preparation, resume strategy, learning guidance, and a full RIASEC career assessment \u2014 designed for emerging professionals entering any industry."
        />

        {/* Transition Visual */}
        <AnimatedSection>
          <div className="mb-16 soft-card p-6">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-heading">Campus</p>
                  <p className="text-xs text-muted">Academic Foundation</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-border" />
                <div className="flex items-center gap-1 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                  <Route className="h-3 w-3 text-accent" />
                  <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">Guided Transition</span>
                </div>
                <div className="h-px w-8 bg-border" />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-heading">Corporate</p>
                  <p className="text-xs text-muted">Professional Practice</p>
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
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Career Readiness Support
              </span>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {careerReadinessAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <AnimatedSection key={area.title} delay={i * 0.08}>
                  <div className="soft-card p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-heading">{area.title}</h3>
                        <p className="text-sm text-muted leading-relaxed mt-1">{area.description}</p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2 pl-14">
                      {area.tips.map((tip, ti) => (
                        <div key={ti} className="flex items-start gap-2 p-3 rounded-xl bg-surface border border-border">
                          <ChevronRight className="h-3 w-3 text-accent mt-0.5 shrink-0" />
                          <p className="text-sm text-muted leading-relaxed">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* ── SECTION 2: Learning Strategy Coaching ── */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Learning Strategy Coaching
              </span>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {learningStrategies.map((strategy, si) => {
              const Icon = strategy.icon;
              return (
                <AnimatedSection key={strategy.title} delay={si * 0.08}>
                  <div className="soft-card p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h3 className="text-sm font-bold text-heading">{strategy.title}</h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-4">{strategy.description}</p>
                    <div className="space-y-2">
                      {strategy.strategies.map((s, si2) => (
                        <div key={si2} className="flex items-start gap-2 text-sm text-muted">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
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

        {/* ── SECTION 3: RIASEC Career Assessment (Full Interactive) ── */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                RIASEC Career Assessment
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-8 max-w-2xl">
              Take the full 42-question RIASEC assessment based on Holland&apos;s Career Typology. Discover your career interest profile across six dimensions, get personalised career recommendations, and download a detailed PDF report.
            </p>
          </AnimatedSection>

          <RIASECAssessment />
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="soft-card p-8 text-center">
            <h3 className="text-lg font-bold mb-2 text-heading">Need Transition Support?</h3>
            <p className="text-sm text-muted mb-6 max-w-md mx-auto leading-relaxed">
              Whether you&apos;re a student exploring careers or a professional transitioning into a new field, I offer guidance grounded in real project experience.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prekshakothari06@gmail.com&su=Career+Transition+Support"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dim text-white text-sm font-semibold rounded-full transition-colors shadow-sm"
            >
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
