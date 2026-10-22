"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import HeaderEleven from "@/layouts/headers/header-eleven";

export default function VideoPageHeader() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const transparent = !mounted || resolvedTheme === "dark";

  return <HeaderEleven cls="tp-inner-header-border" transparent={transparent} />;
}
