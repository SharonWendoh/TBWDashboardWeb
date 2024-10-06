'use client'
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TablePagination } from '@mui/material';
import Paper from '@mui/material/Paper';

interface CommissionDetailsTableProps {
  data: CakeFlavour[] | [];
  page: number;
  limit: number;
  totalCount: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function MenuTable({
  data,
  page,
  limit,
  totalCount,
  onPageChange,
  onRowsPerPageChange
}: CommissionDetailsTableProps){
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>ID</TableCell>
              <TableCell>Flavor</TableCell>
              <TableCell>1 kg</TableCell>
              <TableCell>1.5 kg</TableCell>
              <TableCell>2 kg</TableCell>
              <TableCell>2.5 kg</TableCell>
              <TableCell>3 kg</TableCell>
              <TableCell>3.5 kg</TableCell>
              <TableCell>4 kg</TableCell>
              <TableCell>4.5 kg</TableCell>
              <TableCell>per kg</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell>{row.id}</TableCell>
              <TableCell>{row.flavor}</TableCell>
              <TableCell>{row.price_1kg}</TableCell>
              <TableCell>{row.price_1_5kg}</TableCell>
              <TableCell>{row.price_2kg}</TableCell>
              <TableCell>{row.price_2_5kg}</TableCell>
              <TableCell>{row.price_3kg}</TableCell>
              <TableCell>{row.price_3_5kg}</TableCell>
              <TableCell>{row.price_4kg}</TableCell>
              <TableCell>{row.price_4_5kg}</TableCell>
              <TableCell>{row.price_per_kg}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={totalCount} 
        rowsPerPage={limit}
        page={page}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
      />
    </TableContainer>
  );
}