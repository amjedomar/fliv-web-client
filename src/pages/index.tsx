import type { NextPage } from "next";
import FeaturesBlocks from "../components/FeaturesBlocks";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
// @ts-ignore
import FeaturesSplit from "../components/FeaturesSplit";

const Home: NextPage = () => {
  return <FeaturesSplit />;
  // return (
  //   <div className="flex flex-col min-h-screen overflow-hidden">
  //     <Header />

  //     <main className="grow">
  //       <HeroHome />
  //       <FeaturesBlocks />
  //       <FeaturesSplit />
  //     </main>
  //   </div>
  // );
};

export default Home;
