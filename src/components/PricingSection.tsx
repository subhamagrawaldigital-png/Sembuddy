import { ArrowRight, Check, FileText, FolderOpen, Lock, ScanLine, UserCheck } from 'lucide-react';
import {
  PRICING_PACKS,
  PURCHASE_WORKS_STEPS,
  TRUST_PRIVACY_ITEMS,
  type PricingPack,
} from '../data/landingContent';

interface PricingSectionProps {
  onSelectPack: (pack: PricingPack) => void;
  onOpenGroupPricing: () => void;
}

export function PricingSection({ onSelectPack, onOpenGroupPricing }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section 7 Header */}
        <div className="max-w-2xl">
          <p className="font-mono-tabular text-xs font-semibold tracking-[0.12em] text-emerald-700">
            CHOOSE YOUR ASSIGNMENT PACK.
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            More Assignments. Better Value.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Choose a package based on how many assignments you need to prepare.
          </p>
          <p className="mt-1 text-sm font-medium text-slate-700">
            No monthly subscriptions. No hidden charges.
          </p>
        </div>

        {/* 4-Column Pricing Grid matching the design reference */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_PACKS.map((pack) => {
            const isPopular = Boolean(pack.popular);
            return (
              <div
                key={pack.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 transition-colors duration-150 ${
                  isPopular
                    ? 'border-2 border-emerald-600 bg-[#F2FBF6]'
                    : 'border border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-6 rounded-md bg-emerald-600 px-2.5 py-0.5 font-mono-tabular text-[10px] font-bold tracking-[0.08em] text-white">
                    MOST POPULAR
                  </span>
                )}

                <div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    {pack.credits >= 5 ? (
                      <FolderOpen className="h-4.5 w-4.5" aria-hidden="true" />
                    ) : (
                      <FileText className="h-4.5 w-4.5" aria-hidden="true" />
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-sm font-bold tracking-wide text-slate-900">
                    {pack.name}
                  </h3>

                  <div className="mt-3 flex items-baseline gap-2.5">
                    <span className="font-display font-mono-tabular text-3xl font-extrabold text-slate-900">
                      {pack.price}
                    </span>
                    {pack.savings && (
                      <span className="text-xs font-semibold text-emerald-700">
                        {pack.savings}
                      </span>
                    )}
                  </div>

                  <ul className="mt-5 space-y-2.5 border-t border-slate-200/80 pt-5">
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectPack(pack)}
                  className={`mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                    isPopular
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Group Pricing Line */}
        <p className="mt-6 text-sm text-slate-600">
          Need assignments for your friends or entire class?{' '}
          <button
            type="button"
            onClick={onOpenGroupPricing}
            className="font-semibold text-emerald-700 underline decoration-emerald-600/40 underline-offset-4 hover:text-emerald-800 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded"
          >
            Contact us for group pricing.
          </button>
        </p>

        {/* Section 8: HOW YOUR CREDITS WORK / HOW YOUR PURCHASE WORKS */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="font-display text-sm font-bold tracking-wider text-slate-900">
            HOW YOUR PURCHASE WORKS
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PURCHASE_WORKS_STEPS.map((step) => (
              <div key={step.number} className="flex items-start gap-3.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-mono-tabular text-xs font-bold text-white">
                  {step.number}
                </span>
                <div>
                  <h4 className="font-display text-xs font-bold tracking-wider text-slate-900">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 9: TRUST & PRIVACY */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TRUST_PRIVACY_ITEMS.map((item, idx) => {
              const Icon = idx === 0 ? UserCheck : idx === 1 ? ScanLine : Lock;
              return (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-xs font-bold tracking-wider text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
