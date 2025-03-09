

function VisionMission() {
  return (
    <div className="py-16 px-4 text-center bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
       

        {/* Mission Section */}
        <section>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-yellow-400 mb-6">
            Our Mission
          </h2>
          <div className="relative mb-8">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZyZWV8ZW58MHwwfDB8fHx8fDE2MjYzNzQwMTk&ixlib=rb-1.2.1&q=80&w=1080"
              alt="Mission Image"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl sm:text-2xl md:text-3xl">
              Delivering Excellence and Empowering Change
            </p>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300">
            Our mission is to deliver exceptional experiences and services that exceed customer expectations.
            We aim to create an environment where creativity thrives, fostering a culture of innovation, collaboration,
            and continuous improvement.
          </p>
        </section>


         {/* Vision Section */}
         <section className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-yellow-400 mb-6">
            Our Vision
          </h2>
          <div className="relative mb-8">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49LHi6i7yQphZpHVo0k_cRJfO6fEBRUJ2OA&s"
              alt="Vision Image"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl sm:text-2xl md:text-3xl">
              Inspiring a Future of Innovation and Excellence
            </p>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300">
            Our vision is to be a leading force in the industry, creating a lasting impact through innovative solutions.
            We are committed to empowering communities, fostering creativity, and providing value-driven experiences.
          </p>
        </section>
      </div>
    </div>
  );
}

export default VisionMission;
