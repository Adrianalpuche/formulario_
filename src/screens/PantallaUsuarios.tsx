
import React from 'react';
import {users} from '../resources/User.ts'
import TableContainer from '@mui/material/TableContainer';
import { Table,TableBody,TableHead,TableRow,TableCell,Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink, Link } from 'react-router-dom';



function PantallaUsuarios () {
    const rowColors = ['#FFFFFF', '#242424']; 
    const colors = ['#242424','#FFFFFF'];

  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
      <TableHead>
        <TableRow style={{ backgroundColor: '#242424', }}>
          <TableCell style={{  color:'#FFFFFF' }}>ID</TableCell>
          <TableCell align="right" style={{  color:'#FFFFFF' }}>Name</TableCell>
          <TableCell align="right" style={{  color:'#FFFFFF' }}>Address</TableCell>
          <TableCell align="right"style={{  color:'#FFFFFF' }}>Role</TableCell>
          <TableCell align="right" style={{  color:'#FFFFFF' }}>Salary</TableCell>
          <TableCell align="right" style={{  color:'#FFFFFF' }}>Actions
            </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(({ id, name, address, role, salary },index)  => (
          <TableRow
            key={id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            style={{ backgroundColor: rowColors[index % 2] }}
          >
            <TableCell style={{  color:colors[index % 2] }} >{id}</TableCell>
            <TableCell align="right" style={{  color:colors[index % 2] }}> {name}</TableCell>
            <TableCell align="right" style={{  color:colors[index % 2] }}>{address}</TableCell>
            <TableCell align="right" style={{  color:colors[index % 2] }}>{role}</TableCell>
            <TableCell align="right" style={{  color:colors[index % 2] }}>{salary}</TableCell>
            <TableCell align="right">
                <Link to={`/Formulario/${id}`} >
                    <IconButton size="large" edge="end" aria-label="logo"  style={{ color: '#479BBF'}}>
                        <EditIcon fontSize='large'/>
                    </IconButton>
                </Link>
                </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
}

export default PantallaUsuarios;