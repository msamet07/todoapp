import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import { Prop } from './types/Type';
import Message from './components/Message';

const App :React.FC =()=> {

  const [todo ,setTodo] = useState<string>('');
  const[todos,setTodos] = useState<Prop[]>([])

  console.log(todo , "todos")

  const addMessage = () =>{
    if(todo) setTodos ([...todos , {message : todo , id: todos.length +1}])
    setTodo ('');
  }

  const deleteMessage = (id : number ) => {
    setTodos(todos.filter(todo => todo.id != id))
  }

  return (
    <div className="App">
      <Input addMessage={addMessage} todo ={todo} setTodo = {setTodo} />
      <Message deleteMessage={deleteMessage} todos = {todos}/>
    </div>
  );
}

export default App;
