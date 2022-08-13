import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const List = ({todoData, setTodoData}) => {


  const handelCompletedChange=(id)=>{
    let newTodoData = todoData.map(data=>{
      if(data.id===id){
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  }

  const handelClick=(id)=>{
    let newTodoData = todoData.filter(data => data.id!==id );
    setTodoData(newTodoData);
  }

  const handelDragEnd = (event) => {
    if(!event.destination) return;

    const originIndex= event.source.index;
    const droppedIndex= event.destination.index;

    const newTodoData=todoData;
    const [reorderedItem]=newTodoData.splice(originIndex, 1);
    newTodoData.splice(droppedIndex, 0, reorderedItem);
    setTodoData(newTodoData);
   
  }

  return (
   <>
    <DragDropContext onDragEnd={handelDragEnd}>
      <Droppable droppableId="todo">
        {(provided)=>(
          <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data,index)=>(
                <Draggable key={data.id} draggableId={data.id.toString()} index={index}>
                  {(provided, snapshot)=>(
                    <div  
                    key={data.id} {...provided.draggableProps} 
                    ref={provided.innerRef} {...provided.dragHandleProps} 
                    className={`${snapshot.isDragging? "bg-gray-300" : "bg-gray-50"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
                    >
                
                      <div className='items-center'>
                        <input type="checkbox" defaultChecked={false} onChange={()=>handelCompletedChange(data.id)} className="mr-1"/> 
                        <span className={ data.completed ? "line-through" : undefined }>{data.title}</span>
                      </div>
                        
                      <div>
                        <button className='px-4 py-2 float-right' onClick={()=>handelClick(data.id)}>x</button>
                      </div> 
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
            )}
      </Droppable>
    </DragDropContext>   
   </>
  )
}

export default List;
