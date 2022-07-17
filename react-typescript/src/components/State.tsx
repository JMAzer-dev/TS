import {useState, ChangeEvent} from 'react'
// 7 - ChangeEvent com useState

const State = () => {
    const [text, setText] = useState<string | null>(null)
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
  return (
    <>
    <div>o texto é: {text}</div>
    <input type="text" placeholder='Digite aqui' onChange={handleChange}/>
    </>
  )
}

export default State