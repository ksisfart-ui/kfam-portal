import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf8] py-12 dark:bg-[#0f172a] md:py-20 px-6 antialiased">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <Link href="/" className="text-xs text-gray-400 dark:text-slate-500 hover:text-[#b28c6e] flex items-center mb-8 transition-colors font-medium">
            <span className="mr-2">←</span> BACK TO HOME
          </Link>
          <h2 className="text-[10px] text-[#b28c6e] font-bold tracking-[0.3em] mb-4">ABOUT THIS PROJECT</h2>
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-slate-100 tracking-tight">このサイトについて</h1>
        </div>

        <div className="space-y-15 text-slate-700 dark:text-slate-300 leading-loose">
          {/* 注意事項：既存サイトに合わせた清潔感のあるデザイン */}
          <section className="leading-loose">
            <p className="text-lg text-gray-800 dark:text-slate-200 mb-6">
              本サイトは、ストグラに登場する「暦家」の活動を応援・記録するための<strong className="text-gray-900">非公式ポータルサイト</strong>です。
            </p>
          </section>

          {/* 注意事項：圧迫感のないスタイリッシュな囲み */}
          <section className="relative py-12 px-8 md:px-12 bg-[#fdfaf8] dark:bg-slate-900/30 rounded-[2.5rem] border border-[#f5ece5] dark:border-slate-800">
            <h2 className="text-lg font-bold text-[#b28c6e] mb-8 flex items-center">
              <span className="mr-3">⚠️</span> 注意事項・免責事項
            </h2>
            <ul className="space-y-8 text-sm md:text-[15px]">
              <li className="flex gap-4">
                <span className="text-[#b28c6e] font-bold">01</span>
                <p><span className="font-bold text-gray-800">更新について：</span> 個人による手動更新のため、反映まで時間がかかる場合がございます。また、情報の正確性は保証しかねます。</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#b28c6e] font-bold">02</span>
                <p><span className="font-bold text-gray-800">ネタバレへの配慮：</span> サイト内には暦家の物語に触れる内容が含まれます。未視聴の配信がある場合はご注意ください。</p>
              </li>
              <li className="flex gap-4 p-5 bg-white/60 dark:bg-slate-900/40 rounded-2xl border border-red-50 dark:border-red-900/20 shadow-sm">
                <span className="text-red-500 dark:text-red-400 font-bold">03</span>
                <p className="font-medium text-gray-800 dark:text-slate-200">
                  <span className="text-red-600 dark:text-red-400 font-bold block mb-1">情報の取り扱い</span>
                  各サイトで得た情報を、特定の人物・集団への攻撃や、鳩・指示コメント等、RPの進行を妨げる行為に利用することは絶対におやめください。
                </p>
              </li>
            </ul>
          </section>

          {/* お問い合わせ：下部に十分な余白を確保 */}
          <section className="pt-6 pb-20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-7 bg-white dark:bg-slate-900/40 rounded-[1.5rem] border border-stone-100 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#fcfaf8] dark:bg-slate-800 rounded-full flex items-center justify-center text-[#b28c6e] text-sm font-black border border-stone-100 dark:border-slate-700">
                  X
                </div>
                <div>
                  <p className="text-[9px] text-stone-400 font-black mb-0.5 tracking-widest uppercase">Contact</p>
                  <p className="font-black text-stone-800 dark:text-slate-200 text-base">制作者SNS</p>
                </div>
              </div>
              <a 
                href="https://x.com/admiral_splus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white rounded-full font-black text-[13px] text-center transition-all shadow-sm flex items-center justify-center gap-2"
              >
                アド🍉 @admiral_splus
              </a>
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