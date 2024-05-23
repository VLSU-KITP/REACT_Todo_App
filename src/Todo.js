import React from 'react';
import { Checkbox, IconButton, ListItem, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({ todo, toggleComplete, deleteTodo }) {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <Checkbox
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            <ListItemText
                primary={todo.title}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            />
        </ListItem>
    );
}

export default Todo;
