import { getUser } from "@workos-inc/authkit-nextjs";
import { SignInButton } from "@/components/sign-in-button";

export default async function Home() {
  const user = await getUser();

  return (
    <div className="p-4 flex flex-col justify-center items-center h-screen gap-10">
      <div className="text-3xl font-bold">
        {user?.user ? (
          <div>
            Welcome back {`${user?.user?.firstName} ${user?.user?.lastName}`}
          </div>
        ) : (
          <div>You should log in!</div>
        )}
      </div>
      <SignInButton />
    </div>
  );
}