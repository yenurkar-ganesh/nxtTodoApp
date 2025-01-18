import {Component} from 'react'
import './index.css'

const TodoItem = ({todo, deleteTodo}) => {
  const {title, id} = todo
  return (
    <li className="list-item" key={id}>
      <p className="title">{title}</p>
      <button className="btn" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
