"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import LoginPage from "@/components/page/loginPage";
import { useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Page() {
  const router = useRouter();
    const isAuthenticated = typeof window !== 'undefined' && localStorage.getItem('auth') === 'true'

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard')
    }else{
      router.push('/')
    }
  }, [isAuthenticated, router])

  return (
    <main className=" w-full items-center justify-center flex bg-muted overflow-x-hidden">
      <div className="absolute top-4 right-4">
              <ThemeToggle />
            </div>
      <div>
      <LoginPage/>
      </div>
    </main>
  );
}
