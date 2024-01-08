import React, { useState } from 'react';
import { Paper, Box, Typography, Button, Grid, Divider, Input } from '@mui/material';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <div>
      <Input placeholder='Please enter the Task' variant='contained' type="text" value={taskText} onChange={handleInputChange} />
      <Button variant='outlined' onClick={handleAddTask}>Add Task</Button>
    </div>
  );
};

export default TaskForm;