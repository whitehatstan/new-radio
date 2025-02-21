import Head from 'next/head';
import Header from '../components/Header';
import LiveSection from '../components/LiveSection';
import AboutSection from '../components/AboutSection';
import MusicSection from '../components/MusicSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    // <div className="bg-gray-100 text-gray-900">
    //   <Head>
    //     <link
    //       href="https://fonts.googleapis.com/icon?family=Material+Icons"
    //       rel="stylesheet"
    //     />
    //     <title>DJ STÆVICH LIVE</title>
    //     <meta name="description" content="Официальный сайт DJ STÆVICH - живые выступления, миксы и последние релизы" />
    //     <meta property="og:title" content="DJ STÆVICH LIVE" />
    //     <meta property="og:image" content="https://staevich.online/og-image.jpg" />
    //   </Head>

    //   <Header />
    //   <main className="container mx-auto p-4">
        
    //   </main>
    //   <Footer />
    // </div>
    <div className="bg-white text-gray-900">
      <Head>
        <title>Контент, который работает на вас</title>
        <meta name="description" content="Видеомонтаж, звук, дизайн и сайты от профессионала. Создаю контент, который привлекает клиентов и усиливает ваш бренд." />
      </Head>

      <Header />

      <main className="container mx-auto p-6 flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 p-6">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-800 text-center md:text-left">КОНТЕНТ, КОТОРЫЙ РАБОТАЕТ НА ВАС</h1>
          <p className="text-lg text-gray-700 text-center md:text-left">ВИДЕО, ЗВУК, ДИЗАЙН, САЙТЫ</p>
          
          <section className="bg-white shadow-lg rounded-lg p-6 my-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Привет! Меня зовут Стас</h2>
            <p className="text-gray-700">Я — ваш эксперт по созданию контента, который работает на результат.</p>
            <p className="text-gray-700">Уже 4 года я помогаю бизнесам и творческим проектам выделяться с помощью профессионального видеомонтажа, звука, дизайна и разработки сайтов.</p>
            <p className="text-gray-700">Мои работы — это не просто красивая картинка, а инструмент, который решает ваши задачи: привлекает клиентов, увеличивает продажи и укрепляет ваш бренд.</p>
          </section>
          
          <section className="bg-white shadow-lg rounded-lg p-6 my-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">ПОЧЕМУ СТОИТ ВЫБРАТЬ МЕНЯ?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><span className="text-gray-800 font-semibold">✅ Опыт:</span> 4 крупных проекта, интервью, рекламные ролики, сотрудничество с танцевальной школой.</li>
              <li><span className="text-gray-800 font-semibold">✅ Мультизадачность:</span> Видео, звук, дизайн, сайты — полный цикл контента.</li>
              <li><span className="text-gray-800 font-semibold">✅ Качество:</span> Стильно, оригинально, запоминающе.</li>
              <li><span className="text-gray-800 font-semibold">✅ Прозрачность:</span> Цены от 5$, без скрытых платежей.</li>
            </ul>
          </section>
        </div>

        <div className="md:w-1/2 p-6 flex justify-center">
          <img src="/1-744.png" alt="Стас" className="w-full h-auto rounded-lg shadow-lg object-cover" />
        </div>
      </main>

      <section className="container mx-auto p-6 bg-white shadow-lg rounded-lg text-center my-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">ДАВАЙТЕ СОЗДАВАТЬ ВМЕСТЕ!</h2>
        <p className="text-gray-700 mb-4">Хотите увидеть, как ваш бренд заиграет новыми красками? Давайте обсудим ваш проект!</p>
        <div className="flex justify-center space-x-4">
          <a href="https://disk.yandex.ru/i/pnsOF1xb1s_W4w" className="px-4 py-2 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-700">📂 Портфолио</a>
          <a href="https://t.me/blackorwhite_msa" className="px-4 py-2 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-700">📢 Мой канал</a>
          <a href="https://t.me/MISHKEVICH_STANISLAV" className="px-4 py-2 bg-gray-800 text-white rounded-lg font-bold hover:bg-gray-700">📩 Написать мне</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
