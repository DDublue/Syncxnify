import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="p-16">
            <p className="text-xl text-center">
              Create a Spotify Playlist from a list of songs using MyAnimeList!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* SIGNED OUT */}
            <div className="col-span-2">
              <Link
                href="/login"
                className={cn(buttonVariants(), "w-full")}
              >
                Get Started
              </Link>
            </div>

            {/* SIGNED IN */}
          </div>
        </div>
      </div>
    </>
  )
};
