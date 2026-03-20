import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const COLORS = {
  heading: [44, 31, 20] as [number, number, number],
  text: [61, 46, 34] as [number, number, number],
  accent: [139, 111, 78] as [number, number, number],
  muted: [140, 123, 107] as [number, number, number],
  bg: [250, 246, 241] as [number, number, number],
  border: [232, 221, 208] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
};

function addHeader(doc: jsPDF, title: string, subtitle: string) {
  doc.setFillColor(...COLORS.accent);
  doc.rect(0, 0, 210, 38, "F");
  doc.setTextColor(...COLORS.white);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text(title, 15, 18);
  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(subtitle, 15, 28);
  doc.setTextColor(...COLORS.heading);
}

function addFooter(doc: jsPDF, text: string) {
  const pageCount = doc.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(...COLORS.muted);
    doc.text(text, 15, 287);
    doc.text(`Page ${i} of ${pageCount}`, 195, 287, { align: "right" });
  }
}

// ── TOOLKIT TEMPLATES ──

export function generateTNATemplate() {
  const doc = new jsPDF();
  addHeader(doc, "Training Needs Analysis Template", "Corporate L&D Toolkit — Preksha Kothari");

  let y = 50;
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.heading);
  doc.text("Instructions", 15, y);
  y += 8;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...COLORS.text);
  doc.text("Complete each section below to identify training needs aligned with business objectives.", 15, y);
  y += 12;

  autoTable(doc, {
    startY: y,
    head: [["Section", "Details"]],
    body: [
      ["Business Goal", "Describe the organizational objective this training supports.\n\nExample: Reduce onboarding time for new hires by 30% within Q2."],
      ["Skill Gap Description", "Identify the gap between current and desired performance.\n\nExample: New employees lack knowledge of CRM software and internal workflows."],
      ["Target Audience", "Define who needs the training.\n\nExample: New hires in the sales department (0–3 months tenure), approximately 25 learners per quarter."],
      ["Current Performance Level", "Describe how the audience currently performs.\n\nExample: Average task completion rate is 45% during the first month."],
      ["Desired Performance Level", "Define the expected outcome after training.\n\nExample: Task completion rate should reach 80% by end of month 1."],
      ["Performance Indicators", "List measurable KPIs to track.\n\n• Assessment scores (pre/post)\n• Task completion rate\n• Manager feedback ratings\n• Time-to-productivity"],
      ["Learning Solution Recommendation", "Propose the training approach.\n\n• E-learning module (Articulate Storyline)\n• Blended learning with live workshops\n• Job aids and quick reference guides\n• Assessment checkpoints at Week 1, 2, 4"],
      ["Data Sources Consulted", "List sources used for the analysis.\n\n• HR performance data\n• Manager interviews\n• Employee surveys\n• Industry benchmarks"],
    ],
    theme: "grid",
    headStyles: { fillColor: COLORS.accent, textColor: COLORS.white, fontSize: 10 },
    bodyStyles: { fontSize: 9, textColor: COLORS.text, cellPadding: 6 },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 50 } },
    margin: { left: 15, right: 15 },
  });

  addFooter(doc, "Training Needs Analysis Template — Learning That Moves Beyond Content");
  return doc;
}

export function generateOnboardingJourneyMap() {
  const doc = new jsPDF();
  addHeader(doc, "Onboarding Journey Map", "Corporate L&D Toolkit — Preksha Kothari");

  let y = 50;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...COLORS.text);
  doc.text("Map the complete onboarding experience from pre-joining through the first 90 days.", 15, y);
  y += 12;

  autoTable(doc, {
    startY: y,
    head: [["Phase", "Timeline", "Activities", "Resources", "Assessment"]],
    body: [
      ["Pre-Joining", "Before Day 1", "• Welcome email & company overview\n• IT setup & access provisioning\n• Pre-reading materials\n• Mentor assignment", "Welcome kit PDF\nCompany handbook\nIT checklist", "Pre-assessment quiz on company values"],
      ["Week 1:\nOrientation", "Days 1–5", "• Company culture immersion\n• Team introductions\n• Role overview & expectations\n• Systems walkthrough", "Orientation deck\nOrg chart\nRole guide\nSystem access guide", "Knowledge check: Company basics\nReflection journal entry"],
      ["Month 1:\nCapability Building", "Days 6–30", "• Role-specific training modules\n• Shadowing & practice tasks\n• Weekly 1:1 with manager\n• Peer collaboration activities", "E-learning modules\nJob aids\nMentor guide\nTask templates", "Skills assessment\nManager observation\nProject deliverable review"],
      ["Month 2–3:\nIntegration", "Days 31–90", "• Independent project work\n• Cross-functional exposure\n• Performance goal setting\n• Feedback & development plan", "Performance rubric\nGoal-setting template\nFeedback form\n360° review tool", "90-day performance review\nSelf-assessment\nManager evaluation\nGoal achievement check"],
    ],
    theme: "grid",
    headStyles: { fillColor: COLORS.accent, textColor: COLORS.white, fontSize: 9 },
    bodyStyles: { fontSize: 8, textColor: COLORS.text, cellPadding: 5 },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 28 }, 1: { cellWidth: 22 } },
    margin: { left: 15, right: 15 },
  });

  addFooter(doc, "Onboarding Journey Map — Learning That Moves Beyond Content");
  return doc;
}

export function generateAssessmentBlueprint() {
  const doc = new jsPDF();
  addHeader(doc, "Assessment Blueprint", "Corporate L&D Toolkit — Preksha Kothari");

  let y = 50;
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.text);
  doc.text("Use this blueprint to design assessments aligned with learning objectives and Bloom's Taxonomy.", 15, y);
  y += 12;

  autoTable(doc, {
    startY: y,
    head: [["Learning Objective", "Bloom's Level", "Assessment Type", "Difficulty", "Evaluation Method", "Passing Criteria"]],
    body: [
      ["Identify key onboarding steps", "Remember", "Multiple Choice Quiz", "Basic", "Auto-scored in LMS", "80% correct"],
      ["Explain the ADDIE model phases", "Understand", "Short Answer", "Intermediate", "Rubric-based peer review", "Meets rubric criteria"],
      ["Apply UDL principles to a scenario", "Apply", "Case Study Analysis", "Intermediate", "Instructor evaluation", "Addresses 3+ UDL guidelines"],
      ["Analyze training effectiveness data", "Analyze", "Data Interpretation Exercise", "Advanced", "Rubric + data accuracy check", "Correct interpretation of 4/5 metrics"],
      ["Design a learning intervention", "Create", "Project-Based Assessment", "Advanced", "Panel review with rubric", "Comprehensive design document submitted"],
      ["Evaluate peer training designs", "Evaluate", "Peer Review + Reflection", "Advanced", "Self + peer assessment", "Constructive feedback on 3+ criteria"],
    ],
    theme: "grid",
    headStyles: { fillColor: COLORS.accent, textColor: COLORS.white, fontSize: 8 },
    bodyStyles: { fontSize: 8, textColor: COLORS.text, cellPadding: 4 },
    margin: { left: 15, right: 15 },
  });

  addFooter(doc, "Assessment Blueprint — Learning That Moves Beyond Content");
  return doc;
}

export function generateWorkshopPlanning() {
  const doc = new jsPDF();
  addHeader(doc, "Workshop Planning Template", "Educator Toolkit — Preksha Kothari");

  let y = 50;
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.text);
  doc.text("Plan and structure an engaging workshop session with clear outcomes and assessment.", 15, y);
  y += 12;

  autoTable(doc, {
    startY: y,
    head: [["Component", "Details"]],
    body: [
      ["Workshop Title", "[Enter workshop title]"],
      ["Duration", "[e.g., 3 hours / Half-day / Full-day]"],
      ["Target Audience", "[e.g., Faculty members, Corporate trainers, Students]"],
      ["Learning Goals", "By the end of this workshop, participants will be able to:\n\n1. [Goal 1 — action verb + measurable outcome]\n2. [Goal 2]\n3. [Goal 3]"],
      ["Session Flow", "Opening (15 min):\n• Ice-breaker activity\n• Workshop objectives overview\n\nCore Session 1 (45 min):\n• Concept introduction\n• Interactive demonstration\n• Practice activity\n\nBreak (15 min)\n\nCore Session 2 (45 min):\n• Group activity / case study\n• Discussion & reflection\n\nClosing (30 min):\n• Key takeaways\n• Q&A\n• Feedback collection"],
      ["Activities", "• Think-Pair-Share discussion\n• Case study analysis in small groups\n• Hands-on practice exercise\n• Gallery walk for peer feedback\n• Reflection journaling"],
      ["Materials Required", "• Projector & screen\n• Printed handouts (participant guide)\n• Sticky notes & markers\n• Activity worksheets\n• Feedback forms"],
      ["Assessment Method", "• Pre/Post knowledge check (5 questions)\n• Observation of group activity participation\n• Reflection submission quality\n• Participant feedback survey (Likert scale)"],
      ["Follow-Up Plan", "• Share session recording & resources via email\n• Assign a 1-week reflection task\n• Schedule follow-up check-in after 2 weeks"],
    ],
    theme: "grid",
    headStyles: { fillColor: COLORS.accent, textColor: COLORS.white, fontSize: 10 },
    bodyStyles: { fontSize: 9, textColor: COLORS.text, cellPadding: 6 },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 45 } },
    margin: { left: 15, right: 15 },
  });

  addFooter(doc, "Workshop Planning Template — Learning That Moves Beyond Content");
  return doc;
}

export function generateLessonDesignPlanner() {
  const doc = new jsPDF();
  addHeader(doc, "Lesson Design Planner", "Educator Toolkit — Preksha Kothari");

  let y = 50;
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.text);
  doc.text("Design a structured lesson with clear instructional strategies and engagement activities.", 15, y);
  y += 12;

  autoTable(doc, {
    startY: y,
    head: [["Element", "Details"]],
    body: [
      ["Topic", "[Enter topic / module name]"],
      ["Grade / Level", "[e.g., Undergraduate, Corporate, Professional Development]"],
      ["Duration", "[e.g., 60 minutes]"],
      ["Learning Outcomes", "At the end of this lesson, learners will be able to:\n\n1. [LO1 — Use Bloom's action verbs]\n2. [LO2]\n3. [LO3]"],
      ["Prior Knowledge Required", "[What learners should already know before this lesson]"],
      ["Instructional Strategy", "• Direct instruction (concept explanation) — 15 min\n• Guided practice (worked examples) — 15 min\n• Collaborative learning (group task) — 15 min\n• Independent practice — 10 min\n• Assessment & closure — 5 min"],
      ["Engagement Activity", "Activity: [e.g., Case Study Discussion]\n\nDescription: Learners analyze a real-world scenario in pairs and present their analysis to the class.\n\nPurpose: Promotes critical thinking and peer learning.\n\nTime: 15 minutes"],
      ["Resources & Materials", "• Presentation slides\n• Case study handout\n• Rubric for group activity\n• Digital whiteboard (Miro/Jamboard)\n• Exit ticket template"],
      ["Differentiation / UDL", "• Multiple means of representation (visual + text + audio)\n• Multiple means of engagement (choice in activity format)\n• Multiple means of expression (written, verbal, visual output)"],
      ["Reflection Prompt", "\"What is one concept from today that you can apply in your current role or study? How would you implement it?\""],
      ["Assessment", "• Formative: Exit ticket with 2 reflection questions\n• Summative: Module quiz (linked to LOs)\n• Peer: Brief peer feedback on group task"],
    ],
    theme: "grid",
    headStyles: { fillColor: COLORS.accent, textColor: COLORS.white, fontSize: 10 },
    bodyStyles: { fontSize: 9, textColor: COLORS.text, cellPadding: 6 },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 45 } },
    margin: { left: 15, right: 15 },
  });

  addFooter(doc, "Lesson Design Planner — Learning That Moves Beyond Content");
  return doc;
}

export function generateSkillGapAssessment() {
  const doc = new jsPDF();
  addHeader(doc, "Skill Gap Self-Assessment", "Career & Student Toolkit — Preksha Kothari");

  let y = 50;
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.text);
  doc.text("Rate yourself on each skill area (1 = Needs Development, 5 = Highly Proficient).", 15, y);
  y += 12;

  autoTable(doc, {
    startY: y,
    head: [["Skill Area", "Sub-Skills", "Self-Rating (1–5)", "Evidence / Example", "Development Goal"]],
    body: [
      ["Communication", "• Verbal presentation\n• Written communication\n• Active listening\n• Giving feedback", "", "", ""],
      ["Problem-Solving", "• Analytical thinking\n• Creative solutions\n• Decision-making\n• Research skills", "", "", ""],
      ["Collaboration", "• Teamwork\n• Conflict resolution\n• Leadership in groups\n• Cross-functional work", "", "", ""],
      ["Workplace Readiness", "• Time management\n• Professionalism\n• Adaptability\n• Digital literacy", "", "", ""],
      ["Technical Skills", "• Industry tools\n• Software proficiency\n• Data interpretation\n• Domain knowledge", "", "", ""],
      ["Emotional Intelligence", "• Self-awareness\n• Empathy\n• Stress management\n• Motivation", "", "", ""],
    ],
    theme: "grid",
    headStyles: { fillColor: COLORS.accent, textColor: COLORS.white, fontSize: 8 },
    bodyStyles: { fontSize: 8, textColor: COLORS.text, cellPadding: 5 },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 28 }, 2: { cellWidth: 22 } },
    margin: { left: 15, right: 15 },
  });

  const finalY = (doc as jsPDF & { lastAutoTable?: { finalY?: number } }).lastAutoTable?.finalY ?? 200;
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.heading);
  doc.text("Action Plan", 15, finalY + 15);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.text);
  doc.text("Top 3 areas for improvement:", 15, finalY + 23);
  doc.text("1. _______________________________________________", 15, finalY + 33);
  doc.text("2. _______________________________________________", 15, finalY + 43);
  doc.text("3. _______________________________________________", 15, finalY + 53);

  addFooter(doc, "Skill Gap Self-Assessment — Learning That Moves Beyond Content");
  return doc;
}

export function generateCareerReadinessChecklist() {
  const doc = new jsPDF();
  addHeader(doc, "Career Readiness Checklist", "Career & Student Toolkit — Preksha Kothari");

  let y = 50;
  doc.setFontSize(9);
  doc.setTextColor(...COLORS.text);
  doc.text("Check off each item as you prepare for your career transition.", 15, y);
  y += 12;

  autoTable(doc, {
    startY: y,
    head: [["Category", "Checklist Item", "Status", "Notes"]],
    body: [
      ["Resume Readiness", "Resume is updated with latest experience", "☐", ""],
      ["", "Resume is tailored for target industry", "☐", ""],
      ["", "Resume reviewed by mentor or career counselor", "☐", ""],
      ["", "LinkedIn profile matches and is optimized", "☐", ""],
      ["Interview Skills", "Practiced STAR method for behavioral questions", "☐", ""],
      ["", "Prepared answers for top 10 common questions", "☐", ""],
      ["", "Completed at least 2 mock interviews", "☐", ""],
      ["", "Researched target companies and roles", "☐", ""],
      ["Workplace Behaviour", "Understands professional email etiquette", "☐", ""],
      ["", "Familiar with meeting norms and protocols", "☐", ""],
      ["", "Practiced time management techniques", "☐", ""],
      ["", "Knows how to handle workplace feedback", "☐", ""],
      ["Professional Communication", "Can deliver a 60-second elevator pitch", "☐", ""],
      ["", "Comfortable with networking conversations", "☐", ""],
      ["", "Can write a professional follow-up email", "☐", ""],
      ["", "Has a professional voicemail and email signature", "☐", ""],
      ["Portfolio / Evidence", "Work samples collected and organized", "☐", ""],
      ["", "References identified and confirmed", "☐", ""],
      ["", "Portfolio or website is presentable", "☐", ""],
      ["", "Certifications documented and accessible", "☐", ""],
    ],
    theme: "grid",
    headStyles: { fillColor: COLORS.accent, textColor: COLORS.white, fontSize: 9 },
    bodyStyles: { fontSize: 8, textColor: COLORS.text, cellPadding: 4 },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 35 }, 2: { cellWidth: 15, halign: "center" } },
    margin: { left: 15, right: 15 },
  });

  addFooter(doc, "Career Readiness Checklist — Learning That Moves Beyond Content");
  return doc;
}

// ── PROJECT ARTIFACTS ──

export function generateStoryboardPdf(projectTitle: string) {
  const doc = new jsPDF("landscape");
  addHeader(doc, `Storyboard — ${projectTitle}`, "Project Artifact — Preksha Kothari");

  const slides = [
    { title: "Slide 1: Welcome & Overview", visual: "Company logo with welcome message animation", narration: "Welcome to this learning module. In this session, we will explore the key concepts and skills needed for your role.", interaction: "Click 'Next' to begin" },
    { title: "Slide 2: Learning Objectives", visual: "Animated list with checkmark icons for each objective", narration: "By the end of this module, you will be able to: identify key processes, apply best practices, and demonstrate competency.", interaction: "Auto-advance after 10 seconds" },
    { title: "Slide 3: Core Concept Introduction", visual: "Infographic with labeled diagram showing process flow", narration: "Let's start with the foundational concepts. The process includes four key stages as shown in this diagram.", interaction: "Hover over each stage for details" },
    { title: "Slide 4: Scenario-Based Practice", visual: "Branching scenario with character dialogue", narration: "You are now in a real-world scenario. Read the situation and choose the best response.", interaction: "Select from 3 response options (branching)" },
    { title: "Slide 5: Knowledge Check", visual: "Interactive quiz with drag-and-drop matching", narration: "Let's check your understanding. Match each concept with its correct definition.", interaction: "Drag items to matching positions; feedback on submit" },
    { title: "Slide 6: Summary & Next Steps", visual: "Key takeaways in card format with resource links", narration: "Great work! Here are the key takeaways from this module. Click below to access additional resources.", interaction: "Download certificate; link to next module" },
  ];

  let y = 50;
  autoTable(doc, {
    startY: y,
    head: [["Slide", "Visual Description", "Narration / Script", "Interaction / Navigation"]],
    body: slides.map(s => [s.title, s.visual, s.narration, s.interaction]),
    theme: "grid",
    headStyles: { fillColor: COLORS.accent, textColor: COLORS.white, fontSize: 9 },
    bodyStyles: { fontSize: 8, textColor: COLORS.text, cellPadding: 5 },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 40 } },
    margin: { left: 15, right: 15 },
  });

  addFooter(doc, `Storyboard — ${projectTitle} — Learning That Moves Beyond Content`);
  return doc;
}

export function generateInteractionFlowPdf(projectTitle: string) {
  const doc = new jsPDF();
  addHeader(doc, `Interaction Flow — ${projectTitle}`, "Project Artifact — Preksha Kothari");

  let y = 50;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.heading);
  doc.text("Module Interaction Flow Diagram", 15, y);
  y += 10;
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...COLORS.text);

  const flowSteps = [
    { step: "1. Entry Point", desc: "Learner launches module from LMS dashboard. System checks prerequisites and prior completion status." },
    { step: "2. Pre-Assessment", desc: "5-question diagnostic quiz to gauge existing knowledge. Results determine adaptive learning path." },
    { step: "3. Content Delivery", desc: "Interactive slides with multimedia content. Includes video, infographics, and audio narration. Self-paced navigation." },
    { step: "4. Practice Activity", desc: "Scenario-based branching exercise. Learner makes decisions and sees consequences. Immediate feedback provided." },
    { step: "5. Knowledge Check", desc: "10-question formative assessment. Mix of MCQ, drag-and-drop, and matching. Must score 70% to proceed." },
    { step: "6. Remediation Loop", desc: "If score < 70%, learner reviews flagged topics and retakes assessment. Maximum 3 attempts allowed." },
    { step: "7. Completion", desc: "Summary of key takeaways displayed. Certificate generated. SCORM completion status sent to LMS." },
  ];

  flowSteps.forEach((item) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...COLORS.accent);
    doc.text(item.step, 15, y);
    y += 7;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...COLORS.text);
    const lines = doc.splitTextToSize(item.desc, 170);
    doc.text(lines, 20, y);
    y += lines.length * 5 + 4;
    doc.setDrawColor(...COLORS.border);
    doc.line(20, y, 60, y);
    y += 8;
  });

  addFooter(doc, `Interaction Flow — ${projectTitle} — Learning That Moves Beyond Content`);
  return doc;
}

export function generateAssessmentSamplePdf(projectTitle: string) {
  const doc = new jsPDF();
  addHeader(doc, `Assessment Sample — ${projectTitle}`, "Project Artifact — Preksha Kothari");

  let y = 50;
  autoTable(doc, {
    startY: y,
    head: [["Q#", "Question", "Type", "Options / Criteria", "Correct Answer"]],
    body: [
      ["1", "Which phase of ADDIE focuses on identifying learner needs?", "MCQ", "a) Design\nb) Analysis\nc) Implementation\nd) Evaluation", "b) Analysis"],
      ["2", "Match each Bloom's level with its action verb.", "Matching", "Remember → List\nApply → Demonstrate\nEvaluate → Justify", "All correctly matched"],
      ["3", "A new employee struggles with CRM software. What is the best first step?", "Scenario", "a) Assign a mentor\nb) Conduct needs analysis\nc) Create an e-learning module\nd) Schedule a workshop", "b) Conduct needs analysis"],
      ["4", "Drag the onboarding phases into the correct chronological order.", "Drag & Drop", "Pre-joining, Orientation, Capability Building, Integration", "Correct sequence"],
      ["5", "Write a brief learning objective for a customer service training module.", "Open-Ended", "Rubric: Uses action verb, measurable, aligned to job task", "Varies — rubric-scored"],
    ],
    theme: "grid",
    headStyles: { fillColor: COLORS.accent, textColor: COLORS.white, fontSize: 8 },
    bodyStyles: { fontSize: 8, textColor: COLORS.text, cellPadding: 5 },
    columnStyles: { 0: { cellWidth: 12, halign: "center" }, 4: { cellWidth: 30 } },
    margin: { left: 15, right: 15 },
  });

  addFooter(doc, `Assessment Sample — ${projectTitle} — Learning That Moves Beyond Content`);
  return doc;
}

export function generateLearningJourneyMapPdf(projectTitle: string) {
  const doc = new jsPDF("landscape");
  addHeader(doc, `Learning Journey Map — ${projectTitle}`, "Project Artifact — Preksha Kothari");

  let y = 50;
  autoTable(doc, {
    startY: y,
    head: [["Stage", "Learner Experience", "Emotions", "Touchpoints", "Support Needed", "Success Metric"]],
    body: [
      ["Awareness", "Learner receives module assignment via LMS notification", "Curious, slightly anxious", "LMS dashboard, email notification", "Clear instructions, time estimate", "Module opened within 48 hours"],
      ["Onboarding", "Completes pre-assessment and reviews objectives", "Engaged, building confidence", "Welcome screen, diagnostic quiz", "Encouraging messaging, help button", "Pre-assessment completed"],
      ["Learning", "Progresses through interactive content and practice", "Focused, occasionally challenged", "Content slides, videos, activities", "Scaffolded difficulty, instant feedback", "80% content completion"],
      ["Application", "Completes scenario-based exercises and projects", "Confident, problem-solving", "Branching scenarios, simulations", "Hints, peer discussion forum", "Scenario decisions align with best practice"],
      ["Assessment", "Takes final knowledge check and submits deliverables", "Determined, achievement-oriented", "Quiz engine, submission portal", "Clear rubric, retry options", "Score ≥ 70% on assessment"],
      ["Completion", "Receives certificate and feedback summary", "Accomplished, motivated", "Certificate, feedback report, LMS badge", "Next steps recommendation", "Certificate earned, feedback reviewed"],
    ],
    theme: "grid",
    headStyles: { fillColor: COLORS.accent, textColor: COLORS.white, fontSize: 8 },
    bodyStyles: { fontSize: 7, textColor: COLORS.text, cellPadding: 4 },
    columnStyles: { 0: { fontStyle: "bold", cellWidth: 25 } },
    margin: { left: 15, right: 15 },
  });

  addFooter(doc, `Learning Journey Map — ${projectTitle} — Learning That Moves Beyond Content`);
  return doc;
}
