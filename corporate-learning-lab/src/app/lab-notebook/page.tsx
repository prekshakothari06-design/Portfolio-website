"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  RefreshCw,
  Target,
  TrendingUp,
  Layers,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const iterations = [
  {
    project: "Corporate Onboarding Modules — Cafe Coffee Day",
    version: "v1 → v2",
    timeline: "Jul–Sep 2025",
    original: "Initial modules used linear slide-based content delivery with end-of-module MCQ assessments. Content was text-heavy with limited interactivity.",
    feedback: [
      "Learners reported content felt disconnected from real work scenarios",
      "Assessment scores were high but on-floor performance didn't improve proportionally",
      "Managers requested more role-specific content pathways",
    ],
    redesign: [
      "Replaced 40% of text-based slides with scenario branching interactions",
      "Added workplace simulation screens where learners make real-time decisions",
      "Redesigned assessments from recall-based MCQs to scenario-based application questions",
      "Introduced role-specific module variants for different outlet types",
    ],
    outcome: "Knowledge retention improved by 25% in onboarding assessments. Learner completion rates increased. Manager feedback shifted from 'they know the content' to 'they can apply it.'",
  },
  {
    project: "Inclusive Mathematics Workbook — Anantha Academy",
    version: "v1 → v2",
    timeline: "Aug–Oct 2024",
    original: "First draft used standard worksheet formatting with dense text instructions and small visual elements. Activity sequences followed textbook order rather than cognitive difficulty progression.",
    feedback: [
      "Teachers reported students with ADHD lost focus during text-heavy instruction sections",
      "Visual elements were too small for students with processing differences",
      "Activity transitions were abrupt — no sensory regulation breaks between tasks",
    ],
    redesign: [
      "Replaced text instructions with visual step-by-step guides using icon sequences",
      "Increased visual element sizes by 150% and added high-contrast color coding",
      "Inserted sensory transition activities between cognitive tasks",
      "Resequenced activities by cognitive load rather than textbook chapter order",
    ],
    outcome: "Student task completion improved by 30% during pilot testing across 15+ students. Teacher preparation time reduced significantly. Engagement metrics showed sustained attention through full activity sequences.",
  },
  {
    project: "Faculty Development Workshop Materials — Christ University TLEC",
    version: "v1 → v2",
    timeline: "Jan–Mar 2025",
    original: "Workshop materials were created department-by-department with inconsistent formatting, varying depth levels, and no common design language across sessions.",
    feedback: [
      "Faculty from different departments couldn't reference each other's workshop materials",
      "Inconsistent quality made institutional branding difficult",
      "No post-workshop resources for ongoing reference",
    ],
    redesign: [
      "Created unified visual template system across all 5+ departments",
      "Standardized content depth with consistent section structures",
      "Added post-workshop reference cards and digital resource links",
      "Built facilitator guides with embedded timing and assessment checkpoints",
    ],
    outcome: "Achieved 20% improvement in on-time distribution of learning materials. Cross-departmental material sharing became feasible. Workshop evaluation scores improved with consistent quality baseline.",
  },
];

const lessonsLearned = [
  {
    icon: Target,
    category: "Needs Analysis",
    lesson: "Never skip the TNA phase, even under time pressure",
    detail: "Early projects where I jumped to content development without proper needs analysis required significant rework. The time 'saved' was always lost in redesign cycles. Now TNA is non-negotiable.",
  },
  {
    icon: Layers,
    category: "Assessment Design",
    lesson: "High assessment scores ≠ learning transfer",
    detail: "The Cafe Coffee Day project taught me that recall-based assessments can show 90%+ pass rates while actual job performance remains unchanged. Scenario-based assessments are harder to build but actually measure what matters.",
  },
  {
    icon: MessageSquare,
    category: "Stakeholder Management",
    lesson: "SMEs know the content, but not how to teach it",
    detail: "Subject matter experts provide crucial domain knowledge, but the instructional designer's job is to transform that expertise into learnable sequences. This requires pushing back on 'information dump' requests with evidence-based design rationale.",
  },
  {
    icon: RefreshCw,
    category: "Iteration",
    lesson: "Pilot testing with 5 learners catches 80% of design problems",
    detail: "The inclusive workbook project proved that even a small pilot group reveals critical usability issues that desktop review misses. Now I build pilot testing into every project timeline.",
  },
  {
    icon: Lightbulb,
    category: "Inclusive Design",
    lesson: "UDL principles improve learning for everyone, not just neurodiverse learners",
    detail: "Design decisions made for the Anantha Academy project — clearer visuals, reduced cognitive load, multiple representation modes — consistently improve outcomes when applied to mainstream corporate training too.",
  },
  {
    icon: TrendingUp,
    category: "Impact Measurement",
    lesson: "Define success metrics before building, not after",
    detail: "When evaluation criteria are baked into the design phase, every design decision can be tested against them. Retrofitting metrics after deployment leads to vanity numbers, not genuine impact data.",
  },
];

const futureDirections = [
  {
    title: "xAPI & Learning Analytics",
    description: "Moving beyond SCORM completion tracking to granular interaction-level data. xAPI enables tracking of scenario decisions, time-per-screen, help-seeking behavior, and real-time performance prediction.",
    status: "Researching",
  },
  {
    title: "AI-Assisted Content Generation",
    description: "Exploring how AI tools can accelerate storyboarding, generate assessment item variations, and produce adaptive learning pathways — while maintaining instructional design quality and pedagogical rigor.",
    status: "Experimenting",
  },
  {
    title: "Performance Support Systems",
    description: "Designing just-in-time learning resources that live in the workflow rather than in an LMS. Microlearning modules, searchable knowledge bases, and context-triggered support tools.",
    status: "Conceptualizing",
  },
  {
    title: "Evaluation Framework Maturity",
    description: "Building toward Kirkpatrick Level 3 and 4 evaluation — measuring behavioral change and business impact, not just reaction and learning scores. Requires stakeholder partnerships and longitudinal data.",
    status: "Planning",
  },
];

export default function LabNotebookPage() {
  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Reflections & Learnings"
          title="Design Learnings, Project Reflections & Growth Insights"
          description="The design process is never linear. This section captures lessons learned across projects, evolving perspectives, and the future directions of my practice."
        />

        {/* Lessons Learned */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Lessons Learned
              </span>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4">
            {lessonsLearned.map((lesson, i) => {
              const Icon = lesson.icon;
              return (
                <AnimatedSection key={lesson.lesson} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="card-glow rounded-xl bg-card border border-border p-5 h-full hover:border-accent/20 transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-accent" />
                      <span className="text-[10px] font-mono font-semibold text-accent tracking-wider">
                        {lesson.category}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold mb-2">{lesson.lesson}</h4>
                    <p className="text-xs text-muted leading-relaxed">{lesson.detail}</p>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Future Directions */}
        <AnimatedSection>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Future Directions
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {futureDirections.map((dir, i) => (
                <motion.div
                  key={dir.title}
                  whileHover={{ scale: 1.01 }}
                  className="card-glow rounded-xl bg-card border border-border p-6 hover:border-accent/20 transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold">{dir.title}</h4>
                    <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                      dir.status === "Researching" ? "bg-sky-500/10 text-sky-400" :
                      dir.status === "Experimenting" ? "bg-amber-500/10 text-amber-400" :
                      dir.status === "Conceptualizing" ? "bg-violet-500/10 text-violet-400" :
                      "bg-emerald-500/10 text-emerald-400"
                    }`}>
                      {dir.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{dir.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
