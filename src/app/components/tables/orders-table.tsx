"use client"
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface OrdersTableProps {
  data: Orders[] | [];
  page: number;
  limit: number;
  totalCount: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function OrdersTable({
  data,
  page,
  limit,
  totalCount,
  onPageChange,
  onRowsPerPageChange
}: OrdersTableProps) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Flavour</StyledTableCell>
            <StyledTableCell align="right">Size</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Total</StyledTableCell>
            <StyledTableCell align="right">Contact</StyledTableCell>
            <StyledTableCell align="right">Attendant</StyledTableCell>
            <StyledTableCell align="right">Deposit</StyledTableCell>
            <StyledTableCell align="right">Balance</StyledTableCell>
            <StyledTableCell align="right">Delivery Location</StyledTableCell>
            <StyledTableCell align="right">Additional Description</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="right">{row.order_id}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.flavour}</StyledTableCell>
              <StyledTableCell align="right">{row.size}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">{row.time}</StyledTableCell>
              <StyledTableCell align="right">{row.total}</StyledTableCell>
              <StyledTableCell align="right">{row.contact}</StyledTableCell>
              <StyledTableCell align="right">{row.attendant}</StyledTableCell>
              <StyledTableCell align="right">{row.deposit}</StyledTableCell>
              <StyledTableCell align="right">{row.balance}</StyledTableCell>
              <StyledTableCell align="right">{row.delivery_location}</StyledTableCell>
              <StyledTableCell align="right">{row.additional_description}</StyledTableCell>
              <StyledTableCell align="right">{row.image}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
