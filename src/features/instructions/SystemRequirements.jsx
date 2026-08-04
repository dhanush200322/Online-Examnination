import React from 'react';
import { Card } from '@/components/common/Card';
import { Monitor, Wifi, Chrome } from 'lucide-react';

export const SystemRequirements = () => {
  const reqs = [
    { icon: <Monitor className="w-5 h-5 text-textMuted" />, label: "Device", value: "Desktop or Laptop recommended" },
    { icon: <Chrome className="w-5 h-5 text-textMuted" />, label: "Browser", value: "Latest version of Chrome, Firefox, or Safari" },
    { icon: <Wifi className="w-5 h-5 text-textMuted" />, label: "Internet", value: "Minimum 2 Mbps stable connection" },
  ];

  return (
    <Card variant="solid" className="p-6 mb-8">
      <h2 className="text-lg font-bold text-textHeading mb-4">System Requirements</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reqs.map((req, i) => (
          <div key={i} className="flex items-center gap-3 bg-surfaceElevated p-3 rounded-xl border border-border">
            {req.icon}
            <div>
              <p className="text-xs font-semibold text-textMuted uppercase">{req.label}</p>
              <p className="text-sm font-medium text-textHeading">{req.value}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
