# Полный код с учетом установки иконок
0. Установить Node.js на ПК
1. Установка Create React App и Material-UI
```
npx create-react-app todo-app
cd todo-app
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```
2. Создание компонента для задач (src/Todo.js)
```js
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
```
3. Создание основного компонента (src/TodoList.js)
```js
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
```
4. Обновление App.js
```js
import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
```
5. Запуск приложения
```
npm start
```