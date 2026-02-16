"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Lightbulb,
  Scale,
  Wrench,
  ThumbsUp,
  MessageCircle,
  Clock,
  Tag,
  ArrowRight,
  Send,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

type Category = "all" | "thought-leadership" | "debates" | "tool-comparisons" | "prompts";

const categories: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: "all", label: "All Posts", icon: MessageSquare },
  { key: "thought-leadership", label: "Thought Leadership", icon: Lightbulb },
  { key: "debates", label: "ID Debates", icon: Scale },
  { key: "tool-comparisons", label: "Tool Comparisons", icon: Wrench },
  { key: "prompts", label: "Discussion Prompts", icon: MessageCircle },
];

const posts = [
  {
    category: "thought-leadership",
    title: "Why Training Needs Analysis Is the Most Undervalued Phase in Corporate L&D",
    excerpt:
      "Most organizations jump straight to content development. But without a rigorous TNA, training investments are guesses — not strategies. Here's how systematic gap analysis transforms L&D from cost center to performance driver.",
    readTime: "6 min read",
    tags: ["TNA", "Corporate L&D", "Performance"],
    reactions: 24,
    comments: 8,
  },
  {
    category: "debates",
    title: "ADDIE vs. SAM: Is the Linear Model Really Dead?",
    excerpt:
      "The instructional design community loves declaring ADDIE obsolete. But in regulated industries and large-scale corporate deployments, ADDIE's structured rigor remains unmatched. Is SAM's agile approach truly superior, or does context determine methodology?",
    readTime: "8 min read",
    tags: ["ADDIE", "SAM", "Methodology"],
    reactions: 31,
    comments: 14,
  },
  {
    category: "tool-comparisons",
    title: "Articulate 360 vs. Adobe Captivate: A Practitioner's Honest Comparison",
    excerpt:
      "After building 5+ modules on Articulate 360, here's my honest breakdown of where it excels (rapid prototyping, scenario branching) and where alternatives might serve you better.",
    readTime: "7 min read",
    tags: ["Articulate 360", "Tools", "E-Learning"],
    reactions: 19,
    comments: 6,
  },
  {
    category: "thought-leadership",
    title: "The Case for Universal Design in Corporate Training — Not Just Education",
    excerpt:
      "UDL was born in K-12 education, but its principles — multiple means of representation, engagement, and expression — are exactly what corporate L&D needs to serve neurodiverse, multilingual, and multi-generational workforces.",
    readTime: "5 min read",
    tags: ["UDL", "Inclusion", "Corporate L&D"],
    reactions: 28,
    comments: 11,
  },
  {
    category: "prompts",
    title: "Should Instructional Designers Know How to Code?",
    excerpt:
      "A discussion prompt: As e-learning tools become more sophisticated, does an ID still need HTML/CSS/JavaScript skills? Or is that scope creep? Share your perspective.",
    readTime: "2 min read",
    tags: ["Skills", "Career", "Discussion"],
    reactions: 42,
    comments: 23,
  },
  {
    category: "debates",
    title: "Bloom's Taxonomy: Essential Framework or Oversimplified Hierarchy?",
    excerpt:
      "We align everything to Bloom's — learning objectives, assessments, course progression. But cognitive science has evolved since 1956. Is our reliance on this taxonomy a strength or a crutch?",
    readTime: "6 min read",
    tags: ["Bloom's Taxonomy", "Assessment", "Frameworks"],
    reactions: 35,
    comments: 17,
  },
  {
    category: "tool-comparisons",
    title: "LMS Platforms in 2025: What Actually Matters for Course Deployment",
    excerpt:
      "SCORM compliance, xAPI support, completion tracking, analytics dashboards — here's what to prioritize when selecting or evaluating an LMS for corporate e-learning deployment.",
    readTime: "5 min read",
    tags: ["LMS", "SCORM", "Deployment"],
    reactions: 16,
    comments: 5,
  },
  {
    category: "prompts",
    title: "What's the Biggest Mistake You See in Onboarding Design?",
    excerpt:
      "From information overload on Day 1 to zero assessment of knowledge transfer — what's the most common onboarding design failure you've encountered? Let's discuss.",
    readTime: "2 min read",
    tags: ["Onboarding", "Discussion", "Design"],
    reactions: 37,
    comments: 19,
  },
];

export default function RoundtablePage() {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Learning Design Roundtable"
          title="Perspectives, Debates & Discussions"
          description="A curated hub of thought leadership, instructional design debates, tool comparisons, and open discussion prompts for the learning design community."
        />

        {/* Category Filter */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = active === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-accent text-white"
                      : "bg-card border border-border text-muted hover:text-foreground hover:border-accent/30"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Posts */}
        <div className="space-y-4">
          {filtered.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.06}>
              <motion.article
                whileHover={{ x: 4 }}
                className="card-glow rounded-xl bg-card border border-border p-6 hover:border-accent/20 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-mono font-semibold text-accent tracking-wider uppercase">
                        {post.category.replace("-", " ")}
                      </span>
                      <div className="flex items-center gap-1 text-[10px] text-muted">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-base font-bold mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium bg-surface border border-border rounded-md text-muted"
                          >
                            <Tag className="h-2.5 w-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-3 text-[10px] text-muted ml-auto shrink-0">
                        <span className="flex items-center gap-1">
                          <ThumbsUp className="h-3 w-3" /> {post.reactions}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" /> {post.comments}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-2" />
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>

        {/* Newsletter / Discussion CTA */}
        <AnimatedSection>
          <div className="mt-16 p-8 rounded-2xl bg-card border border-border text-center">
            <h3 className="text-lg font-bold mb-2">Join the Conversation</h3>
            <p className="text-xs text-muted mb-6 max-w-md mx-auto">
              Have a perspective on learning design, a tool recommendation, or a debate topic? Let&apos;s connect and exchange ideas.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="mailto:prekshakothari06@gmail.com?subject=Roundtable Discussion"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dim text-white text-xs font-semibold rounded-xl transition-colors"
              >
                <Send className="h-3.5 w-3.5" /> Submit a Topic
              </a>
              <a
                href="https://www.linkedin.com/in/kothari-preksha/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-accent/50 text-xs font-semibold rounded-xl transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
