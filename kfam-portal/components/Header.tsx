import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-5">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="group">
          <p className="text-[10px] text-[#b28c6e] font-bold tracking-[0.2em] mb-0.5 leading-none">KOYOMI-KE ARCHIVES</p>
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">暦家 観測記録ポータル</h1>
        </Link>
        
        <Link href="/about" className="bg-[#4eb0f0] hover:bg-[#399ede] text-white text-xs md:text-sm font-bold px-6 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center">
          <span className="mr-2">📖</span> このサイトについて
        </Link>
      </div>
    </header>
  );
}