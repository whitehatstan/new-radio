import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img 
            alt="DJ Stævich logo" 
            className="h-12 w-12 rounded-full hover-lift"
            src="/icon01.png" 
            width="48" 
            height="48" 
            loading="lazy" 
          />
          <nav className="ml-4 flex space-x-4">
            <Link href="/" className="text-lg font-semibold hover:text-red-500 transition-colors">
              HOME
            </Link>
            <Link href="/live" className="text-lg font-semibold hover:text-red-500 transition-colors">
              LIVE
            </Link>
            {/* <Link href="#music" className="text-lg font-semibold hover:text-red-500 transition-colors">
              MUSIC
            </Link> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
