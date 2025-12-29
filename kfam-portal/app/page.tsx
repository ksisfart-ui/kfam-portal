import React from 'react';

const projects = [
  {
    title: "暦ちひろDM履歴",
    description: "家族グループや暦ちひろとのやり取り見返したい。",
    url: "https://kfam-history.vercel.app/",
    hover: "hover:border-blue-300"
  },
  {
    title: "暦家住民アーカイブ検索",
    description: "姉妹が出会った住民を検索し、相手視点を見てみたい。",
    url: "https://kfam-archive-search.vercel.app/",
    hover: "hover:border-green-300"
  },
  {
    title: "暦家タイムライン",
    description: "一日の行動をタイムライン形式で振り返りたい。",
    url: "https://kfam-timeline.vercel.app/",
    hover: "hover:border-purple-300"
  }
];

export default function PortalPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Portal</h1>
          <p className="text-xs text-gray-500">暦家の活動を記録・可視化するためのファンサイト集</p>
        </div>

        <div className="grid gap-4 md:grid-cols-1">
          {projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block p-5 rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-200 ${project.hover} hover:shadow-md group`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="text-gray-300 group-hover:translate-x-1 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}