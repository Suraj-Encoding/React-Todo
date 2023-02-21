import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank !");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3 justify-content-center" >
            <div className=" mx-3 fw-semibold " >
                <h3> Add a Todo </h3>
            </div>
            <form onSubmit={submit}>
                <div className="mb-3 mx-3">
                    <label htmlFor="title" className="form-label fw-semibold">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                    <div className="mb-3 fw-semibold">
                        <label htmlFor="desc" className="form-label mt-2 fw-semibold ">Todo Description</label>
                        <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
                    </div>
                </div>
                <button type="submit" className="btn mx-3 fw-semibold btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
