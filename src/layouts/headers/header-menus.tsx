"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HomeLink from "@/components/HomeLink";

const HeaderMenus = () => {
  const pathname = usePathname();

  return (
    <ul>
      {pathname !== "/" && (
        <li className="has-dropdown">
          <HomeLink>Home</HomeLink>
        </li>
      )}
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
