"use client";

import { Component, type ReactNode, useEffect, useState } from "react";
import { isWebGLAvailable } from "@/utils/webgl";

type BoundaryProps = { children: ReactNode; fallback: ReactNode };

/** Swallows errors thrown by the 3D subtree so they never take the page down. */
class CanvasErrorBoundary extends Component<BoundaryProps, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    console.warn("[WebGLGuard] 3D canvas disabled:", error);
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

/**
 * Renders its children (a react-three-fiber <Canvas>) only when WebGL works,
 * and falls back to `fallback` (nothing by default) if WebGL is missing or the
 * canvas throws. Decorative 3D must never crash the page (e.g. for Googlebot).
 */
export default function WebGLGuard({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(isWebGLAvailable());
  }, []);

  if (!supported) return <>{fallback}</>;
  return <CanvasErrorBoundary fallback={fallback}>{children}</CanvasErrorBoundary>;
}
