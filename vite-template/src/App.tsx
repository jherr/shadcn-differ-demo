import { SignInButton } from "@/components/sign-in-button";
import { useAuth } from "@workos-inc/authkit-react";

function App() {
  const { user } = useAuth();

  return (
    <div className="p-8">
      <main className="flex flex-col gap-8 justify-center items-center h-screen">
        <h1 className="font-bold text-4xl">WorkOS AuthKit Vite Example</h1>
        {user && (
          <h1 className="text-4xl font-bold">Hey there {user?.firstName}!</h1>
        )}
        <SignInButton />
      </main>
    </div>
  );
}

export default App;
