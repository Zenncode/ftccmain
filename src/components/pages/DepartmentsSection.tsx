import React from "react";
import Image from "next/image";

export default function DepartmentsSection() {
  const paths: Record<string, string> = {
    "Agriculture": "/departments/agriculture",
    "Aircraft": "/departments/aircraft",
    "Financial-Technology": "/departments/financialtech",
    "Health": "/departments/health",
    "Marine": "/departments/marine",
    "Transportation": "/departments/transportation",
    "Information Technology": "/departments/infotech", 
  };

  return (
    <section id="departments" className="mx-auto max-w-7xl px-4 py-24 relative overflow-hidden">
      {/* Floating Animation Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-purple-300 rounded-full opacity-40 animate-pulse"></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-32 left-1/4 transform -translate-x-1/2 animate-float">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center opacity-80 shadow-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        
        <div className="absolute top-48 right-1/3 transform translate-x-1/2 animate-float-delayed">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center opacity-80 shadow-lg">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <div className="absolute bottom-32 left-1/3 transform -translate-x-1/2 animate-float-slow">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center opacity-80 shadow-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 00-2-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-4xl font-bold sm:text-5xl text-blue-600">Our Departments</h2>
        <p className="mt-6 text-lg text-gray-600">Discover our comprehensive range of specialized services across multiple industries.</p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Agriculture", desc: "Kadiwa - Empowering agricultural communities with innovative solutions.", icon: "/assest/images/departimage/kadiwa.png" },
          { title: "Aircraft", desc: "AIA - Asian Institute of Aviation. Excellence in aviation training and services.", icon: "/assest/images/departimage/aircraft.jpg" },
          { title: "Financial-Technology", desc: "Westcoast - Cutting-edge financial technology solutions for modern businesses.", icon: "/assest/images/departimage/westcoast.jpg" },
          { title: "Health", desc: "Health Tech Clinic - Advanced healthcare technology and patient care solutions.", icon: "/assest/images/departimage/health.png" },
          { title: "Marine", desc: "Vertex maritime international trading incorporated. Global maritime excellence.", icon: "/assest/images/departimage/marine.png" },
          { title: "Transportation", desc: "DOTR - Department of Transportation. Connecting communities through innovation.", icon: "/assest/images/departimage/dotr.png" },
        ].map((f) => (
          <div key={f.title} className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl">
                  <Image 
                    src={f.icon} 
                    alt={`${f.title} icon`} 
                    width={70} 
                    height={70} 
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{f.title}</h3>
              </div>
              <p className="mb-6 text-gray-600 leading-relaxed">{f.desc}</p>
              <a href={paths[f.title] ?? "/departments"} className="group inline-flex items-center gap-2 px-6 py-3 text-blue-600 font-semibold rounded-full border-2 border-blue-200 bg-blue-50 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:scale-105">
                Learn More 
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">→</span>
              </a>
            </div>
          </div>
        ))}
        
        {/* Empty space div */}
        <div className="hidden lg:block"></div>
        
        {/* Information Technology card positioned in center */}
        <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
                              <div className="p-3 rounded-xl">
                  <Image 
                    src="/assest/images/departimage/404NF.png" 
                    alt="Information Technology icon" 
                    width={70} 
                    height={70} 
                    className="rounded-lg object-cover"
                  />
                </div>
              <h3 className="text-xl font-bold text-gray-800">Information Technology</h3>
            </div>
            <p className="mb-6 text-gray-600 leading-relaxed">We provide a solid foundation so your team can collaborate, iterate, and deliver at pace. Opinionated where it matters, flexible where it counts.</p>
            <a href="/departments/infotech" className="group inline-flex items-center gap-2 px-6 py-3 text-blue-600 font-semibold rounded-full border-2 border-blue-200 bg-blue-50 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:scale-105">
              Learn More 
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


