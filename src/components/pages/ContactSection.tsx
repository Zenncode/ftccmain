"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    about: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setFormData({
      name: "",
      email: "",
      purpose: "",
      about: ""
    });
    
    const form = e.target as HTMLFormElement;
    form.submit();
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 mb-6">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          Get In Touch
        </div>
        <h2 className="text-4xl font-bold sm:text-5xl text-gray-900 mb-6">Let&apos;s Build Something Amazing Together</h2>
        <p className="text-lg text-gray-600 mb-12">Tell us about your project and we&apos;ll get back to you within 1–2 business days.</p>
      </div>     

      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">zenjanarce4@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-gray-600">+62 123 456 7890</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Address</div>
                    <div className="text-gray-600">Penthouse Floor, Global Link Center, 710 Shaw Blvd, Mandaluyong City</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
            <form action="https://formsubmit.co/zenjanarce4@gmail.com" method="POST" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
                  <input 
                    id="name"
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100" 
                    placeholder="Enter your full name" 
                    required 
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100" 
                    placeholder="Enter your email address" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="purpose">Purpose</label>
                <input 
                  id="purpose"
                  type="text" 
                  name="purpose" 
                  value={formData.purpose}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100" 
                  placeholder="What can we help you with?" 
                  required 
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="about">About Your Project</label>
                <textarea 
                  id="about"
                  name="about" 
                  rows={5}
                  value={formData.about}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100 resize-none" 
                  placeholder="Tell us more about your project, requirements, or inquiry..." 
                  required 
                />
              </div>

              <div className="flex justify-center">
                <button 
                  className="rounded-xl bg-blue-600 px-8 py-3 font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl hover:scale-105 flex items-center gap-2" 
                  type="submit">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
