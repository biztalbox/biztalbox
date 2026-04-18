import Header from "./_ashish/Header";
import Wrapper from "@/layouts/wrapper";
import Hero from "./_ashish/Hero";


const page = () => {
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
export default page;
