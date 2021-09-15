import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from './Navigation';

export default function Layout({ children, page }) {
  return (
    <div className="bg-blue-50  text-center min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header className="container-lg ">
        <Navigation />
      </header>
      <main className="pt-4 mx-20"> {children}</main>
      <footer className="p-10">
        <Image
          src="/main.jpg"
          width="3000"
          height="25"
          className="rounder object-cover"
        ></Image>

        <ul className="pt-10 pb-4 flex justify-around">
          <Link href="/about">
            <li className="mr-3 p-3 rounded hover:shadow-md border-2 cursor-pointer">
              A propos
            </li>
          </Link>
          <a
            href="https://swannwho.com/"
            target="_blank"
            rel="noreferer noopener"
          >
            <li className="mr-3 p-3 rounded hover:shadow-md border-2 cursor-pointer">
              Swann Martin - 2021
            </li>
          </a>
          <a
            href="https://github.com/swann-martin"
            target="_blank"
            rel="noreferer noopener"
          >
            <li className="mr-3 p-3 rounded hover:shadow-md border-2 cursor-pointer">
              Qui sommes nous
            </li>
          </a>
        </ul>
        <p>This website was created by Swann Martin in 2021</p>
        <a
          href="https://github.com/swann-martin"
          target="_blank"
          rel="noreferer noopener"
        >
          github
        </a>
      </footer>

      <style jsx>
        {`
          li {
            color: grey;
          }
        `}
      </style>
    </div>
  );
}
