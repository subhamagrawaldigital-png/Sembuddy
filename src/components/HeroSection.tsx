import { ArrowRight, Check, FileText, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onStartAssignment: () => void;
  onJumpToPreview: () => void;
}

const SPEC_ITEMS = [
  'A4 size',
  '1-inch margins',
  'Times New Roman 12 pt',
  'Justified alignment',
  'Under 2 MB',
];

const SUPPORTED_COURSES = ['BCA', 'MCA', 'BBA', 'MBA', 'B.Com', 'M.Com', 'BA', 'MA', 'All Theory Subjects'];

export function HeroSection({ onStartAssignment, onJumpToPreview }: HeroSectionProps) {
  return (
    <section className="pt-6 pb-10 sm:pt-8 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Surface matching the reference rounded card aesthetic */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-[#F3F8F5] via-[#EDF5F1] to-[#E3EFE8] p-7 sm:p-10 lg:p-14">
          {/* Subtle architectural paper grid background accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at 85% 20%, rgba(5, 150, 105, 0.10), transparent 45%), radial-gradient(circle at 15% 85%, rgba(15, 23, 42, 0.04), transparent 40%)',
            }}
          />

          <div className="relative grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Exact Hero Copy */}
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="font-mono-tabular text-xs font-semibold tracking-[0.12em] text-emerald-700">
                YOUR ASSIGNMENTS, MADE EASIER.
              </p>

              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-[3.25rem] lg:leading-[1.08]">
                Prepare Your University Assignments in Just 2 Minutes.
              </h1>

              <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                No more switching between ChatGPT, QuillBot, Word, Canva and PDF converters.
              </p>

              <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600">
                Upload your questions. Get structured answers, proper formatting and a ready-to-review assignment in one place.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onStartAssignment}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:bg-emerald-700 active:scale-[0.99] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                >
                  <span>Start My Assignment</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onJumpToPreview}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/80 px-5 py-3.5 text-sm font-semibold text-slate-800 transition-colors duration-150 hover:bg-white hover:border-slate-400 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
                >
                  <FileText className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                  <span>See Format Sample</span>
                </button>
              </div>

              <p className="mt-4 text-xs font-medium text-slate-500">
                Preview your assignment for free. No payment required.
              </p>
            </div>

            {/* Right Column: Clean Editorial A4 Sheet & Cover Specimen Composition */}
            <div className="relative flex items-center justify-center lg:col-span-5">
              <div className="relative w-full max-w-md">
                {/* Back Sheet: Formatted Answer Page */}
                <div
                  aria-hidden="true"
                  className="ml-auto w-[86%] rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm rotate-2"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2 text-[10px] font-mono-tabular text-slate-400">
                    <span>PAGE 02 · A4</span>
                    <span>TIMES NEW ROMAN · 12 PT</span>
                  </div>
                  <div className="mt-3 space-y-2 font-document text-[11px] leading-relaxed text-slate-700">
                    <p className="font-bold text-slate-900">Q1. Explain the principles of strategic management.</p>
                    <p className="text-justify text-slate-600">
                      Strategic management establishes long-term organizational direction through environmental
                      scanning, resource allocation, and structured evaluation across operational units...
                    </p>
                    <div className="pt-1 space-y-1.5">
                      <div className="h-1.5 w-full rounded bg-slate-100" />
                      <div className="h-1.5 w-11/12 rounded bg-slate-100" />
                      <div className="h-1.5 w-10/12 rounded bg-slate-100" />
                    </div>
                  </div>
                </div>

                {/* Front Sheet: Personalised Cover Page */}
                <div className="relative -mt-20 w-[88%] rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="font-mono-tabular text-[10px] font-semibold tracking-wider text-emerald-700">
                      ASSIGNMENT COVER PAGE
                    </span>
                    <span className="font-mono-tabular text-[10px] text-slate-400">PDF + DOCX</span>
                  </div>

                  <div className="mt-5 border border-dashed border-emerald-600/25 bg-[#FAFDFB] p-4 font-document">
                    <p className="text-center text-[11px] font-bold tracking-wide text-slate-800 uppercase">
                      Master of Business Administration (MBA)
                    </p>
                    <p className="mt-1 text-center text-[10px] text-slate-500">
                      Semester III · Strategic Management (MB-302)
                    </p>

                    <div className="my-4 h-px bg-slate-200" />

                    <dl className="space-y-1.5 text-[11px] text-slate-700">
                      <div className="flex justify-between gap-2">
                        <dt className="text-slate-500">Submitted by:</dt>
                        <dd className="font-semibold text-slate-900">Aarav Sharma</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-slate-500">Roll No:</dt>
                        <dd className="font-mono-tabular text-[10px] font-semibold text-slate-900">24MBA0184</dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-slate-500">Margins:</dt>
                        <dd className="text-slate-800">1-inch · Justified</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1.5 font-medium text-emerald-700">
                      <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                      Ready to Review
                    </span>
                    <span className="font-mono-tabular text-[11px] text-slate-500">~2 min prep</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spec & Supported Courses Bar below hero matching reference screenshot */}
        <div className="mt-6 flex flex-col items-center gap-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
            {SPEC_ITEMS.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                <span>{item}</span>
              </span>
            ))}
          </div>

          <p className="text-xs text-slate-500">
            <span className="font-semibold tracking-wide text-slate-700">SUPPORTED COURSES</span>
            <span className="mx-2 text-slate-300" aria-hidden="true">·</span>
            {SUPPORTED_COURSES.map((course, idx) => (
              <span key={course}>
                <span className="font-medium text-slate-600">{course}</span>
                {idx < SUPPORTED_COURSES.length - 1 && (
                  <span className="mx-2 text-slate-300" aria-hidden="true">·</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
