"use client";
import Image from "next/image";
import LogoGrid from "@/components/ui/LogoGrid";
import React from "react";

export default function Home() {
  return (
    <main id="home">
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-50">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 py-32 sm:py-40">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow-lg">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Welcome to FTCC
              </div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl text-blue-800 leading-tight">
                Filipino Trusted Care Company
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                FTCC (Filipino Trusted Care Corporation) translates the vision of the Universal Health Care (UHC) Act into action by operating compliant, technology-driven Konsulta networks that empower communities across the Philippines.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-full bg-blue-600 px-8 py-4 text-center font-semibold text-white shadow-xl transition-all hover:bg-blue-700 hover:shadow-2xl hover:scale-105"
                >
                  Start a Project
                </a>
                <a
                  href="#departments"
                  className="rounded-full border-2 border-blue-600 px-8 py-4 text-center font-semibold text-blue-600 transition-all hover:bg-blue-600 hover:text-white hover:shadow-lg"
                >
                  Explore Departments
                </a>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Trusted by 100+ Companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-200 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative w-full rounded-3xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-30"></div>
                  <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
                    <Image
                      src="/logos/global.png"
                      alt="Global Link Center"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y border-black/10 bg-background/60">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-blue-600 mb-2">Our Partnership Company</h3>
            <p className="text-gray-600">Trusted by industry leaders and innovative companies</p>
          </div>
          <p className="mb-6 text-center text-sm uppercase tracking-wide text-black/60 dark:text-white/60">
            Trusted by makers
          </p>
          <LogoGrid
            logos={[
              { src: "/assest/images/partimage/pantao.png", alt: "Pantao", width: 400, height: 200 },
              { src: "/assest/images/partimage/pcitechcenter.png", alt: "PCI Tech Center", width: 400, height: 200 },
              { src: "/assest/images/partimage/kadiwa.png", alt: "Kadiwa", width: 400, height: 200 },
              { src: "/assest/images/partimage/ipharma.png", alt: "iPharma", width: 400, height: 200 },
              { src: "/assest/images/partimage/daonecompanies.png", alt: "DA One Companies", width: 400, height: 200 },
              { src: "/assest/images/partimage/alphasure.png", alt: "AlphaSure", width: 400, height: 200 },
              { src: "/assest/images/partimage/pisopay.png", alt: "PisoPay", width: 400, height: 200 },
              { src: "/assest/images/partimage/sozomedical.png", alt: "Sozo Medical", width: 400, height: 200 },
            ]}
          />
        </div>
      </section>
    </main>
  );
}
