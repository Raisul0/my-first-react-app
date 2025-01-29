import logo from './logo.svg';
import './App.css';
import React , { useState } from 'react';
import { Button, TextField, List, ListItem, Container, Typography } from '@mui/material';

function App() {

  const [items, setItems] = useState(["item1", "item2", "item3"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" gutterBottom>My First React App</Typography>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
      <TextField
        label="New Item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        fullWidth
        margin='normal'
        />
      <Button variant='contained' color='primary' onClick={addItem}>Add Item</Button>
    </Container>
  );
}

export default App;
