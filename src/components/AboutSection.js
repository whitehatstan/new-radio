// src/components/AboutSection.js
export default function AboutSection() {
    return (
      <section id="about" className="mb-16 scroll-mt-20">
        <div className="flex flex-col lg:flex-row gap-6">
            <div className="mt-8 bg-white rounded-xl shadow-xl p-6 hover-lift">
                <h2 className="text-3xl font-bold mb-4">О трансляции</h2>
                    <p className="text-lg leading-relaxed">
          Добро пожаловать в плейлист с моими миксами. Здесь вы найдёте мои диджейские сеты, которые я создаю с любовью к своему делу. Я миксую музыку в стилях house, techno, dnb и trance. Каждый микс — это небольшое музыкальное путешествие.
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
          Эти треки подойдут для самых разных ситуаций:
                    </p>
                    <ul className="list-disc pl-6 marker:text-red-500 mt-2">
                        <li>Утром, дома они помогут встретить новый день.</li>
                        <li>В дороге создадут отличный фон для путешествий.</li>
                        <li>Во время прогулки позволят расслабиться под ритмичную музыку.</li>
                    </ul>
                    <p className="text-lg leading-relaxed mt-4">
          В моём плейлисте есть как энергичные сеты для вечеринок, так и более спокойные для расслабления. Не забудьте подписаться, чтобы не пропустить новые релизы и быть в курсе моих музыкальных экспериментов!
                    </p>
                    <p className="text-lg leading-relaxed mt-4">
          Спасибо, что слушаете вкусную музыку вместе со мной!
                    </p>
            </div>
        </div>
  
        {/* <div className="bg-white rounded-xl shadow-xl p-6 w-full lg:w-1/2 hover-lift">
            <img alt="Never Die" className="rounded-lg w-full h-full object-cover" 
                 src="/med01.png" width="600" height="400" loading="lazy" />
        
        </div> */}
      </section>
    );
  }