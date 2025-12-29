import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* 戻るリンク */}
        <div className="mb-12">
          <Link href="/" className="group text-sm font-medium text-gray-500 hover:text-blue-600 flex items-center transition-colors inline-flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            ホームへ戻る
          </Link>
        </div>

        {/* メインタイトル */}
        <div className="mb-16 border-b border-gray-100 pb-6">
          <p className="text-sm font-bold text-blue-600 tracking-wider uppercase mb-2">About This Project</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">このサイトについて</h1>
        </div>

        <div className="space-y-16 text-gray-700 leading-loose">
          {/* 導入文 */}
          <section>
            <p className="text-lg text-gray-800">
              本サイトは、ストグラに登場する「暦家」の活動を応援・記録するための<strong className="font-bold text-gray-900 bg-blue-50 px-2 py-1 rounded mx-1">非公式ファンポータル</strong>です。
            </p>
            <p className="mt-4">
              有志によって運営されており、各配信者様および運営元とは一切関係がございません。
            </p>
          </section>

          {/* 注意事項セクション */}
          <section className="bg-amber-50/60 border border-amber-100 rounded-2xl p-8 md:p-10">
            <h2 className="text-xl font-bold text-amber-900 mb-8 flex items-center">
              <span className="text-2xl mr-3">⚠️</span> 注意事項・免責事項
            </h2>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-amber-400 mr-3 mt-1">●</span>
                <div>
                  <span className="font-bold text-gray-900 block mb-1">情報の正確性について</span>
                  手動更新のため、情報の間違いや抜け漏れが含まれる可能性があります。あらかじめご了承ください。
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-3 mt-1">●</span>
                <div>
                  <span className="font-bold text-gray-900 block mb-1">ネタバレへの配慮</span>
                  サイト内には暦家の物語に触れる内容が含まれます。未視聴の配信がある場合は、閲覧に十分ご注意ください。
                </div>
              </li>
              <li className="mt-8 pt-6 border-t border-amber-200/50">
                <div className="bg-white/80 p-6 rounded-xl border border-red-100 shadow-sm">
                  <p className="font-bold text-red-600 flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    メタ情報の取り扱い（厳守）
                  </p>
                  <p className="text-gray-800 text-sm md:text-base font-medium">
                    本サイトで得た情報を悪用し、誹謗中傷や鳩行為・指示コメント等、RP（ロールプレイ）の進行を妨げるような行為は絶対にしないでください。
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* お問い合わせセクション */}
          <section className="border-t border-gray-100 pt-16">
            <div className="md:flex md:justify-between md:items-end">
              <div className="mb-8 md:mb-0">
                <h2 className="text-lg font-bold text-gray-900 mb-4">情報の修正・削除依頼について</h2>
                <p className="text-gray-600 text-sm mb-2 max-w-lg">
                  記載ミス、未掲載の情報、または掲載の取り下げ希望がございましたら、お手数ですが制作者SNSのDMまでお知らせください。
                </p>
                <p className="text-xs text-gray-400">
                  権利者様からの削除依頼には速やかに対応いたします。
                </p>
              </div>
              
              {/* 制作者SNSカード */}
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 flex items-center shadow-sm hover:shadow-md transition-shadow">
                <div className="mr-5">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Creator / Contact</p>
                  <p className="text-base font-bold text-gray-900">アド🍉 @admiral_splus</p>
                </div>
                <a 
                  href="https://twitter.com/admiral_splus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white text-sm font-bold px-5 py-2.5 rounded-full flex items-center transition-colors shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  DMを送る
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}