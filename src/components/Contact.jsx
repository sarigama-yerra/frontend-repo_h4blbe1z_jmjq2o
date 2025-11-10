import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">Let’s build the future of hospital automation together.</h2>
            <p className="mt-4 text-gray-600">We’ll get back within 24 hours.</p>
            <div className="mt-6 space-y-4 text-gray-700">
              <div className="flex items-center gap-3"><Mail className="text-[#0066FF]" size={20} /><a href="mailto:contacts@kavachai.com" className="hover:underline">contacts@kavachai.com</a></div>
              <div className="flex items-center gap-3"><MapPin className="text-[#0066FF]" size={20} />Bengaluru, Karnataka</div>
              <div className="flex items-center gap-3"><Phone className="text-[#0066FF]" size={20} />Schedule a call</div>
            </div>
          </div>
          <div className="md:col-span-7">
            <form className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600">Name</label>
                  <input type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-[#0066FF] focus:border-[#0066FF]" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:ring-[#0066FF] focus:border-[#0066FF]" placeholder="name@company.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm text-gray-600">Message</label>
                  <textarea rows={4} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-[#0066FF] focus:border-[#0066FF]" placeholder="How can we help?" />
                </div>
              </div>
              <button type="button" className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#0066FF] hover:bg-[#0556d6] transition-colors text-white font-semibold px-6 py-3">Schedule a Call</button>
            </form>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-center text-center">
          <p className="text-sm text-gray-500">Copyright © 2025 KavachAI. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
