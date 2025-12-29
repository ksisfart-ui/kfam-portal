import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#fcfaf8]/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 px-4 md:px-6 py-4 md:py-5 antialiased transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-2">
        {/* ロゴ・タイトルエリア */}
        <Link href="/" className="group flex-shrink-1 min-w-0">
          <p className="text-[9px] md:text-[10px] text-[#b28c6e] font-bold tracking-[0.2em] mb-0.5 leading-none">
            KOYOMI-KE ARCHIVES
          </p>
          <h1 className="text-base md:text-xl font-semibold text-slate-900 dark:text-slate-100 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
            暦家観測記録
          </h1>
        </Link>
        
        {/* 操作エリア */}
        <div className="flex items-center gap-3">
          <ThemeToggle /> {/* ダークモードボタンを追加 */}
          <Link 
            href="/about" 
            className="bg-[#b28c6e] hover:bg-[#a17a5d] dark:hover:bg-[#c49d7f] text-white text-[10px] md:text-sm font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all shadow-sm flex items-center whitespace-nowrap"
          >
            {/* ... 既存のテキスト */}
          </Link>
        </div>
      </div>
    </header>
  );
}