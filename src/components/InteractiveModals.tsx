import { useState, type FormEvent } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileCheck2,
  FileSearch,
  FileText,
  ShieldCheck,
  Upload,
  X,
} from 'lucide-react';
import type { PricingPack } from '../data/landingContent';

interface AssignmentStudioModalProps {
  open: boolean;
  onClose: () => void;
  onOpenPricing: () => void;
}

export function AssignmentStudioModal({
  open,
  onClose,
  onOpenPricing,
}: AssignmentStudioModalProps) {
  const [fileName, setFileName] = useState<string>('MBA_Sem3_Strategic_Mgmt_Questions.pdf');
  const [questionsText, setQuestionsText] = useState<string>(
    'Q1. Explain the phases of the strategic management process with relevant examples.\nQ2. Compare SWOT analysis and PESTLE analysis in evaluating business environments.'
  );
  const [studentName, setStudentName] = useState('Aarav Sharma');
  const [rollNumber, setRollNumber] = useState('24MBA0184');
  const [university, setUniversity] = useState('Centre for Distance & Online Education');
  const [programme, setProgramme] = useState('MBA');
  const [semester, setSemester] = useState('Semester III');
  const [course, setCourse] = useState('MB-302 · Strategic Management');
  const [previewTab, setPreviewTab] = useState<'cover' | 'answers'>('cover');
  const [previewGenerated, setPreviewGenerated] = useState(true);

  if (!open) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleGeneratePreview = (e: FormEvent) => {
    e.preventDefault();
    setPreviewGenerated(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="studio-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <div>
            <h2 id="studio-modal-title" className="font-display text-lg font-bold text-slate-900">
              Free Assignment Preview
            </h2>
            <p className="text-xs text-slate-500">
              Preview your assignment for free. No payment required.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid flex-1 grid-cols-1 overflow-y-auto lg:grid-cols-12">
          {/* Left Form */}
          <form
            onSubmit={handleGeneratePreview}
            className="space-y-4 border-b border-slate-200 p-6 lg:col-span-5 lg:border-r lg:border-b-0"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-700">
                1. Upload Questions (PDF, DOCX, or Image)
              </label>
              <label className="mt-1.5 flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-dashed border-emerald-600/40 bg-[#F3FBF7] px-4 py-3 text-xs hover:bg-emerald-50">
                <span className="flex items-center gap-2 font-medium text-emerald-800 truncate">
                  <Upload className="h-4 w-4 shrink-0 text-emerald-700" />
                  <span className="truncate">{fileName}</span>
                </span>
                <span className="font-semibold text-emerald-700 shrink-0">Change</span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                  className="sr-only"
                />
              </label>
            </div>

            <div>
              <label htmlFor="questions-input" className="block text-xs font-semibold text-slate-700">
                Or Paste Assignment Questions
              </label>
              <textarea
                id="questions-input"
                rows={3}
                value={questionsText}
                onChange={(e) => setQuestionsText(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs text-slate-800 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="student-name" className="block text-xs font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  id="student-name"
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="roll-no" className="block text-xs font-semibold text-slate-700">
                  Roll Number
                </label>
                <input
                  id="roll-no"
                  type="text"
                  required
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="university" className="block text-xs font-semibold text-slate-700">
                University / Institution
              </label>
              <input
                id="university"
                type="text"
                required
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="programme" className="block text-xs font-semibold text-slate-700">
                  Programme
                </label>
                <input
                  id="programme"
                  type="text"
                  required
                  value={programme}
                  onChange={(e) => setProgramme(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="semester" className="block text-xs font-semibold text-slate-700">
                  Semester
                </label>
                <input
                  id="semester"
                  type="text"
                  required
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="course" className="block text-xs font-semibold text-slate-700">
                Course Details
              </label>
              <input
                id="course"
                type="text"
                required
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 cursor-pointer"
            >
              Update Live A4 Preview
            </button>
          </form>

          {/* Right Live Preview */}
          <div className="flex flex-col justify-between bg-[#F4F7F5] p-6 lg:col-span-7">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex rounded-lg bg-white p-1 border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setPreviewTab('cover')}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer ${
                      previewTab === 'cover' ? 'bg-emerald-600 text-white' : 'text-slate-600'
                    }`}
                  >
                    Cover Page
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewTab('answers')}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold cursor-pointer ${
                      previewTab === 'answers' ? 'bg-emerald-600 text-white' : 'text-slate-600'
                    }`}
                  >
                    Answer Draft Preview
                  </button>
                </div>

                <span className="font-mono-tabular text-[11px] text-slate-500">
                  A4 · 1-inch margins · Times New Roman 12 pt
                </span>
              </div>

              {previewGenerated && (
                <div className="mt-4 rounded-xl border border-slate-300/80 bg-white p-6 shadow-sm font-document">
                  {previewTab === 'cover' ? (
                    <div className="flex min-h-[320px] flex-col justify-between">
                      <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-800">
                          {university || 'University Name'}
                        </p>
                        <div className="mx-auto my-3 h-px w-20 bg-slate-300" />
                        <p className="text-sm font-bold uppercase">
                          ASSIGNMENT SUBMISSION
                        </p>
                      </div>

                      <div className="my-5 rounded border border-slate-200 bg-slate-50 p-4 text-center">
                        <p className="text-xs text-slate-500">Course</p>
                        <p className="mt-1 text-sm font-bold text-slate-900">{course}</p>
                        <p className="mt-1 text-xs text-slate-600">
                          {programme} · {semester}
                        </p>
                      </div>

                      <dl className="space-y-1.5 border-t border-slate-200 pt-4 text-xs">
                        <div className="flex justify-between">
                          <dt className="text-slate-500">Student Name:</dt>
                          <dd className="font-bold text-slate-900">{studentName}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-slate-500">Roll Number:</dt>
                          <dd className="font-bold text-slate-900">{rollNumber}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-slate-500">Document Formats:</dt>
                          <dd>Formatted PDF + Editable DOCX</dd>
                        </div>
                      </dl>
                    </div>
                  ) : (
                    <div className="min-h-[320px] space-y-3 text-xs leading-[1.7] text-slate-800">
                      <div className="flex justify-between border-b border-slate-200 pb-2 text-[10px] text-slate-500">
                        <span>{course}</span>
                        <span>{studentName} ({rollNumber})</span>
                      </div>
                      <p className="font-bold text-slate-900">
                        {questionsText.split('\n')[0] || 'Question 1'}
                      </p>
                      <p className="text-justify">
                        <strong>Overview:</strong> A structured academic response prepared around your uploaded prompt, organised with clear headings, concise definitions, and applied illustrations formatted in Times New Roman, 12 pt, with justified alignment and 1-inch A4 margins.
                      </p>
                      <p className="text-justify text-slate-600">
                        Full multi-page answers and editable Word (.docx) export are unlocked immediately when you generate with 1 assignment credit.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
              <p className="text-xs text-slate-600">
                Happy with your preview? Choose a credit pack to generate your PDF &amp; DOCX.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenPricing();
                }}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-700 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Choose a Pack</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TurnitinReportModalProps {
  reportType: 'ai' | 'similarity' | null;
  onClose: () => void;
  onSwitchType: (type: 'ai' | 'similarity') => void;
}

export function TurnitinReportModal({
  reportType,
  onClose,
  onSwitchType,
}: TurnitinReportModalProps) {
  if (!reportType) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="turnitin-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs"
    >
      <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-700 bg-[#0B2229] text-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <h2 id="turnitin-modal-title" className="font-display text-base font-bold">
              {reportType === 'ai' ? 'Sample Turnitin AI Writing Report' : 'Sample Turnitin Similarity Report'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close report modal"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="inline-flex rounded-xl bg-[#102F38] p-1 border border-white/10">
            <button
              type="button"
              onClick={() => onSwitchType('ai')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer ${
                reportType === 'ai' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              <FileSearch className="h-3.5 w-3.5" />
              <span>AI Writing Report</span>
            </button>
            <button
              type="button"
              onClick={() => onSwitchType('similarity')}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer ${
                reportType === 'similarity' ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              <FileCheck2 className="h-3.5 w-3.5" />
              <span>Similarity Report</span>
            </button>
          </div>

          {reportType === 'ai' ? (
            <div className="rounded-2xl border border-white/10 bg-[#102F38] p-5 space-y-4">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono-tabular text-xs text-slate-400">DETECTED AS AI</p>
                  <p className="mt-1 font-mono-tabular text-4xl font-bold text-emerald-400">*% </p>
                </div>
                <span className="font-mono-tabular text-xs font-semibold text-emerald-300">
                  Below 20% reporting threshold
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                Turnitin displays <span className="font-mono-tabular font-semibold text-white">*%</span> instead of a numerical percentage when the detected AI writing indicator falls below Turnitin’s 20% reporting threshold.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-[#0B2229] p-3">
                  <span className="block text-slate-400">Integrity Flags</span>
                  <span className="mt-1 block font-mono-tabular text-base font-bold text-white">0 Flags</span>
                </div>
                <div className="rounded-xl bg-[#0B2229] p-3">
                  <span className="block text-slate-400">Document Checked</span>
                  <span className="mt-1 block font-semibold text-white">Sample SemBuddy Draft</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-[#102F38] p-5 space-y-4">
              <div className="flex items-baseline justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="font-mono-tabular text-xs text-slate-400">OVERALL SIMILARITY</p>
                  <p className="mt-1 font-mono-tabular text-4xl font-bold text-emerald-400">2%</p>
                </div>
                <span className="font-mono-tabular text-xs font-semibold text-emerald-300">
                  0 Integrity Flags
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">
                The tested assignment received 2% overall similarity across Turnitin’s indexed repositories, with minimal matched phrasing limited to standard academic terminology and question prompts.
              </p>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-[#0B2229] p-3">
                  <span className="block text-slate-400">Internet Sources</span>
                  <span className="mt-1 block font-mono-tabular text-base font-bold text-white">2%</span>
                </div>
                <div className="rounded-xl bg-[#0B2229] p-3">
                  <span className="block text-slate-400">Publications</span>
                  <span className="mt-1 block font-mono-tabular text-base font-bold text-white">0%</span>
                </div>
                <div className="rounded-xl bg-[#0B2229] p-3">
                  <span className="block text-slate-400">Student Papers</span>
                  <span className="mt-1 block font-mono-tabular text-base font-bold text-white">0%</span>
                </div>
              </div>
            </div>
          )}

          <p className="text-xs leading-relaxed text-slate-400">
            Results are from one assignment tested through a third-party Turnitin check. Results may vary depending on the assignment and Turnitin settings. These results do not guarantee a particular Turnitin score or academic acceptance. SemBuddy is not affiliated with or endorsed by Turnitin.
          </p>
        </div>
      </div>
    </div>
  );
}

interface PackCheckoutModalProps {
  pack: PricingPack | null;
  onClose: () => void;
  onStartPreview: () => void;
}

export function PackCheckoutModal({ pack, onClose, onStartPreview }: PackCheckoutModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!pack) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pack-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
    >
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono-tabular text-[11px] font-bold tracking-wider text-emerald-700">
              SELECTED PACKAGE
            </p>
            <h2 id="pack-modal-title" className="mt-1 font-display text-xl font-bold text-slate-900">
              {pack.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close pack modal"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4 flex items-baseline justify-between rounded-2xl border border-emerald-600/20 bg-[#F3FBF7] p-4">
          <div>
            <span className="font-display font-mono-tabular text-3xl font-extrabold text-slate-900">
              {pack.price}
            </span>
            {pack.savings && (
              <span className="ml-2 text-xs font-semibold text-emerald-700">{pack.savings}</span>
            )}
          </div>
          <span className="font-mono-tabular text-xs font-semibold text-slate-600">
            {pack.credits} {pack.credits === 1 ? 'Credit' : 'Credits'}
          </span>
        </div>

        <ul className="mt-4 space-y-2">
          {pack.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
              <Check className="h-4 w-4 text-emerald-600" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {submitted ? (
          <div className="mt-6 rounded-2xl border border-emerald-600/25 bg-[#F3FBF7] p-4 text-sm text-slate-700">
            <div className="flex items-center gap-2 font-semibold text-emerald-800">
              <CheckCircle2 className="h-4 w-4" />
              <span>Pack summary sent to {email}</span>
            </div>
            <p className="mt-1 text-xs text-slate-600">
              You can upload your questions and preview your assignment for free before completing payment.
            </p>
            <button
              type="button"
              onClick={() => {
                resetAndClose();
                onStartPreview();
              }}
              className="mt-3 w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-700 cursor-pointer"
            >
              Preview My Assignment Free →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3">
            <div>
              <label htmlFor="pack-email" className="block text-xs font-semibold text-slate-700">
                Your Email Address (for credit receipt &amp; cloud backup)
              </label>
              <input
                id="pack-email"
                type="email"
                required
                placeholder="student@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 cursor-pointer"
            >
              Continue with {pack.price} →
            </button>

            <button
              type="button"
              onClick={() => {
                resetAndClose();
                onStartPreview();
              }}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer"
            >
              <span className="inline-flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5 text-emerald-700" />
                Preview an assignment for free first
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

interface GroupPricingModalProps {
  open: boolean;
  onClose: () => void;
}

export function GroupPricingModal({ open, onClose }: GroupPricingModalProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [count, setCount] = useState('15');
  const [sent, setSent] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) return;
    setSent(true);
  };

  const handleClose = () => {
    setSent(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="group-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-xs"
    >
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <div>
            <h2 id="group-modal-title" className="font-display text-lg font-bold text-slate-900">
              Group &amp; Class Pricing
            </h2>
            <p className="mt-1 text-xs text-slate-500">
              Request discounted bulk assignment credits for friends or your entire batch.
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close group pricing modal"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-900 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {sent ? (
          <div className="mt-6 rounded-2xl border border-emerald-600/20 bg-[#F3FBF7] p-5 text-center">
            <CheckCircle2 className="mx-auto h-8 w-8 text-emerald-600" />
            <h3 className="mt-3 font-display text-base font-bold text-slate-900">
              Request Received
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              Thanks, {name}. We’ve noted your group request for {count} assignments and will reach out to {contact} shortly.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-4 w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white hover:bg-emerald-700 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
            <div>
              <label htmlFor="group-name" className="block text-xs font-semibold text-slate-700">
                Your Name
              </label>
              <input
                id="group-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="group-contact" className="block text-xs font-semibold text-slate-700">
                Email or WhatsApp Number
              </label>
              <input
                id="group-contact"
                type="text"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="email@example.com or +91 ..."
                className="mt-1 w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="group-count" className="block text-xs font-semibold text-slate-700">
                Estimated Assignments Needed
              </label>
              <select
                id="group-count"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm focus:border-emerald-600 focus:outline-none"
              >
                <option value="15">10 – 20 Assignments</option>
                <option value="35">21 – 50 Assignments</option>
                <option value="75">50+ Assignments (Entire Class)</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700 cursor-pointer"
            >
              Request Group Quote
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
