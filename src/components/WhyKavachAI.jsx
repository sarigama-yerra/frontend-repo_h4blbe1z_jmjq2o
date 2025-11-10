import React from 'react';

const WhyKavachAI = () => {
  return (
    <section id="why" className="bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">Why KavachAI</h2>
            <p className="mt-4 text-gray-600">Hospitals struggle with manual data entry, delays, and paper-heavy processes. KavachAI eliminates friction with smart automation and 24x7 reliability.</p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl border border-gray-200 p-5 bg-white">
                <p className="text-sm uppercase tracking-wider text-gray-500">Traditional</p>
                <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                  <li>Manual data entry</li>
                  <li>Fragmented systems</li>
                  <li>Delays & follow-ups</li>
                  <li>Paper-heavy workflows</li>
                </ul>
              </div>
              <div className="rounded-xl border border-blue-200 p-5 bg-blue-50">
                <p className="text-sm uppercase tracking-wider text-[#0066FF] font-semibold">KavachAI</p>
                <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                  <li>Automated intake & validation</li>
                  <li>Seamless integrations</li>
                  <li>Real-time dashboards</li>
                  <li>Audit trails & transparency</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#0B1220]">Use Cases</h3>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm font-medium text-[#0B1220]">For Hospitals</p>
                <p className="text-sm text-gray-600 mt-1">Automate pre-auth, billing checks, and discharge workflows.</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm font-medium text-[#0B1220]">For Claim Executives</p>
                <p className="text-sm text-gray-600 mt-1">Pre-validate claims, identify missing docs, and reduce rework.</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm font-medium text-[#0B1220]">For Administrators</p>
                <p className="text-sm text-gray-600 mt-1">Track SLAs, bottlenecks, and performance across units.</p>
              </div>
            </div>
            <div className="mt-8 rounded-xl border border-gray-200 p-5">
              <p className="text-sm text-gray-600">
                Currently operational in Bengaluru with Tier 2 hospitals — expanding to Tier 1 hospitals.
              </p>
              <div className="mt-4 space-y-3">
                <div className="p-3 rounded-lg bg-gray-50 text-sm text-gray-700">“KavachAI helped us cut claim TAT significantly.” — Partner Hospital</div>
                <div className="p-3 rounded-lg bg-gray-50 text-sm text-gray-700">“The dashboard gives clear visibility across claims.” — Claims Lead</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKavachAI;
