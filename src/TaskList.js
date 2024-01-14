import React, { useState, useEffect } from 'react';
import { Paper, Box, Typography, Button, Grid, Divider, Input, FormControl, InputLabel, FormHelperText, Card, Chip } from '@mui/material';

const TaskList = ({ tasks, setTasks }) => {
    const [toggleSort, setToggleSort] = useState(false);
    useEffect(() => {
        sortTasks(tasks);
    }, [tasks])

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


    return (
        <Box mx={5}>
            <Box pt={3} pb={5}>
                <Typography variant='h5'>Task List</Typography>

            </Box>
            {!!tasks && tasks.map(task => (
                <div className='  '>
                    <Grid key={task.id} container justifyContent={"space-between"}>
                        <Grid item>
                            <Typography
                                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                onClick={() => handleTaskClick(task.id)}
                            >
                                <input type="checkbox" />



                            </Typography>

                        </Grid>
                        <Grid item xs={8} >
                            <div className={task.completed ? 'Greyed' : ''} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>


                                {task.text}
                            </div>
                        </Grid>
                        <Grid item>
                            {task.completed === true ?
                                <Chip label="Completed" style={{ background: "green", color: "white" }} /> :
                                <Chip label="In Progress" variant="outlined" style={{ background: "yellow", color: "black" }} />}
                            {/* {task.completed === true ? <Button>
                completed
              </Button> : <Button>In Progress</Button>} */}
                        </Grid>
                        <Grid item>
                            <Button variant='contained' onClick={() => handleTaskDelete(task.id)}>Delete</Button>
                        </Grid>
                    </Grid>
                    <Box my={2}>
                        <Divider />
                    </Box>
                </div>
            ))}
        </Box>
    );
};

export default TaskList;
