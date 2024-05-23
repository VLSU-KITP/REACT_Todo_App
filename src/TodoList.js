import React, { useState } from 'react';
import { TextField, Button, List, Typography, Container, Paper } from '@mui/material';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodoTitle, setNewTodoTitle] = useState('');

    const addTodo = () => {
        if (newTodoTitle.trim()) {
            setTodos([
                ...todos,
                { id: Date.now(), title: newTodoTitle, completed: false }
            ]);
            setNewTodoTitle('');
        }
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <Container maxWidth="sm">
            <Paper style={{ padding: 16 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Список задач
                </Typography>
                <div style={{ display: 'flex', marginBottom: 16 }}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Новая задача"
                        value={newTodoTitle}
                        onChange={(e) => setNewTodoTitle(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={addTodo}
                        style={{ marginLeft: 8 }}
                    >
                        Добавить
                    </Button>
                </div>
                <List>
                    {todos.map(todo => (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            toggleComplete={toggleComplete}
                            deleteTodo={deleteTodo}
                        />
                    ))}
                </List>
            </Paper>
        </Container>
    );
}

export default TodoList;
