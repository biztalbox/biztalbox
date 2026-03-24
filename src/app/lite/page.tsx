// "use client"
import HeaderEleven from "@/layouts/headers/header-eleven";
import Wrapper from "@/layouts/wrapper";
import Hero from "./_ashish/Hero";
import FooterFour from "@/layouts/footers/footer-four";


const page = () => {
  return (
    <Wrapper>
      <HeaderEleven />

      <Hero />
       <FooterFour/>
    </Wrapper>
  );
};
export default page;
