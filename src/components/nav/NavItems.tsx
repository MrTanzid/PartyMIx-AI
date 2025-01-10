import React from 'react';
import { Home, Info, FileText, Mail } from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function NavItem({ icon, label, active }: NavItemProps) {
  return (
    <button 
      className={`
        flex items-center gap-2 px-4 py-2 rounded-lg transition-all
        ${active 
          ? 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400' 
          : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400'
        }
      `}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );
}

export function NavItems() {
  return (
    <nav className="hidden md:flex items-center gap-2">
      <NavItem icon={<Home size={18} />} label="Home" active />
      <NavItem icon={<Info size={18} />} label="About" />
      <NavItem icon={<FileText size={18} />} label="Blog" />
      <NavItem icon={<Mail size={18} />} label="Contact" />
    </nav>
  );
}