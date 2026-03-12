"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { Menu, X, Play, Plus, Minus } from "lucide-react";

export default function Agriculture() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleLearnMore = () => {
    // Navigate to detailed page or open modal
    console.log('Learn More clicked - navigating to detailed content');
  };

  const handleWatchDemo = () => {
    // Open video player or demo page
    console.log('Watch Demo clicked - opening video player');
  };

  const handleJoinNow = () => {
    // Submit email and show success message
    if (email.trim()) {
      console.log('Join Now clicked - submitting email:', email);
      // Here you would typically send the email to your backend
      // For now, just clear the input and show a success message
      setEmail('');
      alert('Thank you for joining! We\'ll be in touch soon.');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const faqs = [
    {
      question: "What is sustainable farming?",
      answer: "Sustainable farming is an approach that focuses on producing food while maintaining soil health, conserving water, and minimizing environmental impact for future generations."
    },
    {
      question: "How can renewable energy be used on farms?",
      answer: "Farms can utilize solar panels, wind turbines, and biogas systems to power operations, reduce costs, and minimize carbon footprint."
    },
    {
      question: "What are the benefits of using precision agriculture?",
      answer: "Precision agriculture helps optimize resource use, increase yields, reduce waste, and improve crop quality through data-driven decision making."
    },
    {
      question: "How does crop rotation improve soil health?",
      answer: "Crop rotation helps maintain soil fertility, reduces pest and disease pressure, and improves soil structure and biodiversity."
    },
    {
      question: "What are the best ways to conserve water on my farm?",
      answer: "Implement drip irrigation, mulching, rainwater harvesting, and drought-resistant crops to maximize water efficiency."
    },
    {
      question: "Why is biodiversity important in agriculture?",
      answer: "Biodiversity supports ecosystem health, natural pest control, pollination, and resilience against climate change."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Image
                src="/assest/images/partimage/kadiwa.png"
                alt="Kadiwa Logo"
                width={60}
                height={60}
                className="rounded-lg transition-all duration-300 hover:shadow-lg"
              />
              <div className="text-2xl font-bold text-green-600">AgriFTCC</div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
              <Link href="/#departments" className="text-gray-700 hover:text-green-600 transition-colors">Departments</Link>
              <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
                <Link href="/#departments" className="text-gray-700 hover:text-green-600 transition-colors">Departments</Link>
                <Link href="#services" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/assest/images/agriimage/1st.jpg"
          alt="Agriculture Background"
          fill
          className="object-cover w-full h-full"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 via-green-500/50 to-yellow-400/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Sustainable Practices for a Better Tomorrow
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 opacity-90">
              Empowering farmers with innovative solutions and sustainable practices to create a more productive and environmentally conscious agricultural future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleLearnMore}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Learn More
              </button>
              <button
                onClick={handleWatchDemo}
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <Play size={20} />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transforming Agriculture, One Farm at a Time.
              </h2>
              <p className="text-gray-600 text-lg">
                Our comprehensive approach helps farmers implement sustainable practices while maintaining profitability and productivity.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">56k</div>
                <div className="text-gray-600">Farms Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">70+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Stay informed with our cutting-edge research and innovative solutions for modern agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-r from-orange-400 to-yellow-500" style={{
                backgroundImage: 'url("/assest/images/agriimage/harvest.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Innovative Farming Practices Yield Record Harvests
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover how modern farmers are using technology and sustainable methods to achieve unprecedented crop yields while protecting the environment.
                </p>
                <button
                  onClick={handleLearnMore}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-r from-green-400 to-green-600" style={{
                backgroundImage: 'url("/assest/images/agriimage/crop.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Climate Change and Its Impact on Crop Production
                </h3>
                <p className="text-gray-600 mb-4">
                  Understanding how changing weather patterns affect agriculture and what farmers can do to adapt and thrive in challenging conditions.
                </p>
                <button
                  onClick={handleLearnMore}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-r from-green-300 to-green-500" style={{
                backgroundImage: 'url("/assest/images/agriimage/plant.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Government Grants for Sustainable Agriculture
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn about available funding opportunities and government programs supporting farmers in their transition to sustainable practices.
                </p>
                <button
                  onClick={handleLearnMore}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Planning Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plan Your Farming Activities with Accurate Weather Forecasts
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Make informed decisions about planting, harvesting, and field operations with our precision weather forecasting and agricultural planning tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-8" style={{
              backgroundImage: 'url("/assest/images/agriimage/hand.jpg")',
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
            }}>
              <div className="h-48 mb-6" ></div>
              <h3 className="text-2xl font-semibold mb-4">
                Optimize Your Planting and Harvesting Schedule
              </h3>
              <p className="text-gray-300 mb-6">
                Use advanced weather analytics and soil monitoring to determine the perfect timing for all your farming operations.
              </p>
              <button
                onClick={handleLearnMore}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium cursor-pointer"
              >
                Learn More
              </button>
            </div>

            <div className="bg-gray-800 rounded-xl p-8" style={{
              backgroundImage: 'url("/assest/images/agriimage/soil.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div className="h-48 mb-6"></div>
              <h3 className="text-2xl font-semibold mb-4">
                Understand Your Soil&apos;s Health and Nutrient Levels
              </h3>
              <p className="text-gray-300 mb-6">
                Get detailed soil analysis and personalized recommendations to maximize crop yield and maintain long-term soil health.
              </p>
              <button
                onClick={handleLearnMore}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Get answers to common questions about sustainable farming practices.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-all duration-300 group"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">{faq.question}</span>
                  <div className="text-green-600 group-hover:scale-110 transition-transform duration-300">
                    {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 AgriFTCC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}