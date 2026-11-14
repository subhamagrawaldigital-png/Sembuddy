import { CORE_BENEFITS } from '../data/landingContent';

function BenefitVisual({ type }: { type: 'time' | 'originality' | 'formatting' | 'convenience' }) {
  if (type === 'time') {
    return (
      <div className="mt-6 rounded-xl border border-slate-200/80 bg-[#FAFBF9] p-4">
        <div className="flex items-center justify-between text-xs font-mono-tabular text-slate-500">
          <span>Questions uploaded</span>
          <span className="font-semibold text-emerald-700">~2 min ready</span>
        </div>
        <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-11/12 rounded-full bg-emerald-600" />
        </div>
        <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500">
          <span>Drafting</span>
          <span>A4 Layout</span>
          <span>PDF + DOCX</span>
        </div>
      </div>
    );
  }

  if (type === 'originality') {
    return (
      <div className="mt-6 rounded-xl border border-slate-200/80 bg-[#0B2229] p-4 text-white">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono-tabular text-[10px] tracking-wider text-slate-400">SIMILARITY</p>
            <p className="font-mono-tabular text-lg font-bold text-emerald-400">2%</p>
          </div>
          <div className="h-7 w-px bg-white/10" aria-hidden="true" />
          <div>
            <p className="font-mono-tabular text-[10px] tracking-wider text-slate-400">AI THRESHOLD</p>
            <p className="font-mono-tabular text-lg font-bold text-emerald-400">&lt;20%</p>
          </div>
          <div className="h-7 w-px bg-white/10" aria-hidden="true" />
          <div>
            <p className="font-mono-tabular text-[10px] tracking-wider text-slate-400">FLAGS</p>
            <p className="font-mono-tabular text-lg font-bold text-white">0</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'formatting') {
    return (
      <div className="mt-6 rounded-xl border border-slate-200/80 bg-[#FAFBF9] p-4">
        <div className="grid grid-cols-2 gap-2 text-xs font-mono-tabular text-slate-600 sm:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-center">
            <span className="block text-[10px] text-slate-400">SIZE</span>
            <span className="font-semibold text-slate-800">A4</span>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-center">
            <span className="block text-[10px] text-slate-400">MARGIN</span>
            <span className="font-semibold text-slate-800">1-inch</span>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-center">
            <span className="block text-[10px] text-slate-400">FONT</span>
            <span className="font-semibold text-slate-800">12 pt</span>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-center">
            <span className="block text-[10px] text-slate-400">ALIGN</span>
            <span className="font-semibold text-slate-800">Justified</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-xl border border-slate-200/80 bg-[#FAFBF9] p-4">
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="font-medium text-slate-500">Upload · Preview · Generate · Download</span>
        <span className="font-mono-tabular font-semibold text-emerald-700">1 Workspace</span>
      </div>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono-tabular text-xs font-semibold tracking-[0.12em] text-emerald-700">
            LESS WORK. MORE CONVENIENCE.
          </p>
          <h2 className="mt-2.5 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Everything You Need to Prepare Your Assignments.
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CORE_BENEFITS.map((benefit) => (
            <article
              key={benefit.index}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-emerald-600/35"
            >
              <div>
                <p className="font-mono-tabular text-xs font-bold tracking-[0.1em] text-emerald-700">
                  {benefit.index}. {benefit.tag}
                </p>
                <h3 className="mt-2.5 font-display text-lg font-bold text-slate-900 sm:text-xl">
                  {benefit.title}
                </h3>
                <div className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-600">
                  {benefit.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>

              <BenefitVisual type={benefit.visualType} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
