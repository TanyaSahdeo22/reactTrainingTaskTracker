import React from 'react';

const TaskitemsToShow = ({ task }) => {
  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
    </div>
  );
};

export default TaskitemsToShow;