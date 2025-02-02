import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Blog Post", excerpt: "This is an introduction to the first blog post." },
  { id: 2, title: "Second Blog Post", excerpt: "This is a brief overview of the second blog post." },
];

const HomePage = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Latest Blog Posts</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.id} className="p-6 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
            <Link to={`/post/${post.id}`} className="text-2xl text-blue-600 font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;