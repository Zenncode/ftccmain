// import React from "react";

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">What we offer </h2>
        <p className="mt-3 text-black/70 dark:text-white/70">End-to-end support to turn your ideas into polished products.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Custom Web Application Development", desc: "Architecture, roadmap, and delivery planning." },
          { title: "Mobile Application Development", desc: "Brand, UI/UX, and design systems." },
          { title: "API Development & Integration", desc: "Web apps, landing pages, and APIs." },
          { title: "Enterprise Software Development", desc: "Performance, SEO, and accessibility." },
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-black/10 p-6">
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-black/70 dark:text-white/70">{s.desc}</p>
            <a href="#contact" className="mt-4 inline-block text-blue-600">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}


