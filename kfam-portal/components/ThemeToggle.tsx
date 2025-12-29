'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffectの中で状態を更新する代わりに、マウント済みかどうかのフラグのみを管理
  useEffect(() => {
    setMounted(true)
  }, [])

  // マウントされるまでは何も表示しない（またはスケルトンを表示）
  if (!mounted) return <div className="w-9 h-9" />

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-xl bg-stone-100 dark:bg-slate-800 hover:bg-stone-200 dark:hover:bg-slate-700 transition-all border border-stone-200 dark:border-slate-700 shadow-sm"
      aria-label="Toggle Dark Mode"
    >
      {/* 既存サイトの雰囲気に合わせ、少し落ち着いたトーンの絵文字 */}
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  )
}