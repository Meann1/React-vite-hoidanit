const TodoNew = (props) => {
    console.log("Check props: ", props);
    const {addNewTodo} = props;
    addNewTodo();
    return (
        <div className="todo-new">
            <input placeholder="Enter your task" type="text" />
            <button>Add</button>
        </div>
    );
}
export default TodoNew;