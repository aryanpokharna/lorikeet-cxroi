import Image from "next/image";

export default function CaseStudy() {
  return (
    <section className="w-full max-w-5xl lg:max-w-6xl mx-auto mt-12 sm:mt-16 md:mt-20 mb-10 sm:mb-14">
      <h2 className="font-pp-cirka text-3xl sm:text-4xl md:text-5xl text-center mb-6 sm:mb-8 text-black font-normal">
        And here's how we delivered
      </h2>
      <div className="rounded-3xl bg-[#E4F2E4] overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        {/* Photo */}
        <div className="relative min-h-[260px] sm:min-h-[320px] md:min-h-[360px]">
          <Image
            src="/images/lorikeet-case-study.avif"
            alt="Customer operations leader"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between px-6 sm:px-8 lg:px-10 py-8 sm:py-10">
          <div>
            <p className="font-pp-cirka text-2xl sm:text-3xl lg:text-4xl leading-snug text-[#12311E]">
              From complex CX questions to clean handoffs. All in minutes.
            </p>

            <button className="mt-6 inline-flex items-center justify-center rounded-full border border-[#12311E33] bg-white/70 px-5 py-2 text-sm font-medium text-[#12311E] shadow-sm hover:bg-white transition">
              See results
              <span className="ml-2 text-lg leading-none">↗</span>
            </button>

            {/* Stats */}
            <div className="mt-6 flex flex-wrap items-stretch justify-center gap-4 text-sm text-[#12311E]">
              <div className="rounded-2xl bg-white/70 px-4 py-3 shadow-sm flex-1 min-w-[140px] max-w-[220px]">
                <div className="text-3xl sm:text-4xl uppercase tracking-wide text-[#2F6B3C]">
                  41%
                </div>
                <div className="mt-1 text-xs sm:text-sm">
                  Decrease in support costs
                </div>
              </div>
              <div className="rounded-2xl bg-white/70 px-4 py-3 shadow-sm flex-1 min-w-[140px] max-w-[220px]">
                <div className="text-3xl sm:text-4xl uppercase tracking-wide text-[#2F6B3C]">
                  89%
                </div>
                <div className="mt-1 text-xs sm:text-sm">
                  CSAT with Lorikeet
                </div>
              </div>
              <div className="rounded-2xl bg-white/70 px-4 py-3 shadow-sm flex-1 min-w-[140px] max-w-[220px]">
                <div className="text-3xl sm:text-4xl uppercase tracking-wide text-[#2F6B3C]">
                  1:1
                </div>
                <div className="mt-1 text-xs sm:text-sm">AI to human CSAT</div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <p className="font-pp-cirka text-sm sm:text-base text-[#12311E]">
              Jessica Mishlove
            </p>
            <p className="text-xs sm:text-sm text-[#345C3F]">
              Head of Customer Operations @ Arbor
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
