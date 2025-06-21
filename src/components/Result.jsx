const Result = ({ data }) => {
  const { word, phonetic, phonetics, meanings } = data

  const playAudio = () => {
    const audioObj = phonetics.find(p => p.audio)
    if (audioObj) new Audio(audioObj.audio).play()
  }

  return (
    <div className="result">
      <div className="result-header">
        <h2>{word}</h2>
        <span>{phonetic}</span>
        <button onClick={playAudio}>🔊</button>
      </div>

      {meanings.map((meaning, idx) => (
        <div key={idx} className="meaning">
          <h4>{meaning.partOfSpeech}</h4>
          <ul>
            {meaning.definitions.map((def, i) => (
              <li key={i}>{def.definition}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Result
