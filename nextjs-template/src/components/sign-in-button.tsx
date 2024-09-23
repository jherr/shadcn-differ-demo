import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";
import { Button } from "@/components/ui/button";

export async function SignInButton() {
  const { user } = await getUser();
  const authorizationUrl = await getSignInUrl();

  return (
    <div>
      {user ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit">Sign Out</Button>
        </form>
      ) : (
        <Button asChild>
          <a href={authorizationUrl}>Sign In</a>
        </Button>
      )}
    </div>
  );
}