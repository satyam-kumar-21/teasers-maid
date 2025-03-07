import DefaultLayout from "@/layouts/default";
import img1 from "/de1.png"; // Placeholder for service-related image
import img2 from "/de2.png"; // Another image for services
import img3 from "/de3.png"; // Additional image for services
import img4 from "/img_rectangle_5599.png"; // Agent's image (or service provider's image)
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
// import { useState } from "react";

export default function ServiceDetailsPage() {
  // const [submitted, setSubmitted] = useState<{
  //   [k: string]: FormDataEntryValue;
  // } | null>(null);

  // console.log(submitted);

  return (
    <DefaultLayout>
      <section className="dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white h-auto py-10 relative md:px-12 px-4">
        {/* Service Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-xl md:col-span-2 overflow-hidden">
            <img src={img1} alt="service image" className="h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-5">
            <div className="rounded-xl overflow-hidden">
              <img
                src={img2}
                alt="service image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={img3}
                alt="service image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Service Information */}
        <div className="grid mt-6 grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-xl md:col-span-2 px-6 py-6 overflow-hidden bg-white dark:bg-[#1A1B1E] border">
            <h1 className="font-bold text-2xl">
              Premium Teaser Performance for Events
            </h1>
            <h3 className="font-semibold mt-3 text-xl">
              Perfect for parties, corporate events, and more!
            </h3>
            <div
              style={{
                paddingLeft: 20,
                paddingRight: 100,
                borderColor: "gray",
              }}
              className="border shadow-sm mt-5 w-fit rounded-xl py-1.5"
            >
              <h3 className="font-semibold text-xl">$150/hr</h3>
              <p className="text-sm text-gray-400">Flexible booking options</p>
            </div>
            <h3 className="font-semibold mt-8 text-lg">
              A fantastic performance tailored to your event’s needs.
            </h3>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Our premium teaser shows are designed to create excitement and elevate your event experience. From parties to corporate gatherings, we have the perfect teaser performance for any occasion.
            </p>

            <h1 className="font-bold text-2xl mt-10">Service Details</h1>

            <div className="h-64 md:h-96 overflow-hidden w-full mt-5 border rounded-xl">
              {/* Embedded service location map (optional for some services) */}
              <iframe
                src="https://www.google.com/maps/embed?pb=your-location-url-here"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Booking Request Form */}
          {/* <div className="rounded-xl h-fit col-span-1 px-6 py-6 overflow-hidden bg-white dark:bg-[#1A1B1E] border">
            <h1 className="font-bold text-2xl">Request a Booking</h1>

            <Form
              onReset={() => setSubmitted(null)}
              onSubmit={(e) => {
                e.preventDefault();
                let data = Object.fromEntries(new FormData(e.currentTarget));

                console.log(data);
                setSubmitted(data);
              }}
            >
              <Input
                isRequired
                label="Name"
                name="name"
                className="mt-5"
                type="text"
                errorMessage="Name is required"
                size="sm"
              />
              <Input
                isRequired
                label="Email"
                name="email"
                className="mt-3"
                type="email"
                errorMessage="Email is required"
                size="sm"
              />
              <Input
                isRequired
                label="Phone"
                name="phone"
                className="mt-3"
                type="number"
                errorMessage="Phone is required"
                size="sm"
              />
              <DatePicker
                isRequired
                label="Preferred Date"
                name="date"
                className="mt-3"
                errorMessage="Date is required"
                size="sm"
              />
              <Textarea
                className="max-w-xs mt-3"
                label="Additional Requests"
                placeholder="Any specific requests or details"
              />

              <Button
                type="submit"
                className="mt-3 w-full bg-black text-white dark:bg-white dark:text-black"
              >
                Send Request
              </Button>
            </Form>
          </div> */}
        </div>

        {/* Service Highlights */}
        <div className="grid mt-6 grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-xl md:col-span-2 px-6 py-6 overflow-hidden bg-white dark:bg-[#1A1B1E] border">
            <h1 className="font-bold text-2xl">Service Highlights</h1>
            <div className="grid grid-cols-2 ">
              <div className="flex items-center justify-between pr-20">
                <ul className="list-disc list-inside mt-4">
                  <li className="font-semibold text-lg text-gray-600 dark:text-gray-300">
                    Customizable Performance
                  </li>
                </ul>
                <p className="mt-4 font-semibold">Yes</p>
              </div>
              <div className="flex items-center justify-between pr-20">
                <ul className="list-disc list-inside mt-4">
                  <li className="font-semibold text-lg text-gray-600 dark:text-gray-300">
                    Available for Corporate Events
                  </li>
                </ul>
                <p className="mt-4 font-semibold">Yes</p>
              </div>
              <div className="flex items-center justify-between pr-20">
                <ul className="list-disc list-inside mt-4">
                  <li className="font-semibold text-lg text-gray-600 dark:text-gray-300">
                    Duration
                  </li>
                </ul>
                <p className="mt-4 font-semibold">1-2 hours</p>
              </div>
              <div className="flex items-center justify-between pr-20">
                <ul className="list-disc list-inside mt-4">
                  <li className="font-semibold text-lg text-gray-600 dark:text-gray-300">
                    Available Locations
                  </li>
                </ul>
                <p className="mt-4 font-semibold">Nationwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent / Service Provider Information */}
        <div className="grid mt-6 grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-xl md:col-span-2 px-6 py-6 overflow-hidden bg-white dark:bg-[#1A1B1E] border">
            <h1 className="font-bold text-2xl">Service Provider Information</h1>
            <div className="flex mt-5 items-center gap-6">
              <div className="h-28 w-28 rounded-xl overflow-hidden">
                <img src={img4} alt="" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="font-bold text-xl">Jane Doe</h1>
                <div className="mt-1 flex gap-1">
                  <IoStarSharp className="text-red-700 text-sm" />
                  <IoStarSharp className="text-red-700 text-sm" />
                  <IoStarOutline className="text-sm" />
                  <IoStarOutline className="text-sm" />
                  <IoStarOutline className="text-sm" />
                </div>
                <p className="text-sm font-medium text-gray-500">Service Expert</p>
              </div>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-400">
              Jane has over 5 years of experience in creating and performing exclusive teaser shows for events across the country. She will work with you to ensure a memorable performance tailored to your needs.
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
