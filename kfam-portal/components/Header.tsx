import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* サイトロゴ（テキスト） */}
        <Link href="/" className="font-bold text-gray-800 text-lg hover:opacity-70 transition-opacity tracking-tight">
          Koyomike Archives <span className="text-xs font-normal text-gray-400 ml-2 tracking-normal">(Unofficial)</span>
        </Link>
        
        {/* ボタン形式のナビゲーション */}
        <nav>
          <Link href="/about" className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors shadow-sm hover:shadow-md">
            このサイトについて・注意事項
          </Link>
        </nav>
      </div>
    </header>
  );
}