import { 
  ShieldCheckIcon, 
  CpuChipIcon, 
  HeartIcon, 
  TruckIcon, 
  ArchiveBoxIcon, 
  PaperAirplaneIcon, 
  SparklesIcon, 
  CurrencyDollarIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    category: 'Technology Solutions',
    icon: CpuChipIcon,
    color: 'from-blue-500 to-cyan-500',
    services: [
      'Digital Transformation Consulting',
      'Cloud Infrastructure Setup',
      'Cybersecurity Solutions',
      'Software Development',
      'IT Support & Maintenance'
    ]
  },
  {
    category: 'Healthcare Services',
    icon: HeartIcon,
    color: 'from-red-500 to-pink-500',
    services: [
      'Primary Healthcare',
      'Telemedicine Solutions',
      'Health Information Systems',
      'Community Health Programs',
      'Medical Equipment Support'
    ]
  },
  {
    category: 'Transportation & Logistics',
    icon: TruckIcon,
    color: 'from-green-500 to-emerald-500',
    services: [
      'Fleet Management',
      'Route Optimization',
      'Supply Chain Solutions',
      'Last-Mile Delivery',
      'Transportation Analytics'
    ]
  },
  {
    category: 'Marine & Maritime',
    icon: ArchiveBoxIcon,
    color: 'from-blue-600 to-indigo-600',
    services: [
      'Port Operations',
      'Marine Safety Systems',
      'Coastal Management',
      'Fisheries Support',
      'Maritime Technology'
    ]
  },
  {
    category: 'Aviation Services',
    icon: PaperAirplaneIcon,
    color: 'from-purple-500 to-violet-500',
    services: [
      'Aircraft Maintenance',
      'Flight Operations Support',
      'Aviation Safety Systems',
      'Ground Support Equipment',
      'Flight Training Programs'
    ]
  },
  {
    category: 'Agricultural Solutions',
    icon: SparklesIcon,
    color: 'from-green-600 to-teal-600',
    services: [
      'Smart Farming Technology',
      'Crop Management Systems',
      'Agricultural Analytics',
      'Sustainable Practices',
      'Market Access Support'
    ]
  },
  {
    category: 'Financial Technology',
    icon: CurrencyDollarIcon,
    color: 'from-yellow-500 to-orange-500',
    services: [
      'Digital Payment Solutions',
      'Financial Inclusion Programs',
      'Microfinance Support',
      'Financial Education',
      'Banking Technology'
    ]
  },
  {
    category: 'Trust & Compliance',
    icon: ShieldCheckIcon,
    color: 'from-gray-600 to-slate-600',
    services: [
      'Regulatory Compliance',
      'Quality Assurance',
      'Risk Management',
      'Audit Services',
      'Certification Support'
    ]
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Solutions Across Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FTCC delivers innovative, technology-driven solutions that address the unique challenges 
            of modern businesses and communities, ensuring sustainable growth and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover-lift transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.category}
              </h3>
              
              <ul className="space-y-3">
                {service.services.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Operations?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let FTCC be your trusted partner in innovation and growth. 
              Our expert teams are ready to deliver solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
              >
                Get Started Today
              </a>
              <a 
                href="#departments" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Explore Our Departments
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
