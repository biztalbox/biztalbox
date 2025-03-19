import React from "react";
// import Image from "next/image";
import Link from "next/link";
// import menu_data from "@/data/menu-data";
// import shop_banner from "@/assets/img/menu/shop-menu/banner-1.jpg";
// import port_img from "@/assets/img/menu/portfolio-menu/portfolio.png";

export default function MobileMenus() {
  const [navTitle, setNavTitle] = React.useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <>
      <nav className="tp-main-menu-content">
        <ul>
          <li className="has-dropdown">
            <Link href="/">Home</Link>
          </li>
          <li className="has-dropdown">
            <Link href="/about">About</Link>
          </li>
          <li className="has-dropdown">
            <Link href="/services">Services</Link>
          </li>
          {/* <li className="has-dropdown">
          <Link href="/blog-classic">Blog</Link>
        </li> */}
          <li className="has-dropdown">
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
