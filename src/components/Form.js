import React from 'react'

const Form = ({todoValue, setTodoValue, handelSubmit}) => {

  const handelChange=(v)=>{
    setTodoValue(v)
  }

  return (
    <>
      <form  onSubmit={(e)=>handelSubmit(e)} className="flex pt-2">
         <input type='text' name='value' placeholder='해야 할 일을 입력하세요.' value={todoValue} onChange={(event)=>handelChange(event.target.value)} className="w-full px-3 py-2 mr-4 text-gray-500 border rounded"/>
          <input type="submit" value="입력" className="p-2 border text-blue-400 border-blue-400 rounded hover:text-white hover:bg-blue-800"/>
      </form>   
    </>
  )
}

export default Form;