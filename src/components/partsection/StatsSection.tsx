'use client';

import { useState, useEffect } from 'react';
import { 
  UsersIcon, 
  BuildingOfficeIcon, 
  GlobeAltIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const stats = [
  {
    id: 1,
    name: 'Companies Served',
    value: 100,
    suffix: '+',
    icon: BuildingOfficeIcon,
    color: 'from-blue-500 to-cyan-500',
    description: 'Trusted by businesses nationwide'
  },
  {
    id: 2,
    name: 'Communities Reached',
    value: 500,
    suffix: '+',
    icon: UsersIcon,
    color: 'from-green-500 to-emerald-500',
    description: 'Serving communities across the Philippines'
  },
  {
    id: 3,
    name: 'Years of Excellence',
    value: 15,
    suffix: '+',
    icon: ClockIcon,
    color: 'from-purple-500 to-violet-500',
    description: 'Decades of trusted service'
  },
  {
    id: 4,
    name: 'Global Reach',
    value: 25,
    suffix: '+',
    icon: GlobeAltIcon,
    color: 'from-orange-500 to-red-500',
    description: 'International partnerships and services'
  }
];

export default function StatsSection() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateNumbers = () => {
    stats.forEach((stat, index) => {
      const target = stat.value;
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedStats(prev => {
          const newStats = [...prev];
          newStats[index] = Math.floor(current);
          return newStats;
        });
      }, 16);
    });
  };

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the scale of our commitment to serving communities and businesses 
            across the Philippines with excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center group hover-lift bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              
              <div className="mb-4">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {animatedStats[index]}{stat.suffix}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {stat.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-lg font-semibold text-gray-800">
              Continuously growing and expanding our services
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
