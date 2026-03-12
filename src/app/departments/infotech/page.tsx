import Link from "next/link";
import ServicesSection from "./ServicesSection";

export default function InformationTechnology() {
    return (
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-black/10 bg-gradient-to-b from-sky-50 to-black dark:from-sky-950/20 dark:to-transparent">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_50%_-50px,rgba(56,189,248,0.15),transparent_60%)]" />
          <div className="mx-auto max-w-7xl px-4 py-14">
            <nav className="text-sm text-black/60 dark:text-black/60">
              <Link href="/" className="hover:text-sky-700">Home </Link>
              {/* <span className="mx-2">/</span>
              <a href="/departments" className="hover:text-sky-700">Departments</a> */}
              <span className="mx-2">/</span>
              <span className="text-black/80 dark:text-black/80">Information Technology</span>
            </nav>
            <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 dark:bg-sky-500/20 dark:text-sky-300">
                  Digital Transformation
                </span>
                <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                  Powering services through innovation
                </h1>
                <p className="mt-3 text-lg text-black/70 dark:text-black/70">
                  Building digital infrastructure and systems for efficient, secure, and transparent governance.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href="#programs" className="rounded-md bg-sky-500 px-5 py-2.5 text-black">Explore programs</a>
                  <a href="#contact" className="rounded-md border border-black/10 px-5 py-2.5">Contact team</a>
                </div>
              </div>
              <div className="rounded-xl border border-black/10 bg-black/60 p-6 dark:bg-black/5">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">300+</div>
                    <div className="text-xs text-black/60 dark:text-black/60">Gov&apos;t systems deployed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-xs text-black/60 dark:text-black/60">Digital compliance</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">20M+</div>
                    <div className="text-xs text-black/60 dark:text-black/60">Users nationwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Programs Section */}
        <section id="programs" className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">IT Initiatives & Solutions</h2>
            <p className="mt-3 text-black/70 dark:text-black/70">Developing smart applications and national digital platforms.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "e-Government", d: "Unified portals and online transaction systems.", c: "bg-sky-100 text-sky-800 dark:bg-sky-500/15 dark:text-sky-300" },
              { t: "Cloud Migration", d: "Cloud hosting for secure and scalable services.", c: "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/15 dark:text-indigo-300" },
              { t: "Cybersecurity", d: "Firewalls, threat detection, and IT audits.", c: "bg-rose-100 text-rose-800 dark:bg-rose-500/15 dark:text-rose-300" },
              { t: "Data Warehousing", d: "Centralized analytics and public dashboards.", c: "bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-300" },
              { t: "Digital ID Systems", d: "Biometric and secure identity verification.", c: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300" },
              { t: "Mobile Apps", d: "Citizen-centric apps for service access.", c: "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/15 dark:text-yellow-300" },
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
                <li>• Web development & hosting</li>
                <li>• Government cloud services</li>
                <li>• App maintenance and DevOps</li>
                <li>• Data center infrastructure</li>
              </ul>
            </div>
            <div className="rounded-xl border border-black/10 p-6">
              <h3 className="text-lg font-semibold">Who we serve</h3>
              <ul className="mt-4 space-y-2 text-black/80 dark:text-black/80">
                <li>• National and local government units</li>
                <li>• ICT offices & departments</li>
                <li>• Citizen-facing public platforms</li>
                <li>• Internal automation systems</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section id="contact" className="mx-auto max-w-7xl px-4 pb-20">
          <div className="rounded-2xl border border-black/10 bg-gradient-to-r from-sky-400 to-blue-400 p-8 text-black">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold">Let’s innovate together</h3>
                <p className="mt-1 text-black/80">Get in touch to start or support your digital transformation journey.</p>
              </div>
              <Link href="/#contact" className="rounded-md bg-black px-5 py-2.5 text-sky-300">Contact us</Link>
            </div>
          </div>
        </section>

        <ServicesSection />
      </main>
    );
  }
  