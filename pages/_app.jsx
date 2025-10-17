import NextApp from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';

const App = ({ Component, pageProps, hostId }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
    </Head>
    <Layout hostId={hostId}>
      <Component {...pageProps} />
    </Layout>
  </>
);

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  const hostId = process.env.EE_HOST_ID ?? process.env.NEXT_PUBLIC_EE_HOST_ID ?? 'unknown';

  return {
    ...appProps,
    hostId
  };
};

export default App;
