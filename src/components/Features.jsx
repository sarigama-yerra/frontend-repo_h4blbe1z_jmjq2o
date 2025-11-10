import React from 'react';
import { CheckCircle2, Gauge, FileText, GitBranch, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Claim Pre-Validation',
    icon: CheckCircle2,
    desc: 'Automated checks for policy eligibility, coverage limits, and documentation completeness before submission.'
  },
  { title: 'Document Digitization', icon: FileText, desc: 'OCR and classification to convert paper-heavy processes into structured data.' },
  { title: 'Workflow Automation', icon: GitBranch, desc: 'Configurable rules to route tasks, approvals, and notifications across departments.' },
  { title: 'Real-time Claim Status Dashboard', icon: Gauge, desc: 'Monitor claim progress, bottlenecks, and SLAs in one unified view.' },
  { title: 'Analytics & Insights', icon: BarChart3, desc: 'Identify patterns in rejections, improve coding accuracy, and optimize operations.' },
];

const Features = () => {
  return (
    <section id="features" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220] text-center">Key Features</h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">Powerful modules that automate repetitive work and keep your teams focused on care.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-100 hover:border-blue-200 bg-gradient-to-b from-white to-blue-50/30 p-6 transition-all shadow-sm hover:shadow-md">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-[#0066FF]/10 text-[#0066FF]">
                <f.icon size={24} />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0B1220]">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
