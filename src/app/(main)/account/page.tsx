import { auth } from "@/lib/auth";

export default async function AccountPage() {
  const session = await auth();

  if (!session || !session?.user) {
    return (
      <>
        <div>You are not logged in.</div>
      </>
    );
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
            {JSON.stringify(session, null, 2)}
          </div>
        </div>
      </div>
    </>
  )
};
