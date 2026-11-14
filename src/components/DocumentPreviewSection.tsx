import { useState } from 'react';
import { ArrowRight, Check, Eye } from 'lucide-react';
import { DOCUMENT_INCLUDES } from '../data/landingContent';

interface DocumentPreviewSectionProps {
  onPreviewAssignment: () => void;
}

export function DocumentPreviewSection({ onPreviewAssignment }: DocumentPreviewSectionProps) {
  const [activePage, setActivePage] = useState<'cover' | 'answers'>('cover');
  const [showMargins, setShowMargins] = useState(true);

  return (
    <section id="document-preview" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Copy + Checklist */}
          <div className="lg:col-span-6">
            <p className="font-mono-tabular text-xs font-semibold tracking-[0.12em] text-emerald-700">
              SEE WHAT YOU’LL GET.
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Your Assignment, Properly Prepared.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              From the first page to the last answer, get a clean and organised document without spending hours formatting it yourself.
            </p>

            <div className="mt-8">
              <h3 className="font-mono-tabular text-xs font-bold tracking-[0.1em] text-slate-800">
                WHAT YOUR ASSIGNMENT INCLUDES:
              </h3>

              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {DOCUMENT_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-3 w-3" aria-hidden="true" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-7 text-sm leading-relaxed text-slate-600">
              Preview your assignment before purchasing. Once you’re happy, generate your complete documents.
            </p>

            <div className="mt-6">
              <button
                type="button"
                onClick={onPreviewAssignment}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-700 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <span>Preview My Assignment</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive A4 Document Specimen */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
              {/* Interactive Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="inline-flex items-center gap-1 rounded-lg bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => setActivePage('cover')}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activePage === 'cover'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Cover Page
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePage('answers')}
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      activePage === 'answers'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Structured Answers
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setShowMargins((prev) => !prev)}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    showMargins
                      ? 'border-emerald-600/30 bg-emerald-50 text-emerald-800'
                      : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>1-inch Margins</span>
                </button>
              </div>

              {/* A4 Sheet Surface */}
              <div className="mt-5 rounded-2xl border border-slate-200 bg-[#F8FAF9] p-4 sm:p-6">
                <div className="relative mx-auto aspect-[210/270] max-w-md rounded-lg border border-slate-300/80 bg-white p-6 shadow-sm sm:p-8">
                  {/* Optional 1-inch Margin Guides */}
                  {showMargins && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-5 border border-dashed border-emerald-500/40 sm:inset-7"
                    >
                      <span className="absolute -top-3 left-2 bg-white px-1 font-mono-tabular text-[9px] text-emerald-700">
                        1-inch margin · A4
                      </span>
                    </div>
                  )}

                  {activePage === 'cover' ? (
                    <div className="relative flex h-full flex-col justify-between font-document text-slate-900">
                      <div className="text-center">
                        <p className="text-[11px] font-bold tracking-wider uppercase text-slate-700">
                          School of Management &amp; Studies
                        </p>
                        <p className="mt-1 text-[10px] text-slate-500">
                          Centre for Distance and Online Education
                        </p>
                        <div className="mx-auto my-4 h-px w-24 bg-slate-300" />
                        <p className="text-sm font-bold tracking-wide uppercase">
                          INTERNAL ASSIGNMENT SUBMISSION
                        </p>
                      </div>

                      <div className="my-4 rounded border border-slate-200 bg-slate-50/60 p-4 text-center">
                        <p className="text-[11px] text-slate-500">Course Code &amp; Title</p>
                        <p className="mt-1 text-xs font-bold text-slate-900">
                          MB-302 · Strategic Management &amp; Business Policy
                        </p>
                        <p className="mt-1 text-[11px] text-slate-600">
                          MBA · Semester III
                        </p>
                      </div>

                      <dl className="space-y-1.5 border-t border-slate-200 pt-4 text-[11px]">
                        <div className="flex justify-between">
                          <dt className="text-slate-500">Student Name:</dt>
                          <dd className="font-bold">Riya Deshmukh</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-slate-500">Roll Number:</dt>
                          <dd className="font-bold">2409184721</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-slate-500">Programme:</dt>
                          <dd>Master of Business Administration</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-slate-500">Academic Session:</dt>
                          <dd>2026 – 2027</dd>
                        </div>
                      </dl>
                    </div>
                  ) : (
                    <div className="relative flex h-full flex-col justify-between font-document text-slate-900">
                      <div className="space-y-3 text-[11.5px] leading-[1.65]">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-[10px] text-slate-500">
                          <span>Course: MB-302 · Strategic Management</span>
                          <span>Page 2</span>
                        </div>

                        <p className="font-bold text-slate-900">
                          Question 1: Discuss the key phases of the strategic management process with suitable examples.
                        </p>

                        <p className="text-justify text-slate-700">
                          <strong>Introduction:</strong> Strategic management refers to the ongoing planning, monitoring, analysis, and assessment of all necessities an organisation requires to meet its long-term goals and sustain competitive advantage in changing markets.
                        </p>

                        <p className="text-justify text-slate-700">
                          <strong>1. Environmental Scanning:</strong> Organisations begin by evaluating internal capabilities and external market conditions using structured frameworks such as SWOT and PESTLE analysis before committing capital.
                        </p>

                        <p className="text-justify text-slate-700">
                          <strong>2. Strategy Formulation &amp; Implementation:</strong> Clear measurable objectives are translated into operational budgets, departmental milestones, and accountability metrics.
                        </p>
                      </div>

                      <div className="border-t border-slate-200 pt-2 text-center font-sans text-[10px] text-slate-400">
                        Times New Roman · 12 pt · Justified Alignment
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
