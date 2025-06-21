import { useState, useEffect } from 'react'

const FontSelector = () => {
  const [font, setFont] = useState('inter')

  useEffect(() => {
    document.body.setAttribute('data-font', font)
  }, [font])

  return (
    <select value={font} onChange={(e) => setFont(e.target.value)} className="font-select">
      <option value="inter">Inter</option>
      <option value="lora">Lora</option>
      <option value="fira">Fira Code</option>
    </select>
  )
}

export default FontSelector
