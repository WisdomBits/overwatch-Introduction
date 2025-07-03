import React from 'react'
import Link from 'next/link'
import { posts } from "../../helpers/blog"
const Blog = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold text-indigo-600 tracking-tight">
            <Link href="/" className="hover:text-gray-900 transition">
                Overwatch TS
            </Link>
          </div>
          <nav className="flex space-x-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition">Home</Link>
            <Link href="https://docs.overwatchts.in/docs" className="hover:text-gray-900 transition">Docs</Link>
            <Link href="https://github.com/WisdomBits/overwatch" className="hover:text-gray-900 transition">Github</Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">Latest Updates</h1>
          <p className="mt-3 text-lg text-gray-600">
            All the latest Overwatch TS news, straight from the team.
          </p>
        </div>

        {/* Blog posts */}
        <div className="space-y-12">
          {posts.map((post, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-6 group">
              {/* Date */}
              <div className="w-28 text-sm text-gray-500 mt-1">{post.date}</div>

              {/* Blog card with full shadow */}
              <div className="flex-1 bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                <p className="mt-2 text-gray-700 leading-relaxed">{post.description}</p>
                <div className="mt-4 flex gap-6 text-sm font-medium">
                  <a
                    href={post.mediumUrl}
                    className="text-indigo-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Medium →
                  </a>
                  <a
                    href={post.devtoUrl}
                    className="text-indigo-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dev.to →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default Blog
