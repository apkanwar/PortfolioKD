import '@/styles/globals.css'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
  }, [] );

  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}