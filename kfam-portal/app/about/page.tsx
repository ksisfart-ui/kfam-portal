import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-12 md:py-20 px-6 antialiased">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <Link href="/" className="text-xs text-gray-400 hover:text-[#b28c6e] flex items-center mb-8 transition-colors font-medium">
            <span className="mr-2">←</span> BACK TO HOME
          </Link>
          <h2 className="text-[10px] text-[#b28c6e] font-bold tracking-[0.3em] mb-4">ABOUT THIS PROJECT</h2>
          <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">このサイトについて</h1>
        </div>

        <div className="space-y-20 text-slate-700 leading-loose">
          <section>
            <p className="text-base md:text-lg text-slate-800">
              本サイトは、ストグラに登場する「暦家」の活動を記録・応援するための<strong className="text-slate-900 border-b-2 border-[#b28c6e]/20 px-1">非公式ファンポータル</strong>です。
            </p>
          </section>

          {/* 注意事項：既存サイトに合わせた清潔感のあるデザイン */}
          <section className="py-10 px-6 md:px-12 bg-[#fdfaf8] rounded-[2rem] border border-[#f5ece5]">
            <h2 className="text-lg font-semibold text-[#b28c6e] mb-8 flex items-center">
              <span className="mr-3">⚠️</span> 注意事項
            </h2>
            <ul className="space-y-6 text-sm md:text-[15px]">
              <li className="flex gap-4">
                <span className="text-[#b28c6e] font-bold">01</span>
                <p>個人が手動で更新しているため、反映には時間がかかる場合があります。また、情報の正確性は保証しかねます。</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#b28c6e] font-bold">02</span>
                <p>サイト内には暦家の物語に触れる内容が含まれます。未視聴の配信がある場合は十分にご注意ください。</p>
              </li>
              <li className="flex gap-4 p-5 bg-white/80 rounded-2xl border border-red-50 shadow-sm">
                <span className="text-red-500 font-bold">03</span>
                <p className="font-medium text-slate-800">
                  <span className="text-red-600 font-bold block mb-1 uppercase text-xs tracking-wider">情報の取り扱い</span>
                  各サイトの情報を、特定の人物・集団への攻撃や鳩行為・指示コメント等、RPの進行を妨げるような行為に利用することは絶対におやめください。
                </p>
              </li>
            </ul>
          </section>

          {/* お問い合わせ：下部に十分な余白を確保 */}
          <section className="pt-10 pb-20 border-t border-slate-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-md text-center md:text-left">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">情報の修正・削除依頼について</h2>
                <p className="text-xs text-slate-500 leading-relaxed mb-1">
                  記載ミス、または掲載の取り下げ希望がございましたら、制作者までお知らせください。
                </p>
                <p className="text-[10px] text-slate-400">権利者様からの依頼には速やかに対応いたします。</p>
              </div>
              
              <div className="flex items-center bg-[#f8f9fa] p-5 rounded-2xl border border-slate-100 min-w-[280px] shadow-sm">
                <div className="flex-1">
                  <p className="text-[9px] text-slate-400 font-bold tracking-wider mb-1 uppercase">Creator / Contact</p>
                  <p className="text-sm font-semibold text-slate-800">アド🍉 <span className="text-slate-400 font-normal ml-1">@admiral_splus</span></p>
                </div>
                <a 
                  href="https://twitter.com/admiral_splus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#4eb0f0] hover:bg-[#399ede] text-white text-[11px] font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  DMを送る
                </a>
              </div>
            </div>
          </section>
        </div>

        <footer className="pb-12 text-center border-t border-slate-50 pt-10">
          <p className="text-[10px] text-slate-300 tracking-[0.3em]">UNOFFICIAL KOYOMI-KE ARCHIVES</p>
        </footer>
      </div>
    </main>
  );
}