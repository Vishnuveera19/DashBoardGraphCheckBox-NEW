import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import SpreadGrid from 'react-spread-grid';
import { Box, TableCell, TableHead, TableRow, IconButton, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const CustomTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Age</TableCell>
      <TableCell>Score</TableCell>
      <TableCell>Registered</TableCell>
      <TableCell>Team</TableCell>
      <TableCell>Delete</TableCell>
    </TableRow>
  </TableHead>
);

export default function App001() {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 25, score: 100, registered: true, team: 'ed', },
    { id: 2, name: 'Alice', age: 24, score: 70, registered: false, team: 'blue' },
    { id: 3, name: 'Bob', age: 26, score: 35, registered: true, team: 'blue' },
    { id: 4, name: 'Charlie', age: 27, score: 60, registered: false, team: 'ed' },
    { id: 5, name: 'David', age: 18, score: 60, registered: true, team: 'ed' },
    { id: 6, name: 'Eve', age: 29, score: 80, registered: false, team: 'green' },
    { id: 7, name: 'Frank', age: 30, score: 50, registered: true, team: 'blue' }
  ]);

  const formatting = [
    {
      style: { background: 'cornflowerblue' },
      component: ({ children }) => (
        <Box sx={{ p: 1, color: 'white' }}>{children}</Box>
      ),
    },
  ];

  const handleDeleteRow = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const handleAddRow = () => {
    const newRow = { id: data.length + 1, name: '', age: 0, score: 0, registered: false, team: '' };
    setData([...data, newRow]);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleAddRow}>
        <AddIcon />
        Add Row
      </Button>
      <SpreadGrid
        data={data}
        formatting={formatting}
        style={{ height: 600, width: 800, overflowY: 'auto' }}
        components={{
          TableHead: CustomTableHead,
          TableRow: ({ row }) => (
            <TableRow key={row.id} style={{height:"50px",}}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.score}</TableCell>
              <TableCell>{row.registered.toString()}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="error" onClick={() => handleDeleteRow(row.id)}>
                  <DeleteIcon />
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ),
        }}
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App001 />);