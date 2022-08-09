import React from 'react'

const List = ({todoData, setTodoData}) => {


  const handelCompletedChange=(id)=>{
    let newTodoData = todoData.map(data=>{
      if(data.id===id){
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData)
  }

  const handelClick=(id)=>{
    let newTodoData = todoData.filter(data => data.id!==id );
    setTodoData(newTodoData);
  }
  
  const btnStyle = {
    color:"#fff",
    border:"none",
    padding:" 5px 9px",
    borderRadius: "50%",
    cursor:"pointer",
    float:"right",
}

const getStyle = (completed) =>{
  return{
    padding:"12px",
    borderBottom:"1px #ccc dotted",
    textDecoration:completed?"line-through":"none"
  }
}

  return (
   <>
    {todoData.map(data=>(
      <div style={getStyle(data.completed)} key={data.id}>
          <input type="checkbox" defaultChecked={false} onChange={()=>handelCompletedChange(data.id)}/> {data.title}
          <button style={btnStyle} onClick={()=>handelClick(data.id)}>x</button>
      </div>
    ))}   
   </>
  )
}

export default List;

