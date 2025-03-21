function VisionMission() {
  return (
    <div className="py-16 px-4 text-pink-600 text-center bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Mission Section */}
        <section>
          <h2 className="text-4xl sm:text-5xl font-bold text-pink-600 dark:text-yellow-400 mb-6">
            Our Mission
          </h2>
          <div className="relative mb-8">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZyZWV8ZW58MHwwfDB8fHx8fDE2MjYzNzQwMTk&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Mission Image"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl sm:text-2xl md:text-3xl">
              Empowering Transformation through Expertise
            </p>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300">
            At the heart of our mission is a deep commitment to helping individuals and organizations overcome their toughest challenges.
            We craft personalized tearsheet sessions that provide actionable insights and strategies needed to drive success. 
            We aim to make a tangible impact on every client we serve, guiding them toward their goals with clarity, precision, and purpose.
          </p>
        </section>

         {/* Vision Section */}
         <section>
          <h2 className="text-4xl sm:text-5xl font-bold text-pink-600 dark:text-yellow-400 mb-6">
            Our Vision
          </h2>
          <div className="relative mb-8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49LHi6i7yQphZpHVo0k_cRJfO6fEBRUJ2OA&s"
              alt="Vision Image"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl sm:text-2xl md:text-3xl">
              Leading with Purpose and Insight
            </p>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300">
            Our vision is to become a beacon of insight and guidance for individuals and organizations seeking meaningful progress. 
            We strive to be recognized for our ability to create lasting change, empowering others through knowledge, strategy, and tailored action plans.
            By continuously innovating and evolving, we aim to create a future where anyone can unlock their full potential, regardless of their starting point.
          </p>
        </section>

      </div>
    </div>
  );
}

export default VisionMission;
