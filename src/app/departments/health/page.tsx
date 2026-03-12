import Link from "next/link";

export default function Health() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-black/10 bg-gradient-to-b from-green-50 to-black dark:from-green-950/20 dark:to-transparent">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_50%_-50px,rgba(74,222,128,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-14">
          <nav className="text-sm text-black/60 dark:text-black/60">
            <Link href="/" className="hover:text-green-700">Home </Link>
            <span className="mx-2">/</span>
            {/* <a href="/departments" className="hover:text-green-700">Departments</a>
            <span className="mx-2">/</span> */}
            <span className="text-black/80 dark:text-black/80">Health</span>
          </nav>
          <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-500/20 dark:text-green-300">
                Health Services
              </span>
              <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Accessible and innovative healthcare solutions
              </h1>
              <p className="mt-3 text-lg text-black/70 dark:text-black/70">
                We strengthen community well-being through tech-enabled clinics, e-health programs, and the Konsulta system.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#programs" className="rounded-md bg-green-500 px-5 py-2.5 text-black">Explore services</a>
                <a href="#contact" className="rounded-md border border-black/10 px-5 py-2.5">Partner with us</a>
              </div>
            </div>
            <div className="rounded-xl border border-black/10 bg-black/60 p-6 dark:bg-black/5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">85+</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Community clinics</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Patients served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-xs text-black/60 dark:text-black/60">Satisfaction rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="mx-auto max-w-7xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Healthcare Services</h2>
          <p className="mt-3 text-black/70 dark:text-black/70">Improving lives through innovation, care, and technology.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Rural health clinics", d: "Accessible primary care services in remote areas.", c: "bg-green-100 text-green-800 dark:bg-green-500/15 dark:text-green-300" },
            { t: "Telemedicine", d: "Virtual consultations and diagnostics.", c: "bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-300" },
            { t: "Konsulta network", d: "Integrated patient registration and services.", c: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300" },
            { t: "Health Information Systems", d: "Centralized digital medical records.", c: "bg-teal-100 text-teal-800 dark:bg-teal-500/15 dark:text-teal-300" },
            { t: "Emergency response", d: "Rapid response units and crisis care.", c: "bg-red-100 text-red-800 dark:bg-red-500/15 dark:text-red-300" },
            { t: "Mental health access", d: "Programs for psychological wellness.", c: "bg-purple-100 text-purple-800 dark:bg-purple-500/15 dark:text-purple-300" },
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
              <li>• Community clinics and health stations</li>
              <li>• Konsulta registration and support</li>
              <li>• E-health records and analytics</li>
              <li>• Emergency preparedness training</li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/10 p-6">
            <h3 className="text-lg font-semibold">Who we support</h3>
            <ul className="mt-4 space-y-2 text-black/80 dark:text-black/80">
              <li>• Rural and underserved communities</li>
              <li>• Barangay health workers</li>
              <li>• Local hospitals and NGOs</li>
              <li>• Public health officials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-2xl border border-black/10 bg-gradient-to-r from-green-400 to-emerald-400 p-8 text-black">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold">Partner with our Health Division</h3>
              <p className="mt-1 text-black/80">Together, we can build a healthier, more resilient future.</p>
            </div>
            <Link href="/#contact" className="rounded-md bg-black px-5 py-2.5 text-green-300">Get in touch</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
