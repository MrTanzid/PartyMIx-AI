import React from 'react';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <label className="flex items-center cursor-pointer group">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className={`
          w-14 h-7 rounded-full transition-colors duration-300
          ${checked 
            ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
            : 'bg-gray-300 dark:bg-gray-700'}
        `}>
          <div className={`
            absolute top-1 left-1 w-5 h-5 rounded-full transition-transform duration-300 
            bg-white shadow-md group-hover:scale-110
            ${checked ? 'translate-x-7' : 'translate-x-0'}
          `} />
        </div>
      </div>
      <span className="ml-3 text-sm text-gray-700 dark:text-gray-400 font-medium">{label}</span>
    </label>
  );
}