"use client";

import {
  Star,
  Quote,
  Building2,
  GraduationCap,
  Users,
  User,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    name: "Dr. Anitha Menon",
    role: "Associate Professor, Department of Psychology",
    organisation: "Christ University, Bangalore",
    category: "Faculty",
    icon: GraduationCap,
    quote:
      "Preksha demonstrated exceptional initiative in designing and coordinating faculty development workshops across multiple departments. Her ability to translate pedagogical research into practical, actionable workshop content was impressive. The unified template system she created brought consistency to our cross-departmental training materials — something we had struggled with for years. Her work directly contributed to measurable improvements in our training delivery timelines.",
  },
  {
    name: "Rajesh Kumar",
    role: "Regional Operations Manager",
    organisation: "Cafe Coffee Day, Bangalore",
    category: "Supervisor",
    icon: Building2,
    quote:
      "The onboarding modules Preksha designed transformed how we train new frontline staff. Before her intervention, our training was inconsistent across outlets and heavily dependent on individual store managers. Her structured, scenario-based e-learning approach ensured every new hire received the same quality of training regardless of location. We saw a clear improvement in knowledge retention scores and, more importantly, new employees were applying SOPs correctly on the floor much faster than before.",
  },
  {
    name: "Sunita Rao",
    role: "Founder & Director",
    organisation: "Anantha Academy for Special Education, Bangalore",
    category: "Stakeholder",
    icon: Users,
    quote:
      "Preksha's work on our sensory-friendly mathematics workbook showed a rare combination of instructional design expertise and genuine empathy for neurodiverse learners. She didn't just apply UDL principles theoretically — she observed our classrooms, consulted with our teachers, and created materials that actually worked for children with autism and ADHD. The 30% improvement in task completion during pilot testing validated her design decisions. She has a gift for making learning accessible without oversimplifying content.",
  },
  {
    name: "Priya Sharma",
    role: "Senior Learning Designer",
    organisation: "Things Education LLP, Bangalore",
    category: "Supervisor",
    icon: Building2,
    quote:
      "Working with Preksha on our Training Needs Analysis project was a collaborative and productive experience. She brought a systematic approach to identifying skill gaps that went beyond surface-level surveys. Her multi-level analysis framework — covering organizational, task, and individual dimensions — gave us actionable insights we could immediately translate into targeted interventions. The assessment frameworks she developed have become reusable tools across our team.",
  },
  {
    name: "Aditya Verma",
    role: "New Hire, Frontline Operations",
    organisation: "Cafe Coffee Day, Bangalore",
    category: "Learner",
    icon: User,
    quote:
      "The training modules were much better than the PowerPoint presentations we used to get. The scenarios felt like real situations I'd face at the counter — dealing with a frustrated customer during rush hour, handling a wrong order, managing queue flow. When those situations actually happened on my first week, I already knew how to respond because I'd practiced it in the training. The quizzes at the end made sure I wasn't just clicking through.",
  },
  {
    name: "Dr. Kavya Nair",
    role: "Head, Teaching Learning Enhancement Cell",
    organisation: "Christ University, Bangalore",
    category: "Stakeholder",
    icon: GraduationCap,
    quote:
      "Preksha's contribution to our institutional training programs extended well beyond content creation. She understood the systemic challenges of faculty development — varying departmental needs, inconsistent quality standards, and the difficulty of sustaining engagement beyond individual workshops. Her approach of creating standardised yet adaptable materials, complete with facilitator guides and post-workshop reference resources, addressed all three challenges. The 20% improvement in on-time material distribution was a direct result of her workflow redesign.",
  },
];

const categoryColors: Record<string, string> = {
  Faculty: "bg-amber-500/10 text-amber-400",
  Supervisor: "bg-sky-500/10 text-sky-400",
  Stakeholder: "bg-violet-500/10 text-violet-400",
  Learner: "bg-emerald-500/10 text-emerald-400",
};

export default function TestimonialsPage() {
  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Testimonials"
          title="What Collaborators & Stakeholders Say"
          description="Feedback from supervisors, faculty, project stakeholders, and learners who have worked with me across corporate, academic, and inclusive design projects."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => {
            const Icon = t.icon;
            return (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <div className="card-glow rounded-2xl bg-card border border-border p-6 sm:p-8 h-full hover:border-accent/20 transition-colors flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold">{t.name}</h3>
                        <p className="text-[11px] text-muted">{t.role}</p>
                        <p className="text-[10px] text-accent font-mono">{t.organisation}</p>
                      </div>
                    </div>
                    <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full shrink-0 ${categoryColors[t.category] || "bg-accent/10 text-accent"}`}>
                      {t.category}
                    </span>
                  </div>

                  <div className="flex-1 relative">
                    <Quote className="h-5 w-5 text-accent/20 absolute -top-1 -left-1" />
                    <p className="text-xs text-muted leading-relaxed pl-4">{t.quote}</p>
                  </div>

                  <div className="flex items-center gap-1 mt-4 pt-3 border-t border-border">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className="h-3 w-3 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}
