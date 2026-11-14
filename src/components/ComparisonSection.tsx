import { ArrowRight, Check, X } from 'lucide-react';

interface ComparisonSectionProps {
  onCreateAssignment: () => void;
}

const REPLACED_TOOLS = [
  { tool: 'ChatGPT', task: 'Generate answers', replacedBy: 'Structured Answers' },
  { tool: 'QuillBot', task: 'Humanise the assignment', replacedBy: 'Originality-Focused Drafts' },
  { tool: 'Microsoft Word', task: 'Fix A4 formatting', replacedBy: 'Auto A4 · 1-inch · 12 pt' },
  { tool: 'Canva', task: 'Make cover page', replacedBy: 'Personalised Cover Page' },
  { tool: 'PDF Converter', task: 'Export final file', replacedBy: 'PDF + Editable DOCX' },
];

export function ComparisonSection({ onCreateAssignment }: ComparisonSectionProps) {
  return (
    <section id="comparison" className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Simplified Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono-tabular text-xs font-semibold tracking-[0.12em] text-emerald-700">
            WHY MAKE IT COMPLICATED?
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            5 Different Tools to Complete Just 1 Assignment?
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Stop switching between five apps. Prepare and format everything in one place.
          </p>
        </div>

        {/* GHL-Style Tool Replacement Matrix */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white">
          {/* Column Headers */}
          <div className="grid grid-cols-12 border-b border-slate-200 bg-[#FAFBF9] px-5 py-4 sm:px-8">
            <div className="col-span-6 flex items-center gap-2">
              <span className="font-mono-tabular text-xs font-bold tracking-wider text-slate-500">
                WITHOUT SEMBUDDY
              </span>
            </div>
            <div className="col-span-6 flex items-center justify-between pl-4 sm:pl-8">
              <span className="font-mono-tabular text-xs font-bold tracking-wider text-emerald-700">
                WITH SEMBUDDY
              </span>
              <span className="hidden font-mono-tabular text-[11px] font-semibold text-emerald-700 sm:inline">
                1 Platform
              </span>
            </div>
          </div>

          {/* 5 Replacement Rows */}
          <div className="divide-y divide-slate-100">
            {REPLACED_TOOLS.map((row, index) => (
              <div
                key={row.tool}
                className="grid grid-cols-12 items-center px-5 py-3.5 sm:px-8 sm:py-4"
              >
                {/* Old Tool */}
                <div className="col-span-6 flex items-center justify-between gap-2 pr-3 sm:pr-6">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                      <X className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-display text-sm font-semibold text-slate-700 sm:text-base">
                        <span className="font-mono-tabular mr-1.5 text-xs text-slate-400">
                          0{index + 1}.
                        </span>
                        {row.tool}
                      </p>
                      <p className="truncate text-xs text-slate-400">{row.task}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className="hidden h-4 w-4 shrink-0 text-slate-300 sm:block"
                    aria-hidden="true"
                  />
                </div>

                {/* SemBuddy Equivalent */}
                <div className="col-span-6 flex items-center gap-2.5 border-l border-slate-100 pl-4 sm:pl-8">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-semibold text-slate-900 sm:text-base">
                    {row.replacedBy}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Footer Strip */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-emerald-600/15 bg-[#F2FBF6] px-5 py-5 sm:flex-row sm:px-8">
            <div className="text-center sm:text-left">
              <p className="font-display text-sm font-bold text-slate-900 sm:text-base">
                One Platform. One Simple Process.
              </p>
              <p className="text-xs text-slate-600">
                Upload questions, add your details, preview free, and download in ~2 minutes.
              </p>
            </div>

            <button
              type="button"
              onClick={onCreateAssignment}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-700 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              <span>Create My Assignment</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
