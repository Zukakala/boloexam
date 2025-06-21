import { useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import Result from './components/Result'

const App = () => {
  const [wordData, setWordData] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const searchWord = async (query) => {
    if (!query.trim()) {
      setError('Please enter a word.')
      setWordData(null)
      return
    }

    setLoading(true)
    setError('')
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
      if (!res.ok) throw new Error('Word not found.')
      const json = await res.json()
      setWordData(json[0])
    } catch (err) {
      setError(err.message)
      setWordData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <Header />
      <Search onSearch={searchWord} />
      {loading && <p className="info">Loading...</p>}
      {error && <p className="info error">{error}</p>}
      {wordData && <Result data={wordData} />}
    </div>
  )
}

export default App
