'use client';

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full flex-none bg-background justify-items-center">
        <div className="max-w-8xl mx-auto">
          <div className="py-4 border-b px-8">
            <div className="relative flex items-center">
              {/* Logo */}
              <div className="">
                Malotify
              </div>

              {/* Header Content */}
              <div className="hidden md:flex md:relative items-center ml-auto">
                Sign In
              </div>
              <div className="md:hidden flex relative items-center ml-auto">
                (Dropdown Button)
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
};
