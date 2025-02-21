// src/components/Footer.js
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';
import Telegram from '@mui/icons-material/Telegram';

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img alt="DJ Stævich logo" className="h-10 w-10" src="/icon01.png" width="40" height="40" />
            <span className="text-xl font-bold">DJ STÆVICH</span>
          </div>

          {/* Социальные сети */}
          <div className="flex space-x-6">
            <a
              href="https://vk.com/stanislav.mishkevich"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              rel="noopener noreferrer"
            >
              <Facebook className="text-2xl" />
            </a>
            <a
              href="https://instagram.com/mishkevich.stanislav"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              rel="noopener noreferrer"
            >
              <Instagram className="text-2xl" />
            </a>
            <a
              href="https://youtube.com/@stanislav.mishkevich"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              rel="noopener noreferrer"
            >
              <YouTube className="text-2xl" />
            </a>
            <a
              href="https://t.me/MISHKEVICH_STANISLAV"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              rel="noopener noreferrer"
            >
              <Telegram className="text-2xl" />
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-4" id="currentYear">
          © <span id="year">{new Date().getFullYear()}</span> Все права защищены.
        </div>
      </div>
    </footer>
  );
}