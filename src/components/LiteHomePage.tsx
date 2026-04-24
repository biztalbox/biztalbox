
import "@/styles/tailwind-tw.css";
import Header from "@/app/_lite/_ashish/Header";
import Wrapper from "@/layouts/wrapper";
import Hero from "@/app/_lite/_ashish/Hero";


const LiteHomePage = () => {
  return (
    <Wrapper>
      {/* <main className="bg-neutral-100 text-black"> */}

      <Header />
      <div id="litePage">
        <Hero />
        {/* <MobileSceme /> */}
        {/* </main> */}
        {/* <FooterFour /> */}
      </div>
    </Wrapper>
  );
};
export default LiteHomePage;
