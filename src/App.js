// import  {Component} from "react";
import "./App.css";
import  { useState } from 'react';

const App=()=>{
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      title: '공부하기',
      complete: false,
    },
  ]);

  const [ todoValue, setTodoValue ]=useState('')

  const handelClick=(id)=>{
    let newTodoData = todoData.filter(data => data.id!==id );
    setTodoData(newTodoData);
  }

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

    setTodoData([...todoData,newTodo]);
  }
  
  
  const btnStyle = {
      color:"#fff",
      border:"none",
      padding:" 5px 9px",
      borderRadius: "50%",
      cursor:"pointer",
      float:"right",
  }
  
  const getStyle ={
    padding:"12px",
    borderBottom:"1px #ccc dotted",
    textDecoration:"none"
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="titld">
          <h1>할 일 목록</h1>
        </div>
        {todoData.map(data=>(
          <div style={getStyle} key={data.id}>
          <input type="checkbox" defaultChecked={false} /> {data.title}
          <button style={btnStyle} onClick={()=>handelClick(data.id)}>x</button>
          </div>
        ))}
        <form style={{display:'flex'}} onSubmit={(e)=>handelSubmit(e)}>
          <input type='text' name='value' style={{flex:'10', padding:'10px'}} placeholder='해야 할 일을 입력하세요.' value={todoValue} onChange={(e)=>handelChange(e.target.value)}/>
          <input type="submit" value="입력" className="btn" style={{flex:'1'}}/>
        </form>
      </div>
    </div>
  )
}


export default App;