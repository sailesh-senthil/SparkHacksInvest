import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Background Shapes */}
      <div className="absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2">
        <Image className="max-w-none" src={BlurredShapeGray} width={760} height={668} alt="Blurred shape" />
      </div>
      <div className="absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50">
        <Image className="max-w-none" src={BlurredShape} width={760} height={668} alt="Blurred shape" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-16 md:py-24">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-lg font-medium">
                Powerful Investment Tools
              </span>
            </div>
            <h2 className="bg-gradient-to-r from-gray-200 to-indigo-300 bg-clip-text text-transparent text-4xl font-bold tracking-tight">
              Invest Smarter with Data-Driven Insights
            </h2>
            <p className="mt-4 text-lg text-indigo-300">
              Our platform gives you the tools to **analyze startups**, assess risks, and grow your investment portfolio with confidence.
            </p>
          </div>

          {/* Feature Image */}
          <div className="flex justify-center pb-12" data-aos="fade-up">
            <Image className="max-w-none" src={FeaturesImage} width={1104} height={384} alt="Investment Features" />
          </div>

          {/* Features Grid */}
          <div className="grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 md:gap-14 mx-auto">
            {/* Feature 1: AI-Powered Startup Analysis */}
            <article className="text-center">
              <svg className="mb-3 fill-indigo-500 mx-auto" width={32} height={32} viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5Zm0 9.66L4 7l8-4 8 4-8 4.66ZM2 9v8l10 5 10-5V9l-10 5-10-5Z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-200">AI-Powered Startup Analysis</h3>
              <p className="text-indigo-300 mt-2">
                Get **deep insights** into startup performance, team strength, and potential risks using AI-driven analysis.
              </p>
            </article>

            {/* Feature 2: Risk Assessment Dashboard */}
            <article className="text-center">
              <svg className="mb-3 fill-indigo-500 mx-auto" width={32} height={32} viewBox="0 0 24 24">
                <path d="M12 2l-7 12h14L12 2Zm0 3.75L15.75 12H8.25L12 5.75ZM2 20v2h20v-2H2Z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-200">Risk Assessment Dashboard</h3>
              <p className="text-indigo-300 mt-2">
                Evaluate investment **risk scores**, industry trends, and financial stability metrics before funding startups.
              </p>
            </article>

            {/* Feature 3: Real-Time Market Trends */}
            <article className="text-center">
              <svg className="mb-3 fill-indigo-500 mx-auto" width={32} height={32} viewBox="0 0 24 24">
                <path d="M21 3h-6V1h6v2ZM15 3H9V1h6v2ZM9 3H3V1h6v2ZM3 5h18v2H3V5ZM3 9h18v2H3V9ZM3 13h18v2H3v-2ZM3 17h18v2H3v-2Z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-200">Real-Time Market Trends</h3>
              <p className="text-indigo-300 mt-2">
                Stay ahead with **live data feeds** on startup funding rounds, competitor activity, and sector performance.
              </p>
            </article>

            {/* Feature 4: Smart Investment Portfolios */}
            <article className="text-center">
              <svg className="mb-3 fill-indigo-500 mx-auto" width={32} height={32} viewBox="0 0 24 24">
                <path d="M12 3l-10 9h4v8h12v-8h4l-10-9Zm0 3.2L16.8 12h-2.8v6H10v-6H7.2L12 6.2Z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-200">Smart Investment Portfolios</h3>
              <p className="text-indigo-300 mt-2">
                Build **diversified investment portfolios** and track performance with real-time analytics.
              </p>
            </article>

            {/* Feature 5: Direct Founder Access */}
            <article className="text-center">
              <svg className="mb-3 fill-indigo-500 mx-auto" width={32} height={32} viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2ZM8 18c1.5-2 4-2 5-2s3.5 0 5 2c-1.5 1-3.5 2-5 2s-3.5-1-5-2Zm4-5c-1.1 0-2-1-2-2s.9-2 2-2 2 1 2 2-.9 2-2 2Z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-200">Direct Founder Access</h3>
              <p className="text-indigo-300 mt-2">
                Schedule **1-on-1 meetings** with startup founders and get exclusive insights before making an investment.
              </p>
            </article>

            {/* Feature 6: Secure Transactions */}
            <article className="text-center">
              <svg className="mb-3 fill-indigo-500 mx-auto" width={32} height={32} viewBox="0 0 24 24">
                <path d="M12 1c-4 0-7 3-7 7v4H4c-1 0-2 1-2 2v6c0 1 1 2 2 2h16c1 0 2-1 2-2v-6c0-1-1-2-2-2h-1V8c0-4-3-7-7-7Zm5 11h-2V8c0-2-1-4-3-4s-3 2-3 4v4H7V8c0-3 2-6 5-6s5 3 5 6v4Z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-200">Secure Transactions</h3>
              <p className="text-indigo-300 mt-2">
                Invest with confidence using **secure blockchain-based transactions** and transparent funding agreements.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
