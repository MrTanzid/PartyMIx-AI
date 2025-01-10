import React from 'react';
import { Music, Heart, Zap, Users } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        About PartyMix AI
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400">
            PartyMix AI revolutionizes the way you discover and enjoy music. Using advanced AI technology, 
            we create personalized playlists that perfectly match your mood, preferences, and occasion.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Music, label: 'Smart Playlists', value: '1M+' },
            { icon: Heart, label: 'Happy Users', value: '100K+' },
            { icon: Zap, label: 'Songs Analyzed', value: '10M+' },
            { icon: Users, label: 'Daily Users', value: '50K+' }
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm">
              <Icon className="w-8 h-8 text-purple-500 mb-2" />
              <div className="font-bold text-2xl">{value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Select Preferences',
              description: 'Choose your music preferences, mood, and occasion.'
            },
            {
              title: 'AI Generation',
              description: 'Our AI analyzes millions of songs to create your perfect playlist.'
            },
            {
              title: 'Enjoy Music',
              description: 'Listen to your personalized playlist on your favorite platform.'
            }
          ].map(({ title, description }, index) => (
            <div key={title} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <div className="text-purple-500 font-bold mb-2">Step {index + 1}</div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}