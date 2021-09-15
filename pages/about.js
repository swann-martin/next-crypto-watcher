import Layout from '../components/Layout';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex-col justify-between h-screen">
      <Layout>
        <h2 className="text-center text-4xl p-4">About</h2>
        <div className="flex items-center justify-center">
          <Image src="/developer.svg" alt="dev-pic" width="300" height="300" />
          <p className="w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            accusamus sit voluptatibus quas neque voluptatem nemo esse
            repellendus ratione velit obcaecati, delectus minus ad harum.
            Dignissimos nulla expedita eligendi maxime.
          </p>
        </div>
      </Layout>
    </div>
  );
}
