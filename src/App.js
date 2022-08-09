// import  {Component} from "react";
import "./App.css";
import  { useState } from 'react';
import List from "./components/List";

const App=()=>{
  const [todoData, setTodoData] = useState([]);

  const [ todoValue, setTodoValue ]=useState('')



  const handelChange=(v)=>{
    setTodoValue(v)
  }
  
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
    <div className="container">
      <div className="todoBlock">
        <div className="titld">
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData}/>
        <form style={{display:'flex'}} onSubmit={(e)=>handelSubmit(e)}>
          <input type='text' name='value' style={{flex:'10', padding:'10px'}} placeholder='해야 할 일을 입력하세요.' value={todoValue} onChange={(event)=>handelChange(event.target.value)}/>
          <input type="submit" value="입력" className="btn" style={{flex:'1'}}/>
        </form>
      </div>
    </div>
  )
}


export default App;