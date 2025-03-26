"use client";

import { useUserAuth } from "@/app/week-9/_utils/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ShoppingListPage() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-9"); // Redirect to login page
    }
  }, [user, router]);

  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Shopping List</h1>
      <p>Welcome, {user.displayName}!</p>
      <button onClick={firebaseSignOut} className="bg-red-500 text-white px-4 py-2 mt-4">
        Logout
      </button>
    </div>
  );
}
