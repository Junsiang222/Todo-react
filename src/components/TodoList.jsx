import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{ maxWidth: "500px", margin: "20px auto" }}
    >
      
        
        <ul className="list-group">
          <TodoItem name="task1" />
          <TodoItem name="task2"/>
          <TodoItem name="task3"/>
        </ul>
      </div>
   
  );
}
export default TodoList;
