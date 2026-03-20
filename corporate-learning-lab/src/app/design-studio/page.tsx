"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layout,
  FileText,
  MessageSquare,
  ChevronRight,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { generateStoryboardPdf } from "@/lib/generatePdf";

const storyboards = [
  {
    title: "Corporate Onboarding — Module 1: Welcome & Orientation",
    type: "Linear Progression",
    screens: [
      { id: "S1", label: "Title Screen", type: "Introduction", note: "Brand-aligned welcome with module objectives and estimated completion time" },
      { id: "S2", label: "Company Overview", type: "Content", note: "Interactive timeline showing company history, mission, and values" },
      { id: "S3", label: "Role Context", type: "Scenario", note: "Day-in-the-life scenario — learner selects their department to see role-specific content" },
      { id: "S4", label: "Knowledge Check 1", type: "Assessment", note: "3-question formative assessment on company basics with immediate feedback" },
      { id: "S5", label: "Policy Deep Dive", type: "Content", note: "Tabbed interface — HR policies, safety protocols, communication guidelines" },
      { id: "S6", label: "Scenario Challenge", type: "Branching", note: "Workplace scenario with decision points — learner choices affect next screen" },
      { id: "S7", label: "Summary & Takeaways", type: "Review", note: "Key concept recap with downloadable reference card" },
      { id: "S8", label: "Module Assessment", type: "Assessment", note: "Summative quiz — 5 questions, 80% pass threshold, retry enabled" },
    ],
    designDecisions: [
      "Linear flow chosen for first-time learners who need sequential knowledge building",
      "Branching scenario at S6 provides safe practice environment before real workplace application",
      "Formative check at S4 prevents cognitive overload before policy content",
      "Summative assessment uses scenario-based questions, not pure recall",
    ],
  },
  {
    title: "Customer Service Training — Handling Difficult Interactions",
    type: "Branching Scenario",
    screens: [
      { id: "S1", label: "Scenario Setup", type: "Introduction", note: "Meet 'the customer' — frustrated about a delayed order. Set the emotional context." },
      { id: "S2", label: "First Response", type: "Branching", note: "3 response options: Empathize, Apologize, Explain Policy — each leads to different path" },
      { id: "S3A", label: "Empathy Path", type: "Consequence", note: "Customer calms down. Follow-up: offer resolution options" },
      { id: "S3B", label: "Policy Path", type: "Consequence", note: "Customer escalates. Learning moment: policy without empathy fails" },
      { id: "S4", label: "Resolution", type: "Scenario", note: "Learner must select the appropriate resolution based on company guidelines" },
      { id: "S5", label: "Debrief", type: "Review", note: "Expert analysis of each path. What worked, what didn't, and why" },
    ],
    designDecisions: [
      "Branching design lets learners experience consequences of different approaches",
      "No 'wrong' answers — all paths lead to learning, but with different difficulty levels",
      "Debrief screen provides metacognitive reflection opportunity",
      "Scenario is based on real reported customer interaction patterns from TNA data",
    ],
  },
];

const wireframes = [
  {
    title: "Interactive Tab Module",
    description: "Used for policy-heavy content where learners need to self-select information blocks. Reduces cognitive load compared to scrolling pages.",
    elements: ["Tab Navigation Bar", "Content Panel", "Progress Indicator", "Notes Section", "Next Button"],
    annotation: "Tabs allow non-linear exploration while maintaining structure. Each tab click is tracked for completion.",
  },
  {
    title: "Scenario Decision Screen",
    description: "Branching scenario interface where learners make choices that affect the narrative. Each option is visually distinct with hover states.",
    elements: ["Scenario Context Area", "Character Dialog", "3 Response Options", "Confidence Meter", "Hint Toggle"],
    annotation: "Response options use A/B/C labels rather than right/wrong framing. Confidence meter adds metacognitive layer.",
  },
  {
    title: "Assessment Results Dashboard",
    description: "Post-quiz results screen showing performance breakdown by competency area with remediation links.",
    elements: ["Overall Score Display", "Competency Breakdown Chart", "Question Review List", "Remediation Links", "Certificate Button"],
    annotation: "Competency breakdown helps learners identify specific gaps rather than just seeing a pass/fail result.",
  },
];

const chunkingExamples = [
  {
    before: "A 45-slide PowerPoint covering all company policies, procedures, and role expectations in a single linear presentation",
    after: [
      "Module 1: Company Culture & Values (8 screens, ~10 min)",
      "Module 2: HR Policies & Benefits (10 screens, ~12 min)",
      "Module 3: Safety & Compliance (7 screens, ~8 min)",
      "Module 4: Role-Specific Onboarding (12 screens, ~15 min)",
      "Module 5: Assessment & Certification (5 screens, ~10 min)",
    ],
    principle: "Chunking by cognitive domain prevents overload. Each module has a clear objective, takes under 15 minutes, and ends with a knowledge check. Learners can complete modules across multiple sessions.",
  },
];

export default function DesignStudioPage() {
  const [activeStoryboard, setActiveStoryboard] = useState(0);
  const board = storyboards[activeStoryboard];

  return (
    <div className="warm-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Prototypes"
          title="From Concept to Prototype"
          description="Storyboards, interaction wireframes, content chunking strategies, and slide-to-module transformations — with annotations explaining every design decision."
        />

        {/* Storyboards */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Storyboard Artefacts
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex gap-2 mb-6">
              {storyboards.map((sb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStoryboard(i)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeStoryboard === i
                      ? "bg-accent text-white shadow-sm"
                      : "bg-white border border-border text-muted hover:text-foreground"
                  }`}
                >
                  {sb.type}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="soft-card p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-heading">{board.title}</h3>
                  <p className="text-xs text-muted mt-1">Type: {board.type}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                    <span className="text-[10px] font-semibold text-accent">
                      {board.screens.length} SCREENS
                    </span>
                  </div>
                  <button
                    onClick={() => { const doc = generateStoryboardPdf(board.title); doc.save(`Storyboard_${board.type.replace(/\s/g, '_')}.pdf`); }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent hover:bg-accent-dim text-white rounded-full text-[10px] font-semibold transition-colors shadow-sm"
                  >
                    <FileText className="h-3 w-3" /> Download PDF
                  </button>
                </div>
              </div>

              {/* Screen Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {board.screens.map((screen, i) => (
                  <motion.div
                    key={screen.id}
                    whileHover={{ y: -4 }}
                    className="p-4 rounded-xl bg-surface border border-border hover:border-accent/20 transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-accent">{screen.id}</span>
                      <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${
                        screen.type === "Assessment" ? "bg-rose-500/10 text-rose-400" :
                        screen.type === "Branching" ? "bg-amber-500/10 text-amber-400" :
                        screen.type === "Scenario" ? "bg-violet-500/10 text-violet-400" :
                        screen.type === "Content" ? "bg-sky-500/10 text-sky-400" :
                        screen.type === "Consequence" ? "bg-orange-500/10 text-orange-400" :
                        "bg-emerald-500/10 text-emerald-400"
                      }`}>
                        {screen.type}
                      </span>
                    </div>
                    <h4 className="text-xs font-semibold text-heading mb-1">{screen.label}</h4>
                    <p className="text-xs text-muted leading-relaxed">{screen.note}</p>
                  </motion.div>
                ))}
              </div>

              {/* Design Decisions */}
              <div className="p-4 rounded-xl bg-surface border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="h-4 w-4 text-accent" />
                  <h4 className="text-xs font-semibold text-heading">Design Decisions & Annotations</h4>
                </div>
                <div className="space-y-2">
                  {board.designDecisions.map((decision, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ChevronRight className="h-3 w-3 text-accent mt-0.5 shrink-0" />
                      <p className="text-sm text-muted leading-relaxed">{decision}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Interaction Wireframes */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Interaction Wireframes
              </span>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-4">
            {wireframes.map((wf, i) => (
              <AnimatedSection key={wf.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="soft-card p-6 h-full"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Layout className="h-4 w-4 text-accent" />
                    <h4 className="text-sm font-bold text-heading">{wf.title}</h4>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">{wf.description}</p>

                  {/* Wireframe Visual */}
                  <div className="p-3 rounded-lg bg-surface border border-border mb-4 space-y-1.5">
                    {wf.elements.map((el) => (
                      <div
                        key={el}
                        className="flex items-center gap-2 px-2 py-1.5 bg-background/50 rounded text-[10px] text-muted border border-border/50"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {el}
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-accent/5 border border-accent/10">
                    <p className="text-[10px] text-accent leading-relaxed flex items-start gap-1.5">
                      <MessageSquare className="h-3 w-3 shrink-0 mt-0.5" />
                      {wf.annotation}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Content Chunking */}
        <AnimatedSection>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">
                Slide → Module Transformation
              </span>
            </div>
            {chunkingExamples.map((example, i) => (
              <div key={i} className="soft-card p-6 sm:p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
                    <p className="text-[10px] font-mono font-semibold text-rose-400 mb-2">BEFORE — SINGLE SLIDE DECK</p>
                    <p className="text-xs text-muted leading-relaxed">{example.before}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                    <p className="text-[10px] font-mono font-semibold text-emerald-400 mb-2">AFTER — CHUNKED MODULES</p>
                    <div className="space-y-1.5">
                      {example.after.map((mod, mi) => (
                        <div key={mi} className="flex items-center gap-2 text-xs text-muted">
                          <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                          {mod}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                  <p className="text-[10px] text-accent leading-relaxed flex items-start gap-1.5">
                    <Lightbulb className="h-3.5 w-3.5 shrink-0 mt-0.5" />
                    <span><strong>Design Principle:</strong> {example.principle}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
