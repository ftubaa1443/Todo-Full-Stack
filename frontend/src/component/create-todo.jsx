import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <input
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="title"
      ></input>
      <br />
      <input
        onChange={(event) => {
          const result = event.target.value;
          setDescription(result);
        }}
        style={{
          padding: 10,
          margin: 10,
        }}
        type="text"
        placeholder="description"
      ></input>
      <br></br>
      <button
        onClick={async () => {
          try {
            const response = await fetch("http://localhost:8000/todos", {
              method: "POST",
              body: JSON.stringify({
                title: title,
                description: description,
              }),
              headers: {
                "Content-type": "application/json",
              },
            });
            if (!response.ok) {
               const errors = await response.json();
              alert(errors.msgs);
            } else {
              navigate('/get-todos');
            }
          } catch (err) {
            alert("some error in server ");
          }
        }}
        style={{
          padding: 10,
          margin: 10,
        }}
      >
        Add a todo
      </button>
    </div>
  );
}

export default CreateTodo;
