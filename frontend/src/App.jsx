import { useEffect, useState } from "react";
import "./App.css";


import{ BrowserRouter, Routes , Route} from 'react-router-dom';
import SignUp from "./component/signup";

import LoginPage from "./component/login";
import CreateTodo from "./component/create-todo";
import Todos from "./component/todos";
import Login from "./component/login";




function App() {

 const  [todos , setTodos] = useState([])
 
 useEffect(()=>{
    fetch("http://localhost:8000/todo").then(async function(res){
      const result = await res.json();
      setTodos(result.data);
    })
 },[]) 
  
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-todo" element={<CreateTodo />} />
        <Route path="/get-todos" element={<Todos todos={todos} />} />
       
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
