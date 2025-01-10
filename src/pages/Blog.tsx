import React from 'react';

const blogPosts = [
  {
    title: 'The Future of AI in Music Discovery',
    excerpt: 'How artificial intelligence is revolutionizing the way we find and enjoy music.',
    date: '2024-03-15',
    readTime: '5 min read'
  },
  {
    title: 'Creating the Perfect Party Playlist',
    excerpt: 'Tips and tricks for curating the ultimate party atmosphere through music.',
    date: '2024-03-10',
    readTime: '4 min read'
  },
  {
    title: 'Understanding Music Moods',
    excerpt: 'The science behind how different types of music affect our emotions.',
    date: '2024-03-05',
    readTime: '6 min read'
  }
];

export function Blog() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Latest from Our Blog
      </h1>
      
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article 
            key={post.title}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="mb-4">
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <time>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{post.excerpt}</p>
            </div>
            <button className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
              Read more →
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}