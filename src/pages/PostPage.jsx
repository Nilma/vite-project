import { useParams, Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the first blog post content, discussing interesting topics."
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the second blog post content, sharing more insights."
  },
];

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  //404 page
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-50 to-red-100">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Post Not Found
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          We couldn&apos;t find a post with the ID: {id}. Please try again.
        </p>
        <Link
          to="/"
          className="inline-block px-5 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    );
  }

  // Hvis post findes, vis det “rigtige” indhold
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-700 text-lg mb-6">{post.content}</p>
        <Link
          to="/"
          className="inline-block px-5 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PostPage;