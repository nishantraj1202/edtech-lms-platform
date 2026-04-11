'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.replace('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-cream">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 border-4 border-brand-gold/30 border-t-[#D98C40] rounded-full animate-spin mb-4"></div>
          <p className="text-brand-brown-light text-sm font-medium animate-pulse">Verifying access...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
