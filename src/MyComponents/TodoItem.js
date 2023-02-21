import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div className=" mx-4">
        <h4>{todo.title} </h4>
        <p> {todo.desc}</p>
        <button className="btn btn-danger fw-semibold btn-sm" onClick={() => { onDelete(todo) }}> Delete</button>
      </div>
      <hr />
    </>

  )
}

// # NOTE #
// func() - Function Call
// func - Function Pass
