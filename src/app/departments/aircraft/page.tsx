"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X, Play, Plus, Minus } from "lucide-react";

export default function Aircraft() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");   

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleLearnMore = () => {
    console.log("Learn More clicked");
  };

  const handleWatchDemo = () => {
    console.log("Watch Demo clicked");
  };

  const handleJoinNow = () => {
    if (email.trim()) {
      alert("Thank you for joining! We'll be in touch soon.");
      setEmail("");
    } else {
      alert("Please enter a valid email.");
    }
  };

  const faqs = [
    { question: "What is the importance of pilot training?", answer: "Pilot training ensures safety, compliance, and operational efficiency." },
    { question: "How often should aircraft undergo maintenance?", answer: "Routine maintenance should be conducted every 100 flight hours or as per aviation standards." },
    { question: "What is airspace monitoring?", answer: "Real-time tracking of aircraft to ensure safe distances and prevent collisions." },
    { question: "How does regulatory compliance work?", answer: "Following aviation authority guidelines through audits and certifications." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">AeroFTCC</div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/#departments" className="text-gray-700 hover:text-blue-600">Departments</Link>
              <Link href="#programs" className="text-gray-700 hover:text-blue-600">Programs</Link>
            </nav>

            {/* Mobile Menu */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden border-t py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="#home" className="text-gray-700 hover:text-blue-600">Home</Link>
                <Link href="/#departments" className="text-gray-700 hover:text-blue-600">Departments</Link>
                <Link href="#programs" className="text-gray-700 hover:text-blue-600">Programs</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <Image src="/assest/images/departimage/aircraft.jpg" alt="Aircraft Safety" fill className="object-cover w-full h-full" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/50 via-blue-500/50 to-sky-400/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Safe Skies Through Innovation & Training
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 opacity-90">
              Enhancing aviation safety with advanced pilot programs, real-time monitoring, and sustainable practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleLearnMore} className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105">
                Learn More
              </button>
              <button onClick={handleWatchDemo} className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105">
                <Play size={20} /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shaping the Future of Aviation Safety</h2>
            <p className="text-gray-600 text-lg">We lead the aviation industry with top-tier pilot programs, compliance monitoring, and cutting-edge maintenance solutions.</p>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div><div className="text-4xl font-bold text-blue-600">320+</div><div className="text-gray-600">Pilots Certified</div></div>
            <div><div className="text-4xl font-bold text-blue-600">98%</div><div className="text-gray-600">Compliance Rate</div></div>
            <div><div className="text-4xl font-bold text-blue-600">75</div><div className="text-gray-600">Aircraft Maintained</div></div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Programs</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Comprehensive aviation training and safety programs for professionals worldwide.</p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {[
            { img: "/assest/images/departimage/aircraft.jpg", title: "Pilot Training", desc: "Advanced simulation, licensing, and safety protocols." },
            { img: "/assest/images/departimage/aircraft.jpg", title: "Aircraft Maintenance", desc: "Routine inspections and preventive diagnostics." },
            { img: "/assest/images/departimage/aircraft.jpg", title: "Airspace Monitoring", desc: "Real-time tracking and risk mitigation systems." },
          ].map((x, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64" style={{ backgroundImage: `url(${x.img})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{x.title}</h3>
                <p className="text-gray-600 mb-4">{x.desc}</p>
                <button onClick={handleLearnMore} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Answers to common aviation safety questions.</p>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border">
              <button className="w-full px-6 py-4 flex justify-between items-center" onClick={() => toggleFaq(index)}>
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              {openFaq === index && <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 text-center">
        <p>&copy; 2025 AeroFTCC. All rights reserved.</p>
      </footer>
    </div>
  );
}
