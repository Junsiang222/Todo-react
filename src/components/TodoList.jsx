import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos } = props;
  return (
    <div
      className="card rounded shadow-sm mx-auto my-4"
      style={{ maxWidth: "500px", margin: "20px auto" }}
    >
      <ul className="list-group">
        {todos.map((list) => {
          const { text, id } = list;
          return <TodoItem key={id} text={text} isCompleted={false} />;
        })}
      </ul>
    </div>
  );
}
export default TodoList;
