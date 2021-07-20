import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js!!! 👋</h1>
    <p>This is a lot of fun</p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <ToggleButton />
  </Layout>
);

function ToggleButton() {

  const [isOn, setOn] = useState(false);
  return (
    <button onClick={() => {
      setOn(!isOn);
    }}>
      {isOn ? 'Turn off' : 'Turn on'}
    </button>
  );
}

export default IndexPage;
