"use client";

import { useState, useMemo } from "react";
import { Download, RotateCcw, ChevronRight, ChevronLeft } from "lucide-react";

const DIMENSIONS = ["R", "I", "A", "S", "E", "C"] as const;
type Dim = (typeof DIMENSIONS)[number];

const DIM_INFO: Record<Dim, { name: string; color: string; bg: string; desc: string; careers: string[] }> = {
  R: { name: "Realistic", color: "#4ade80", bg: "rgba(74,222,128,0.15)", desc: "Hands-on, practical, technical work", careers: ["E-Learning Developer", "LMS Administrator", "Technical Trainer", "Software Trainer", "Lab Technician", "Engineering Roles"] },
  I: { name: "Investigative", color: "#38bdf8", bg: "rgba(56,189,248,0.15)", desc: "Research, analysis, problem-solving", careers: ["Training Needs Analyst", "Learning Analyst", "UX Researcher", "Data Analyst", "Research Scientist", "Policy Analyst"] },
  A: { name: "Artistic", color: "#a78bfa", bg: "rgba(167,139,250,0.15)", desc: "Creative expression, design, innovation", careers: ["Visual Designer", "Content Designer", "Storyboard Artist", "UX Designer", "Creative Director", "Writer / Editor"] },
  S: { name: "Social", color: "#fbbf24", bg: "rgba(251,191,36,0.15)", desc: "Teaching, mentoring, helping others", careers: ["Corporate Trainer", "Career Counselor", "Faculty Developer", "HR Specialist", "Social Worker", "Therapist"] },
  E: { name: "Enterprising", color: "#f87171", bg: "rgba(248,113,113,0.15)", desc: "Leadership, persuasion, strategy", careers: ["L&D Manager", "Program Director", "Consultant", "Entrepreneur", "Sales Manager", "Marketing Lead"] },
  C: { name: "Conventional", color: "#22d3ee", bg: "rgba(34,211,238,0.15)", desc: "Organization, accuracy, systems", careers: ["Assessment Designer", "Quality Assurance", "Compliance Trainer", "Project Coordinator", "Accountant", "Operations Analyst"] },
};

interface Question {
  text: string;
  dimension: Dim;
}

const QUESTIONS: Question[] = [
  // Realistic (7)
  { text: "I enjoy working with tools, machines, or technology to build or fix things.", dimension: "R" },
  { text: "I prefer tasks where I can see tangible, physical results of my work.", dimension: "R" },
  { text: "I like assembling things or figuring out how mechanical or digital systems work.", dimension: "R" },
  { text: "I would enjoy designing hands-on training simulations or lab setups.", dimension: "R" },
  { text: "I feel most productive when working on practical, concrete tasks.", dimension: "R" },
  { text: "I am comfortable troubleshooting technical issues independently.", dimension: "R" },
  { text: "I prefer outdoor or physical activities over desk-based work.", dimension: "R" },
  // Investigative (7)
  { text: "I enjoy analyzing data and identifying patterns or trends.", dimension: "I" },
  { text: "I like solving complex problems that require deep thinking.", dimension: "I" },
  { text: "I am drawn to research — reading studies, conducting surveys, or reviewing literature.", dimension: "I" },
  { text: "I prefer understanding the 'why' behind things rather than just the 'how'.", dimension: "I" },
  { text: "I enjoy working with numbers, statistics, or logical frameworks.", dimension: "I" },
  { text: "I would rather investigate a problem thoroughly before acting on it.", dimension: "I" },
  { text: "I am curious about how learning processes work at a cognitive level.", dimension: "I" },
  // Artistic (7)
  { text: "I enjoy creating visual designs, graphics, or multimedia content.", dimension: "A" },
  { text: "I am drawn to activities that allow creative self-expression.", dimension: "A" },
  { text: "I like brainstorming innovative solutions rather than following standard procedures.", dimension: "A" },
  { text: "I would enjoy designing the look and feel of a learning module or workshop.", dimension: "A" },
  { text: "I prefer work environments that value originality and creative thinking.", dimension: "A" },
  { text: "I enjoy writing, storytelling, or developing narrative content.", dimension: "A" },
  { text: "I am interested in how aesthetics and design influence learning experiences.", dimension: "A" },
  // Social (7)
  { text: "I enjoy teaching, training, or explaining concepts to others.", dimension: "S" },
  { text: "I feel fulfilled when I help someone learn a new skill or overcome a challenge.", dimension: "S" },
  { text: "I prefer collaborative work over independent tasks.", dimension: "S" },
  { text: "I am naturally empathetic and attentive to others' needs.", dimension: "S" },
  { text: "I would enjoy facilitating group discussions or workshops.", dimension: "S" },
  { text: "I am drawn to roles that involve mentoring or counseling.", dimension: "S" },
  { text: "I believe building relationships is essential for effective work.", dimension: "S" },
  // Enterprising (7)
  { text: "I enjoy leading teams and making strategic decisions.", dimension: "E" },
  { text: "I am comfortable presenting ideas and persuading others.", dimension: "E" },
  { text: "I like taking initiative and starting new projects or ventures.", dimension: "E" },
  { text: "I am motivated by achieving measurable goals and targets.", dimension: "E" },
  { text: "I enjoy negotiating, influencing stakeholders, or managing client relationships.", dimension: "E" },
  { text: "I prefer roles with growth opportunities and increasing responsibility.", dimension: "E" },
  { text: "I am energized by competitive environments and ambitious challenges.", dimension: "E" },
  // Conventional (7)
  { text: "I enjoy organizing information, files, and systems efficiently.", dimension: "C" },
  { text: "I prefer clear instructions and well-defined processes.", dimension: "C" },
  { text: "I pay close attention to detail and accuracy in my work.", dimension: "C" },
  { text: "I like working with spreadsheets, databases, or structured templates.", dimension: "C" },
  { text: "I feel comfortable following established procedures and standards.", dimension: "C" },
  { text: "I would enjoy creating assessment rubrics, checklists, or compliance frameworks.", dimension: "C" },
  { text: "I prefer predictable, structured work environments over chaotic ones.", dimension: "C" },
];

const PER_PAGE = 7;
const TOTAL_PAGES = Math.ceil(QUESTIONS.length / PER_PAGE);

export default function RIASECAssessment() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [page, setPage] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const scores = useMemo(() => {
    const s: Record<Dim, number> = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    Object.entries(answers).forEach(([qIdx, val]) => {
      s[QUESTIONS[Number(qIdx)].dimension] += val;
    });
    return s;
  }, [answers]);

  const maxScore = 35; // 7 questions * 5 max
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === QUESTIONS.length;

  const topDims = useMemo(() => {
    return [...DIMENSIONS].sort((a, b) => scores[b] - scores[a]).slice(0, 3);
  }, [scores]);

  const careerCode = topDims.join("");

  const handleAnswer = (qIdx: number, val: number) => {
    setAnswers({ ...answers, [qIdx]: val });
  };

  const handleSubmit = () => {
    if (allAnswered) setShowResults(true);
  };

  const handleReset = () => {
    setAnswers({});
    setPage(0);
    setShowResults(false);
  };

  const handleDownloadPdf = async () => {
    const { default: jsPDF } = await import("jspdf");
    const { default: autoTable } = await import("jspdf-autotable");
    const doc = new jsPDF();

    // Header
    doc.setFillColor(139, 111, 78);
    doc.rect(0, 0, 210, 38, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.text("RIASEC Career Assessment Report", 15, 18);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Learning That Moves Beyond Content — Preksha Kothari", 15, 28);

    // Career Code
    doc.setTextColor(44, 31, 20);
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text(`Your Career Code: ${careerCode}`, 15, 52);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(61, 46, 34);
    doc.text(`Top dimensions: ${topDims.map(d => DIM_INFO[d].name).join(", ")}`, 15, 60);

    // Scores table
    let y = 72;
    autoTable(doc, {
      startY: y,
      head: [["Dimension", "Score", "Percentage", "Description"]],
      body: DIMENSIONS.map(d => [
        `${d} — ${DIM_INFO[d].name}`,
        `${scores[d]} / ${maxScore}`,
        `${Math.round((scores[d] / maxScore) * 100)}%`,
        DIM_INFO[d].desc,
      ]),
      theme: "grid",
      headStyles: { fillColor: [139, 111, 78], textColor: [255, 255, 255], fontSize: 9 },
      bodyStyles: { fontSize: 9, textColor: [61, 46, 34], cellPadding: 5 },
      columnStyles: { 0: { fontStyle: "bold", cellWidth: 45 }, 1: { cellWidth: 25 }, 2: { cellWidth: 25 } },
      margin: { left: 15, right: 15 },
    });

    // Career recommendations
    const finalY = (doc as unknown as { lastAutoTable?: { finalY?: number } }).lastAutoTable?.finalY ?? 180;
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(44, 31, 20);
    doc.text("Career Recommendations Based on Your Profile", 15, finalY + 15);

    let recY = finalY + 25;
    topDims.forEach(d => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(139, 111, 78);
      doc.text(`${DIM_INFO[d].name} Careers:`, 15, recY);
      recY += 7;
      doc.setFont("helvetica", "normal");
      doc.setTextColor(61, 46, 34);
      doc.setFontSize(9);
      doc.text(DIM_INFO[d].careers.join("  •  "), 20, recY);
      recY += 10;
    });

    // Footer
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(140, 123, 107);
      doc.text("RIASEC Career Assessment Report — Learning That Moves Beyond Content", 15, 287);
      doc.text(`Page ${i} of ${pageCount}`, 195, 287, { align: "right" });
    }

    doc.save("RIASEC_Career_Assessment_Report.pdf");
  };

  const pageQuestions = QUESTIONS.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  if (showResults) {
    return (
      <div className="space-y-8">
        {/* Results Header */}
        <div className="soft-card p-6 sm:p-8 text-center">
          <h3 className="text-2xl font-bold text-heading mb-2">Your RIASEC Profile</h3>
          <p className="text-sm text-muted mb-4">Your career code based on your top 3 dimensions:</p>
          <div className="flex justify-center gap-2 mb-6">
            {topDims.map(d => (
              <div
                key={d}
                className="h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold border-2"
                style={{ backgroundColor: DIM_INFO[d].bg, borderColor: DIM_INFO[d].color, color: DIM_INFO[d].color }}
              >
                {d}
              </div>
            ))}
          </div>
          <p className="text-lg font-bold text-heading">{topDims.map(d => DIM_INFO[d].name).join(" • ")}</p>
        </div>

        {/* Score Bars */}
        <div className="soft-card p-6 sm:p-8">
          <h4 className="text-sm font-bold text-heading mb-6">Score Breakdown</h4>
          <div className="space-y-4">
            {[...DIMENSIONS].sort((a, b) => scores[b] - scores[a]).map(d => {
              const pct = Math.round((scores[d] / maxScore) * 100);
              return (
                <div key={d} className="flex items-center gap-4">
                  <div className="w-28 flex items-center gap-2 shrink-0">
                    <div
                      className="h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold border"
                      style={{ backgroundColor: DIM_INFO[d].bg, borderColor: DIM_INFO[d].color, color: DIM_INFO[d].color }}
                    >
                      {d}
                    </div>
                    <span className="text-sm font-medium text-heading">{DIM_INFO[d].name}</span>
                  </div>
                  <div className="flex-1 h-6 bg-surface rounded-full overflow-hidden border border-border">
                    <div
                      className="h-full rounded-full transition-all duration-700 flex items-center justify-end pr-2"
                      style={{ width: `${Math.max(pct, 8)}%`, backgroundColor: DIM_INFO[d].color }}
                    >
                      <span className="text-xs font-bold text-white">{pct}%</span>
                    </div>
                  </div>
                  <span className="text-sm text-muted w-16 text-right shrink-0">{scores[d]}/{maxScore}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Recommendations */}
        <div className="soft-card p-6 sm:p-8">
          <h4 className="text-sm font-bold text-heading mb-6">Career Recommendations</h4>
          <div className="grid sm:grid-cols-3 gap-4">
            {topDims.map(d => (
              <div key={d} className="p-4 rounded-xl border border-border" style={{ backgroundColor: DIM_INFO[d].bg }}>
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold border"
                    style={{ borderColor: DIM_INFO[d].color, color: DIM_INFO[d].color }}
                  >
                    {d}
                  </div>
                  <span className="text-sm font-bold text-heading">{DIM_INFO[d].name}</span>
                </div>
                <div className="space-y-1.5">
                  {DIM_INFO[d].careers.map(c => (
                    <div key={c} className="flex items-center gap-1.5 text-sm text-muted">
                      <ChevronRight className="h-3 w-3 shrink-0" style={{ color: DIM_INFO[d].color }} />
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={handleDownloadPdf}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-dim text-white text-sm font-semibold rounded-full transition-colors shadow-sm"
          >
            <Download className="h-4 w-4" /> Download PDF Report
          </button>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-accent/50 text-sm font-semibold rounded-full transition-colors text-foreground"
          >
            <RotateCcw className="h-4 w-4" /> Retake Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="soft-card p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-heading">
            Section {page + 1} of {TOTAL_PAGES}
          </span>
          <span className="text-sm text-muted">
            {answeredCount} / {QUESTIONS.length} answered
          </span>
        </div>
        <div className="h-2 bg-surface rounded-full overflow-hidden border border-border">
          <div
            className="h-full bg-accent rounded-full transition-all duration-300"
            style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      <div className="space-y-4">
        {pageQuestions.map((q, i) => {
          const qIdx = page * PER_PAGE + i;
          return (
            <div key={qIdx} className="soft-card p-5">
              <p className="text-sm text-heading font-medium mb-3">
                <span className="text-accent font-bold mr-2">{qIdx + 1}.</span>
                {q.text}
              </p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(val => (
                  <button
                    key={val}
                    onClick={() => handleAnswer(qIdx, val)}
                    className={`flex-1 py-2.5 rounded-full text-sm font-medium transition-all border ${
                      answers[qIdx] === val
                        ? "bg-accent text-white border-accent shadow-sm"
                        : "bg-surface border-border text-muted hover:border-accent/40 hover:text-foreground"
                    }`}
                  >
                    {val}
                  </button>
                ))}
              </div>
              <div className="flex justify-between mt-1.5 px-1">
                <span className="text-[10px] text-muted">Strongly Disagree</span>
                <span className="text-[10px] text-muted">Strongly Agree</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setPage(Math.max(0, page - 1))}
          disabled={page === 0}
          className="inline-flex items-center gap-2 px-4 py-2.5 border border-border rounded-full text-sm font-medium transition-colors hover:border-accent/40 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-4 w-4" /> Previous
        </button>

        {page < TOTAL_PAGES - 1 ? (
          <button
            onClick={() => setPage(page + 1)}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white rounded-full text-sm font-semibold transition-colors hover:bg-accent-dim shadow-sm"
          >
            Next <ChevronRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-full text-sm font-semibold transition-colors hover:bg-accent-dim shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            View Results <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
