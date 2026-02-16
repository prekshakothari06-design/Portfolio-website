"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  ArrowRight,
  Target,
  Map,
  Route,
  Monitor,
  CheckCircle2,
  Circle,
  ChevronRight,
  BarChart3,
  Lightbulb,
  Users,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const diagnosticQuestions = [
  { question: "I can clearly articulate my top 3 transferable skills to an employer.", id: "q1" },
  { question: "I understand how my academic projects translate to workplace deliverables.", id: "q2" },
  { question: "I can describe a problem I solved using a structured methodology.", id: "q3" },
  { question: "I have experience collaborating with stakeholders outside my peer group.", id: "q4" },
  { question: "I can explain how I measure the effectiveness of my own work.", id: "q5" },
  { question: "I am comfortable presenting work to non-expert audiences.", id: "q6" },
];

const skillDomains = [
  {
    domain: "Communication & Stakeholder Management",
    academic: "Class presentations, group projects",
    corporate: "SME interviews, client presentations, cross-functional collaboration",
    bridge: "Practice structuring communication for non-expert audiences; learn to write executive summaries",
  },
  {
    domain: "Problem-Solving & Analysis",
    academic: "Research methodology, literature reviews",
    corporate: "Needs analysis, root cause analysis, data-driven decision making",
    bridge: "Apply TNA frameworks to real scenarios; practice gap analysis with competency mapping",
  },
  {
    domain: "Project Management",
    academic: "Assignment deadlines, semester planning",
    corporate: "Sprint planning, milestone tracking, stakeholder updates",
    bridge: "Use project management tools; practice breaking large deliverables into phased milestones",
  },
  {
    domain: "Technical & Tool Proficiency",
    academic: "Academic writing tools, basic presentations",
    corporate: "Articulate 360, LMS platforms, SCORM packaging, data visualization",
    bridge: "Build portfolio projects using industry tools; earn tool-specific certifications",
  },
];

const pathways = [
  {
    icon: Target,
    title: "Instructional Design Track",
    duration: "3–6 months",
    steps: [
      "Master ADDIE methodology and Bloom's Taxonomy application",
      "Build 2–3 portfolio modules using Articulate 360",
      "Learn SCORM packaging and LMS deployment",
      "Complete a real-world TNA project",
      "Develop assessment design capabilities",
    ],
  },
  {
    icon: Users,
    title: "L&D Generalist Track",
    duration: "3–6 months",
    steps: [
      "Study training needs analysis frameworks",
      "Understand competency mapping and gap analysis",
      "Learn facilitation and workshop design",
      "Build knowledge of blended learning strategies",
      "Develop evaluation and impact measurement skills",
    ],
  },
  {
    icon: Monitor,
    title: "E-Learning Development Track",
    duration: "2–4 months",
    steps: [
      "Master Articulate 360 / Storyline for rapid authoring",
      "Learn interaction design and scenario branching",
      "Understand SCORM standards and LMS integration",
      "Practice storyboarding and content chunking",
      "Build a portfolio of 3+ interactive modules",
    ],
  },
];

const simulations = [
  {
    title: "The Onboarding Challenge",
    scenario: "You've joined a retail chain as an L&D coordinator. 50 new hires start next month. Design a 5-day onboarding plan.",
    skills: ["Needs Analysis", "Program Design", "Stakeholder Management"],
  },
  {
    title: "The SME Interview",
    scenario: "A subject matter expert has 30 minutes for you. Extract enough information to design a compliance training module.",
    skills: ["Interviewing", "Content Extraction", "Rapid Prototyping"],
  },
  {
    title: "The Assessment Redesign",
    scenario: "Existing assessments have a 95% pass rate but post-training performance hasn't improved. Diagnose and fix.",
    skills: ["Assessment Design", "Bloom's Taxonomy", "Data Analysis"],
  },
  {
    title: "The Inclusive Learning Audit",
    scenario: "Review an existing e-learning module for accessibility and UDL compliance. Recommend improvements.",
    skills: ["UDL Framework", "Accessibility", "Design Review"],
  },
];

export default function CampusToCorporatePage() {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const answeredCount = Object.values(answers).filter(Boolean).length;
  const totalQuestions = diagnosticQuestions.length;

  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Campus → Corporate Lab"
          title="Bridge the Transition"
          description="Diagnostic tools, skill mapping frameworks, structured learning pathways, and workplace simulations designed to accelerate your campus-to-corporate transition."
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
                  <p className="text-[10px] text-muted">Academic Environment</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-px w-8 bg-border" />
                <div className="flex items-center gap-1 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                  <Route className="h-3 w-3 text-accent" />
                  <span className="text-[10px] font-mono font-semibold text-accent">TRANSITION PATHWAY</span>
                </div>
                <div className="h-px w-8 bg-border" />
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <Briefcase className="h-6 w-6 text-sky-400" />
                </div>
                <div>
                  <p className="text-sm font-bold">Corporate</p>
                  <p className="text-[10px] text-muted">Professional Environment</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Career Readiness Diagnostic */}
        <AnimatedSection>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Career Readiness Diagnostic
              </span>
            </div>
            <div className="card-glow rounded-2xl bg-card border border-border p-6 sm:p-8">
              <p className="text-sm text-muted mb-6">
                Self-assess your transition readiness. Check each statement that currently applies to you.
              </p>
              <div className="space-y-3 mb-6">
                {diagnosticQuestions.map((q) => (
                  <button
                    key={q.id}
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [q.id]: !prev[q.id] }))
                    }
                    className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all text-sm ${
                      answers[q.id]
                        ? "bg-accent/10 border-accent/30 text-foreground"
                        : "bg-surface border-border text-muted hover:border-accent/20"
                    }`}
                  >
                    {answers[q.id] ? (
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted/40 shrink-0" />
                    )}
                    {q.question}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border">
                <BarChart3 className="h-5 w-5 text-accent" />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold">Readiness Score</span>
                    <span className="text-xs font-mono text-accent">
                      {answeredCount}/{totalQuestions}
                    </span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      animate={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
                <span className="text-xs text-muted">
                  {answeredCount <= 2
                    ? "Building foundations"
                    : answeredCount <= 4
                    ? "Making progress"
                    : "Strong readiness"}
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skill Mapping */}
        <AnimatedSection>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Skill Mapping
              </span>
            </div>
            <div className="space-y-4">
              {skillDomains.map((skill, i) => (
                <motion.div
                  key={skill.domain}
                  whileHover={{ x: 2 }}
                  className="card-glow rounded-xl bg-card border border-border p-5 hover:border-accent/20 transition-colors"
                >
                  <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                    <Map className="h-4 w-4 text-accent" />
                    {skill.domain}
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                      <p className="text-[10px] font-mono font-semibold text-amber-400 mb-1">CAMPUS</p>
                      <p className="text-xs text-muted">{skill.academic}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-accent/5 border border-accent/10">
                      <p className="text-[10px] font-mono font-semibold text-accent mb-1">CORPORATE</p>
                      <p className="text-xs text-muted">{skill.corporate}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-cyan-500/5 border border-cyan-500/10">
                      <p className="text-[10px] font-mono font-semibold text-cyan-400 mb-1">BRIDGE ACTION</p>
                      <p className="text-xs text-muted">{skill.bridge}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Learning Pathways */}
        <AnimatedSection>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Learning Pathways
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {pathways.map((path, pi) => {
                const Icon = path.icon;
                return (
                  <motion.div
                    key={path.title}
                    whileHover={{ y: -4 }}
                    className="card-glow rounded-2xl bg-card border border-border p-6 hover:border-accent/20 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">{path.title}</h4>
                        <p className="text-[10px] text-muted font-mono">{path.duration}</p>
                      </div>
                    </div>
                    <div className="space-y-2.5">
                      {path.steps.map((step, si) => (
                        <div key={si} className="flex items-start gap-2">
                          <div className="flex flex-col items-center mt-1">
                            <div className="h-4 w-4 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                              <span className="text-[8px] font-bold text-accent">{si + 1}</span>
                            </div>
                            {si < path.steps.length - 1 && (
                              <div className="w-px h-4 bg-border mt-0.5" />
                            )}
                          </div>
                          <p className="text-xs text-muted leading-relaxed">{step}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Workplace Simulations */}
        <AnimatedSection>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Workplace Simulations
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {simulations.map((sim, i) => (
                <motion.div
                  key={sim.title}
                  whileHover={{ scale: 1.01 }}
                  className="card-glow rounded-xl bg-card border border-border p-6 hover:border-accent/20 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="h-4 w-4 text-accent" />
                    <h4 className="text-sm font-bold">{sim.title}</h4>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-4">{sim.scenario}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {sim.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] font-medium bg-surface border border-border rounded-md text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
