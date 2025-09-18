"use client";
import { useEffect, useState } from "react";

export default function ClientWrapper({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <>{children}</> : null;
}
