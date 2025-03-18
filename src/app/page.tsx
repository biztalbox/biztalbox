import { Metadata } from "next";
import HomeFourMain from "@/pages/homes/home-4";

export const metadata: Metadata = {
  title: "Biztal Box",
  description: "Biztal Box is a platform for creating and managing your business",
};

export default function Home() {
  return (
    <>
      {/* <HomePageFour /> */}
      <HomeFourMain/>
    </>
  );
}
