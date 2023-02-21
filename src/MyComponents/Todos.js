import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "100vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle} >
            <h3 className="my-4 mx-3 fw-semibold"> Todos List</h3>
            {/* map is a higher order method of array in JavaScript */}
            {
                props.todos.length === 0 ? 
                <div className="fw-semoibold text-center bg-opacity-10 text-danger-emphasis  bg-secondary ">
                    <h3> No Todos - To Display !</h3>
                 </div>
                   : props.todos.map((todo) => {
                        return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
                    })
            }
        </div>
    )
}

// # Return statement #

// 1.Single line return:
//       - Simply return in one line 
//       # Ex - return < TodoItem todo = {todo} />  

// 2.Multiple lines return:
//     - So for that we have to wrap all this statements
//     - in empty tag and in parenthesis
//     # Ex -    return(   
//                 <> 
//               <h1>Suraj Dos</h1>
//               <TodoItem todo = {todo} />  
//                 </> )