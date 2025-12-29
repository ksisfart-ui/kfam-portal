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
          <section className="leading-loose">
            <p className="text-lg text-gray-800 mb-6">
              本サイトは、ストグラに登場する「暦家」の活動を応援・記録するための<strong className="text-gray-900">非公式ポータルサイト</strong>です。
            </p>
            <p className="text-sm">
              個人が趣味の範囲で更新しており、各配信者様および運営様とは一切関係ありません。
            </p>
          </section>

          {/* 注意事項：圧迫感のないスタイリッシュな囲み */}
          <section className="relative py-12 px-8 md:px-12 bg-[#fdfaf8] rounded-[2.5rem] border border-[#f5ece5]">
            <h2 className="text-lg font-bold text-[#b28c6e] mb-8 flex items-center">
              <span className="mr-3">⚠️</span> 注意事項・免責事項
            </h2>
            <ul className="space-y-8 text-sm md:text-[15px]">
              <li className="flex gap-4">
                <span className="text-[#b28c6e] font-bold">01</span>
                <p><span className="font-bold text-gray-800">更新について：</span> 個人が手動で更新しているため、反映には時間がかかります。また、情報の正確性は保証しかねます。</p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#b28c6e] font-bold">02</span>
                <p><span className="font-bold text-gray-800">ネタバレへの配慮：</span> サイト内には暦家の物語に触れる内容が含まれます。未視聴の配信がある場合はご注意ください。</p>
              </li>
              <li className="flex gap-4 p-5 bg-white/60 rounded-2xl border border-red-50 shadow-sm">
                <span className="text-red-500 font-bold">03</span>
                <p className="font-medium text-gray-800">
                  <span className="text-red-600 font-bold block mb-1">情報の取り扱い</span>
                  本サイトで得た情報を、特定の人物・集団への攻撃や、鳩・指示コメント等、RPの進行を妨げる行為に利用することは絶対におやめください。
                </p>
              </li>
            </ul>
          </section>

          {/* お問い合わせ：下部に十分な余白を確保 */}
          <section className="pt-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 p-8 md:p-10 bg-[#f8f9fa] rounded-[2rem] border border-gray-100">
              <div className="max-w-md">
                <h2 className="text-lg font-bold text-gray-800 mb-4">情報の修正・削除依頼について</h2>
                <p className="text-xs text-gray-500 leading-relaxed mb-2">
                  記載ミス、未掲載の情報、または掲載の取り下げ希望がございましたら、お手数ですが下記の制作者SNSのDMまでお知らせください。
                </p>
                <p className="text-[10px] text-gray-400">権利者様からの依頼には速やかに対応いたします。</p>
              </div>
              
              <div className="flex items-center bg-white p-5 rounded-2xl shadow-sm border border-gray-50 min-w-[280px]">
                <div className="flex-1">
                  <p className="text-[10px] text-gray-400 font-bold tracking-wider mb-1 uppercase">Creator / Contact</p>
                  <p className="text-sm font-bold text-gray-800">アド🍉 <span className="text-gray-400 font-normal">@admiral_splus</span></p>
                </div>
                <a 
                  href="https://twitter.com/admiral_splus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#4eb0f0] hover:bg-gray-400 text-white text-[11px] font-bold px-4 py-2.5 rounded-xl flex items-center transition-all ml-4"
                >
                  <svg className="w-3.5 h-3.5 mr-1.5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
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