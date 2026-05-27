import TodoData from './component/todo/todo-data';
import './component/todo/todo.css'
import TodoNew from './component/todo/todoNew';
import logo from './assets/react.svg'

function App() {
    const hoidanit = "Eric MU";
    const age = 25;
    const data = {
        address: "Hanoi",
        country: "Vietnam"
    }

    const addNewTodo = () => {
        alert("call me");
    }

    // addNewTodo();
    return (
        <div className="todo-container">
            <div className="todo-title">Todo List</div>
            <TodoNew
                addNewTodo={addNewTodo}
            />
            <TodoData
                name={hoidanit}
                age={age}
                data={data}
            />
            <div className="todo-image">
                <img src={logo} className="logo"/>
            </div>
        </div>
    )
}

export default App
