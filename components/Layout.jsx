import Head from 'next/head';
import router, { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from '@/styles/Layout.module.css';
import Showcase from './Showcase';

export default function Layout({ title, keywords, description, children }) {
  const route = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' ccontent={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      <Header />
      {route.pathname === '/' && <Showcase />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music, dj, edm, events',
};
