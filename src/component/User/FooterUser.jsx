import Link from 'next/link';
import React from 'react';

export function FooterUser() {
  return (
    <section className="relative overflow-hidden bg-gray-800 shadow-lg py-8">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full sm:w-auto px-8 text-center sm:text-left">      
            <div className="inline-flex items-center">
              <Link href={"/"}>
                <span className="ml-4 text-lg font-bold text-white">Legal 257</span>
              </Link>
            </div>
          </div>
          <div className="w-full sm:w-auto p-8 text-center">
            <p className="text-white">
              © 2024 Legal257. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
