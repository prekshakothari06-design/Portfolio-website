"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  User,
  FileText,
  Download,
  Map,
  ClipboardCheck,
  Layers,
  BookOpen,
  Target,
  Lightbulb,
  BarChart3,
  ChevronRight,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

type TabKey = "corporate" | "educator" | "student";

const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
  { key: "corporate", label: "Corporate L&D", icon: Building2 },
  { key: "educator", label: "Educator", icon: GraduationCap },
  { key: "student", label: "Early Career", icon: User },
];

interface ToolkitItem {
  icon: React.ElementType;
  title: string;
  description: string;
  includes: string[];
  tag: string;
}

const toolkitData: Record<TabKey, { intro: string; items: ToolkitItem[] }> = {
  corporate: {
    intro:
      "Practical frameworks and templates for L&D professionals designing onboarding systems, training interventions, and assessment architectures.",
    items: [
      {
        icon: FileText,
        title: "Training Needs Analysis Template",
        description:
          "A structured TNA framework covering organizational, task, and individual analysis levels. Includes stakeholder interview guides, competency mapping grids, and gap severity scoring matrices.",
        includes: [
          "Multi-level analysis worksheet",
          "SME interview question bank",
          "Gap severity scoring matrix",
          "Prioritization framework",
        ],
        tag: "Analysis",
      },
      {
        icon: Map,
        title: "Onboarding Journey Map",
        description:
          "A visual blueprint for designing phased onboarding experiences — from pre-boarding through 90-day milestones. Maps touchpoints, learning activities, and success metrics at each stage.",
        includes: [
          "Phase-by-phase journey template",
          "Touchpoint mapping canvas",
          "Milestone tracker",
          "Stakeholder responsibility matrix",
        ],
        tag: "Design",
      },
      {
        icon: ClipboardCheck,
        title: "Assessment Blueprint",
        description:
          "A framework for designing competency-aligned assessments using Bloom's Taxonomy. Includes question type matrices, rubric templates, and scoring calibration guides.",
        includes: [
          "Bloom's-aligned question matrix",
          "Rubric development template",
          "Pre/post assessment comparison tool",
          "Feedback loop design guide",
        ],
        tag: "Assessment",
      },
      {
        icon: Layers,
        title: "Simulation Design Framework",
        description:
          "A structured approach to designing scenario-based simulations and branching scenarios. Covers scenario scripting, decision tree mapping, and consequence design.",
        includes: [
          "Scenario scripting template",
          "Decision tree mapping tool",
          "Branching logic flowchart",
          "Debriefing guide",
        ],
        tag: "Development",
      },
    ],
  },
  educator: {
    intro:
      "Resources for educators and faculty members looking to enhance pedagogical practices, design engaging workshops, and build inclusive curricula.",
    items: [
      {
        icon: BookOpen,
        title: "Workshop Planner",
        description:
          "A comprehensive workshop design template with timed activity blocks, facilitator notes, material checklists, and participant engagement strategies.",
        includes: [
          "Timed activity block planner",
          "Facilitator guide template",
          "Material preparation checklist",
          "Engagement strategy menu",
        ],
        tag: "Facilitation",
      },
      {
        icon: Layers,
        title: "Curriculum Framework",
        description:
          "A backward design curriculum template that starts from learning outcomes and maps to assessment strategies, instructional activities, and resource requirements.",
        includes: [
          "Outcome-first design canvas",
          "Assessment alignment matrix",
          "Activity sequencing tool",
          "Resource mapping template",
        ],
        tag: "Curriculum",
      },
      {
        icon: Lightbulb,
        title: "Engagement Strategy Kit",
        description:
          "A collection of evidence-based active learning strategies, discussion facilitation techniques, and formative assessment methods for classroom and virtual settings.",
        includes: [
          "Active learning strategy cards",
          "Discussion prompt generator",
          "Formative assessment toolkit",
          "Virtual engagement playbook",
        ],
        tag: "Engagement",
      },
    ],
  },
  student: {
    intro:
      "Tools and frameworks for students and early-career professionals preparing for campus-to-corporate transitions, skill development, and career readiness.",
    items: [
      {
        icon: Target,
        title: "Skill Gap Assessment",
        description:
          "A self-assessment framework that maps current competencies against target role requirements. Identifies priority development areas and recommended learning pathways.",
        includes: [
          "Competency self-assessment grid",
          "Role requirement mapping tool",
          "Gap prioritization matrix",
          "Development action planner",
        ],
        tag: "Assessment",
      },
      {
        icon: BarChart3,
        title: "Learning Planner",
        description:
          "A structured learning plan template that helps organize skill acquisition across time horizons — weekly, monthly, and quarterly — with built-in reflection checkpoints.",
        includes: [
          "Weekly learning schedule",
          "Monthly milestone tracker",
          "Reflection journal template",
          "Resource curation guide",
        ],
        tag: "Planning",
      },
      {
        icon: Lightbulb,
        title: "Career Readiness Guide",
        description:
          "A comprehensive guide for transitioning from academic to professional environments. Covers workplace communication, professional portfolio building, and interview preparation from an L&D perspective.",
        includes: [
          "Workplace readiness checklist",
          "Portfolio building framework",
          "Professional communication guide",
          "Interview preparation toolkit",
        ],
        tag: "Career",
      },
    ],
  },
};

export default function ToolkitsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("corporate");
  const data = toolkitData[activeTab];

  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Stakeholder Toolkits"
          title="Frameworks, Templates & Blueprints"
          description="Segmented resource hubs designed for corporate L&D professionals, educators, and early-career learners. Each toolkit contains actionable frameworks grounded in instructional design best practices."
        />

        {/* Tab Selector */}
        <AnimatedSection>
          <div className="flex gap-2 mb-12 p-1.5 bg-card border border-border rounded-xl w-fit">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-accent text-white shadow-lg shadow-accent/20"
                      : "text-muted hover:text-foreground hover:bg-surface"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Intro */}
        <AnimatedSection>
          <p className="text-sm text-muted leading-relaxed mb-8 max-w-2xl">{data.intro}</p>
        </AnimatedSection>

        {/* Toolkit Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {data.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-glow rounded-2xl bg-card border border-border p-6 h-full hover:border-accent/20 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-semibold text-accent tracking-wider">
                          {item.tag}
                        </span>
                        <h3 className="text-sm font-bold">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-4">{item.description}</p>
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono font-semibold text-muted tracking-wider uppercase">
                      Includes
                    </p>
                    {item.includes.map((inc) => (
                      <div
                        key={inc}
                        className="flex items-center gap-2 text-xs text-muted"
                      >
                        <ChevronRight className="h-3 w-3 text-accent shrink-0" />
                        {inc}
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-xs font-semibold hover:border-accent/40 transition-colors group">
                    <Download className="h-3.5 w-3.5 text-accent group-hover:scale-110 transition-transform" />
                    Download Template
                  </button>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
