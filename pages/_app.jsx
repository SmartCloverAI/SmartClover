import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
      <link rel="apple-touch-icon" href="/favicon.jpg" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default App;
