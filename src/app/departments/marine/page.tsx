import Link from "next/link";

export default function Marine() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-black/10 bg-gradient-to-b from-sky-50 to-black dark:from-sky-950/20 dark:to-transparent">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_50%_-50px,rgba(56,189,248,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-14">
          <nav className="text-sm text-black/60 dark:text-black/60">
            <Link href="/" className="hover:text-sky-700">Home</Link>
            <span className="mx-2">/</span>
            {/* <a href="/departments" className="hover:text-sky-700">Departments</a>
            <span className="mx-2">/</span> */}
            <span className="text-black/80 dark:text-black/80">Marine</span>
          </nav>
          <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-500/20 dark:text-sky-300">
                Marine Operations
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Driving maritime innovation and logistics
              </h1>
              <p className="mt-3 text-lg text-black/70 dark:text-black/70">
                We support coastal infrastructure, maritime safety, and international trade through digital systems and on-ground services.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#programs" className="rounded-md bg-sky-500 px-5 py-2.5 text-black">Explore operations</a>
                <a href="#contact" className="rounded-md border border-black/10 px-5 py-2.5">Join our mission</a>
              </div>
            </div>
            <div className="rounded-xl border border-black/10 bg-black/60 p-6 dark:bg-black/5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">120+</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Port facilities</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">60%</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Export increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Fleet monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Marine Programs</h2>
          <p className="mt-3 text-black/70 dark:text-black/70">Leading oceanic development, safety, and innovation at sea.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Port modernization", d: "Digitized systems for port entry, docking, and security.", c: "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300" },
            { t: "Maritime surveillance", d: "Real-time vessel tracking and monitoring.", c: "bg-cyan-100 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-300" },
            { t: "Export logistics", d: "Support for documentation, inspection, and trade flows.", c: "bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-300" },
            { t: "Mariner certification", d: "Programs for seafarer licensing and compliance.", c: "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-300" },
            { t: "Search & rescue", d: "Coastal emergency response coordination.", c: "bg-red-100 text-red-800 dark:bg-red-500/15 dark:text-red-300" },
            { t: "Marine sustainability", d: "Projects for ocean conservation and clean ports.", c: "bg-green-100 text-green-800 dark:bg-green-500/15 dark:text-green-300" },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-black/10 bg-black/40 p-6 backdrop-blur-sm dark:bg-black/5">
              <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${x.c}`}>{x.t}</span>
              <p className="mt-3 text-black/70 dark:text-black/70">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Lists */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-black/10 p-6">
            <h3 className="text-lg font-semibold">What we provide</h3>
            <ul className="mt-4 space-y-2 text-black/80 dark:text-black/80">
              <li>• Digital port entry systems</li>
              <li>• National marine fleet integration</li>
              <li>• Export & customs assistance</li>
              <li>• Marine safety protocols</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/10 p-6">
            <h3 className="text-lg font-semibold">Who we support</h3>
            <ul className="mt-4 space-y-2 text-black/80 dark:text-black/80">
              <li>• Seafarers and captains</li>
              <li>• Port authorities and customs</li>
              <li>• Trading companies and exporters</li>
              <li>• Environmental marine agencies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-2xl border border-black/10 bg-gradient-to-r from-sky-400 to-cyan-400 p-8 text-black">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold">Collaborate with our Marine Division</h3>
              <p className="mt-1 text-black/80">Help shape sustainable, high-tech seas and trade routes.</p>
            </div>
            <Link href="/#contact" className="rounded-md bg-black px-5 py-2.5 text-sky-300">Reach out</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
