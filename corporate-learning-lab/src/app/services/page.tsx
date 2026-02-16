"use client";

import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  User,
  Search,
  PenTool,
  Rocket,
  BarChart3,
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  Monitor,
  Users,
  Layers,
  Target,
  FileText,
  Lightbulb,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const serviceGroups = [
  {
    icon: Building2,
    title: "Corporate Services",
    subtitle: "Workforce Performance & Capability Building",
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "hover:border-sky-500/30",
    services: [
      {
        icon: BookOpen,
        name: "Onboarding Design",
        desc: "ADDIE-based onboarding systems that reduce ramp-up time and ensure consistent knowledge transfer across distributed teams.",
      },
      {
        icon: Search,
        name: "Training Needs Analysis",
        desc: "Systematic TNA frameworks using SME collaboration, competency mapping, and gap severity scoring to align training investments with business outcomes.",
      },
      {
        icon: Monitor,
        name: "E-Learning Development",
        desc: "Interactive, scenario-driven SCORM-compliant modules built on Articulate 360 with embedded assessments and completion tracking.",
      },
      {
        icon: ClipboardCheck,
        name: "Assessment Architecture",
        desc: "Competency-mapped assessment frameworks using Bloom's Taxonomy, scenario simulations, and feedback logic systems for measurable learning validation.",
      },
    ],
  },
  {
    icon: GraduationCap,
    title: "Academic Institution Services",
    subtitle: "Teaching Excellence & Curriculum Innovation",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "hover:border-amber-500/30",
    services: [
      {
        icon: Users,
        name: "Faculty Development",
        desc: "Workshop-based programs on contemporary pedagogy, active learning strategies, and technology-enhanced instruction — designed for cross-departmental impact.",
      },
      {
        icon: Layers,
        name: "Curriculum Consulting",
        desc: "Competency-aligned curriculum architecture that maps learning outcomes to assessment strategies and progressive skill development.",
      },
      {
        icon: Target,
        name: "Inclusive Learning Audits",
        desc: "UDL-based audits of existing curricula and materials to identify accessibility barriers and design sensory-friendly, neurodiverse-inclusive learning experiences.",
      },
    ],
  },
  {
    icon: User,
    title: "Individual Services",
    subtitle: "Career Transition & Learning Strategy",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "hover:border-violet-500/30",
    services: [
      {
        icon: FileText,
        name: "Campus to Corporate Readiness",
        desc: "Diagnostic assessments and learning pathways that bridge academic preparation with workplace competency requirements.",
      },
      {
        icon: Lightbulb,
        name: "Learning Strategy Coaching",
        desc: "Personalized learning design consultation — study systems, skill acquisition frameworks, and performance optimization strategies.",
      },
      {
        icon: Target,
        name: "Career Transition Guidance",
        desc: "Skill mapping, portfolio development, and competency positioning for professionals transitioning into L&D, instructional design, or educational technology roles.",
      },
    ],
  },
];

const workflowSteps = [
  {
    icon: Search,
    phase: "Diagnose",
    title: "Identify the Gap",
    desc: "Conduct needs analysis, stakeholder interviews, and competency mapping to define the learning problem.",
  },
  {
    icon: PenTool,
    phase: "Design",
    title: "Architect the Solution",
    desc: "Apply ADDIE, Bloom's Taxonomy, and evidence-based frameworks to design the learning experience.",
  },
  {
    icon: Rocket,
    phase: "Deliver",
    title: "Build & Deploy",
    desc: "Develop content using Articulate 360, package as SCORM, and deploy through LMS with tracking.",
  },
  {
    icon: BarChart3,
    phase: "Evaluate",
    title: "Measure Impact",
    desc: "Assess learning effectiveness through formative/summative evaluations and performance metrics.",
  },
];

export default function ServicesPage() {
  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Services"
          title="Learning Design Services"
          description="Structured consulting and design services for organizations, academic institutions, and individuals — from diagnosis through measurable impact."
        />

        {/* Service Workflow */}
        <AnimatedSection>
          <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xs font-mono font-semibold tracking-widest uppercase text-accent mb-6">
              Service Workflow
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {workflowSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.phase}
                    whileHover={{ y: -4 }}
                    className="relative p-5 rounded-xl bg-surface border border-border group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-accent tracking-wider">
                          PHASE {i + 1}
                        </span>
                        <p className="text-sm font-bold">{step.phase}</p>
                      </div>
                    </div>
                    <h4 className="text-xs font-semibold mb-1">{step.title}</h4>
                    <p className="text-[11px] text-muted leading-relaxed">{step.desc}</p>
                    {i < 3 && (
                      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                        <ArrowRight className="h-4 w-4 text-accent/40" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Service Groups */}
        <div className="space-y-8">
          {serviceGroups.map((group, gi) => {
            const GroupIcon = group.icon;
            return (
              <AnimatedSection key={group.title} delay={gi * 0.1}>
                <div className={`card-glow rounded-2xl bg-card border border-border p-6 sm:p-8 ${group.borderColor} transition-colors`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center`}>
                      <GroupIcon className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">{group.title}</h2>
                      <p className="text-xs text-muted">{group.subtitle}</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {group.services.map((service) => {
                      const SIcon = service.icon;
                      return (
                        <motion.div
                          key={service.name}
                          whileHover={{ scale: 1.01 }}
                          className="p-4 rounded-xl bg-surface border border-border hover:border-accent/20 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <SIcon className="h-4 w-4 text-accent" />
                            <h3 className="text-sm font-semibold">{service.name}</h3>
                          </div>
                          <p className="text-xs text-muted leading-relaxed">{service.desc}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="mt-16 text-center p-8 rounded-2xl bg-card border border-border">
            <h3 className="text-xl font-bold mb-3">Let&apos;s Build Something That Works</h3>
            <p className="text-sm text-muted mb-6 max-w-lg mx-auto">
              Whether you need a full onboarding redesign, a training needs analysis, or an inclusive curriculum audit — the process starts with a conversation.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&to=prekshakothari06@gmail.com"
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
