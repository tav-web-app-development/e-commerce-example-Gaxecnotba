import { ReactNode } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav>
        <span>about/</span>
        <span>Contact</span>
        {children}
        <span>Footer</span>
      </nav>
    </>
  );
}
