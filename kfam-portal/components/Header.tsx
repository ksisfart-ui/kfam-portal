import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-card-border px-4 md:px-6 py-4 md:py-5 transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-2">
        <Link href="/" className="group flex-shrink-1 min-w-0">
          <p className="text-[9px] md:text-[10px] text-koyomike font-bold tracking-[0.2em] mb-0.5 leading-none font-sans">
            KOYOMI-KE ARCHIVES
          </p>
          <h1 className="text-base md:text-xl font-bold text-text-main tracking-tight whitespace-nowrap overflow-hidden text-ellipsis transition-colors">
            暦家観測記録
          </h1>
        </Link>
        
        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <Link 
            href="/about" 
            className="bg-koyomike hover:opacity-90 text-white text-[10px] md:text-sm font-bold px-3 md:px-6 py-2 md:py-2.5 rounded-full transition-all shadow-sm flex items-center whitespace-nowrap flex-shrink-0"
          >
            <span className="mr-1 hidden md:inline">📖</span> 
            {/* テキストを明示的に記述 */}
            <span>このサイトについて</span>
          </Link>
        </div>
      </div>
    </header>
  );
}