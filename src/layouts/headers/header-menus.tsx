import React, { CSSProperties } from "react";
import Link from "next/link";

const imgStyle:CSSProperties = { width: "100%", height: "auto", objectFit: "cover" };
const HeaderMenus = () => {
  return (
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
        <li className="has-dropdown">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="has-dropdown">
          <Link href="/contact">contact</Link>
        </li>
        
    </ul>
  );
};

export default HeaderMenus;
