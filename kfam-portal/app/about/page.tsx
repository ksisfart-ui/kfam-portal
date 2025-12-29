import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-sm rounded-xl p-6 md:p-10">
        {/* パンくずリスト風の戻るリンク */}
        <div className="mb-6">
          <Link href="/" className="text-xs text-gray-400 hover:text-blue-600 flex items-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="15 19l-7-7 7-7" />
            </svg>
            ホームへ戻る
          </Link>
        </div>

        <h1 className="text-xl font-bold text-gray-900 border-b pb-3 mb-6">このサイトについて</h1>

        <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
          <p className="text-xs">
            本サイトは、ストリートグラフィティ ロールプレイ（ストグラ）に登場する「暦家」の活動を応援・記録するための**非公式ポータルサイト**です。
          </p>

          {/* 注意事項：情報を凝縮 */}
          <section className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg">
            <h2 className="text-sm font-bold text-yellow-800 mb-3 flex items-center">
              <span className="mr-1.5">⚠️</span> 注意事項
            </h2>
            <ul className="space-y-3 text-xs md:text-[13px]">
              <li>
                <span className="font-bold text-yellow-900">公式との関係：</span>
                各配信者様および運営様とは一切関係ありません。有志による手動更新のため、情報の正確性は保証いたしかねます。
              </li>
              <li>
                <span className="font-bold text-yellow-900">ネタバレへの配慮：</span>
                サイト内にはそれぞれの物語に触れる内容が含まれます。未視聴の配信がある場合はご注意ください。
              </li>
              <li className="bg-white/50 p-2 rounded border border-yellow-200">
                <span className="font-bold text-red-600 uppercase">情報の取り扱い（厳守）：</span><br />
                <span className="text-gray-700">本サイトの情報を、特定の人物への攻撃や、RP（ロールプレイ）の進行を妨げるような行為（鳩行為・指示コメント等）には絶対に使用しないでください。</span>
              </li>
            </ul>
          </section>

          {/* 修正依頼セクション */}
          <section>
            <h2 className="text-sm font-bold text-gray-800 mb-3 border-l-2 border-blue-600 pl-3">情報の修正について</h2>
            <p className="text-xs mb-4">
              記載ミスや掲載の取り下げ希望がございましたら、下記の制作者SNSまでDMにてお知らせください。
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Contact</p>
                <p className="text-sm font-bold text-gray-700">アド🍉 @admiral_splus</p>
              </div>
              <a 
                href="https://twitter.com/admiral_splus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white text-xs px-4 py-2 rounded-full font-bold transition-colors"
              >
                DMを送る
              </a>
            </div>
          </section>

          <p className="text-[10px] text-gray-400 text-center pt-4">
            運営様・関係者様より依頼があった場合は速やかに本サイトおよび関連サイトの公開停止・削除対応をいたします。
          </p>
        </div>
      </div>
    </main>
  );
}