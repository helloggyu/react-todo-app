import React from 'react'

const Form = ({todoValue, setTodoValue, handelSubmit}) => {

  const handelChange=(v)=>{
    setTodoValue(v)
  }

  return (
    <>
      <form style={{display:'flex'}} onSubmit={(e)=>handelSubmit(e)}>
         <input type='text' name='value' style={{flex:'10', padding:'10px'}} placeholder='해야 할 일을 입력하세요.' value={todoValue} onChange={(event)=>handelChange(event.target.value)}/>
          <input type="submit" value="입력" className="btn" style={{flex:'1'}}/>
      </form>   
    </>
  )
}

export default Form;