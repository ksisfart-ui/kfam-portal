import React from 'react';

// プロジェクト情報にアイコンを追加（例としてheroiconsのパスを使用）
const projects = [
  {
    title: "暦ちひろDM履歴",
    description: "家族チャットや個人チャットの内容を見返せるアーカイブ。",
    url: "https://kfam-history.vercel.app/",
    colorClass: "blue",
    iconPath: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" // Chat icon
  },
  {
    title: "暦家住民アーカイブ検索",
    description: "暦家が出会った住民のデータベース。名前や場所から検索し、相手視点へアクセス可能です。",
    url: "https://kfam-archive-search.vercel.app/",
    colorClass: "green",
    iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" // Users icon
  },
  {
    title: "暦家タイムライン",
    description: "一日の行動を時系列で可視化。場所ごと・姉妹ごとに直感的なタイムライン形式で把握できます。",
    url: "https://kfam-timeline.vercel.app/",
    colorClass: "purple",
    iconPath: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" // Clock icon
  }
];

// 色ごとのクラス定義（Tailwindが動的にクラスを生成しないため明示的に記述）
const colorVariants = {
  blue: { border: 'hover:border-blue-400/50', text: 'group-hover:text-blue-600', bg: 'group-hover:bg-blue-50', icon: 'text-blue-500' },
  green: { border: 'hover:border-green-400/50', text: 'group-hover:text-green-600', bg: 'group-hover:bg-green-50', icon: 'text-green-500' },
  purple: { border: 'hover:border-purple-400/50', text: 'group-hover:text-purple-600', bg: 'group-hover:bg-purple-50', icon: 'text-purple-500' },
};

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-gray-50/50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* タイトルセクション */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            暦家観測記録
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            ストグラ「暦家」の活動を記録した非公式ファンサイト集。
          </p>
        </div>

        {/* カードグリッド（PCで2列表示） */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10 items-start">
          {projects.map((project) => {
            // @ts-ignore
            const colors = colorVariants[project.colorClass];
            return (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block p-8 rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 ${colors.border} hover:shadow-xl group relative overflow-hidden`}
              >
                {/* 背景のアクセント（ホバー時） */}
                <div className={`absolute inset-0 opacity-0 ${colors.bg} transition-opacity duration-300 -z-10`} />
                
                <div className="flex items-start">
                  {/* アイコン */}
                  <div className={`flex-shrink-0 p-3 rounded-xl bg-gray-50 ${colors.bg} transition-colors duration-300 mr-6`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${colors.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={project.iconPath} />
                    </svg>
                  </div>
                  
                  {/* テキストコンテンツ */}
                  <div className="flex-1">
                    <h2 className={`text-xl font-bold text-gray-900 ${colors.text} transition-colors mb-3 flex items-center justify-between`}>
                      {project.title}
                      {/* 外部リンク矢印 */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300 group-hover:translate-x-1 transition-transform ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}