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
  

  return (
   <>
    {todoData.map(data=>(
      <div  key={data.id} className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-500 border rounded">
        <div className='items-center'>
          <input type="checkbox" defaultChecked={false} onChange={()=>handelCompletedChange(data.id)} className="mr-1"/> 
          <span className={ data.completed ? "line-through" : undefined }>{data.title}</span>
        </div>
        <div>
          <button className='px-4 py-2 float-right' onClick={()=>handelClick(data.id)}>x</button>
        </div> 
      </div>
    ))}   
   </>
  )
}

export default List;

