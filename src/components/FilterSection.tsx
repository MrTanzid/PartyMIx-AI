import React from 'react';
import { Music, Clock, Sparkles, LayoutGrid, Zap } from 'lucide-react';
import { FilterCard } from './filters/FilterCard';
import { CountryCard } from './filters/CountryCard';
import { LanguageCard } from './filters/LanguageCard';
import { FilterOptions } from '../types/filters';
import { Toggle } from './ui/Toggle';

interface FilterSectionProps {
  filters: FilterOptions;
  onFilterChange: (key: keyof FilterOptions, value: any) => void;
}

export function FilterSection({ filters, onFilterChange }: FilterSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <FilterCard
        icon={LayoutGrid}
        label="Category"
        value={filters.category}
        onChange={(value) => onFilterChange('category', value)}
        options={['Party', 'Chill', 'Dance', 'Romantic', 'Workout', 'Focus', 'Gaming', 'Road Trip']}
      />
      <FilterCard
        icon={Music}
        label="Genre"
        value={filters.genre}
        onChange={(value) => onFilterChange('genre', value)}
        options={['Pop', 'Rock', 'EDM', 'Hip-Hop', 'R&B', 'Jazz', 'Classical', 'Country', 'Latin', 'K-pop']}
      />
      <CountryCard
        value={filters.country}
        onChange={(value) => onFilterChange('country', value)}
      />
      <LanguageCard
        value={filters.language}
        onChange={(value) => onFilterChange('language', value)}
      />
      <FilterCard
        icon={Sparkles}
        label="Mood"
        value={filters.mood}
        onChange={(value) => onFilterChange('mood', value)}
        options={['Energetic', 'Relaxed', 'Upbeat', 'Mellow', 'Happy', 'Sad', 'Romantic', 'Intense']}
      />
      <FilterCard
        icon={Clock}
        label="Duration"
        value={filters.duration}
        onChange={(value) => onFilterChange('duration', value)}
        options={['Short', 'Medium', 'Long']}
      />
      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
            <Zap size={18} className="text-purple-600 dark:text-purple-400" />
          </div>
          <label className="font-medium text-gray-700 dark:text-gray-200">Explicit Content</label>
        </div>
        <Toggle
          checked={filters.explicit}
          onChange={(checked) => onFilterChange('explicit', checked)}
          label="Allow explicit content"
        />
      </div>
    </div>
  );
}