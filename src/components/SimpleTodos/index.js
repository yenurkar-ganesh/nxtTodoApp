import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {id: 1, title: 'Book the ticket for today evening'},
  {id: 2, title: 'Rent the movie for tomorrow movie night'},
  {id: 3, title: 'Confirm the slot for the yoga session tomorrow morning'},
  {id: 4, title: 'Drop the parcel at Bloomingdale'},
  {id: 5, title: 'Order fruits on Big Basket'},
  {id: 6, title: 'Fix the production issue'},
  {id: 7, title: 'Confirm my slot for Saturday Night'},
  {id: 8, title: 'Get essentials for Sunday car wash'},
]

class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList, // Initialize with initialTodosList
    todoText: '',
  }

  deleteTodo = id => {
    const updatedTodos = this.state.todoList.filter(todo => todo.id !== id)
    this.setState({todoList: updatedTodos})
  }

  todoTextHandler = event => {
    this.setState({todoText: event.target.value})
  }

  addTodoHandler = () => {
    const {todoText, todoList} = this.state
    if (todoText.trim() !== '') {
      const [title, count] = todoText.split(' ')
      const numTodos = parseInt(count, 10)

      const newTodos = []
      if (!isNaN(numTodos)) {
        for (let i = 0; i < numTodos; i++) {
          newTodos.push({
            id: Math.random(),
            title,
          })
        }
      } else {
        newTodos.push({
          id: Math.random(),
          title: todoText,
        })
      }

      this.setState({
        todoList: [...todoList, ...newTodos],
        todoText: '',
      })
    }
  }

  updateTodo = (id, updatedTitle) => {
    const updatedTodos = this.state.todoList.map(todo =>
      todo.id === id ? {...todo, title: updatedTitle} : todo,
    )
    this.setState({todoList: updatedTodos})
  }

  render() {
    const {todoText, todoList} = this.state

    return (
      <div className="todos-container">
        <h1>Simple Todos</h1>
        <div className="header-section">
          <input
            type="text"
            onChange={this.todoTextHandler}
            placeholder="Enter todo title and count (e.g., 'Task 3')..."
            className="input"
            value={todoText}
          />
          <button
            onClick={this.addTodoHandler}
            type="button"
            className="add-btn"
          >
            ADD
          </button>
        </div>
        <ul className="todo-list-section">
          {todoList.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={this.deleteTodo}
              updateTodo={this.updateTodo}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default SimpleTodos
