import React, { useState } from 'react'
// import { todos } from '../data'
 const todos = [
   { id: 1, task: 'Buy groceries' },
   { id: 2, task: 'Walk the dog' },
   { id: 3, task: 'Finish project report' },
   { id: 4, task: 'Call mom' },
   { id: 5, task: 'Clean the house' },
   { id: 6, task: 'Pay bills' },
   { id: 7, task: 'Read a book' },
   { id: 8, task: 'Exercise' },
   { id: 9, task: 'Cook dinner' },
   { id: 10, task: 'Write blog post' },
 ]
function Todo() {
    const [tasks,setTasks] = useState(todos)
    
    const deleteAll = () => setTasks([])
    // const deleteTask = (azad) => console.log(azad);
    const deleteTask = (azad) => {
        setTasks(tasks.filter(function (element) {
            // console.log(element.id !== azad) 
            return element.id !== azad
        } ))
    }
  return (
    <div>
      <h2>todo create</h2>
      <div>
        <input type='text' placeholder='enter your todo or task' />
        <button>add / update</button>
        <br />
        <button onClick={deleteAll}>delete all</button>
    
      </div>
      <hr />
      {tasks.map((e) => {
        return (
          <div key={e.id}>
            <h1>{e.task}</h1>
            <button onClick={() => deleteTask(e.id)}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Todo