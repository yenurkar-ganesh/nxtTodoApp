import {useState} from 'react'
import './index.css'

const TodoItem = ({todo, deleteTodo, updateTodo}) => {
  const {title, id} = todo
  const [isEditing, setIsEditing] = useState(false)
  const [updatedTitle, setUpdatedTitle] = useState(title)

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = () => {
    if (updatedTitle.trim() !== '') {
      updateTodo(id, updatedTitle)
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setUpdatedTitle(title)
  }

  return (
    <li className="list-item" role="listitem">
      {isEditing ? (
        <div className="edit-section">
          <input
            type="text"
            className="edit-input"
            value={updatedTitle}
            onChange={e => setUpdatedTitle(e.target.value)}
          />
          <button className="saveBtn" onClick={handleSave}>
            Save
          </button>
          <button className="cancelBtn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <>
          <p className="title">{title}</p>
          <div className="btn-section">
            <button className="deleteBtn" onClick={() => deleteTodo(id)}>
              Delete
            </button>
            <button className="editBtn" onClick={handleEdit}>
              Edit
            </button>
          </div>
        </>
      )}
    </li>
  )
}

export default TodoItem
