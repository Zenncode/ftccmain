import React from "react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="border-y border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            Testimonials
          </div>
          <h2 className="text-4xl font-bold sm:text-5xl text-gray-900 mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600">Real feedback from partners and clients who have experienced our excellence.</p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { 
              name: "Zenjan Arce", 
              role: "Developer",
              company: "FTCC IT Department",
              quote: "FTCC's innovative approach to healthcare technology has transformed how we serve our patients. Their solutions are both cutting-edge and community-focused." 
            },
            { 
              name: "Samuel Zurbano", 
              role: "Developer",
              company: "FTCC IT Department",
              quote: "The partnership with FTCC has elevated our training programs to international standards. Their commitment to excellence is unmatched." 
            },
            { 
              name: "Ranier Espinida", 
              role: "Developer",
              company: "FTCC IT Department",
              quote: "Working with FTCC has been a game-changer. Their scalable infrastructure and expert support have accelerated our digital transformation." 
            },
          ].map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="mb-6">
                  <svg className="w-10 h-10 text-blue-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <blockquote className="text-gray-700 text-lg leading-relaxed italic">&ldquo;{t.quote}&rdquo;</blockquote>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-blue-600">{t.role}</div>
                  <div className="text-sm text-gray-500">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


