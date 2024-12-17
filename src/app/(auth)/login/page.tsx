import { Button } from "@/components/ui/button";
import { auth, signIn } from "@/lib/auth";
import { FaSpotify } from "react-icons/fa";

export default async function LoginPage() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <div className="flex flex-col min-h-svh">
        <div className="flex items-center justify-center flex-grow">
          <div className="flex items-center justify-center h-24 w-56 shadow-2xl rounded-2xl">
            <form
              action={async () => {
                "use server"
                await signIn("spotify", {redirectTo: "/"})
              }}
            >
              <Button
                type="submit"
                variant={"spotify"}
                className="text-lg font-sans"
              >
                <FaSpotify />
                Login with Spotify
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
