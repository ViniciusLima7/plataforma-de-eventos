import React from "react";
import { Logo } from "../Logo";

export default function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center bg-black">
      <Logo />
    </header>
  );
}
