import { Hero } from "@/components/Hero";
import DefaultLayout from "@/layouts/default";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Achievements } from "@/components/Achievements";
import Services from "@/components/Services";
import { TeaserHosts } from "@/components/TeaserHosts";
import WhyBest from "@/components/WhyBest";
import GetStarted from "@/components/GetStarted";



export default function IndexPage() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <DefaultLayout>
      <Hero />
      <GetStarted />
      <WhyBest />
      <Achievements />
      <Services />
      <TeaserHosts />
    </DefaultLayout>
  );
}
