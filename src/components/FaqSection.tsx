import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/landingContent';

interface FaqSectionProps {
  onStartAssignment: () => void;
}

export function FaqSection({ onStartAssignment }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* SECTION 10: FAQs */}
      <section id="faqs" className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            GOT QUESTIONS? WE HAVE ANSWERS.
          </h2>

          <div className="mt-8 space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={item.number}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors duration-150"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer hover:bg-slate-50/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-inset"
                  >
                    <span className="font-display text-sm font-semibold text-slate-900 sm:text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-700' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-600/20 bg-gradient-to-br from-[#F2FBF6] via-[#ECF8F1] to-[#E3F3EA] px-6 py-12 text-center sm:px-12 sm:py-16">
            <p className="font-mono-tabular text-xs font-semibold tracking-[0.12em] text-emerald-700">
              YOUR NEXT ASSIGNMENT JUST GOT EASIER.
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Stop Switching Between Tools. Start Using SemBuddy.
            </h2>
            <div className="mx-auto mt-4 max-w-xl space-y-1.5 text-base text-slate-600">
              <p>
                Upload your assignment questions, preview your document and get everything properly formatted in one place.
              </p>
              <p className="font-medium text-slate-700">
                Save time. Skip the hassle. Get your assignment ready.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={onStartAssignment}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-700 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <span>Start My Assignment</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-4 text-xs font-medium text-slate-500">
              Preview for free. Pay only when you’re ready to generate.
            </p>
          </div>
        </div>
      </section>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-200 bg-white/70 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-slate-500">
            <strong className="font-semibold text-slate-700">A little note on academic integrity.</strong>{' '}
            SemBuddy provides study drafts and templates, not a substitute for your learning. Review, understand, and personalize every answer before submission. Follow your university’s guidelines.
          </p>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 SemBuddy. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a href="#turnitin" className="hover:text-slate-900">
                Turnitin Results
              </a>
              <a href="#document-preview" className="hover:text-slate-900">
                Format Preview
              </a>
              <a href="#pricing" className="hover:text-slate-900">
                Pricing
              </a>
              <a href="#faqs" className="hover:text-slate-900">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
