import DefaultLayout from "@/layouts/default";

export default function BlogPage() {
  // Array of dummy blog post data with images
  const blogPosts = [
    {
      title: "The Future of Modeling in 2025",
      image: "https://www.campustimespune.com/wp-content/uploads/2017/01/10-Types-of-Girls-Find-in-College-India-620x330.jpg",
      content: "Modeling is evolving rapidly in the digital age. Discover how virtual models, augmented reality, and AI are changing the industry.",
      date: "March 1, 2025",
      link: "#",
    },
    {
      title: "How to Book the Right Model for Your Campaign",
      image: "https://www.campustimespune.com/wp-content/uploads/2017/01/10-Types-of-Girls-Find-in-College-India-620x330.jpg",
      content: "Choosing the right model can make or break your marketing campaign. Here’s a guide to picking the best model based on your goals and brand.",
      date: "February 25, 2025",
      link: "#",
    },
    {
      title: "Top 5 Modeling Trends to Watch in 2025",
      image: "https://www.campustimespune.com/wp-content/uploads/2017/01/10-Types-of-Girls-Find-in-College-India-620x330.jpg",
      content: "Stay ahead of the curve with these 5 modeling trends that will dominate the industry in 2025, from inclusive representation to digital fashion.",
      date: "February 18, 2025",
      link: "#",
    },
    {
      title: "The Impact of Social Media on Modern Modeling",
      image: "https://www.campustimespune.com/wp-content/uploads/2017/01/10-Types-of-Girls-Find-in-College-India-620x330.jpg",
      content: "Social media platforms like Instagram have revolutionized the modeling industry. This post explores how influencers are reshaping the future of fashion.",
      date: "February 12, 2025",
      link: "#",
    },
  ];

  return (
    <DefaultLayout>
      <section className="dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white text-gray-800 h-auto py-10 relative md:px-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Blog</h1>

        {/* Blog Teasers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white dark:bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all">
              {/* Image */}
              <img
                src={post.image}
                alt={`Blog Post ${post.title}`}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              {/* Title */}
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">{post.title}</h2>
              {/* Content */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.content}</p>
              {/* Date & Read More */}
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{post.date}</span>
                <a href={post.link} className="text-blue-500 hover:text-blue-600 font-semibold">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
