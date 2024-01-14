import React, { useState } from 'react';
import {Paper,Box,Typography,Button,Grid,Divider,Input,FormControl,InputLabel,FormHelperText,Card,} from '@mui/material';

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
    <Card elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Enter The Task
      </Typography>
      <FormControl fullWidth>
        <InputLabel htmlFor="my-input"></InputLabel>
        <Input
          id="my-input" aria-describedby="my-helper-text" value={taskText} onChange={handleInputChange} onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddTask();
          }}
        />
        <FormHelperText id="my-helper-text">This will add a task to the list.</FormHelperText>
      </FormControl>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleAddTask}>
          Add Task
        </Button>
      </Box>
    </Card>
  );
};

export default TaskForm;
