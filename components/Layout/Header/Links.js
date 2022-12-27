import React from "react";
import Link from "next/link";
const navItems = [
  { name: "Book A Repair", link: "/book-repair" },
  { name: "Buy Accessories", link: "/accessories" },
  { name: "Screen Protection", link: "/screen-protection" },
  { name: "About Us", link: "/about-us" },
  { name: "Blog", link: "/blogs" },
];

export default function Links() {
  return (
    <div className="inline-block mx-8">
      {navItems.map(({ name, link }) => (
        <div key={link} className="mx-3 inline-block">
          <Link href={link}>{name}</Link>
        </div>
      ))}
    </div>
  );
}
