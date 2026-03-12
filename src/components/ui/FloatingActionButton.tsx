'use client';

import { useState, useEffect } from 'react';
import { ChevronUpIcon, ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsExpanded(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  const scrollToDepartments = () => {
    const departmentsSection = document.getElementById('departments');
    if (departmentsSection) {
      departmentsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded menu */}
      {isExpanded && (
        <div className="mb-4 space-y-3">
          <button
            onClick={scrollToDepartments}
            className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 group"
            title="View Departments"
          >
            <ChatBubbleLeftRightIcon className="h-6 w-6" />
          </button>
          
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 hover:scale-110 group"
            title="Contact Us"
          >
            <PhoneIcon className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
        title={isExpanded ? "Close menu" : "Quick actions"}
      >
        {isExpanded ? (
          <svg className="h-8 w-8 transition-transform duration-300 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <ChevronUpIcon className="h-8 w-8" />
        )}
      </button>

      {/* Scroll to top button (always visible when expanded) */}
      {isExpanded && (
        <button
          onClick={scrollToTop}
          className="mt-3 flex items-center justify-center w-14 h-14 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 hover:scale-110 group"
          title="Scroll to top"
        >
          <ChevronUpIcon className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
