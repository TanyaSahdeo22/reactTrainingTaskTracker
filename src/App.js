import { Paper, Box, Typography, Button, Grid, Divider, Input } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

/**
 * Simple task tracker app.
 * (For training purposes)
 */
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: false },
    { id: 3, text: 'Task 3', completed: false }
  ]);
  const [toggleSort, setToggleSort] = useState(false);

 

  /**
   * Handels the click on a task and toggles the complete property of the task object.
   *
   * @param {number} taskId
   */
  const handleTaskClick = (taskId) => {
    // Iterate all tasks and find passed task by id

    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        // Toggle completed property
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  /**
   * Handles the click on the delete button and removes it from the tasks list.
   *
   * @param {number} taskId
   */
  const handleTaskDelete = (taskId) => {
    // Filter all tasks excpet task with passed id
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    alert('Task has been deleted')
  };
  const sortTasks = (tasks) => {
    // Sort tasks - incomplete tasks first, then completed tasks
    setToggleSort(!toggleSort);
    return tasks.sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1));
  };
  const addTask = (text) => {
    const newTask = { id: tasks.length + 1, text, completed: false };
    setTasks([...tasks, newTask]);
  };
   useEffect(() => {
    sortTasks(tasks);
  }, [ tasks])

  return (
    <>
      <Box mx={5} my={5}>

        <Paper mx={5}>
          <Box mx={5}>
            <Box pt={3} pb={5}>
              <Typography variant='h4'>Add Task</Typography>
            </Box>
            <Box pt={3} pb={5}>
              <TaskForm onAddTask={addTask} />
            </Box>
          </Box>
        </Paper>
      </Box>
      <Box mx={5} my={5}>
        <Paper mx={5}>
          <Box mx={5}>
            <Box pt={3} pb={5}>
              <Typography variant='h4'>Task Tracker</Typography>
            </Box>
            {!!tasks && tasks.map(task => (
              <>
                <Grid key={task.id} container justifyContent={"space-between"}>
                  <Grid item>


                    <Typography
                      style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                      onClick={() => handleTaskClick(task.id)}
                    >
                      <input type="checkbox" />
                      <div className={task.completed ? 'Greyed' : ''}>


                        {task.text}
                      </div>


                    </Typography>
                    <Grid>
                      {task.completed === true ? <Button>
                        completed
                      </Button> : <Button>In Progress</Button>}
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button variant='contained' onClick={() => handleTaskDelete(task.id)}>Delete</Button>
                  </Grid>
                </Grid>
                <Box my={2}>
                  <Divider />
                </Box>
              </>
            ))}
          </Box>

        </Paper>
        {/* <Paper>
       <TaskList tasks={tasks} />
      </Paper> */}
      </Box>
      {/* <>
<div>
<TaskForm onAddTask={addTask} />
<TaskList tasks={tasks} />
</div>
</> */}

    </>
  );
}

export default App;