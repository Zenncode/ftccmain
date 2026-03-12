import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="border-y border-gray-200 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4 py-24">
        {/* Main About Content */}
        <div className="grid items-center gap-16 md:grid-cols-2 mb-20">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              About FTCC
            </div>
            <h2 className="text-4xl font-bold sm:text-5xl text-gray-900 mb-6">Filipino Trusted Care Company</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">FTCC is a leading healthcare provider in the Philippines, committed to delivering exceptional medical services with compassion and innovation. Our state-of-the-art facilities and expert medical professionals ensure the highest quality of care for our patients.</p>
            <ul className="grid gap-4 text-base text-gray-700">
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Production-grade technology solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Community-focused healthcare delivery</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1.5 w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Sustainable and scalable infrastructure</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
                <div className="text-center">
                  <div className="mx-auto w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation at Scale</h3>
                  <p className="text-gray-600">Building the future of healthcare and community services with cutting-edge technology and unwavering commitment to excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Core Values Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The core principles that guide our mission to transform healthcare and community services across the Philippines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h4>
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">

                <span className="text-gray-700 text-sm">
                  • FTCC (Filipino Trusted Care Company) translates the vision of the Universal Health Care (UHC) Act into action by operating compliant, technology-driven Konsulta networks that.</span>
              </div>
              <div className="flex items-center gap-3">

                <span className="text-gray-700 text-sm">
                  • Enable LGUs to meet Konsulta targets without new capital outlay.</span>
              </div>
              <div className="flex items-center gap-3">

                <span className="text-gray-700 text-sm">
                  • Operate private-sector clinics to serve the large underserved and mobile populations.</span>
              </div>
              <div className="flex items-center gap-3">

                <span className="text-gray-700 text-sm">
                  • Seamlessly integrate pharmacy, laboratory (fixed and mobile), telemedicine, and digital registration across care pathways.</span>
              </div>
              <div className="flex items-center gap-3">

                <span className="text-gray-700 text-sm">
                  • Maintain strict compliance with RA 11223 (UHC Act), PhilHealth Circulars 2023-0008 & 2024-0013, and DOH licensing regulations.</span>
              </div>
            </div>
        </div>

        {/* Vision */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h4>
          <div className="flex items-center gap-3">
              <span className="text-gray-700 text-sm">
                •  Universal primary care that every Filipino can truly trust — accessible, tech-enabled, and financially sustainable.
              </span>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Core Values</h4>
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3">
              <span className="text-gray-700 text-sm">
                • Integrity: Maintaining the highest standards of honesty and ethical conduct</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 text-sm">
                • Inclusivity: Ensuring healthcare is accessible to all Filipinos</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 text-sm">
                • Service Excellence: Delivering exceptional care and service to our patients
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 text-sm">
                • Innovation: Continuously improving and embracing new technologies
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 text-sm">
                • Compliance: Adhering to all healthcare regulations and standards
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section >
  );
}


