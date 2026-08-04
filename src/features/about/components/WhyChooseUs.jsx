import React from 'react';
import { CheckBadgeIcon, ClockIcon, DevicePhoneMobileIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const features = [
  { icon: CheckBadgeIcon, title: 'Instant Certification', desc: 'Download PDF certificates immediately upon passing.' },
  { icon: ChartBarIcon, title: 'Deep Analytics', desc: 'Track your topic-wise accuracy and speed breakdown.' },
  { icon: DevicePhoneMobileIcon, title: 'Mobile First', desc: 'Seamlessly take exams on any phone, tablet, or desktop.' },
  { icon: ClockIcon, title: 'Real-time Timers', desc: 'Simulated proctored environment with countdown alerts.' },
];

const WhyChooseUs = () => {
  return (
    <div className="my-20 p-8 sm:p-12 rounded-3xl bg-gray-900 text-white shadow-xl">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-3xl font-extrabold">Why Students Choose OES</h2>
        <p className="text-gray-400 text-sm mt-2">Built for speed, accuracy, and enterprise-grade reliability.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div key={f.title} className="space-y-3 p-4 rounded-2xl bg-white/5 border border-white/10">
            <f.icon className="w-8 h-8 text-blue-400" />
            <h4 className="font-bold text-base">{f.title}</h4>
            <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WhyChooseUs;
