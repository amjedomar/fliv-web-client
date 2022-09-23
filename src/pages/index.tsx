import type { NextPage } from "next";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
// @ts-ignore
import FeaturesSplit from "../components/FeaturesSplit";
import AdvancedFeatures from "../components/AdvancedFeatures";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import { useRef } from "react";
import Head from "next/head";

const Home: NextPage = () => {
  const demoRef = useRef<HTMLDivElement>(null);

  const scrollToDemo = () => {
    window.scrollTo({
      top: demoRef.current?.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Fliv </title>
      </Head>
      <Header />

      <main className="grow">
        <HeroHome />
        <FeaturesBlocks />
        <AdvancedFeatures />
        <Cta />
      </main>

      <div ref={demoRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
