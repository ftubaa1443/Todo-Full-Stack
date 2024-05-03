// function Todos(){
//     return (
//         <div>
//             <h1>Go to college</h1>
//             <h2>do some Coding </h2>
//             <button>mark as read</button>
//         </div>
//     )
// }

function Todos({todos}) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "mark as completed" : "not completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Todos
