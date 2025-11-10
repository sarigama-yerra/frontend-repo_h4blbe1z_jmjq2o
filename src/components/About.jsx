import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">Built for healthcare efficiency</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              KavachAI is transforming hospital operations with AI automation across claims validation, document digitization, and workflow orchestration. Our plug-and-play platform reduces turnaround time (TAT), minimizes claim rejections, and brings operational transparency to every department — fueling hospital digital transformation.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#0066FF]" /> AI automation</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#0066FF]" /> Healthcare efficiency</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#0066FF]" /> Claims validation</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-[#0066FF]" /> Hospital digital transformation</li>
            </ul>
          </div>
          <div className="md:col-span-6">
            <div className="relative rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 border border-blue-100 shadow-sm">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Avg. Claim TAT</p>
                  <p className="text-3xl font-extrabold text-[#0066FF]">-38%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Rejected Claims</p>
                  <p className="text-3xl font-extrabold text-[#0066FF]">-27%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Data Entry</p>
                  <p className="text-3xl font-extrabold text-[#0066FF]">90%+</p>
                  <p className="text-xs text-gray-500">Automated</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Integration</p>
                  <p className="text-3xl font-extrabold text-[#0066FF]">Plug & Play</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
