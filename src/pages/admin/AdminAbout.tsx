// src/components/AdminAbout.tsx

import { useState } from "react";
import { Adminsidenav } from "./Adminsidenav"; // Assuming Adminsidenav is in the same directory
import { Button } from "@headlessui/react"; // For the "Edit" button

interface Content {
  title: string;
  description: string;
  images?: string[]; // Optional for "about" section
}

function AdminAbout() {
  // State for tracking the content of each section
  const [aboutContent, setAboutContent] = useState<Content>({
    title: "About Us",
    description: `Hello, and welcome to our platform! As the owner, I wanted to take a moment to personally thank you for being part of our community.`,
    images: [
      "https://images.unsplash.com/photo-1615332859295-aa9dc9f01fbc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvdXAlMjBvZiUyMGdpcmxzfGVufDB8fDB8fHww",
      "https://i.pinimg.com/736x/84/47/33/844733cab99f05a30622584e0801a8a0.jpg",
      "https://thumbs.dreamstime.com/b/group-smiling-girls-cafe-beach-summer-holidays-vacation-concept-36732874.jpg",
    ],
  });

  const [visionContent, setVisionContent] = useState<Content>({
    title: "Vision",
    description: `Our vision is to deliver unique experiences that will create unforgettable memories. We envision a world where every moment is meaningful and special.`,
  });

  const [missionContent, setMissionContent] = useState<Content>({
    title: "Mission",
    description: `Our mission is to provide tailored, high-quality experiences that exceed expectations. Our goal is to continuously innovate and create impactful moments for all.`,
  });

  // Function to handle editing content (directly updates the content)
  const handleEdit = (section: "about" | "vision" | "mission", newDescription: string) => {
    if (section === "about") {
      setAboutContent({ ...aboutContent, description: newDescription });
    } else if (section === "vision") {
      setVisionContent({ ...visionContent, description: newDescription });
    } else if (section === "mission") {
      setMissionContent({ ...missionContent, description: newDescription });
    }
  };

  return (
    <div className="flex">
      <Adminsidenav />
      <div className="ml-64 p-4 w-full">
        {/* About Us Section */}
        <section className="mb-12">
          <div className="flex justify-between mb-6">
            <h3 className="text-2xl font-semibold">{aboutContent.title}</h3>
            <Button onClick={() => handleEdit("about", "New about us description here...")} className="bg-blue-500 text-white">
              Edit
            </Button>
          </div>
          <div className="flex gap-4 mb-6">
            {aboutContent.images?.map((image, index) => (
              <div key={index} className="col-span-1 rounded-xl overflow-hidden">
                <img src={image} alt={`img-${index}`} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300">
            {aboutContent.description}
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <div className="flex justify-between mb-6">
            <h3 className="text-2xl font-semibold">{visionContent.title}</h3>
            <Button onClick={() => handleEdit("vision", "New vision description here...")} className="bg-blue-500 text-white">
              Edit
            </Button>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300">
            {visionContent.description}
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <div className="flex justify-between mb-6">
            <h3 className="text-2xl font-semibold">{missionContent.title}</h3>
            <Button onClick={() => handleEdit("mission", "New mission description here...")} className="bg-blue-500 text-white">
              Edit
            </Button>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 dark:text-gray-300">
            {missionContent.description}
          </p>
        </section>
      </div>
    </div>
  );
}

export default AdminAbout;
