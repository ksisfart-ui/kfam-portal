import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 md:px-6 py-4 md:py-5 antialiased">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-2">
        {/* ロゴ・タイトルエリア */}
        <Link href="/" className="group flex-shrink-1 min-w-0">
          <p className="text-[9px] md:text-[10px] text-[#b28c6e] font-bold tracking-[0.2em] mb-0.5 leading-none">
            KOYOMI-KE ARCHIVES
          </p>
          <h1 className="text-base md:text-xl font-semibold text-slate-900 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
            暦家観測記録
          </h1>
        </Link>
        
        {/* ボタン：モバイルではさらにコンパクトに */}
        <Link 
          href="/about" 
          className="bg-[#4eb0f0] hover:bg-[#399ede] text-white text-[10px] md:text-sm font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all shadow-sm hover:shadow-md flex items-center whitespace-nowrap flex-shrink-0"
        >
          <span className="mr-1.5 md:mr-2">📖</span> 
          <span className="hidden xs:inline">このサイトについて</span>
          <span className="xs:hidden font-bold">ABOUT</span>
        </Link>
      </div>
    </header>
  );
}