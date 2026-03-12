

import Link from "next/link";

export default function Transportation() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-black/10 bg-gradient-to-b from-amber-50 to-black dark:from-amber-950/20 dark:to-transparent">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_50%_-50px,rgba(251,191,36,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-14">
          <nav className="text-sm text-black/60 dark:text-black/60">
            <Link href="/" className="hover:text-yellow-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/departments" className="hover:text-yellow-700">Departments</Link>
            <span className="mx-2">/</span>
            <span className="text-black/80 dark:text-black/80">Transportation</span>
          </nav>
          <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300">
                Mobility & DOTR
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Driving national transport infrastructure
              </h1>
              <p className="mt-3 text-lg text-black/70 dark:text-black/70">
                Enabling safe, sustainable, and efficient transportation systems through digital and public-private efforts.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#programs" className="rounded-md bg-yellow-500 px-5 py-2.5 text-black">Explore projects</a>
                <a href="#contact" className="rounded-md border border-black/10 px-5 py-2.5">Contact team</a>
              </div>
            </div>
            <div className="rounded-xl border border-black/10 bg-black/60 p-6 dark:bg-black/5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Transit hubs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">75%</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Coverage improved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">50M+</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Passengers/year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Transportation Projects</h2>
          <p className="mt-3 text-black/70 dark:text-black/70">Linking cities and people through smart mobility systems.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "E-ticketing", d: "Unified electronic fare systems for buses and rail.", c: "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/15 dark:text-yellow-300" },
            { t: "Intelligent traffic", d: "AI-assisted traffic management & rerouting.", c: "bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300" },
            { t: "Modern terminals", d: "Smart terminal designs with digital dashboards.", c: "bg-lime-100 text-lime-800 dark:bg-lime-500/15 dark:text-lime-300" },
            { t: "Railway expansion", d: "New rail lines and maintenance systems.", c: "bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-300" },
            { t: "Public bike lanes", d: "Sustainable transport infrastructure development.", c: "bg-green-100 text-green-800 dark:bg-green-500/15 dark:text-green-300" },
            { t: "Fleet monitoring", d: "GPS-enabled bus and jeep tracking.", c: "bg-cyan-100 text-cyan-800 dark:bg-cyan-500/15 dark:text-cyan-300" },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-black/10 bg-black/40 p-6 backdrop-blur-sm dark:bg-black/5">
              <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${x.c}`}>{x.t}</span>
              <p className="mt-3 text-black/70 dark:text-black/70">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-4 pb-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-black/10 p-6">
            <h3 className="text-lg font-semibold">What we provide</h3>
            <ul className="mt-4 space-y-2 text-black/80 dark:text-black/80">
              <li>• DOTR collaboration tools</li>
              <li>• Smart city transport systems</li>
              <li>• Vehicle emission compliance</li>
              <li>• Transport worker IDs</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/10 p-6">
            <h3 className="text-lg font-semibold">Who we serve</h3>
            <ul className="mt-4 space-y-2 text-black/80 dark:text-black/80">
              <li>• Public transport cooperatives</li>
              <li>• LGU traffic departments</li>
              <li>• DOTR and LTO offices</li>
              <li>• Urban mobility planners</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-2xl border border-black/10 bg-gradient-to-r from-yellow-400 to-orange-400 p-8 text-black">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold">Let’s improve mobility together</h3>
              <p className="mt-1 text-black/80">Partner with us to create smarter and safer transportation nationwide.</p>
            </div>
            <Link href="/#contact" className="rounded-md bg-black px-5 py-2.5 text-yellow-300">Contact us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
