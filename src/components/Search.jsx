import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({ onSearch }) => {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(input)
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a word..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" aria-label="Search">
        <FaSearch />
      </button>
    </form>
  )
}

export default Search
