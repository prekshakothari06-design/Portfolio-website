"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Package,
  BarChart3,
  CheckCircle2,
  FileCode,
  ArrowRight,
  Database,
  Settings,
  Users,
  Clock,
  Award,
  AlertTriangle,
  TrendingUp,
  Layers,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const scormWorkflow = [
  {
    step: 1,
    icon: FileCode,
    title: "Author Content",
    description: "Build interactive modules in Articulate 360 with embedded assessments, scenario branches, and media assets.",
    details: ["Define learning objectives and module structure", "Create storyboards with interaction specifications", "Build in Storyline with slide layers, triggers, and variables"],
  },
  {
    step: 2,
    icon: Settings,
    title: "Configure SCORM Settings",
    description: "Set tracking preferences, completion criteria, and reporting variables before packaging.",
    details: ["Select SCORM 1.2 or 2004 standard based on LMS compatibility", "Configure completion criteria: slide completion, quiz score, or both", "Set pass/fail thresholds and attempt limits"],
  },
  {
    step: 3,
    icon: Package,
    title: "Package & Export",
    description: "Export as SCORM-compliant .zip package with all assets, manifest files, and tracking code included.",
    details: ["Generate imsmanifest.xml with metadata", "Bundle all HTML, JS, media, and tracking files", "Validate package structure before upload"],
  },
  {
    step: 4,
    icon: Database,
    title: "Upload to LMS",
    description: "Import the SCORM package into the learning management system and configure enrollment settings.",
    details: ["Upload .zip package to LMS content library", "Set enrollment rules: mandatory, elective, or manager-assigned", "Configure notification triggers for completions and failures"],
  },
  {
    step: 5,
    icon: Users,
    title: "Assign & Launch",
    description: "Enroll learner groups, set deadlines, and activate the course for access.",
    details: ["Assign to user groups by role, department, or location", "Set completion deadlines and reminder intervals", "Enable mobile access if supported"],
  },
  {
    step: 6,
    icon: BarChart3,
    title: "Track & Report",
    description: "Monitor completion rates, assessment scores, and time-on-task through LMS dashboards.",
    details: ["Track individual and cohort completion rates", "Analyze assessment score distributions", "Generate manager reports with pass/fail breakdowns"],
  },
];

const dashboardMetrics = [
  { label: "Course Completion Rate", value: "87%", trend: "+12%", icon: CheckCircle2, color: "text-emerald-400" },
  { label: "Average Assessment Score", value: "82%", trend: "+8%", icon: Award, color: "text-sky-400" },
  { label: "Average Time on Task", value: "24 min", trend: "-3 min", icon: Clock, color: "text-amber-400" },
  { label: "At-Risk Learners", value: "14", trend: "-5", icon: AlertTriangle, color: "text-rose-400" },
  { label: "Modules Deployed", value: "5", trend: "+2", icon: Layers, color: "text-violet-400" },
  { label: "Active Learners", value: "186", trend: "+34", icon: Users, color: "text-cyan-400" },
];

const completionData = [
  { module: "Module 1: Welcome & Orientation", enrolled: 200, completed: 189, avgScore: 88, status: "active" },
  { module: "Module 2: Product Knowledge", enrolled: 200, completed: 172, avgScore: 81, status: "active" },
  { module: "Module 3: Customer Interaction", enrolled: 200, completed: 164, avgScore: 79, status: "active" },
  { module: "Module 4: Safety & Compliance", enrolled: 200, completed: 158, avgScore: 85, status: "active" },
  { module: "Module 5: Assessment & Certification", enrolled: 200, completed: 142, avgScore: 76, status: "active" },
];

export default function LmsLabPage() {
  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="LMS & Deployment Lab"
          title="From Package to Performance Data"
          description="SCORM packaging workflows, LMS deployment processes, and completion tracking dashboards — the technical infrastructure that turns learning design into measurable outcomes."
        />

        {/* SCORM Packaging Workflow */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                SCORM Packaging Workflow
              </span>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {scormWorkflow.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimatedSection key={step.step} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="card-glow rounded-xl bg-card border border-border p-6 hover:border-accent/20 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="h-12 w-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        {i < scormWorkflow.length - 1 && (
                          <div className="w-px h-8 bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-mono font-bold text-accent">
                            STEP {step.step}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold mb-1">{step.title}</h3>
                        <p className="text-xs text-muted leading-relaxed mb-3">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.details.map((detail, di) => (
                            <div
                              key={di}
                              className="flex items-center gap-1.5 px-2.5 py-1 bg-surface border border-border rounded-lg text-[10px] text-muted"
                            >
                              <CheckCircle2 className="h-2.5 w-2.5 text-accent" />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* LMS Dashboard Mockup */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                LMS Dashboard — Performance Overview
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card-glow rounded-2xl bg-card border border-border overflow-hidden">
              {/* Dashboard Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Monitor className="h-4 w-4 text-accent" />
                  <span className="text-xs font-semibold">Learning Dashboard</span>
                  <span className="text-[10px] text-muted">|</span>
                  <span className="text-[10px] text-muted font-mono">Corporate Onboarding Program</span>
                </div>
                <span className="text-[10px] text-muted font-mono">Last updated: Live</span>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-border">
                {dashboardMetrics.map((metric) => {
                  const Icon = metric.icon;
                  return (
                    <div key={metric.label} className="bg-card p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Icon className={`h-4 w-4 ${metric.color}`} />
                        <span className="text-[10px] text-emerald-400 font-mono">{metric.trend}</span>
                      </div>
                      <p className="text-xl font-bold">{metric.value}</p>
                      <p className="text-[10px] text-muted mt-0.5">{metric.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Completion Table */}
              <div className="p-4">
                <h4 className="text-xs font-semibold mb-3 flex items-center gap-2">
                  <BarChart3 className="h-3.5 w-3.5 text-accent" />
                  Module Completion Tracking
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 pr-4 text-muted font-mono font-semibold text-[10px]">MODULE</th>
                        <th className="text-center py-2 px-2 text-muted font-mono font-semibold text-[10px]">ENROLLED</th>
                        <th className="text-center py-2 px-2 text-muted font-mono font-semibold text-[10px]">COMPLETED</th>
                        <th className="text-center py-2 px-2 text-muted font-mono font-semibold text-[10px]">AVG SCORE</th>
                        <th className="text-left py-2 pl-2 text-muted font-mono font-semibold text-[10px]">PROGRESS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {completionData.map((row) => {
                        const pct = Math.round((row.completed / row.enrolled) * 100);
                        return (
                          <tr key={row.module} className="border-b border-border/50 hover:bg-surface/50">
                            <td className="py-3 pr-4 font-medium">{row.module}</td>
                            <td className="py-3 px-2 text-center text-muted">{row.enrolled}</td>
                            <td className="py-3 px-2 text-center">{row.completed}</td>
                            <td className="py-3 px-2 text-center">
                              <span className={row.avgScore >= 80 ? "text-emerald-400" : "text-amber-400"}>
                                {row.avgScore}%
                              </span>
                            </td>
                            <td className="py-3 pl-2">
                              <div className="flex items-center gap-2">
                                <div className="h-1.5 w-24 bg-surface rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-accent rounded-full"
                                    style={{ width: `${pct}%` }}
                                  />
                                </div>
                                <span className="text-[10px] text-muted font-mono">{pct}%</span>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Key Takeaways */}
        <AnimatedSection>
          <div className="p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="h-4 w-4 text-accent" />
              <h3 className="text-sm font-bold">Deployment Insights</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "SCORM 1.2 remains the most universally compatible standard across enterprise LMS platforms",
                "Completion tracking should combine slide-view data AND assessment scores for accurate measurement",
                "Phased rollout across regional clusters reduces support load and enables iterative improvement",
                "Manager notification workflows increase completion rates by 15–20% compared to self-paced only",
              ].map((insight, i) => (
                <div key={i} className="flex items-start gap-2 p-3 rounded-lg bg-surface border border-border">
                  <CheckCircle2 className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" />
                  <p className="text-xs text-muted leading-relaxed">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
