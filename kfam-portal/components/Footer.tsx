import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20 py-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-4 space-x-6 text-sm">
          {/* Aboutページへの誘導リンク */}
          <Link href="/about" className="text-blue-600 hover:underline font-medium">
            このサイトについて・注意事項
          </Link>
          <a 
            href="https://twitter.com/admiral_splus" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-500 hover:text-blue-400"
          >
            制作者SNS
          </a>
        </div>
        <p className="text-gray-400 text-xs">
          非公式 暦家ファンプロジェクト
        </p>
      </div>
    </footer>
  );
}