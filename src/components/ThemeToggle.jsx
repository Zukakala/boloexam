import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button onClick={() => setDark(!dark)} className="theme-btn">
      {dark ? '🌙' : '☀️'}
    </button>
  )
}

export default ThemeToggle
