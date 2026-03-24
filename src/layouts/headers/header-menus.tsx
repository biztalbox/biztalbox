"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderMenus = () => {
  const pathname = usePathname();

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
        <Link
          href="/career"
        >
          Careers
        </Link>
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
