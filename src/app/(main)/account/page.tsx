import { Button, buttonVariants } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function AccountPage() {
  const session = await auth();

  if (!session || !session?.user) {
    return (
      <>
        <div>You are not logged in.</div>
      </>
    );
  };

  const user = session.user;

  const userInfo = {
    name: user.name,
    email: user.email,
  };

  return (
    <>
      <div className="max-w-5xl mx-auto px-4">
          <h2
            className="font-bold text-3xl"
          >
            My Account
          </h2>
        <div className="flex flex-col items-center">
          <div className="bg-background p-2 rounded-md">
            {JSON.stringify(userInfo, null, 2)}
          </div>
        </div>
      </div>
    </>
  )
};
