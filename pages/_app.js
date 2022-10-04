import 'react-multi-carousel/lib/styles.css';
import '../styles/globals.css'
import { useEffect } from 'react';

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {

      useEffect(() => { // !hide splash screen
        if (typeof window !== 'undefined') {
                const loader = document.getElementById('globalLoader');
            if (loader)
                loader.style.display = 'none';
        }
    }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
