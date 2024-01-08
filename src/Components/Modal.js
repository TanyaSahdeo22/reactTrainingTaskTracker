import React from 'react'

function Modal({closeModal}) {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <button onClick={() => closeModal(false)}>X</button>
            <div className="title">
                <h1>Are you sure you want to Delete the task</h1>
            </div>
            <div className="body">
                <p>The selected task will be deleted</p>
            </div>
            <div className="footer">
                <button onClick={()=>closeModal(false)}>Cancel</button>
                <button>Delete</button>
            </div>
        </div>

    </div>
  )
}

export default Modal
