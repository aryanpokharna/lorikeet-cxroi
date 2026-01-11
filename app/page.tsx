import Header from "@/components/Header";
import Calculator from "@/components/Calculator";
import CTAFooter from "@/components/CTAFooter";
import CaseStudy from "@/components/CaseStudy";
import AnimatedGuideLine from "@/components/AnimatedGuideLine";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 mt-14 sm:mt-16 relative">
        <AnimatedGuideLine />
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="mb-16 sm:mb-20 md:mb-24">
            <h1
              className="font-pp-cirka text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 sm:mb-8 font-normal text-black"
              data-hero-title
            >
              <span className="block">
                Stop paying per{" "}
                <span className="line-through text-black">ticket.</span>
              </span>
              <span className="block">
                Start paying per{" "}
                <span className="animated-resolution">resolution.</span>
              </span>
            </h1>
            <p
              className="text-black text-base md:text-xl max-w-xl mx-auto"
              data-hero-subtitle
            >
              Run the numbers on your CX costs and discover what you&apos;d save
              with Lorikeet.
            </p>
          </div>
          <Calculator />
          <CaseStudy />
        </div>
      </div>
      <CTAFooter />
    </main>
  );
}
