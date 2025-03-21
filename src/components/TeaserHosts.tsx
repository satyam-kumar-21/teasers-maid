import { useSelector } from 'react-redux'; // Importing useSelector from Redux
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Card, CardBody, CardHeader, Image } from "@heroui/react";

// Define types for the Top Teasers data
interface TeaserHost {
  id: string; // assuming there's a unique id for each teaser host
  image: string; 
  description: string;
}

// Define the Redux state structure
interface RootState {
  topTeaser: {
    topTeasers: TeaserHost[];
  };
}

// Updated component with state from Redux
export const TeaserHosts: React.FC = () => {
  // Fetch top teasers from the Redux store
  const topTeasers = useSelector((state: RootState) => state.topTeaser.topTeasers);

  return (
    <section className="h-auto mt-16 md:px-16 px-4 w-full">
      <h1 className="font-semibold text-pink-600 text-3xl dark:text-white">
        Our Top Teaser Hosts
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
      >
        {topTeasers && topTeasers.length > 0 ? (
          topTeasers.map((item: TeaserHost) => (  // Ensure item is typed as TeaserHost
            <SwiperSlide key={item.id} className="py-10">
              <Card className="py-4 w-full shadow-none border border-[#FFCEB2] dark:border-[#878786]">
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Teaser Host Image"
                    className="object-cover rounded-xl"
                    src={item.image || "https://via.placeholder.com/300"} // Fallback if no image
                  />
                </CardBody>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{item.description}</p>
                </CardHeader>
              </Card>
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300 col-span-4">No teaser hosts available.</p>
        )}
      </Swiper>
    </section>
  );
};
