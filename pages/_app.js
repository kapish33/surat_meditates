import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Seo from '../next-seo.config';

import BottomNavigation from '../src/components/BottomNavigation';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';

import '../styles/globals.scss';
import { HOST } from '../utils/SeoConst';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    HOST + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];
  return (
    <>
      <Header />
      <DefaultSeo {...Seo} canonical={canonicalUrl} />
      <Component {...pageProps} />
      <BottomNavigation />
      <Footer />
    </>
  );
}

export default MyApp;
