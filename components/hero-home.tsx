export default function HeroHome() {
  return (
    <section
      className="relative text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/giphy.gif')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Fade-out effect overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="py-30 md:py-45 text-center">
          {/* Section header */}
          <h1
            className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.300),theme(colors.gray.50),theme(colors.indigo.400),theme(colors.gray.200))] 
            bg-[length:200%_auto] bg-clip-text text-transparent 
            font-bold text-8xl md:text-9xl lg:text-[9rem] tracking-tight"
            data-aos="fade-up"
          >
            INVESTMATCH  
          </h1>
          <p
            className="mt-4 text-xl font-mono text-white max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Discover and invest in promising small businesses.  
            Swipe, connect, and fund the future.
          </p>

          {/* Call-to-Action buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              className="btn px-6 py-3 bg-indigo-600 hover:bg-indigo-500 transition rounded-lg text-white text-lg font-semibold"
              href="/explore"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              Browse Startups
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
