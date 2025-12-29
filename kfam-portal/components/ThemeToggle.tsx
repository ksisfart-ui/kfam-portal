'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // マウント完了を待つ
  useEffect(() => {
    setMounted(true)
  }, [])

  // マウント前は空の要素を返す（Hydration Error防止）
  if (!mounted) {
    return <div className="w-8 h-8 md:w-9 md:h-9" />
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-xl bg-white dark:bg-slate-900 hover:bg-stone-100 dark:hover:bg-slate-800 transition-all border border-stone-200 dark:border-slate-800 shadow-sm flex items-center justify-center w-8 h-8 md:w-9 md:h-9"
      aria-label="Toggle Dark Mode"
    >
      <span className="text-sm md:text-base leading-none">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
    </button>
  )
}