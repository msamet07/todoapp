import React from 'react'


interface Props {
    todo : String,
    setTodo : React.Dispatch<React.SetStateAction<string>>,
    addMessage :() =>void
}

const Input : React.FC<Props> = ({todo , setTodo ,addMessage}) => {


  return (
    <div>
      <input value={todo} onChange={e => setTodo(e.target.value)} type='text' placeholder='Yazınız...'/>
      <button onClick={addMessage}>Ekle</button>
    </div>
  )
}

export default Input
