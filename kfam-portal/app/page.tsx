import React from 'react';

// プロジェクト情報にアイコンを追加（例としてheroiconsのパスを使用）
const projects = [
  {
    title: "暦ちひろDM履歴",
    description: "家族グループや、暦ちひろとのやり取りをチャット形式で記録。",
    url: "https://kfam-history.vercel.app/",
    icon: "💬"
  },
  {
    title: "暦家住民アーカイブ検索",
    description: "暦家が出会った住民のデータベース。名前や場所から検索し、相手視点へアクセス可能。",
    url: "https://kfam-archive-search.vercel.app/",
    icon: "📇"
  },
  {
    title: "暦家タイムライン",
    description: "一日の行動を時系列で可視化。場所ごと・姉妹ごとに直感的なタイムライン形式で把握可能。",
    url: "https://kfam-timeline.vercel.app/",
    icon: "📅"
  }
];

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-[#fcfaf8] dark:bg-slate-950 py-12 md:py-20 px-6 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white dark:bg-slate-900/50 p-8 md:p-10 rounded-[2rem] border border-gray-100 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(178,140,110,0.12)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1"
            >
              <div className="text-3xl mb-6 opacity-80 group-hover:scale-110 transition-transform duration-300 inline-block">
                {project.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100 mb-4 group-hover:text-[#b28c6e] transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-8">
                {project.description}
              </p>
              <div className="flex items-center text-xs font-bold text-gray-400 dark:text-slate-500 group-hover:text-[#b28c6e]">
                VIEW 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}