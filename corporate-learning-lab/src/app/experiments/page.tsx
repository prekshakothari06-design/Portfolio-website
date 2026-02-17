"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Beaker,
  Target,
  Search,
  Lightbulb,
  Layout,
  Wrench,
  ClipboardCheck,
  Rocket,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Building2,
  GraduationCap,
  Heart,
  Users,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

interface CaseStudy {
  id: string;
  icon: React.ElementType;
  tag: string;
  tagColor: string;
  title: string;
  client: string;
  problem: string;
  needsAnalysis: string;
  designStrategy: string;
  storyboarding: string;
  tools: string[];
  assessmentDesign: string;
  deployment: string;
  impact: string[];
  evidence: { label: string; type: string; description: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "onboarding",
    icon: Building2,
    tag: "Corporate L&D",
    tagColor: "bg-sky-500/20 text-sky-400",
    title: "Frontline Workforce Onboarding Redesign",
    client: "Cafe Coffee Day — Bengaluru",
    problem:
      "New frontline employees across 200+ outlets faced inconsistent onboarding experiences, leading to extended ramp-up times, knowledge gaps in standard operating procedures, and low early-tenure confidence. Traditional classroom training was logistically impractical at scale.",
    needsAnalysis:
      "Conducted a structured Training Needs Analysis (TNA) in collaboration with subject matter experts and store operations managers. Mapped existing skill gaps against role-specific competency frameworks. Identified critical knowledge domains: product knowledge, customer interaction protocols, hygiene standards, and POS operations.",
    designStrategy:
      "Applied the ADDIE model to architect a blended learning pathway. Designed scenario-driven modules that mirror real workplace situations — customer complaints, rush-hour operations, and quality checks. Aligned all learning objectives to Bloom's Taxonomy, ensuring progression from recall to application-level mastery.",
    storyboarding:
      "Created detailed storyboards for 5+ e-learning modules, mapping each screen to a learning objective. Incorporated branching scenarios where learners make decisions and see consequences. Designed visual flow diagrams showing module progression and prerequisite dependencies.",
    tools: ["Articulate 360", "SCORM", "Canva", "LMS"],
    assessmentDesign:
      "Built 20+ knowledge checks, scenario simulations, and end-of-module assessments. Designed formative assessments at each checkpoint and summative evaluations tied to competency benchmarks. Integrated feedback loops that provide targeted remediation based on learner responses.",
    deployment:
      "Packaged all modules as SCORM-compliant content and deployed through the organization's LMS. Configured completion tracking, pass/fail thresholds, and manager notification workflows. Established a phased rollout across regional clusters.",
    impact: [
      "Improved knowledge retention by 25% in onboarding assessments",
      "Reduced onboarding ramp-up time through structured, self-paced pathways",
      "Scaled consistent training delivery to 200+ frontline staff",
      "Achieved measurable improvement in learner completion rates",
    ],
    evidence: [
      { label: "Storyboard: Module 1 Screen Flow", type: "Storyboard", description: "8-screen linear progression from title screen through scenario challenge to summative assessment — each screen mapped to a Bloom's-level learning objective." },
      { label: "Interaction Flow: Branching Scenario", type: "Interaction Design", description: "Decision tree for customer interaction training — 3 response paths with distinct consequences, debrief screen, and remediation routing." },
      { label: "Assessment Sample: Scenario-Based MCQ", type: "Assessment", description: "Application-level question requiring learners to select the correct SOPs for a rush-hour scenario, replacing recall-based knowledge checks." },
      { label: "Before vs After: Slide Deck → Module", type: "Comparison", description: "45-slide PowerPoint transformed into 5 chunked modules (8–12 screens each, under 15 min), reducing cognitive load and improving completion rates." },
    ],
  },
  {
    id: "tna",
    icon: Users,
    tag: "Needs Analysis",
    tagColor: "bg-violet-500/20 text-violet-400",
    title: "Training Needs Analysis & Skill Gap Intervention",
    client: "Things Education LLP — Bengaluru",
    problem:
      "The organization needed a systematic approach to identify skill gaps across its learning content development teams and align training interventions to strategic business objectives. Without structured TNA, training investments were misaligned with actual performance gaps.",
    needsAnalysis:
      "Partnered with SMEs to conduct multi-level needs analysis — organizational, task, and individual. Used competency mapping frameworks to benchmark current versus desired performance levels. Identified priority intervention areas through gap severity scoring.",
    designStrategy:
      "Designed targeted learning interventions mapped directly to identified skill gaps. Created competency-aligned learning pathways that progress from foundational to advanced skills. Applied backward design principles — starting from desired performance outcomes and reverse-engineering the learning experience.",
    storyboarding:
      "Developed content architecture maps showing how each intervention module connects to specific competency gaps. Created interaction wireframes for scenario-based learning activities. Designed assessment blueprints aligned to each competency tier.",
    tools: ["ADDIE", "Bloom's Taxonomy", "Articulate 360", "MS Office", "LMS"],
    assessmentDesign:
      "Developed assessment frameworks for 5+ modules measuring learning effectiveness, knowledge retention, and on-the-job application. Designed pre/post assessments to quantify skill gain. Built rubric-based evaluation tools for performance observation.",
    deployment:
      "Delivered interventions through a blended format — self-paced e-learning modules supplemented by facilitated workshops. Streamlined training delivery workflows, achieving systematic scheduling and resource allocation.",
    impact: [
      "Achieved 20% improvement in on-time distribution of learning materials",
      "Mapped targeted interventions to measurable business objectives",
      "Developed reusable assessment frameworks for ongoing capability measurement",
      "Created scalable TNA methodology adaptable across departments",
    ],
    evidence: [
      { label: "TNA Framework: Multi-Level Analysis Grid", type: "Framework", description: "Three-tier analysis covering organizational goals, task-level competencies, and individual skill gaps — with severity scoring and priority ranking." },
      { label: "Competency Map: Current vs Target", type: "Design Artefact", description: "Visual competency mapping grid showing baseline assessment scores against target proficiency levels for 6 core skill domains." },
      { label: "Assessment Blueprint: Pre/Post Design", type: "Assessment", description: "Paired pre- and post-intervention assessments measuring knowledge gain, confidence shift, and intended application for each intervention module." },
    ],
  },
  {
    id: "faculty",
    icon: GraduationCap,
    tag: "Academic L&D",
    tagColor: "bg-amber-500/20 text-amber-400",
    title: "Faculty Development & Pedagogical Enhancement Program",
    client: "Teaching Learning Enhancement Cell — Christ University",
    problem:
      "Faculty members across multiple departments lacked exposure to contemporary pedagogical frameworks, active learning strategies, and technology-enhanced instruction methods. Instructional quality varied significantly across departments, with limited mechanisms for cross-departmental knowledge sharing.",
    needsAnalysis:
      "Assessed pedagogical needs through faculty surveys and classroom observation data. Identified gaps in active learning methodology adoption, assessment design practices, and educational technology integration. Mapped departmental priorities to institutional teaching excellence goals.",
    designStrategy:
      "Designed a multi-format faculty development program combining workshops, resource toolkits, and collaborative peer learning sessions. Applied adult learning principles — self-directed, experience-anchored, and immediately applicable. Created modular content adaptable to diverse disciplinary contexts.",
    storyboarding:
      "Developed workshop flow blueprints with timed activities, discussion prompts, and hands-on practice segments. Created visual presentation templates ensuring brand consistency across 5+ departments. Designed facilitator guides with embedded assessment checkpoints.",
    tools: ["Canva", "MS Office", "Workshop Facilitation", "Resource Development"],
    assessmentDesign:
      "Integrated real-time workshop assessments through audience response activities and reflective exercises. Designed post-workshop evaluation instruments measuring knowledge gain, confidence shift, and intended practice changes.",
    deployment:
      "Coordinated and delivered 10+ institutional workshops, seminars, and training programs. Developed consistent visual materials — presentations, posters, and reference guides — across all departmental sessions. Streamlined scheduling and resource distribution workflows.",
    impact: [
      "Coordinated 10+ workshops and faculty training programs",
      "Developed materials across 5+ departments",
      "Streamlined training delivery with 20% improvement in on-time distribution",
      "Enhanced pedagogical capability across institutional faculty",
    ],
    evidence: [
      { label: "Workshop Flow Blueprint", type: "Design Artefact", description: "Timed activity sequence with facilitator cues, discussion prompts, hands-on segments, and embedded formative assessment checkpoints for a 90-minute session." },
      { label: "Unified Template System", type: "Design System", description: "Cross-departmental visual template with consistent section structures, branding, content depth standards, and post-workshop reference card format." },
      { label: "Evaluation Instrument: Post-Workshop", type: "Assessment", description: "Multi-dimensional feedback form measuring knowledge gain, confidence shift, and intended practice changes — aggregated across 10+ sessions." },
    ],
  },
  {
    id: "inclusive",
    icon: Heart,
    tag: "Inclusive Design",
    tagColor: "bg-rose-500/20 text-rose-400",
    title: "Sensory-Friendly Mathematics Workbook for Neurodiverse Learners",
    client: "Anantha Academy for Special Education — Bengaluru",
    problem:
      "Grade 1 students with Autism Spectrum Disorder and ADHD struggled with standard mathematics curricula that relied on dense text, abstract representations, and minimal sensory accommodation. Teachers spent excessive preparation time adapting materials, reducing direct instruction time.",
    needsAnalysis:
      "Observed classroom interactions and analyzed existing learning materials against Universal Design for Learning (UDL) principles. Identified sensory processing barriers, attention span constraints, and representational gaps. Consulted with special educators to map individualized learning needs to curriculum standards.",
    designStrategy:
      "Applied UDL framework to design a sensory-friendly workbook covering place value, patterns, and basic operations. Incorporated multiple means of representation (visual, tactile, spatial), engagement (choice, relevance, self-regulation supports), and action/expression (varied response formats). Designed with high contrast, clear spatial organization, and minimal cognitive load.",
    storyboarding:
      "Created page-by-page content maps specifying visual hierarchy, interaction zones, and sensory elements. Designed progressive complexity sequences with built-in scaffolding. Mapped each activity to specific curriculum standards and IEP goal categories.",
    tools: ["UDL Framework", "Canva", "Curriculum Standards", "MS Office"],
    assessmentDesign:
      "Designed embedded, low-pressure assessment activities that double as learning tasks. Created observation checklists for teacher use during guided practice. Built task completion metrics aligned to IEP benchmarks.",
    deployment:
      "Pilot-tested the workbook across 15+ students with individualized support from classroom teachers. Collected systematic feedback through teacher observation logs and student engagement metrics. Iterated design based on pilot data.",
    impact: [
      "Improved student task completion by 30% during pilot testing",
      "Reduced teacher preparation time for adapted materials",
      "Aligned content with curriculum standards and inclusive education principles",
      "Piloted across 15+ students with documented engagement improvements",
    ],
    evidence: [
      { label: "UDL Audit: Existing vs Redesigned Materials", type: "Comparison", description: "Side-by-side comparison showing text-heavy originals versus redesigned pages with 150% larger visuals, icon-based instructions, and high-contrast color coding." },
      { label: "Content Map: Cognitive Load Sequencing", type: "Design Artefact", description: "Page-by-page activity map resequenced by cognitive load rather than textbook chapter order, with sensory transition breaks between demanding tasks." },
      { label: "Observation Checklist: Pilot Data", type: "Assessment", description: "Teacher observation instrument tracking attention duration, task completion, help-seeking frequency, and engagement indicators across 15+ pilot students." },
    ],
  },
];

const phaseIcons = [
  { icon: Target, label: "Problem" },
  { icon: Search, label: "Needs Analysis" },
  { icon: Lightbulb, label: "Design Strategy" },
  { icon: Layout, label: "Storyboarding" },
  { icon: Wrench, label: "Tools" },
  { icon: ClipboardCheck, label: "Assessment" },
  { icon: Rocket, label: "Deployment" },
  { icon: TrendingUp, label: "Impact" },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = study.icon;

  return (
    <AnimatedSection>
      <motion.div
        layout
        className="card-glow rounded-2xl bg-card border border-border overflow-hidden hover:border-accent/20 transition-colors"
      >
        <div
          className="p-6 sm:p-8 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 border border-accent/20">
                <Icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold ${study.tagColor} mb-2`}>
                  {study.tag}
                </span>
                <h3 className="text-lg font-bold leading-tight">{study.title}</h3>
                <p className="text-xs text-muted mt-1 font-mono">{study.client}</p>
              </div>
            </div>
            <button className="shrink-0 mt-2 p-2 rounded-lg hover:bg-surface transition-colors">
              {isExpanded ? (
                <ChevronUp className="h-4 w-4 text-muted" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted" />
              )}
            </button>
          </div>

          {!isExpanded && (
            <p className="text-sm text-muted mt-4 line-clamp-2">{study.problem}</p>
          )}
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 sm:px-8 pb-8">
                {/* Phase Flow */}
                <div className="flex items-center gap-1 mb-8 overflow-x-auto pb-2">
                  {phaseIcons.map((phase, i) => {
                    const PIcon = phase.icon;
                    return (
                      <div key={phase.label} className="flex items-center">
                        <div className="flex flex-col items-center gap-1 min-w-[64px]">
                          <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                            <PIcon className="h-3.5 w-3.5 text-accent" />
                          </div>
                          <span className="text-[9px] text-muted font-medium text-center">{phase.label}</span>
                        </div>
                        {i < phaseIcons.length - 1 && (
                          <div className="h-px w-4 bg-border shrink-0 mt-[-12px]" />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="space-y-6">
                  <PhaseBlock icon={Target} title="Learning / Business Problem" content={study.problem} />
                  <PhaseBlock icon={Search} title="Needs Analysis Approach" content={study.needsAnalysis} />
                  <PhaseBlock icon={Lightbulb} title="Design Strategy" content={study.designStrategy} />
                  <PhaseBlock icon={Layout} title="Storyboarding Process" content={study.storyboarding} />

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Wrench className="h-4 w-4 text-accent" />
                      <h4 className="text-sm font-semibold">Course Development Tools</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1.5 text-xs font-medium bg-surface border border-border rounded-lg"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <PhaseBlock icon={ClipboardCheck} title="Assessment Design" content={study.assessmentDesign} />
                  <PhaseBlock icon={Rocket} title="Deployment Method" content={study.deployment} />

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <h4 className="text-sm font-semibold">Measurable Impact</h4>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {study.impact.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 p-3 rounded-lg bg-surface border border-border"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                          <span className="text-xs text-muted leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Evidence & Artefacts */}
                  {study.evidence && study.evidence.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Layout className="h-4 w-4 text-accent" />
                        <h4 className="text-sm font-semibold">Evidence & Design Artefacts</h4>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {study.evidence.map((ev, i) => (
                          <div key={i} className="p-4 rounded-xl bg-surface border border-border hover:border-accent/20 transition-colors">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-[9px] font-mono font-semibold px-2 py-0.5 rounded bg-accent/10 text-accent">{ev.type}</span>
                            </div>
                            <h5 className="text-xs font-semibold mb-1">{ev.label}</h5>
                            <p className="text-[11px] text-muted leading-relaxed">{ev.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  );
}

function PhaseBlock({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-4 w-4 text-accent" />
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
      <p className="text-sm text-muted leading-relaxed pl-6">{content}</p>
    </div>
  );
}

export default function ExperimentsPage() {
  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Projects"
          title="Portfolio Case Studies"
          description="Each project follows a structured design intervention methodology — from identifying the learning problem through needs analysis, design, development, and measurable impact evaluation."
        />

        {/* ADDIE Process Bar */}
        <AnimatedSection>
          <div className="mb-12 p-4 rounded-xl bg-card border border-border">
            <div className="flex items-center justify-between gap-2 overflow-x-auto">
              {["Analyze", "Design", "Develop", "Implement", "Evaluate"].map((phase, i) => (
                <div key={phase} className="flex items-center">
                  <div className="flex items-center gap-2 min-w-fit">
                    <div className="h-8 w-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-xs font-bold text-accent">
                      {i + 1}
                    </div>
                    <span className="text-xs font-semibold whitespace-nowrap">{phase}</span>
                  </div>
                  {i < 4 && <div className="h-px w-8 bg-border mx-2 shrink-0" />}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-muted mt-3 font-mono text-center tracking-wider">
              ADDIE FRAMEWORK — APPLIED ACROSS ALL PROJECTS
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </div>
  );
}
