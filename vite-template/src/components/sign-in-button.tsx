import { Button } from "@/components/ui/button";
import { useAuth } from "@workos-inc/authkit-react";

export function SignInButton() {
  const { user, isLoading, signIn, signOut } = useAuth();

  return (
    <div>
      {user ? (
        <Button onClick={signOut}>Sign Out</Button>
      ) : (
        <Button
          onClick={() => {
            signIn();
          }}
          disabled={isLoading}
        >
          Sign In
        </Button>
      )}
    </div>
  );
}
