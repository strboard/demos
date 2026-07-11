const demos = [
  {
    id: "BTS-018",
    title: "Lead Vault & book-of-business upload",
    summary: "Upload CSV or Excel contacts, stage and categorize them, remove stale entries, and convert a qualified lead with clear account handoff details.",
    video: "BTS-018-lead-vault-book-of-business-upload.mp4",
    prs: [
      ["UI #366", "https://github.com/strboard/ui-react/pull/366"],
      ["UI #367", "https://github.com/strboard/ui-react/pull/367"],
      ["UI #368", "https://github.com/strboard/ui-react/pull/368"],
    ],
  },
  {
    id: "BTS-017",
    title: "Loan Summary redesign",
    summary: "A cleaner scenario-focused summary for shopping, accepted-offer, and refinance files, with a compact sticky snapshot.",
    video: "BTS-017-loan-summary-redesign.mp4",
    prs: [["UI #365", "https://github.com/strboard/ui-react/pull/365"]],
  },
  {
    id: "BTS-016",
    title: "Borrower portal cleanup",
    summary: "A simpler borrower workspace with focused navigation, better LO contact details, and an accessible loan-details drawer.",
    video: "BTS-016-borrower-portal-cleanup.mp4",
    prs: [["UI #364", "https://github.com/strboard/ui-react/pull/364"]],
  },
  {
    id: "BTS-015",
    title: "Loan officer portal cleanup",
    summary: "A quieter file workspace that removes duplicate actions and surfaces the borrower and property context that matters.",
    video: "BTS-015-lo-portal-cleanup.mp4",
    prs: [["UI #363", "https://github.com/strboard/ui-react/pull/363"]],
  },
  {
    id: "BTS-014",
    title: "Borrower declarations & demographics",
    summary: "Declarations, demographics, and government information consolidated into Borrower Information with focused review alerts.",
    video: "BTS-014-borrower-declarations-demographics.mp4",
    prs: [["UI #362", "https://github.com/strboard/ui-react/pull/362"]],
  },
  {
    id: "BTS-013",
    title: "Document Manager queue indicators",
    summary: "At-a-glance counts for missing, rejected, and awaiting-review documents without adding noise when queues are clear.",
    video: "BTS-013-document-manager-enhancements.mp4",
    prs: [["UI #361", "https://github.com/strboard/ui-react/pull/361"]],
  },
  {
    id: "BTS-012",
    title: "Activity Log tabs & filters",
    summary: "A unified audit trail with lightweight tabs and filters for quickly finding key file, borrower, and pricing events.",
    video: "BTS-012-activity-log-enhancements.mp4",
    prs: [["UI #360", "https://github.com/strboard/ui-react/pull/360"]],
  },
  {
    id: "BTS-011",
    title: "Loan officer file timeline",
    summary: "A dedicated high-level timeline for completed and upcoming milestones, including the EPO date.",
    video: "BTS-011-file-timeline.mp4",
    prs: [["UI #359", "https://github.com/strboard/ui-react/pull/359"]],
  },
  {
    id: "BTS-009",
    title: "Milestone email loan summaries",
    summary: "Borrower milestone emails gain clear loan-structure context while leaving internal underwriting noise out.",
    video: "BTS-009-milestone-email-loan-structure.mp4",
    prs: [
      ["UI #358", "https://github.com/strboard/ui-react/pull/358"],
      ["API #215", "https://github.com/strboard/api-nodejs/pull/215"],
    ],
  },
  {
    id: "BTS-006",
    title: "Borrower pre-approval scenarios",
    summary: "Borrowers can test property scenarios and submit changes for loan-officer review, approval, and draft handoff.",
    video: "BTS-006-borrower-preapproval-scenario-edit-page.mp4",
    prs: [
      ["UI #355", "https://github.com/strboard/ui-react/pull/355"],
      ["UI #356", "https://github.com/strboard/ui-react/pull/356"],
      ["UI #357", "https://github.com/strboard/ui-react/pull/357"],
      ["API #213", "https://github.com/strboard/api-nodejs/pull/213"],
      ["API #214", "https://github.com/strboard/api-nodejs/pull/214"],
    ],
  },
  {
    id: "BTS-005",
    title: "Pre-approval letter generator",
    summary: "Generate, edit, preview, publish, and download richer pre-approval letters with soft guardrail warnings and history.",
    video: "BTS-005-pre-approval-letter-generator.mp4",
    prs: [
      ["UI #352", "https://github.com/strboard/ui-react/pull/352"],
      ["UI #353", "https://github.com/strboard/ui-react/pull/353"],
      ["API #210", "https://github.com/strboard/api-nodejs/pull/210"],
      ["API #211", "https://github.com/strboard/api-nodejs/pull/211"],
    ],
  },
  {
    id: "BTS-004",
    title: "Lock confirmation mismatch review",
    summary: "Key lock events compare confirmed terms with Strboard values and surface clear, actionable mismatch alerts.",
    video: "BTS-004-confirmation-event-mismatch-review.mp4",
    prs: [
      ["UI #351", "https://github.com/strboard/ui-react/pull/351"],
      ["UI #354", "https://github.com/strboard/ui-react/pull/354"],
      ["API #209", "https://github.com/strboard/api-nodejs/pull/209"],
      ["API #212", "https://github.com/strboard/api-nodejs/pull/212"],
    ],
  },
  {
    id: "BTS-003",
    title: "AUS-ready AI analysis",
    summary: "A concise readiness view replaces the score-centric loan-health UI with clear blockers, ceilings, and next actions.",
    video: "BTS-003-ai-analysis-aus-ready.mp4",
    prs: [["UI #350", "https://github.com/strboard/ui-react/pull/350"]],
  },
  {
    id: "BTS-002",
    title: "MISMO import & export",
    summary: "Preview mapped MISMO data before applying it to Form 1003, export compatible files, and retain an audit trail.",
    video: "BTS-002-mismo-import-export.mp4",
    prs: [
      ["UI #349", "https://github.com/strboard/ui-react/pull/349"],
      ["API #208", "https://github.com/strboard/api-nodejs/pull/208"],
    ],
  },
  {
    id: "BTS-001",
    title: "Core calculation consistency",
    summary: "Property tax, qualifying income, closing costs, monthly payment, and cash-to-close stay aligned across every loan view.",
    video: "BTS-001-core-calculation-data-cleanup.mp4",
    prs: [
      ["UI #345", "https://github.com/strboard/ui-react/pull/345"],
      ["UI #346", "https://github.com/strboard/ui-react/pull/346"],
      ["UI #347", "https://github.com/strboard/ui-react/pull/347"],
      ["UI #348", "https://github.com/strboard/ui-react/pull/348"],
      ["API #206", "https://github.com/strboard/api-nodejs/pull/206"],
      ["API #207", "https://github.com/strboard/api-nodejs/pull/207"],
    ],
  },
];

const gallery = document.querySelector("#gallery");
const search = document.querySelector("#search");
const emptyState = document.querySelector("#empty-state");
const externalIcon = '<svg aria-hidden="true" viewBox="0 0 16 16"><path d="M5.2 3.5h7.3v7.3h-1.4V5.9l-7 7-1-1 7-7H5.2V3.5Z" /></svg>';

function render(items) {
  gallery.replaceChildren();
  emptyState.hidden = items.length !== 0;

  items.forEach((demo) => {
    const card = document.createElement("article");
    card.className = "demo-card";
    card.innerHTML = `
      <div class="video-shell" data-label="${demo.id}">
        <video controls playsinline preload="metadata" aria-label="${demo.title} demo">
          <source src="videos/${demo.video}" type="video/mp4">
          Your browser does not support embedded MP4 video.
        </video>
      </div>
      <div class="card-body">
        <h3>${demo.title}</h3>
        <p>${demo.summary}</p>
        <div class="pr-links" aria-label="Related pull requests">
          ${demo.prs.map(([label, url]) => `<a class="pr-link" href="${url}" target="_blank" rel="noreferrer">${label}${externalIcon}</a>`).join("")}
        </div>
      </div>`;
    gallery.append(card);
  });
}

search.addEventListener("input", () => {
  const query = search.value.trim().toLowerCase();
  const filtered = demos.filter((demo) =>
    [demo.id, demo.title, demo.summary, ...demo.prs.map(([label]) => label)].join(" ").toLowerCase().includes(query),
  );
  render(filtered);
});

document.querySelector("#video-count").textContent = demos.length;
document.querySelector("#pr-count").textContent = demos.reduce((total, demo) => total + demo.prs.length, 0);
render(demos);
