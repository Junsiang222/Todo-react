function AddTodoForm(props){
  const{todos,setTodos}=props;

    return(
      <div>
           <form className="d-flex justify-content-between align-items-center">
            <input
              type="text"
              className="form-control"
              placeholder="Add new item..."
              id="taskname"
              required
            />
            <button className="btn btn-primary btn-sm rounded ms-2" onClick={(event)=>{
              event.preventDefault();
               if (taskname.value === "") {
                    alert("Please fill in the name");
                  } else {
                     setTodos([
                      ...todos,
                      {
                        id: Math.random(),
                        text: taskname.value,
                      },
                    ]);
                    // clear the input
                    taskname.value = "";
                  }

            }}>Add</button>
          </form>
        </div>
    );
}
export default AddTodoForm;