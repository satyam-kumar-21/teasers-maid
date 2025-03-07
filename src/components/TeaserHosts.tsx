import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Card, CardBody, CardHeader, Image } from "@heroui/react";

const list = [
  {
    img: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D", // Update with real teaser images
    name: "Host 1 - Dinner Teaser",
    rating: 4.8,
  },
  {
    img: "https://i.pinimg.com/736x/09/f8/07/09f80744c589a5017b11b8a494be89c4.jpg", // Update with real teaser images
    name: "Host 2 - Coffee Teaser",
    rating: 4.5,
  },
  {
    img: "https://photosnow.org/wp-content/uploads/2024/04/indian-girl-photo_15.jpg", // Update with real teaser images
    name: "Host 3 - Party Teaser",
    rating: 4.9,
  },
  {
    img: "https://qph.cf2.quoracdn.net/main-qimg-f4b67fa2a8154aff42b633195b028e1a-lq", // Update with real teaser images
    name: "Host 4 - Dinner & Party Teaser",
    rating: 4.7,
  },
  {
    img: "https://st3.depositphotos.com/4761309/37054/i/450/depositphotos_370548438-stock-photo-beautiful-indian-traditional-girl-posing.jpg", // Update with real teaser images
    name: "Host 5 - Coffee & Dessert Teaser",
    rating: 5.0,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCOrvqWkWCuBXpMO6Rkl8oIViDlTIwhqvfzwHV9HZNZhk17Jj9UIIjuv2T54yBI-Li9wQ&usqp=CAU", // Update with real teaser images
    name: "Host 6 - Exclusive Party Teaser",
    rating: 4.6,
  },
];

export const TeaserHosts: React.FC = () => {
  return (
    <section className="h-auto mt-16 md:px-16 px-4 w-full">
      <h1 className="font-semibold text-3xl dark:text-white">
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
        {list.map((item, index) => (
          <SwiperSlide key={index} className="py-10">
            <Card className="py-4 w-full shadow-none border border-[#FFCEB2] dark:border-[#878786]">
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Teaser Host Image"
                  className="object-cover rounded-xl"
                  src={item.img}
                />
              </CardBody>
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">
                  {item.rating}
                  <span className="text-default-500">/5</span>
                </p>
                <h4 className="font-bold text-large">{item.name}</h4>
              </CardHeader>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
