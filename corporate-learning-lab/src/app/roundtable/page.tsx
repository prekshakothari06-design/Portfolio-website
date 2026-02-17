"use client";

import { useState } from "react";
import {
  MessageSquare,
  Lightbulb,
  Scale,
  Wrench,
  ThumbsUp,
  MessageCircle,
  Clock,
  Tag,
  Send,
  ChevronDown,
  ChevronUp,
  User,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

type Category = "all" | "thought-leadership" | "debates" | "tool-comparisons" | "prompts";

const categories: { key: Category; label: string; icon: React.ElementType }[] = [
  { key: "all", label: "All Threads", icon: MessageSquare },
  { key: "thought-leadership", label: "Thought Leadership", icon: Lightbulb },
  { key: "debates", label: "ID Debates", icon: Scale },
  { key: "tool-comparisons", label: "Tool Comparisons", icon: Wrench },
  { key: "prompts", label: "Discussion Prompts", icon: MessageCircle },
];

interface Comment {
  author: string;
  role: string;
  text: string;
}

interface ForumPost {
  category: Category;
  title: string;
  author: string;
  content: string[];
  discussionQuestions: string[];
  readTime: string;
  tags: string[];
  reactions: number;
  comments: Comment[];
}

const posts: ForumPost[] = [
  {
    category: "thought-leadership",
    title: "Why Training Needs Analysis Is the Most Undervalued Phase in Corporate L&D",
    author: "Preksha Kothari",
    content: [
      "Most organizations treat Training Needs Analysis as a checkbox — a formality before the 'real work' of content development begins. In my experience designing onboarding systems for frontline workforces, I've seen firsthand what happens when TNA is skipped: training gets built for problems that don't exist, while actual skill gaps remain unaddressed.",
      "During the Cafe Coffee Day project, the initial request was simple — 'build an e-learning module for new hires.' But when we conducted a structured TNA using multi-level analysis (organizational, task, and individual), we discovered that the real gap wasn't knowledge of SOPs — it was the inability to apply them during high-pressure situations like rush-hour service. That insight completely changed the design strategy from information delivery to scenario-based simulation.",
      "The TNA revealed three critical insights: (1) product knowledge was adequate but procedural fluency under pressure was low, (2) regional variations in store operations meant a one-size-fits-all approach would fail, and (3) managers needed visibility into individual learning progress, not just completion rates. None of these would have surfaced without systematic gap analysis.",
      "When TNA is done rigorously, every downstream design decision — from content chunking to assessment strategy — becomes evidence-based rather than assumption-driven. It transforms L&D from a cost center producing 'training for training's sake' into a performance engineering function that ties directly to business outcomes."
    ],
    discussionQuestions: [
      "How much time does your organization allocate to TNA before content development begins?",
      "Have you experienced a project where skipping TNA led to significant rework?",
      "What TNA methods do you find most effective — surveys, SME interviews, observation, or data analysis?"
    ],
    readTime: "6 min read",
    tags: ["TNA", "Corporate L&D", "Performance"],
    reactions: 24,
    comments: [
      { author: "Riya S.", role: "L&D Manager", text: "This resonates deeply. We recently scrapped a compliance module halfway through development because the actual gap was supervisory communication, not policy knowledge. A proper TNA would have caught that." },
      { author: "Arjun M.", role: "Instructional Designer", text: "The pressure to skip TNA usually comes from tight timelines. I've started framing it as 'diagnostic' rather than 'analysis' — stakeholders respond better when it sounds like problem-solving rather than research." },
    ],
  },
  {
    category: "debates",
    title: "Active vs. Passive Learning: Is Lecture-Based Training Really Dead?",
    author: "Preksha Kothari",
    content: [
      "The learning design community has a strong bias toward active learning — and for good reason. Research consistently shows that learners retain more when they engage with content through practice, discussion, and application rather than passive consumption. But does this mean lecture-based formats have no place in modern corporate training?",
      "I've worked across both corporate and academic settings, and the answer is more nuanced than most practitioners admit. In the faculty development programs I designed for Christ University, we found that short, focused expert lectures (15–20 minutes) followed by structured active learning activities produced better outcomes than either format alone. The lecture provided cognitive scaffolding; the activity provided application practice.",
      "The real problem isn't lectures — it's passive lectures that run 60+ minutes with no engagement checkpoints. When I design blended programs, I use a '15-5-15' rhythm: 15 minutes of curated content delivery, 5 minutes of reflection or discussion, followed by 15 minutes of hands-on application. This rhythm respects both cognitive load theory and adult learning principles.",
      "In corporate e-learning, the equivalent is replacing 'click-next' slide decks with scenario-driven modules where content is embedded within decision-making contexts. The learner never passively receives information — they encounter it while solving a problem."
    ],
    discussionQuestions: [
      "In your experience, when is lecture-based delivery genuinely the best format?",
      "How do you handle stakeholders who insist on 'information dump' training approaches?",
      "What's your preferred ratio of passive content to active practice in a typical module?"
    ],
    readTime: "7 min read",
    tags: ["Active Learning", "Pedagogy", "Corporate Training"],
    reactions: 35,
    comments: [
      { author: "Dr. Meena K.", role: "Faculty Member", text: "The 15-5-15 rhythm is excellent. I've adopted a similar approach in my postgraduate seminars and the engagement difference is remarkable." },
      { author: "Vikram P.", role: "Training Lead", text: "The challenge in corporate settings is that SMEs want to 'teach everything' in one session. Breaking content into smaller active chunks requires redesigning how we work with subject matter experts." },
    ],
  },
  {
    category: "tool-comparisons",
    title: "Articulate 360 vs. Adobe Captivate: A Practitioner's Honest Comparison",
    author: "Preksha Kothari",
    content: [
      "Having built 5+ modules on Articulate 360 and explored Adobe Captivate for comparison, here's my practitioner-level breakdown of where each tool excels — beyond what marketing pages tell you.",
      "Articulate 360 wins on rapid prototyping and scenario branching. Storyline's trigger-based interaction model makes it straightforward to build branching scenarios, and Rise 360 is unmatched for creating clean, responsive modules quickly. For the Cafe Coffee Day onboarding project, Storyline's branching capabilities let me build consequence-driven scenarios where learner decisions affected the narrative — something that would have taken significantly more effort in Captivate.",
      "Adobe Captivate has stronger software simulation capabilities and more granular control over responsive design breakpoints. If your primary use case is creating software training with step-by-step walkthroughs, Captivate's automatic screen capture and branching based on user actions is genuinely superior. It also handles complex variable logic better for advanced developers.",
      "The deciding factors in most cases are: (1) team skill level — Articulate has a gentler learning curve, (2) content type — scenario-heavy content favors Storyline while software training favors Captivate, and (3) collaboration needs — Articulate's Review 360 makes stakeholder feedback significantly smoother than Captivate's review workflow."
    ],
    discussionQuestions: [
      "Which authoring tool does your organization standardize on, and why?",
      "Have you found cases where switching tools mid-project was necessary?",
      "How important is the review/feedback workflow in your tool selection?"
    ],
    readTime: "7 min read",
    tags: ["Articulate 360", "Adobe Captivate", "Authoring Tools"],
    reactions: 19,
    comments: [
      { author: "Sneha R.", role: "E-Learning Developer", text: "I've been an Articulate user for years but recently tried Captivate for a software simulation project. The screen recording workflow in Captivate is genuinely better for that specific use case." },
    ],
  },
  {
    category: "debates",
    title: "Measuring Learning Impact: Are We Stuck at Kirkpatrick Level 1?",
    author: "Preksha Kothari",
    content: [
      "The instructional design field talks endlessly about measuring impact, but the uncomfortable truth is that most organizations never get past Kirkpatrick Level 1 — learner satisfaction surveys. We know what learners thought about the training. We rarely know whether it changed their behavior or improved business outcomes.",
      "In my own work, I've managed to consistently measure up to Level 2 (knowledge gain through pre/post assessments) and occasionally Level 3 (behavioral change through manager observation). The Cafe Coffee Day project measured knowledge retention improvements of 25%, which is a solid Level 2 metric. But translating that into Level 4 business impact — did onboarding improvements reduce turnover or increase customer satisfaction scores? — requires organizational commitment to longitudinal data that most L&D teams don't have access to.",
      "The barrier isn't methodological — we know how to design Level 3 and 4 evaluations. The barrier is organizational. It requires partnerships with business analytics teams, access to performance data, and leadership buy-in to measure training as a business investment rather than a compliance activity. Until L&D professionals learn to speak the language of business metrics, we'll remain stuck counting smile sheets.",
      "One practical approach I've found effective: define success metrics during the design phase, not after deployment. When evaluation criteria are baked into the design from day one, every stakeholder understands what 'success' looks like before a single screen is built."
    ],
    discussionQuestions: [
      "What's the highest Kirkpatrick level your organization consistently measures?",
      "How do you convince leadership to invest in Level 3/4 evaluation?",
      "Should L&D teams own impact measurement, or should it be a shared responsibility with business units?"
    ],
    readTime: "8 min read",
    tags: ["Kirkpatrick", "Impact Measurement", "L&D Strategy"],
    reactions: 31,
    comments: [
      { author: "Kavitha N.", role: "L&D Director", text: "The 'define metrics before building' approach is exactly right. We've started including evaluation design as a deliverable in every project charter. It forces the conversation early." },
      { author: "Rohan D.", role: "Learning Analyst", text: "The data access problem is real. Most HRIS systems don't integrate with LMS data in a way that makes longitudinal analysis practical without significant manual effort." },
    ],
  },
  {
    category: "prompts",
    title: "Faculty vs. Corporate Facilitation: What Translates and What Doesn't?",
    author: "Preksha Kothari",
    content: [
      "Having worked in both academic (Christ University faculty development) and corporate (Cafe Coffee Day frontline training) contexts, I've noticed fascinating differences in how facilitation works across these environments. Some skills transfer seamlessly; others require fundamental rethinking.",
      "What translates well: the ability to read a room, adapt pacing based on engagement cues, and design activities that build on prior knowledge. What doesn't: academic facilitation often assumes intrinsic motivation and long attention spans, while corporate facilitation must compete with email notifications, meeting conflicts, and the ever-present question of 'how does this help me do my job better?'",
      "The biggest shift I've observed is in assessment philosophy. In academic settings, assessment is evaluative — it grades performance. In corporate settings, effective assessment is diagnostic — it identifies gaps and routes learners to targeted support. This fundamental difference shapes everything from question design to feedback logic.",
      "I'd love to hear from others who've crossed this boundary. What surprised you most about the transition between academic and corporate learning facilitation?"
    ],
    discussionQuestions: [
      "If you've worked in both academic and corporate settings, what was the biggest adjustment?",
      "How do you handle resistance from adult learners who see training as 'taking time away from real work'?",
      "Should corporate facilitators have formal teaching or pedagogical training?"
    ],
    readTime: "5 min read",
    tags: ["Facilitation", "Academic vs Corporate", "Discussion"],
    reactions: 42,
    comments: [
      { author: "Ananya T.", role: "Corporate Trainer", text: "The motivation difference is huge. In university, students attend because they have to. In corporate training, you have about 5 minutes to prove relevance before you lose them." },
      { author: "Prof. Sharma", role: "Education Faculty", text: "I'd add that corporate facilitation moves much faster. Academic discussions can unfold over weeks; corporate workshops need tangible takeaways within hours." },
      { author: "Deepak L.", role: "ID Consultant", text: "The assessment philosophy difference is an insight I wish I'd understood earlier. Stopped grading corporate learners and started diagnosing gaps — the whole dynamic shifted." },
    ],
  },
  {
    category: "thought-leadership",
    title: "The Case for Universal Design in Corporate Training — Not Just Education",
    author: "Preksha Kothari",
    content: [
      "Universal Design for Learning (UDL) was born in K-12 special education, and that's exactly where most practitioners think it belongs. But after designing a sensory-friendly mathematics workbook for neurodiverse learners at Anantha Academy and then applying those same principles to corporate e-learning modules, I'm convinced that UDL is one of the most underutilized frameworks in corporate L&D.",
      "The core UDL principles — multiple means of representation, engagement, and action/expression — address challenges that every corporate learner faces: information overload, attention fragmentation, varying prior knowledge levels, and different learning preferences. When I redesigned the Anantha Academy materials, I increased visual element sizes by 150%, replaced text instructions with icon sequences, and resequenced activities by cognitive load. Student task completion improved by 30%.",
      "When I applied similar principles to corporate onboarding modules — multiple content formats, clear visual hierarchy, reduced cognitive load per screen, and varied assessment types — completion rates and knowledge retention both improved. The learners weren't neurodiverse; they were busy frontline employees processing new information in suboptimal conditions (noisy breakrooms, mobile devices, interrupted sessions).",
      "The design decisions that make learning accessible for neurodiverse populations — clearer visuals, reduced text density, multiple representation modes, built-in scaffolding — consistently improve outcomes for all learners. UDL isn't accommodation. It's good design."
    ],
    discussionQuestions: [
      "Has your organization applied UDL principles to mainstream corporate training?",
      "What's the most impactful accessibility improvement you've made to a learning module?",
      "How do you advocate for inclusive design when stakeholders see it as 'extra work'?"
    ],
    readTime: "6 min read",
    tags: ["UDL", "Inclusive Design", "Corporate L&D"],
    reactions: 28,
    comments: [
      { author: "Maya J.", role: "Accessibility Specialist", text: "This is exactly the conversation corporate L&D needs. We keep treating accessibility as compliance when it should be treated as quality design." },
      { author: "Priya S.", role: "Learning Designer", text: "The 30% task completion improvement is compelling. Do you have data on how those same UDL principles performed in the corporate context specifically?" },
    ],
  },
];

function ForumThread({ post }: { post: ForumPost }) {
  const [expanded, setExpanded] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <article className="card-glow rounded-2xl bg-card border border-border overflow-hidden hover:border-accent/20 transition-colors">
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[10px] font-mono font-semibold text-accent tracking-wider uppercase">
            {post.category.replace(/-/g, " ")}
          </span>
          <div className="flex items-center gap-1 text-[10px] text-muted">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </div>
        </div>

        <h3
          className="text-lg font-bold mb-1 cursor-pointer hover:text-accent transition-colors"
          onClick={() => setExpanded(!expanded)}
        >
          {post.title}
        </h3>
        <p className="text-xs text-muted mb-4 flex items-center gap-1.5">
          <User className="h-3 w-3" /> {post.author}
        </p>

        {!expanded && (
          <p className="text-sm text-muted leading-relaxed line-clamp-3">{post.content[0]}</p>
        )}

        {expanded && (
          <div className="space-y-4 mb-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-sm text-muted leading-relaxed">{paragraph}</p>
            ))}

            <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
              <p className="text-xs font-semibold text-accent mb-2">Discussion Questions</p>
              <div className="space-y-2">
                {post.discussionQuestions.map((q, i) => (
                  <p key={i} className="text-xs text-muted leading-relaxed flex items-start gap-2">
                    <span className="text-accent font-bold shrink-0">{i + 1}.</span>
                    {q}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
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
          <div className="flex items-center gap-3 text-[10px] text-muted shrink-0">
            <span className="flex items-center gap-1">
              <ThumbsUp className="h-3 w-3" /> {post.reactions}
            </span>
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              <MessageCircle className="h-3 w-3" /> {post.comments.length} replies
            </button>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 hover:text-accent transition-colors"
            >
              {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
              {expanded ? "Collapse" : "Expand"}
            </button>
          </div>
        </div>
      </div>

      {showComments && post.comments.length > 0 && (
        <div className="border-t border-border bg-surface/50 px-6 sm:px-8 py-4 space-y-3">
          <p className="text-[10px] font-mono font-semibold text-accent tracking-wider uppercase mb-3">Replies</p>
          {post.comments.map((comment, i) => (
            <div key={i} className="p-4 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-6 w-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <User className="h-3 w-3 text-accent" />
                </div>
                <span className="text-xs font-semibold">{comment.author}</span>
                <span className="text-[10px] text-muted">{comment.role}</span>
              </div>
              <p className="text-xs text-muted leading-relaxed pl-8">{comment.text}</p>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}

export default function RoundtablePage() {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Learning Design Roundtable"
          title="Perspectives, Debates & Discussions"
          description="An interactive discussion space for the learning design community. Explore thought leadership posts, instructional design debates, tool comparisons, and open discussion prompts — each with full context and community responses."
        />

        {/* Category Filter */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-10">
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
                  {cat.key !== "all" && (
                    <span className="text-[9px] opacity-70">
                      ({posts.filter((p) => p.category === cat.key).length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Forum Threads */}
        <div className="space-y-4">
          {filtered.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 0.06}>
              <ForumThread post={post} />
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection>
          <div className="mt-16 p-8 rounded-2xl bg-card border border-border text-center">
            <h3 className="text-lg font-bold mb-2">Join the Conversation</h3>
            <p className="text-xs text-muted mb-6 max-w-md mx-auto">
              Have a perspective on learning design, a tool recommendation, or a debate topic? I welcome thoughtful responses and new discussion threads.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=prekshakothari06@gmail.com&su=Roundtable+Discussion"
                target="_blank"
                rel="noopener noreferrer"
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
