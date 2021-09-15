import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-200 mb-3 text-indigo-400">
      <h1 className="text-4xl mx-2 flex w-50 items-center">
        <Image
          src="/crypto.png"
          width="46"
          height="46"
          alt="picture-logo"
          className="mx-2"
        />
        Crypto Watcher
      </h1>
      <div className="inline-grid grid-cols-2 gap-x-10 p-4">
        <Link href="/">
          <button className="mr-3 p-3 rounded hover:shadow-md border-2 ">
            Accueil
          </button>
        </Link>
        <Link href="/about">
          <button className=" p-3 rounded hover:shadow-md border-2 ">
            About
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
