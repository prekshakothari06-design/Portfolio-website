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
import {
  generateTNATemplate,
  generateOnboardingJourneyMap,
  generateAssessmentBlueprint,
  generateWorkshopPlanning,
  generateLessonDesignPlanner,
  generateSkillGapAssessment,
  generateCareerReadinessChecklist,
} from "@/lib/generatePdf";

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
  pdfGenerator: () => void;
}

const downloadPdf = (generator: () => { save: (name: string) => void }, filename: string) => {
  const doc = generator();
  doc.save(filename);
};

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
        pdfGenerator: () => downloadPdf(generateTNATemplate, "TNA_Template.pdf"),
      },
      {
        icon: Map,
        title: "Onboarding Journey Map",
        description:
          "A visual blueprint for designing phased onboarding experiences \u2014 from pre-boarding through 90-day milestones. Maps touchpoints, learning activities, and success metrics at each stage.",
        includes: [
          "Phase-by-phase journey template",
          "Touchpoint mapping canvas",
          "Milestone tracker",
          "Stakeholder responsibility matrix",
        ],
        tag: "Design",
        pdfGenerator: () => downloadPdf(generateOnboardingJourneyMap, "Onboarding_Journey_Map.pdf"),
      },
      {
        icon: ClipboardCheck,
        title: "Assessment Blueprint",
        description:
          "A framework for designing competency-aligned assessments using Bloom\u2019s Taxonomy. Includes question type matrices, rubric templates, and scoring calibration guides.",
        includes: [
          "Bloom\u2019s-aligned question matrix",
          "Rubric development template",
          "Pre/post assessment comparison tool",
          "Feedback loop design guide",
        ],
        tag: "Assessment",
        pdfGenerator: () => downloadPdf(generateAssessmentBlueprint, "Assessment_Blueprint.pdf"),
      },
    ],
  },
  educator: {
    intro:
      "Resources for educators and faculty members looking to enhance pedagogical practices, design engaging workshops, and build inclusive curricula.",
    items: [
      {
        icon: BookOpen,
        title: "Workshop Planning Template",
        description:
          "A comprehensive workshop design template with timed activity blocks, facilitator notes, material checklists, and participant engagement strategies.",
        includes: [
          "Learning goals alignment",
          "Session flow with timed blocks",
          "Activities & materials list",
          "Assessment method design",
        ],
        tag: "Facilitation",
        pdfGenerator: () => downloadPdf(generateWorkshopPlanning, "Workshop_Planning_Template.pdf"),
      },
      {
        icon: Layers,
        title: "Lesson Design Planner",
        description:
          "A structured lesson planning template covering topic, outcomes, instructional strategy, engagement activities, and reflection prompts \u2014 all aligned to evidence-based pedagogy.",
        includes: [
          "Learning outcomes with Bloom\u2019s verbs",
          "Instructional strategy block",
          "Engagement activity design",
          "Reflection prompt section",
        ],
        tag: "Curriculum",
        pdfGenerator: () => downloadPdf(generateLessonDesignPlanner, "Lesson_Design_Planner.pdf"),
      },
    ],
  },
  student: {
    intro:
      "Tools and frameworks for students and early-career professionals preparing for campus-to-corporate transitions, skill development, and career readiness.",
    items: [
      {
        icon: Target,
        title: "Skill Gap Self-Assessment",
        description:
          "A self-assessment framework with rating scales across communication, problem-solving, collaboration, and workplace readiness. Includes action planning section.",
        includes: [
          "Rating scale for 6 skill areas",
          "Evidence/example column",
          "Development goal tracker",
          "Action plan section",
        ],
        tag: "Assessment",
        pdfGenerator: () => downloadPdf(generateSkillGapAssessment, "Skill_Gap_Self_Assessment.pdf"),
      },
      {
        icon: BarChart3,
        title: "Career Readiness Checklist",
        description:
          "A comprehensive checklist covering resume readiness, interview skills, workplace behaviour, and professional communication \u2014 with status tracking.",
        includes: [
          "Resume readiness items",
          "Interview preparation checklist",
          "Workplace behaviour guide",
          "Professional communication items",
        ],
        tag: "Career",
        pdfGenerator: () => downloadPdf(generateCareerReadinessChecklist, "Career_Readiness_Checklist.pdf"),
      },
    ],
  },
};

export default function ToolkitsPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("corporate");
  const data = toolkitData[activeTab];

  return (
    <div className="warm-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Stakeholder Toolkits"
          title="Frameworks, Templates & Blueprints"
          description="Segmented resource hubs designed for corporate L&D professionals, educators, and early-career learners. Each toolkit contains actionable, downloadable templates grounded in instructional design best practices."
        />

        {/* Tab Selector */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-12 p-1.5 bg-white border border-border rounded-full w-fit shadow-sm">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-accent text-white shadow-sm"
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
                  className="soft-card p-6 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <span className="text-[10px] font-semibold text-accent tracking-wider uppercase">
                          {item.tag}
                        </span>
                        <h3 className="text-sm font-bold text-heading">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">{item.description}</p>
                  <div className="space-y-2 mb-5">
                    <p className="text-xs font-semibold text-heading tracking-wider uppercase">
                      Includes
                    </p>
                    {item.includes.map((inc) => (
                      <div
                        key={inc}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <ChevronRight className="h-3 w-3 text-accent shrink-0" />
                        {inc}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={item.pdfGenerator}
                    className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dim text-white rounded-full text-xs font-semibold transition-colors shadow-sm group"
                  >
                    <Download className="h-3.5 w-3.5 group-hover:scale-110 transition-transform" />
                    Download PDF Template
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
