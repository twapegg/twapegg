"use  client";
import React from "react";
import Link from "next/link";

export default function HeroButton() {

  return (
    <Link
      className="bg-white text-black font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-black"
      href="#about"
    >
      Get Started
    </Link>
  );
}
