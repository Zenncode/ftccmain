import Link from 'next/link';

interface DepartmentHeaderProps {
  title: string;
  description: string;
  color: string;
  bgColor: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export default function DepartmentHeader({ title, description, color, bgColor, stats }: DepartmentHeaderProps) {
  return (
    <section className={`relative overflow-hidden border-b border-black/10 bg-gradient-to-b ${bgColor} to-black dark:to-transparent`}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_300px_at_50%_-50px,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 py-14">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-black/60 dark:text-black/60">
          <Link href="/" className="hover:text-blue-700 transition-colors duration-200">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/#departments" className="hover:text-blue-700 transition-colors duration-200">
            Departments
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black/80 dark:text-black/80 font-medium">{title}</span>
        </nav>

        {/* Hero Content */}
        <div className="mt-6 grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className={`inline-flex items-center gap-2 rounded-full ${color} px-3 py-1 text-xs font-medium text-white shadow-sm`}>
              {title} Department
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl text-gray-900">
              {description}
            </h1>
            <p className="mt-3 text-lg text-gray-700 leading-relaxed">
              Discover our comprehensive solutions and innovative approaches designed to meet the unique challenges 
              and opportunities in this sector.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#programs" className="rounded-md bg-blue-600 px-5 py-2.5 text-white font-medium hover:bg-blue-700 transition-colors duration-200">
                Explore Programs
              </a>
              <a href="#contact" className="rounded-md border border-gray-300 px-5 py-2.5 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200">
                Contact Team
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <div className="rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm p-6 shadow-lg">
            <div className="grid grid-cols-3 gap-4 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
