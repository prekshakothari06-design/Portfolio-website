"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Layers,
  Brain,
  Target,
  MessageSquare,
  BarChart3,
  ChevronRight,
  Lightbulb,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

const bloomsLevels = [
  {
    level: 6,
    name: "Create",
    color: "bg-violet-500/20 text-violet-400 border-violet-500/20",
    verbs: ["Design", "Construct", "Develop", "Formulate"],
    questionType: "Design a training program for...",
    example: "Design an onboarding module that addresses the three most common knowledge gaps identified in the TNA report.",
  },
  {
    level: 5,
    name: "Evaluate",
    color: "bg-rose-500/20 text-rose-400 border-rose-500/20",
    verbs: ["Judge", "Critique", "Justify", "Assess"],
    questionType: "Evaluate the effectiveness of...",
    example: "Which onboarding approach would be most effective for a distributed workforce, and why?",
  },
  {
    level: 4,
    name: "Analyze",
    color: "bg-amber-500/20 text-amber-400 border-amber-500/20",
    verbs: ["Compare", "Differentiate", "Examine", "Categorize"],
    questionType: "Compare and contrast...",
    example: "Compare the ADDIE and SAM models in terms of their suitability for compliance training development.",
  },
  {
    level: 3,
    name: "Apply",
    color: "bg-sky-500/20 text-sky-400 border-sky-500/20",
    verbs: ["Implement", "Execute", "Use", "Demonstrate"],
    questionType: "Apply the framework to...",
    example: "A new employee is struggling with POS operations after completing the training module. Using the assessment data, identify the likely gap and recommend a targeted intervention.",
  },
  {
    level: 2,
    name: "Understand",
    color: "bg-teal-500/20 text-teal-400 border-teal-500/20",
    verbs: ["Explain", "Summarize", "Classify", "Describe"],
    questionType: "Explain why...",
    example: "Explain why scenario-based assessments are preferred over multiple-choice recall questions for customer service training.",
  },
  {
    level: 1,
    name: "Remember",
    color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",
    verbs: ["Define", "List", "Recall", "Identify"],
    questionType: "Identify the...",
    example: "List the five phases of the ADDIE model in the correct sequence.",
  },
];

const scenarioAssessments = [
  {
    title: "The Compliance Dilemma",
    context: "You are a store supervisor. A customer asks to return a product outside the return window. The customer is visibly upset and threatens to leave a negative review.",
    options: [
      { text: "Follow policy strictly — deny the return and explain the window has closed.", feedback: "Technically correct but lacks empathy. Customer experience score drops. Consider: how can you uphold policy while maintaining the relationship?", correct: false },
      { text: "Empathize first, then offer an alternative — store credit or exchange.", feedback: "Strong approach. You acknowledge the customer's frustration while offering a solution within policy boundaries. This balances compliance with customer satisfaction.", correct: true },
      { text: "Approve the return as an exception to avoid conflict.", feedback: "This resolves the immediate situation but creates policy inconsistency. Other staff may face similar requests without authority to approve exceptions.", correct: false },
    ],
  },
  {
    title: "The Training Gap",
    context: "Post-training assessment scores are high (92% average), but on-the-job performance metrics haven't improved. Managers report the same errors recurring.",
    options: [
      { text: "The assessment questions are too easy — redesign with higher Bloom's levels.", feedback: "Partially correct. If questions only test recall, high scores don't indicate application ability. But this alone may not solve the problem.", correct: false },
      { text: "Add scenario-based assessments that simulate real workplace decisions.", feedback: "This is the strongest intervention. Scenario-based assessments test application and analysis — the levels where actual job performance gaps exist.", correct: true },
      { text: "Increase the pass threshold from 80% to 95%.", feedback: "Raising the threshold doesn't change what's being measured. If questions test recall, a higher bar still only measures recall, not application.", correct: false },
    ],
  },
];

const feedbackLogic = [
  {
    condition: "Correct on first attempt",
    response: "Reinforcement feedback — confirm why the answer is correct, link to underlying principle",
    purpose: "Strengthen correct mental model",
  },
  {
    condition: "Incorrect — conceptual misunderstanding",
    response: "Explanatory feedback — identify the misconception, provide the correct framework, offer a review link",
    purpose: "Correct the mental model before moving forward",
  },
  {
    condition: "Incorrect — careless error",
    response: "Brief corrective feedback — show the right answer, suggest re-reading the specific section",
    purpose: "Redirect attention without over-teaching",
  },
  {
    condition: "Partially correct",
    response: "Guided feedback — acknowledge what's right, prompt deeper thinking about the missing element",
    purpose: "Build on existing understanding",
  },
  {
    condition: "Multiple incorrect attempts",
    response: "Scaffolded feedback — break the concept down, provide a worked example, then re-assess with a simpler question",
    purpose: "Prevent frustration while ensuring learning",
  },
];

export default function AssessmentLabPage() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const scenario = scenarioAssessments[activeScenario];

  return (
    <div className="grid-bg min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <SectionHeader
          label="Assessment Engineering Lab"
          title="Designing Assessments That Measure Real Learning"
          description="Question design frameworks, Bloom's Taxonomy mapping, scenario-based assessment engineering, and adaptive feedback logic systems."
        />

        {/* Bloom's Taxonomy Pyramid */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Bloom&apos;s Taxonomy — Question Design Framework
              </span>
            </div>
          </AnimatedSection>

          <div className="space-y-3">
            {bloomsLevels.map((level, i) => (
              <AnimatedSection key={level.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="card-glow rounded-xl bg-card border border-border p-5 hover:border-accent/20 transition-colors"
                  style={{ marginLeft: `${(6 - level.level) * 16}px` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`shrink-0 px-3 py-1.5 rounded-lg border text-xs font-bold ${level.color}`}>
                      L{level.level}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h4 className="text-sm font-bold">{level.name}</h4>
                        <div className="flex gap-1 flex-wrap">
                          {level.verbs.map((verb) => (
                            <span key={verb} className="text-[10px] px-1.5 py-0.5 bg-surface border border-border rounded text-muted">
                              {verb}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-[10px] text-muted font-mono mb-1">{level.questionType}</p>
                      <p className="text-xs text-muted leading-relaxed bg-surface p-3 rounded-lg border border-border">
                        <span className="text-accent font-semibold">Example: </span>
                        {level.example}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Interactive Scenario Assessment */}
        <div className="mb-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Scenario-Based Assessment — Live Demo
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card-glow rounded-2xl bg-card border border-border p-6 sm:p-8">
              <div className="flex gap-2 mb-6">
                {scenarioAssessments.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveScenario(i);
                      setSelectedOption(null);
                    }}
                    className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                      activeScenario === i
                        ? "bg-accent text-white"
                        : "bg-surface border border-border text-muted hover:text-foreground"
                    }`}
                  >
                    Scenario {i + 1}
                  </button>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-accent" />
                  <h3 className="text-sm font-bold">{scenario.title}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">{scenario.context}</p>
              </div>

              <div className="space-y-3">
                {scenario.options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedOption(i)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedOption === i
                        ? option.correct
                          ? "bg-emerald-500/10 border-emerald-500/30"
                          : "bg-rose-500/10 border-rose-500/30"
                        : "bg-surface border-border hover:border-accent/20"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 mt-0.5">
                        {selectedOption === i ? (
                          option.correct ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                          ) : (
                            <XCircle className="h-5 w-5 text-rose-400" />
                          )
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-border" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm">{option.text}</p>
                        {selectedOption === i && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-xs mt-2 leading-relaxed ${
                              option.correct ? "text-emerald-400" : "text-rose-400"
                            }`}
                          >
                            {option.feedback}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {selectedOption !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 flex justify-end"
                >
                  <button
                    onClick={() => setSelectedOption(null)}
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-accent hover:bg-accent/10 rounded-lg transition-colors"
                  >
                    <RefreshCw className="h-3.5 w-3.5" /> Try Again
                  </button>
                </motion.div>
              )}
            </div>
          </AnimatedSection>
        </div>

        {/* Feedback Logic System */}
        <AnimatedSection>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-xs font-mono font-semibold tracking-widest uppercase text-accent">
                Feedback Logic System
              </span>
            </div>
            <div className="card-glow rounded-2xl bg-card border border-border p-6 sm:p-8">
              <p className="text-sm text-muted leading-relaxed mb-6">
                Effective assessments require more than right/wrong scoring. The feedback logic system adapts responses based on learner behavior patterns to maximize learning from every interaction.
              </p>
              <div className="space-y-3">
                {feedbackLogic.map((rule, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 2 }}
                    className="grid sm:grid-cols-3 gap-3 p-4 rounded-xl bg-surface border border-border hover:border-accent/20 transition-colors"
                  >
                    <div>
                      <p className="text-[10px] font-mono font-semibold text-accent mb-1">CONDITION</p>
                      <p className="text-xs font-semibold">{rule.condition}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-semibold text-amber-400 mb-1">RESPONSE</p>
                      <p className="text-xs text-muted">{rule.response}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-semibold text-emerald-400 mb-1">PURPOSE</p>
                      <p className="text-xs text-muted">{rule.purpose}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
