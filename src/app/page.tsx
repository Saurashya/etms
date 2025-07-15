'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Lazy-loaded components
const NavBar = dynamic(() => import('@/features/shared/components/NavBar'), { ssr: false });
const Home = dynamic(() => import('@/features/user/pages/Home'), { ssr: false });

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {loading ? (
        // Full Page Loader with Logo
        <div className="absolute inset-0 bg-white flex items-center justify-center z-50">
          <div className="animate-ping">
            <Image
              src="/logo.png" // Ensure this exists in /public
              alt="Company Logo"
              width={200}
              height={200}
              priority
            />
          </div>
        </div>
      ) : (
        <>
          <NavBar />
          <Home />
        </>
      )}
    </div>
  );
};

export default Page;
