import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from 'react';

// # React Router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let InitTodo;
  if (localStorage.getItem("todos") === null) {
    InitTodo = [];
  }
  else {
    InitTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    // console.log("I am onDelete of todo",todo);

    // # Deleting this way in react does not work!
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    // # This will work
    // filter is a higher order method of array in JavaScript 
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    // # Just for reference
    // console.log("I am adding this todo",title,desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    // console.log(myTodo);

  }

  // # useState
  const [todos, setTodos] = useState(InitTodo);

  // # useEffect
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (

    // # Using React Router
    <>
      <Router>
        <Header title="MyTodo" searchBar={true} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }} >
          </Route>
          <Route exact path="/about">
            < About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>

    // # Without React Router

    // <>
    //   <Header title="MyTodo" searchBar={true} />
    //   <AddTodo addTodo={addTodo} />
    //   <Todos todos={todos} onDelete={onDelete} />
    //   <Footer />
    // </>



  );
}

export default App;
