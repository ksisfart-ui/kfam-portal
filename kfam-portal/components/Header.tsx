import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-gray-800 text-sm hover:opacity-70 transition-opacity">
          Unofficial Koyomike Portal
        </Link>
        
        <nav className="flex items-center gap-5">
          <Link href="/about" className="text-xs font-medium text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline">
            このサイトについて・注意事項
          </Link>
          <a 
            href="https://twitter.com/admiral_splus" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-gray-500 hover:text-gray-800 transition-colors"
          >
            制作者SNS
          </a>
        </nav>
      </div>
    </header>
  );
}