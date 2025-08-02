import React from 'react'

function Todo() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]); 



  return (
    <div className='Container'>
         ///todo container
        <div className="container">
            <form action="" method='post' onSubmit={handleadd}>
                <input type="text"  placeholder='Add item' value={item} onChange={(e)=>{e.target.value}}/>
            </form>
            
            <div className="datamap">
                {todos.map(id) = (
                <ul key={id}>
                    <li key={id}>{todos.id}</li>
                    <li>{todos.item}</li> 
                </ul>
             )}
            </div>
        </div>
    </div>
  )
}

export default Todo