import Head from 'next/head';
import Header from '../components/Header';
import LiveSection from '../components/LiveSection';
import AboutSection from '../components/AboutSection';
import MusicSection from '../components/MusicSection';
import Footer from '../components/Footer';

export default function Music() {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <title>DJ STÆVICH</title>
        <meta name="description" content="Официальный сайт DJ STÆVICH - живые выступления, миксы и последние релизы" />
        <meta property="og:title" content="DJ STÆVICH LIVE" />
        <meta property="og:image" content="https://staevich.online/og-image.jpg" />
      </Head>

      <Header />
      <main className="container mx-auto p-4">
        <LiveSection />
        <AboutSection />
        <MusicSection />
      </main>
      <Footer />
    </div>
  );
}