// src/components/LiveSection.js
import { useState, useEffect } from 'react';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Pause from '@mui/icons-material/Pause';
import SkipPrevious from '@mui/icons-material/SkipPrevious';
import SkipNext from '@mui/icons-material/SkipNext';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function LiveSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  useEffect(() => {
    const audio = new Audio('https://staevich.online/stream.mp3');
    audio.volume = volume;

    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [isPlaying, volume]);

  return (
    <section id="live" className="mb-16 scroll-mt-20">
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
        {/* Обложка плейлиста */}
        <div className="bg-white rounded-xl shadow-xl p-6 w-full lg:w-1/2 hover-lift">
          <img
            alt="Live Mixes DJ Stævich"
            className="rounded-lg w-full h-auto object-cover"
            src="/live-staevich-icon.png"
            loading="eager"
          />
        </div>

        {/* Плеер */}
        <div className="bg-white rounded-xl shadow-xl p-6 w-full lg:w-1/2 hover-lift flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent mb-6">
            DJ STÆVICH LIVE
          </h1>

          {/* Кнопки управления плеером */}
          <div className="flex justify-center items-center space-x-6">
            {/* Кнопка "Назад" */}
            <button
              className="p-4 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors shadow-lg hover-lift"
              aria-label="Previous"
            >
              <SkipPrevious className="text-gray-700 text-2xl" />
            </button>

            {/* Кнопка "Play/Pause" */}
            <button
              className="p-4 bg-red-500 rounded-full hover:bg-red-600 transition-colors shadow-lg hover-lift"
              aria-label={isPlaying ? 'Pause' : 'Play'}
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause className="text-white text-2xl" />
              ) : (
                <PlayArrow className="text-white text-2xl" />
              )}
            </button>

            {/* Кнопка "Вперёд" */}
            <button
              className="p-4 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors shadow-lg hover-lift"
              aria-label="Next"
            >
              <SkipNext className="text-gray-700 text-2xl" />
            </button>
          </div>

          {/* Регулятор громкости */}
          <div className="space-y-4 mt-6 w-full max-w-xs">
            <div className="flex items-center space-x-4">
              <VolumeUp className="text-gray-600" />
              <input
                id="volumeSlider"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                className="w-full accent-red-500"
                onChange={handleVolumeChange}
              />
              <span id="volumePercentage" className="text-gray-600">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Описание плейлиста */}
      {/* <div className="mt-8 bg-white rounded-xl shadow-xl p-6 hover-lift">
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
      </div> */}
    </section>
  );
}