import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-sm rounded-2xl p-8 md:p-12">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-500 hover:text-blue-600 flex items-center">
            ← ホームへ戻る
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-8">このサイトについて</h1>

        <section className="space-y-8 text-gray-700 leading-relaxed">
          {/* 基本ステートメント */}
          <p>
            本サイトは、ストリートグラフィティ ロールプレイ（ストグラ）に登場する「暦家」の活動を応援・記録するための**非公式ファンアーカイブポータル**です。
          </p>

          {/* 注意事項セクション */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h2 className="text-lg font-bold text-yellow-800 mb-4 flex items-center">
              <span className="mr-2">⚠️</span> 注意事項
            </h2>
            <ul className="space-y-4 text-sm md:text-base">
              <li>
                <span className="font-bold text-yellow-900">公式との関係：</span>
                各配信者様および運営様とは一切関係ありません。有志による手動更新のため、情報の正確性については保証いたしかねます。
              </li>
              <li>
                <span className="font-bold text-yellow-900">ネタバレへの配慮：</span>
                サイト内には物語の核心に触れる内容が含まれます。未視聴の配信がある場合は十分にご注意ください。
              </li>
              <li>
                <span className="font-bold text-yellow-900 text-red-600 uppercase">メタ情報の取り扱い（厳守）：</span><br />
                本サイトの情報を、特定の人物への攻撃や、RP（ロールプレイ）の進行を妨げるような行為（鳩行為・指示コメント等）には絶対に使用しないでください。
              </li>
            </ul>
          </div>

          {/* 情報の修正について */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-4">情報の追加・修正依頼について</h2>
            <p className="mb-4">
              記載ミスや未掲載の情報、または掲載の取り下げ希望がございましたら、お手数ですが下記の制作者SNSまでDMにてお知らせいただけますと幸いです。
            </p>
            <div className="bg-gray-50 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <p className="text-xs text-gray-500 uppercase tracking-widest">制作者 / お問い合わせ</p>
                <p className="text-lg font-bold text-gray-800">アド🍉 @admiral_splus</p>
              </div>
              <a 
                href="https://twitter.com/admiral_splus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-bold transition-colors"
              >
                DMで連絡する
              </a>
            </div>
          </section>
        </section>

        <footer className="mt-12 pt-8 border-t text-center text-gray-400 text-xs">
          運営様・関係者様より依頼があった場合は速やかに本サイトおよび関連サイトの公開停止・削除対応をいたします。
        </footer>
      </div>
    </main>
  );
}