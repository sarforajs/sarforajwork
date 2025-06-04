import React from 'react';

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Sarforaj</h1>
        <ul className="flex gap-6 text-gray-700 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
