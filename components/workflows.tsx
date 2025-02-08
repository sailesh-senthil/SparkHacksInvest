import Image from "next/image";
import WorkflowImg01 from "@/public/images/workflow-01.png";
import WorkflowImg02 from "@/public/images/workflow-02.png";
import WorkflowImg03 from "@/public/images/workflow-03.png";
import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-24">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3 pb-3">
              <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-lg font-medium">
                How It Works
              </span>
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text text-transparent text-4xl font-bold tracking-tight"
            >
              Your Investment Journey
            </h2>
            <p className="mt-4 text-lg text-indigo-300">
              Navigate the startup ecosystem with a simple, structured process.
              From discovery to funding, we make investing seamless.
            </p>
          </div>

          {/* Spotlight Workflow Cards */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3 mt-12">
            {/* Step 1: Discover Startups */}
            <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <Image
                className="mx-auto"
                src={WorkflowImg01}
                width={300}
                height={250}
                alt="Discover Startups"
              />
              <h3 className="text-xl font-semibold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200">
                Discover Startups
              </h3>
              <p className="text-indigo-300 mt-2">
                Browse a curated selection of **high-growth startups** seeking investment.
              </p>
            </div>

            {/* Step 2: Evaluate & Connect */}
            <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <Image
                className="mx-auto"
                src={WorkflowImg02}
                width={300}
                height={250}
                alt="Evaluate & Connect"
              />
              <h3 className="text-xl font-semibold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200">
                Evaluate & Connect
              </h3>
              <p className="text-indigo-300 mt-2">
                Review **detailed business insights**, financial projections, and meet with founders.
              </p>
            </div>

            {/* Step 3: Invest & Grow */}
            <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-lg">
              <Image
                className="mx-auto"
                src={WorkflowImg03}
                width={300}
                height={250}
                alt="Invest & Grow"
              />
              <h3 className="text-xl font-semibold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-indigo-200">
                Invest & Grow
              </h3>
              <p className="text-indigo-300 mt-2">
                Secure your stake, track your investments, and **watch businesses scale** over time.
              </p>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
