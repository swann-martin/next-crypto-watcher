import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import bgImg from '../public/main.jpg';

export default function Home({ cryptoData }) {
  return (
    <div>
      <Layout page="Crypto Watcher - Home">
        <div>
          <h2 className="text-2xl text-center my-2 bg">
            Bienvenue sur le site du coin
          </h2>
          <Image
            src="/main.jpg"
            width="2000"
            height="300px"
            alt="picture"
            className="rounded object-cover "
          />
        </div>
        <ul className="flex justify-around my-4">
          {cryptoData.map((crypto) => (
            <li
              key={crypto.id}
              className="bg-indigo-200 relative hover:shadow-md p-8 border rounded md:w-auto flex-1 mx-8"
            >
              <Link href={`/${crypto.id}?id=${crypto.id}`}>
                <a className="rounded">
                  <div className="text-center">
                    <img
                      src={crypto.logo_url}
                      alt={crypto.name}
                      className="w-20 h-20 mx-auto my-3"
                    />
                  </div>
                  <h2 className="text-2xl my-1">{crypto.id}</h2>
                  <h2 className="text-1xl">{crypto.name}</h2>
                  <h3 className="font-bold text 2xl my-2  text-blue-500">
                    {parseFloat(crypto.price).toFixed(2)} Euros
                  </h3>
                  <ul>
                    <li>
                      <span className="font-bold">1 jour&nbsp;:&nbsp;</span>
                      {
                        <span
                          className={
                            crypto['1d'].price_change_pct > 0
                              ? 'text-green-700 font-bold'
                              : 'text-red-700 font-bold'
                          }
                        >
                          {parseFloat(
                            crypto['1d'].price_change_pct * 100,
                          ).toFixed(2) + '%'}
                        </span>
                      }
                    </li>
                    <li>
                      <span className="font-bold">30 jours&nbsp;:&nbsp;</span>
                      {
                        <span
                          className={
                            crypto['30d'].price_change_pct > 0
                              ? 'text-green-700 font-bold'
                              : 'text-red-700 font-bold'
                          }
                        >
                          {parseFloat(
                            crypto['30d'].price_change_pct * 100,
                          ).toFixed(2) + '%'}
                        </span>
                      }
                    </li>
                    <li className="font-bold">
                      <span>1 an&nbsp;:&nbsp;</span>
                      {
                        <span
                          className={
                            crypto['365d'].price_change_pct > 0
                              ? 'text-green-700 font-bold'
                              : 'text-red-700 font-bold'
                          }
                        >
                          {parseFloat(
                            crypto['365d'].price_change_pct * 100,
                          ).toFixed(2) + '%'}
                        </span>
                      }
                    </li>
                  </ul>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  );
}

export async function getStaticProps(context) {
  try {
    const cryptoData = await fetch(
      'https://api.nomics.com/v1/currencies/ticker?key=160128cdc8551bbb99cda19a8841cc5b4fddacda&ids=BTC,ETH,ADA&interval=1d,30d,365d&convert=EUR',
    ).then((res) => res.json());
    return {
      props: { cryptoData },
    };
  } catch (err) {
    console.error(err);
  }
}
