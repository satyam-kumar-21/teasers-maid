import { useSelector } from 'react-redux'; // Importing useSelector from Redux
import DefaultLayout from "@/layouts/default";

export default function BlogPage() {
  // Fetch blog posts from the Redux store (assuming the blog data is in state.blogs.blogs)
  const blogPosts = useSelector((state) => state.blogs.blogs);

  return (
    <DefaultLayout>
      <section className="dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white text-gray-800 h-auto py-10 relative md:px-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Blog</h1>

        {/* Blog Teasers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {blogPosts && blogPosts.length > 0 ? (
            blogPosts.map((post, index) => (
              <div key={index} className="bg-white dark:bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                {/* Image */}
                <img
                  src={post.image || "https://via.placeholder.com/300"} // Fallback if no image
                  alt={`Blog Post ${post.title}`}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                {/* Title (Heading) */}
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{post.heading}</h2>
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
                {/* Date & Read More */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  {/* Using createdAt for the date */}
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span> {/* Format the date as needed */}
                  <a href={post.link} className="text-blue-500 hover:text-blue-600 font-semibold">Read More</a>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-300 col-span-4">No blog posts available.</p>
          )}
        </div>
      </section>
    </DefaultLayout>
  );
}
