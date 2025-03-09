import DefaultLayout from "@/layouts/default";

export default function GalleryPage() {
    // Array of image URLs
    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrPISliwTDqmWesPPBojmpEFxHwTiy93SokQ&s",
        "https://media.istockphoto.com/id/200331384-001/photo/boy-and-girl-lying-on-beach-smiling-close-up-portrait.jpg?s=612x612&w=0&k=20&c=wfvRkZg00FUZ2FG267X2HCdJhyjKMLF5isRycTFf5z4=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5FeBimDt-8m_n9AwaMOdJqlBByAG58I2C7w&s",
        "https://media.istockphoto.com/id/505067918/photo/young-couple-being-in-love.jpg?s=612x612&w=0&k=20&c=mqxt3IS0o25lNIa9gz6G586Zl-XymNYUT1v1CQ5fYK4=",
    ];

    return (
        <DefaultLayout>
            <section className="dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white h-auto py-10 relative md:px-12 px-4">
                <h1 className="text-3xl font-bold text-center mb-6">Gallery Page</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    {images.map((image, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-gray-200 p-4 rounded-lg shadow-lg transition-all transform group-hover:scale-105 group-hover:shadow-xl">
                                <img
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-64 object-cover rounded-md transition-all transform group-hover:rotate-3 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-md"></div>
                        </div>
                    ))}
                </div>
            </section>
        </DefaultLayout>
    );
}
