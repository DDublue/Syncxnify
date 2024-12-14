'use client';

import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full flex-none border-b bg-background justify-items-center">
        <div className="max-w-7xl mx-auto">
          <div className="py-4 px-8">
            <div className="relative flex items-center">
              {/* Logo */}
              <Link href="/" className="font-bold">
                Malotify
              </Link>

              {/* Header Content */}
              <Link href="/login" className="hidden md:flex md:relative items-center ml-auto">
                <span>
                  Sign In
                </span>
              </Link>
              <Link href="/login" className="md:hidden flex relative items-center ml-auto">
                <span>
                  (Dropdown Button)
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  )
};
