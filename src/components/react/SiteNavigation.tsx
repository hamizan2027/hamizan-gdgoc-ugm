import { useState } from "react";
import ResponsiveLogo from "./ResponsiveLogo";

export default function SiteNavigation({ currentPath = "" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/home", label: "Home" },
    { href: "/overview", label: "Overview" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#DADCE0] bg-white/95 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12"
      >
        <ResponsiveLogo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive =
              currentPath === link.href || currentPath === `${link.href}/`;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm transition-colors rounded-full ${
                  isActive
                    ? "bg-blue-50 text-[#1967D2] font-semibold"
                    : "text-[#5F6368] hover:text-[#1967D2]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/gdgoc.ugm/"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1967D2] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#1558B0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1967D2]"
          >
            Find your track
          </a>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-2 text-[#5F6368] hover:text-[#1967D2] focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-[#DADCE0] bg-white md:hidden">
          <div className="flex flex-col space-y-2 px-5 py-4 sm:px-8">
            {links.map((link) => {
              const isActive =
                currentPath === link.href || currentPath === `${link.href}/`;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 text-base rounded-full ${
                    isActive
                      ? "bg-blue-50 text-[#1967D2] font-semibold"
                      : "text-[#5F6368] hover:bg-gray-50 hover:text-[#1967D2]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
