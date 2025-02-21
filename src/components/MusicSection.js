// src/components/MusicSection.js
export default function MusicSection() {
    return (
      <section id="music" className="scroll-mt-20">
        <h2 className="text-3xl font-bold mb-6">Последние релизы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow hover-lift">
            <img alt="Live Broadcast #1" className="rounded-t-lg w-full h-48 object-cover" 
                 src="/med01.png" loading="lazy" />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Live Session #24</h3>
              <div className="flex justify-between items-center">
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">Drum'n'Bass</span>
                <div className="flex space-x-2">
                  <button className="text-red-500 hover:text-red-600" aria-label="Play">
                    <i className="fas fa-play-circle text-2xl"></i>
                  </button>
                  <button className="text-gray-500 hover:text-gray-600" aria-label="Download">
                    <i className="fas fa-download text-2xl"></i>
                  </button>
                </div>
              </div>
            </div>
          </article>
          {/* Повторить для других релизов */}
        </div>
      </section>
    );
  }