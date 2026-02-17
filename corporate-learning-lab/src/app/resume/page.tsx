"use client";

import {
  FileText,
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Award,
  Wrench,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const experience = [
  {
    role: "Instructional Design Intern",
    org: "Cafe Coffee Day, Bangalore",
    period: "2025",
    highlights: [
      "Designed ADDIE-based onboarding modules for 200+ frontline staff",
      "Built 5+ SCORM-compliant e-learning modules with scenario branching",
      "Achieved 25% improvement in knowledge retention assessments",
    ],
  },
  {
    role: "Instructional Design Intern",
    org: "Things Education LLP, Bangalore",
    period: "2024–2025",
    highlights: [
      "Conducted multi-level Training Needs Analysis with competency mapping",
      "Developed assessment frameworks for 5+ intervention modules",
      "Achieved 20% improvement in on-time material distribution",
    ],
  },
  {
    role: "Student Coordinator — Teaching Learning Enhancement Cell",
    org: "Christ University, Bangalore",
    period: "2024–2025",
    highlights: [
      "Coordinated 10+ faculty development workshops and training programs",
      "Created unified visual template system across 5+ departments",
      "Designed post-workshop evaluation instruments and facilitator guides",
    ],
  },
  {
    role: "Inclusive Education Design Intern",
    org: "Anantha Academy for Special Education, Bangalore",
    period: "2024",
    highlights: [
      "Designed UDL-based sensory-friendly mathematics workbook",
      "Improved student task completion by 30% during pilot testing",
      "Piloted across 15+ neurodiverse learners with documented engagement gains",
    ],
  },
];

const education = [
  {
    degree: "M.Sc. Psychology (Specialization: Industrial & Organizational Psychology)",
    institution: "Christ University, Bangalore",
    period: "2023–2025",
  },
  {
    degree: "B.A. Psychology",
    institution: "Christ University, Bangalore",
    period: "2020–2023",
  },
];

const coreSkills = [
  "Instructional Design (ADDIE, SAM)",
  "Training Needs Analysis",
  "E-Learning Development (Articulate 360)",
  "Assessment Design (Bloom's Taxonomy)",
  "SCORM Packaging & LMS Deployment",
  "Universal Design for Learning (UDL)",
  "Storyboarding & Content Chunking",
  "Workshop Facilitation",
  "Competency Mapping",
  "Curriculum Design",
];

const certifications = [
  "Instructional Design Foundations — LinkedIn Learning",
  "E-Learning Development with Articulate 360 — Articulate",
  "Universal Design for Learning — CAST",
];

export default function ResumePage() {
  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Resume"
          title="Preksha Kothari"
          description="Instructional Designer · Learning Experience Architect · Workforce Capability Designer"
        />

        {/* Download Button */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-3 mb-12">
            <a
              href="/Preksha_Kothari_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dim text-white text-sm font-semibold rounded-xl transition-colors"
            >
              <Download className="h-4 w-4" /> Download Resume PDF
            </a>
            <a
              href="https://www.linkedin.com/in/kothari-preksha/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent/50 text-sm font-semibold rounded-xl transition-colors hover:bg-card"
            >
              <ExternalLink className="h-4 w-4" /> View LinkedIn Profile
            </a>
          </div>
        </AnimatedSection>

        {/* Professional Experience */}
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Professional Experience
              </span>
            </div>
            <div className="space-y-4">
              {experience.map((exp, i) => (
                <div key={i} className="card-glow rounded-xl bg-card border border-border p-6 hover:border-accent/20 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Briefcase className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">{exp.role}</h3>
                        <p className="text-xs text-muted">{exp.org}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-accent font-semibold shrink-0">{exp.period}</span>
                  </div>
                  <div className="pl-[52px] space-y-1.5">
                    {exp.highlights.map((h, hi) => (
                      <div key={hi} className="flex items-start gap-2 text-xs text-muted">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Education
              </span>
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <div key={i} className="card-glow rounded-xl bg-card border border-border p-5 hover:border-accent/20 transition-colors">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-bold">{edu.degree}</h3>
                        <p className="text-xs text-muted">{edu.institution}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-accent font-semibold shrink-0">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Core Skills */}
          <AnimatedSection>
            <div className="card-glow rounded-xl bg-card border border-border p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="h-4 w-4 text-accent" />
                <h3 className="text-sm font-bold">Core Skills & Competencies</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-surface border border-border rounded-lg text-muted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection>
            <div className="card-glow rounded-xl bg-card border border-border p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-4 w-4 text-accent" />
                <h3 className="text-sm font-bold">Certifications & Learning</h3>
              </div>
              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert} className="flex items-start gap-2 text-xs text-muted">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Contact CTA */}
        <AnimatedSection>
          <div className="mt-12 p-6 rounded-2xl bg-card border border-border text-center">
            <p className="text-sm text-muted mb-4">
              Interested in collaborating? Let&apos;s connect.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=prekshakothari06@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dim text-white text-sm font-semibold rounded-xl transition-colors"
            >
              <FileText className="h-4 w-4" /> Get in Touch
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
