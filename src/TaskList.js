import React from 'react';
import TaskitemsToShow from './TaskitemsToShow'; // Create TaskItem component for each task

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskitemsToShow key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
