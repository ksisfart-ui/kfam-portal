import React from 'react';

const projects = [
  {
    title: "暦ちひろDM履歴",
    description: "家族チャットや個人チャットの内容をアーカイブ。過去のやり取りを振り返ることができます。",
    url: "https://kfam-history.vercel.app/",
    color: "bg-blue-50",
    hover: "hover:border-blue-400"
  },
  {
    title: "暦家住民アーカイブ検索",
    description: "暦家が出会った住民のデータベース。相手視点の視点へダイレクトにアクセス可能です。",
    url: "https://kfam-archive-search.vercel.app/",
    color: "bg-green-50",
    hover: "hover:border-green-400"
  },
  {
    title: "暦家タイムライン",
    description: "一日の行動を時系列で可視化。誰がどこで何をしていたかを一目で把握できます。",
    url: "https://kfam-timeline.vercel.app/",
    color: "bg-purple-50",
    hover: "hover:border-purple-400"
  }
];

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* ヘッダー部分 */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Koyomike Portal</h1>
          <p className="text-gray-600">暦家の活動を記録・可視化するためのツール集</p>
        </header>

        {/* リンクカード一覧 */}
        <div className="grid gap-6 md:grid-cols-1">
          {projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-6 rounded-xl border-2 border-transparent bg-white shadow-sm transition-all duration-300 ${project.hover} hover:shadow-md group`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-gray-600">
                    {project.description}
                  </p>
                </div>
                <div className="text-gray-400 group-hover:translate-x-1 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* フッター */}
        <footer className="mt-20 text-center text-gray-400 text-sm">
          非公式 暦家ファンプロジェクト
        </footer>
      </div>
    </main>
  );
}