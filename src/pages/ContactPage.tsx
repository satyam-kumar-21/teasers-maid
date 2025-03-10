import DefaultLayout from "@/layouts/default";
import { Button, Divider, Form, Input, Textarea } from "@heroui/react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState<{
    [k: string]: FormDataEntryValue;
  } | null>(null);

  console.log(submitted);
  return (
    <DefaultLayout>
      <section className="dark:bg-[#0a0b0d] bg-[#FFF7F0] dark:text-white h-auto py-10 relative md:px-12 px-4">
        <h1 className="font-semibold text-4xl text-center dark:text-white">
          Get in touch
        </h1>
        <p className="text-center mt-3">
          On the other hand, we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment, so blinded by desire, that they cannot foresee the pain
          and trouble.
        </p>
        <div className="rounded-xl py-5 px-10 border mt-10 grid grid-cols-2 gap-4 bg-white">
          <div className="">
            <h1 className="font-bold text-2xl">Send a message</h1>

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

              <Textarea
                isRequired
                className="mt-3"
                label="Message"
                name="message"
                errorMessage="Message is required"
              />

              <Button
                type="submit"
                className="mt-3 w-full bg-black text-white dark:bg-white dark:text-black"
              >
                Send Request
              </Button>
            </Form>
          </div>

          <div className="flex gap-8">
            <Divider orientation="vertical" className="mr-5" />

            <div className="">
              <h1 className="font-bold text-2xl">Contact Information</h1>
              <div className="mt-5">
                <p>
                  <span className="font-semibold">Address:</span> 1234 Street
                  Name, City Name, Country Name
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> +123 456 7890
                </p>
                <p>
                  <span className="font-semibold">Email:</span> temp@gmail.com
                </p>

                <div className="mt-5">
                  <h1 className="font-bold text-2xl">Social Media</h1>
                  <div className="mt-5">
                    <a href="#" className="text-blue-500">
                      Facebook
                    </a>
                    <br />
                    <a href="#" className="text-blue-500">
                      Twitter
                    </a>
                    <br />
                    <a href="#" className="text-blue-500">
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
