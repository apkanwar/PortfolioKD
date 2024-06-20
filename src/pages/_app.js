import '@/styles/globals.css'
import Head from 'next/head';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
  }, []);

  return (
    <main>
      <Head>
        <link rel="Shortcut Icon" href="/icon.png" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}