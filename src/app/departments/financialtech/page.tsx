import Link from "next/link";

export default function FinancialTech() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10 bg-gradient-to-b from-yellow-50 to-black dark:from-yellow-950/20 dark:to-transparent">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_50%_-50px,rgba(253,224,71,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-14">
          <nav className="text-sm text-black/60 dark:text-black/60">
            <Link href="/" className="hover:text-yellow-700">Home </Link>
            <span className="mx-2">/</span>
            {/* <a href="/departments" className="hover:text-yellow-700">Departments</a>
            <span className="mx-2">/</span> */}
            <span className="text-black/80 dark:text-black/80">Financial Technology</span>
          </nav>
          <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300">
                FinTech
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Empowering innovation in financial systems
              </h1>
              <p className="mt-3 text-lg text-black/70 dark:text-black/70">
                We drive the future of digital finance through seamless payment systems, fintech collaboration, and regulatory tech.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#programs" className="rounded-md bg-yellow-500 px-5 py-2.5 text-black">Explore solutions</a>
                <a href="#contact" className="rounded-md border border-black/10 px-5 py-2.5">Partner with us</a>
              </div>
            </div>
            <div className="rounded-xl border border-black/10 bg-black/60 p-6 dark:bg-black/5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">120+</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Fintech apps deployed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Uptime for systems</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Real-time monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Core Fintech Services</h2>
          <p className="mt-3 text-black/70 dark:text-black/70">Secure, scalable, and forward-looking financial platforms.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Digital wallets", d: "Secure mobile-first payment solutions.", c: "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/15 dark:text-yellow-300" },
            { t: "Banking APIs", d: "Open banking and financial integration layers.", c: "bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300" },
            { t: "Blockchain & ledgers", d: "Distributed systems for transparency.", c: "bg-amber-100 text-amber-800 dark:bg-amber-500/15 dark:text-amber-300" },
            { t: "Compliance tools", d: "Real-time KYC, AML and reporting engines.", c: "bg-red-100 text-red-800 dark:bg-red-500/15 dark:text-red-300" },
            { t: "Microfinance platforms", d: "Small loans, scalable fintech for rural areas.", c: "bg-green-100 text-green-800 dark:bg-green-500/15 dark:text-green-300" },
            { t: "Cybersecurity", d: "End-to-end encryption and risk detection.", c: "bg-slate-100 text-slate-800 dark:bg-slate-500/15 dark:text-slate-300" },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-black/10 bg-black/40 p-6 backdrop-blur-sm dark:bg-black/5">
              <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${x.c}`}>{x.t}</span>
              <p className="mt-3 text-black/70 dark:text-black/70">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-black/10 p-6">
            <h3 className="text-lg font-semibold">What we provide</h3>
            <ul className="mt-4 space-y-2 text-black/80 dark:text-black/80">
              <li>• Digital payment infrastructure</li>
              <li>• Secure fintech app hosting</li>
              <li>• Regulatory compliance & reports</li>
              <li>• Blockchain-based solutions</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/10 p-6">
            <h3 className="text-lg font-semibold">Who we support</h3>
            <ul className="mt-4 space-y-2 text-black/80 dark:text-black/80">
              <li>• Fintech startups and developers</li>
              <li>• Government financial systems</li>
              <li>• Private banks and institutions</li>
              <li>• Compliance & security teams</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-2xl border border-black/10 bg-gradient-to-r from-yellow-400 to-orange-400 p-8 text-black">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold">Collaborate with our FinTech Division</h3>
              <p className="mt-1 text-black/80">Future-proof your financial technologies with us.</p>
            </div>
            <Link href="/#contact" className="rounded-md bg-black px-5 py-2.5 text-yellow-300">Get in touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
