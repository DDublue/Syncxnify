import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <div className="flex flex-col min-h-svh">
        <div className="flex items-center justify-center flex-grow">
          <Button className="">
            Login into Spotify
          </Button>
        </div>
      </div>
    </>
  )
}
