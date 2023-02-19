import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import Seo from '../next-seo.config';

import '../styles/globals.css';
import { HOST } from '../utils/SeoConst';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = (
    HOST + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0];
  return (
    <>
      <DefaultSeo {...Seo} canonical={canonicalUrl} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
