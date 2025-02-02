import React from "react";
import { useParams, Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Blog Post", content: "This is the first blog post content, discussing interesting topics." },
  { id: 2, title: "Second Blog Post", content: "This is the second blog post content, sharing more insights." },
];

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post)
    return <h1 className="text-center text-red-500 text-3xl mt-10">Post Not Found</h1>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-700 text-lg">{post.content}</p>

      <div className="mt-6">
        <Link to="/" className="text-blue-500 hover:underline text-lg">← Back to Home</Link>
      </div>
    </div>
  );
};

export default PostPage;