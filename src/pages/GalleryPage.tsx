import DefaultLayout from "@/layouts/default";
import { useSelector } from "react-redux";

export default function GalleryPage() {
    // Access the gallery data from Redux store
    const galleries = useSelector((state: any) => state.gallery.galleries);

    return (
        <DefaultLayout>
            <section className="dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white h-auto py-10 relative md:px-12 px-4">
                <h1 className="text-3xl font-bold text-center mb-6">Gallery Page</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {galleries.map((gallery, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-gray-200 p-4 rounded-lg shadow-lg transition-all transform group-hover:scale-105 group-hover:shadow-xl">
                                <img
                                    src={gallery.image}  // Dynamic image from Redux store
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-64 object-cover rounded-md transition-all transform group-hover:rotate-3 group-hover:scale-110"
                                />
                                <p className="text-center mt-4 text-sm text-gray-800 dark:text-gray-200">{gallery.description}</p> {/* Dynamic description from Redux store */}
                            </div>
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-md"></div>
                        </div>
                    ))}
                </div>
            </section>
        </DefaultLayout>
    );
}
