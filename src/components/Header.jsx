import ThemeToggle from './ThemeToggle'
import FontSelector from './FontSelector'

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Dictionary</h1>
      <div className="controls">
        <FontSelector />
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
