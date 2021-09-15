import Layout from '../components/Layout';
import Link from 'next/link';

export default function Currency({ dataCryptoById }) {
  console.log(dataCryptoById);
  const {
    logo_url,
    name,
    id,
    description,
    github_url,
    website_url,
    whitepaper_url,
  } = dataCryptoById;
  return (
    <Layout page={'Page ' + dataCryptoById.name} className="bg-indigo-500">
      <div className="container-xl mx-auto my-2 text-2xl flex items-center justify-center">
        <img src={logo_url} alt={`logo${id}`} className="w-20 h-20 my-2 mx-2" />
        <h2 className="w-20 font-bold">{name}</h2>
      </div>
      <p className="p-4 bg-indigo-100 shadow-2 mx-auto text-justify rounded w-2/3">
        {description}
      </p>
      <ul className="flex items-center justify-around my-3 w-2/3 mx-auto text-indigo-500">
        <li className="mr-3 p-3 rounded hover:shadow-md border-2 bg-indigo-100 cursor-pointer">
          {whitepaper_url !== '' ? (
            <Link href={whitepaper_url}>See the whitepaper</Link>
          ) : (
            ''
          )}
        </li>
        <li className="mr-3 p-3 rounded hover:shadow-md border-2 bg-indigo-100 cursor-pointer">
          {github_url !== '' ? (
            <Link href={github_url}>Discover its github project</Link>
          ) : (
            ''
          )}
        </li>
        <li className="mr-3 p-3 rounded hover:shadow-md border-2 bg-indigo-100 cursor-pointer">
          {website_url !== '' ? (
            <Link href={website_url}>Visit its website</Link>
          ) : (
            ''
          )}
        </li>
      </ul>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  console.log(query.id);
  try {
    const res = await fetch(
      `https://api.nomics.com/v1/currencies?key=160128cdc8551bbb99cda19a8841cc5b4fddacda&ids=${query.id}&attributes=id,name,logo_url,description,website_url,github_url,whitepaper_url`,
    );
    const data = await res.json();
    console.log(data);
    return {
      props: { dataCryptoById: data[0] },
    };
  } catch (err) {
    console.error(err);
  }
}
