import { Paper, Box, Typography, Button, Grid, Divider, Input, Chip,Snackbar } from '@mui/material';
import { useEffect, useRef, useState,forwardRef } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import Alert from '@mui/material/Alert';
import MuiAlert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';


function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false }
  ]);
  const [toggleSort, setToggleSort] = useState(false);
  const [open, setOpen] = useState(false);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text, completed: false };
    setOpen(true);
    setTasks([...tasks, newTask]);
    setTimeout(() =>{
      setOpen(false);
    },2000)
  };
  

  const handleClick = () => {
    setOpen(true);
  };

  

  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} >
        <Alert  severity="success" sx={{ width: '100%' }}>
          Task Added successfully.
        </Alert>
      </Snackbar>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >

            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TASK TRACKER
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <div className='TaskDirection'>
          <Box mx={5} my={5} width={"50%"}>

            <Paper mx={5}>
              <Box mx={5}>
                {/* <Box pt={3} pb={5}>
              <Typography variant='h4'>Add Task</Typography>
            </Box> */}
                <Box pt={3} pb={5}>
                  <TaskForm onAddTask={addTask} />
                </Box>
              </Box>
            </Paper>
          </Box>
          <Box mx={5} my={5} width={"100%"}>
            <Paper>
              <TaskList tasks={tasks} setTasks={setTasks} />
            </Paper>
          </Box>
        </div>
      </Box>


    </>
  );
}

export default App;