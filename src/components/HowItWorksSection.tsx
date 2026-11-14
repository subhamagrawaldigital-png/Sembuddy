import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/landingContent';

interface HowItWorksSectionProps {
  onStartAssignment: () => void;
}

export function HowItWorksSection({ onStartAssignment }: HowItWorksSectionProps) {
  const [selectedStep, setSelectedStep] = useState(0);

  return (
    <section id="how-it-works" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-10 lg:p-12">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="font-mono-tabular text-xs font-semibold tracking-[0.12em] text-emerald-700">
                SIMPLE. FAST. CONVENIENT.
              </p>
              <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Your Assignment in 3 Simple Steps.
              </h2>
              <p className="mt-3 text-base text-slate-600">
                No complicated process. No technical knowledge required.
              </p>
            </div>

            <button
              type="button"
              onClick={onStartAssignment}
              className="inline-flex items-center gap-2 self-start rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-700 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 lg:self-auto"
            >
              <span>Start My Assignment</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {HOW_IT_WORKS_STEPS.map((item, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setSelectedStep(idx)}
                  className={`flex flex-col justify-between rounded-2xl border p-6 text-left transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 ${
                    isSelected
                      ? 'border-emerald-600 bg-[#F3FBF7]'
                      : 'border-slate-200 bg-[#FAFBF9] hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono-tabular text-xs font-bold tracking-wider ${
                          isSelected ? 'text-emerald-700' : 'text-slate-500'
                        }`}
                      >
                        {item.step}
                      </span>
                      <span
                        className={`flex h-7 w-7 items-center justify-center rounded-full font-mono-tabular text-xs font-bold ${
                          isSelected
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-200/80 text-slate-700'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-base font-bold text-slate-900">
                      {item.title}
                    </h3>

                    <div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-600">
                      {item.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
