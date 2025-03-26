"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function LoginPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {user ? (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut} className="bg-red-500 text-white px-4 py-2 mt-4">
            Logout
          </button>
          <a href="/week-9/shopping-list" className="text-blue-500 underline mt-4">
            Go to Shopping List
          </a>
        </>
      ) : (
        <>
          <h1>Please Sign In</h1>
          <button onClick={gitHubSignIn} className="bg-blue-500 text-white px-4 py-2 mt-4">
            Sign in with GitHub
          </button>
        </>
      )}
    </div>
  );
}
