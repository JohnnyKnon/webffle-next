import Head from 'next/head';
import { Fragment } from 'react';
import NavBar from '../components/layout/nav_bar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      {/* Head */}
      <Head>
        <title>Webffle official</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      {/* Components */}
      <>
        <NavBar />
        <Component {...pageProps} />
      </>
    </Fragment>
  );
}

export default MyApp;
