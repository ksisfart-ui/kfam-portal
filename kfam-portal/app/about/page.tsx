import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen py-12 md:py-20 px-6 antialiased">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          <Link href="/" className="text-xs text-text-sub hover:text-koyomike flex items-center mb-8 transition-colors font-medium">
            <span className="mr-2">←</span> BACK TO HOME
          </Link>
          <h2 className="text-[10px] text-[#b28c6e] font-bold tracking-[0.3em] mb-4">ABOUT THIS PROJECT</h2>
          <h1 className="text-3xl font-semibold text-text-main tracking-tight">このサイトについて</h1>
        </div>

        <div className="space-y-15 text-text-sub leading-loose">
          {/* 注意事項：既存サイトに合わせた清潔感のあるデザイン */}
          <section className="leading-loose">
            <p className="text-lg text-text-main mb-6">
              本サイトは、ストグラに登場する「暦家」の活動を応援するための<strong className="text-text-main">非公式ポータルサイト</strong>です。
            </p>
          </section>

          {/* 注意事項：圧迫感のないスタイリッシュな囲み */}
          <section className="relative py-12 px-8 md:px-12 bg-card rounded-[2.5rem] border border-card-border">
            <h2 className="text-lg font-bold text-koyomike mb-8 flex items-center">
              <span className="mr-3">⚠️</span> 注意事項・免責事項
            </h2>
            <ul className="space-y-8 text-sm md:text-[15px]">
              <li className="flex gap-4">
                <span className="text-koyomike font-bold">01</span>
                <p><span className="font-bold text-text-main">更新について：</span> 個人による手動更新のため、反映まで時間がかかる場合がございます。また、情報の正確性は保証いたしかねます。</p>
              </li>
              <li className="flex gap-4">
                <span className="text-koyomike font-bold">02</span>
                <p><span className="font-bold text-text-main">ネタバレへの配慮：</span> 各サイトには物語に触れる内容が含まれます。未視聴の配信がある場合はご注意ください。</p>
              </li>
              <li className="flex gap-4 p-5 bg-red-500/5 rounded-2xl border border-red-500/20 shadow-sm">
                <span className="text-red-500 font-bold">03</span>
                <p className="font-medium text-text-main">
                  <span className="text-red-600 dark:text-red-400 font-bold block mb-1">情報の取り扱い</span>
                  各サイトで得た情報を、特定の人物・集団への攻撃や、鳩・指示コメント等、RPの進行を妨げる行為に利用することは絶対におやめください。
                </p>
              </li>
            </ul>
          </section>

          {/* お問い合わせ：下部に十分な余白を確保 */}
          <section className="pt-6 pb-20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-7 bg-card rounded-[1.5rem] border border-card-border shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center text-koyomike text-sm font-black border border-card-border">
                  X
                </div>
                <div>
                  <p className="text-[9px] text-text-sub font-black mb-0.5 tracking-widest uppercase">Contact</p>
                  <p className="font-black text-text-main text-base">制作者SNS</p>
                </div>
              </div>
              <a 
                href="https://x.com/admiral_splus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 bg-[#1d9bf0] hover:opacity-90 text-white rounded-full font-black text-[13px] text-center transition-all shadow-sm flex items-center justify-center gap-2"
              >
                アド🍉 @admiral_splus
              </a>
            </div>
          </section>
        </div>

        <footer className="pb-12 text-center border-t border-card-border pt-10">
          <p className="text-[10px] text-text-sub tracking-[0.3em]">UNOFFICIAL KOYOMI-KE ARCHIVES</p>
        </footer>
      </div>
    </main>
  );
}