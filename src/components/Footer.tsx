import React from 'react';

export function Footer() {
  return (
    <footer className="mt-12 py-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} PartyMix AI. Made with ❤️ by{' '}
            <a
              href="https://t.me/sp_mrt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              MrTanzid
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}