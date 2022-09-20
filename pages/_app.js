import { Fragment } from 'react';
import { MainHeadSetting } from '../components/head-setting';
import NavBar from '../components/layout/nav-bar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      {/* Head */}
      <MainHeadSetting />
      {/* Components */}
      <>
        <NavBar />
        <Component {...pageProps} />
      </>
    </Fragment>
  );
}

export default MyApp;
