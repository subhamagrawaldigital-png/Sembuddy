import { FileCheck2, FileSearch, ShieldCheck } from 'lucide-react';

interface TurnitinSectionProps {
  onOpenReport: (type: 'ai' | 'similarity') => void;
}

export function TurnitinSection({ onOpenReport }: TurnitinSectionProps) {
  return (
    <section id="turnitin" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0B2229] p-7 text-white sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 font-mono-tabular text-xs font-semibold tracking-[0.12em] text-emerald-400">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              <span>ORIGINALITY MATTERS.</span>
            </p>

            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Worried About Turnitin’s Similarity and AI Detection?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-300">
              We put an assignment generated through SemBuddy to the test using Turnitin. Here’s what the actual report showed.
            </p>
          </div>

          {/* 3 Metric Cards matching the dark teal aesthetic in the reference */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#102F38] p-6">
              <p className="font-mono-tabular text-[11px] font-semibold tracking-[0.08em] text-slate-300">
                AI WRITING REPORT
              </p>
              <div className="mt-3 flex items-baseline gap-2.5">
                <span className="font-mono-tabular text-3xl font-bold text-emerald-400">*%</span>
                <span className="text-sm font-semibold text-white">
                  Below 20% reporting threshold
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#102F38] p-6">
              <p className="font-mono-tabular text-[11px] font-semibold tracking-[0.08em] text-slate-300">
                OVERALL SIMILARITY
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-mono-tabular text-3xl font-bold text-emerald-400">2%</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#102F38] p-6">
              <p className="font-mono-tabular text-[11px] font-semibold tracking-[0.08em] text-slate-300">
                INTEGRITY FLAGS
              </p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="font-mono-tabular text-3xl font-bold text-emerald-400">0</span>
              </div>
            </div>
          </div>

          {/* Supporting Narrative */}
          <div className="mt-7 max-w-3xl space-y-2 text-sm leading-relaxed text-slate-300 sm:text-base">
            <p>
              The AI Writing Report did not display a percentage because the result was below Turnitin’s 20% reporting threshold.
            </p>
            <p>
              The assignment also received just 2% overall similarity and had no integrity flags.
            </p>
            <p className="pt-1 font-medium text-white">
              See the actual reports for yourself.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenReport('ai')}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#123742] px-4 py-2.5 text-sm font-medium text-emerald-300 transition-colors duration-150 hover:bg-[#16424F] hover:text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <FileSearch className="h-4 w-4" aria-hidden="true" />
              <span>View AI Writing Report</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenReport('similarity')}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-[#123742] px-4 py-2.5 text-sm font-medium text-emerald-300 transition-colors duration-150 hover:bg-[#16424F] hover:text-white whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              <FileCheck2 className="h-4 w-4" aria-hidden="true" />
              <span>View Similarity Report</span>
            </button>
          </div>

          {/* Disclaimer */}
          <p className="mt-8 border-t border-white/10 pt-5 text-xs leading-relaxed text-slate-400">
            Results are from one assignment tested through a third-party Turnitin check. Results may vary depending on the assignment and Turnitin settings. These results do not guarantee a particular Turnitin score or academic acceptance. SemBuddy is not affiliated with or endorsed by Turnitin.
          </p>
        </div>
      </div>
    </section>
  );
}
