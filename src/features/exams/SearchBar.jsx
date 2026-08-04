import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/common/Input';

export const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <Input
        type="text"
        placeholder="Search exams by title or keyword..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        icon={<Search className="w-5 h-5" />}
      />
    </div>
  );
};
