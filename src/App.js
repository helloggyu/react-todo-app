// import  {Component} from "react";
import "./App.css";
import  { useState } from 'react';
import List from "./components/List";
import Form from "./components/Form";
const App=()=>{
  const [todoData, setTodoData] = useState([]);

  const [ todoValue, setTodoValue ]=useState('')

  const handelSubmit=(e)=>{
    e.preventDefault();
    //새로운 할일 데이터
    let newTodo = {
      id:Date.now(),
      title:todoValue,
      complete:false
    }

    setTodoData((prev)=>[...prev,newTodo]);
    setTodoValue("");
  }
  

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-teal-50">
      <div className="w-full p-5 m-4 rounded bg-white shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData}/>
        <Form todoValue={todoValue} setTodoValue={setTodoValue} handelSubmit={handelSubmit}/>
      </div>
    </div>
  )
}


export default App;