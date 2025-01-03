import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

export default function CustomTable({ rows, columns, paginationModel, pageSizeOptions, checkboxSelection = false }) {
  return (
    <Paper sx={{ height: '51vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={checkboxSelection}
        sx={{
          border: 0,
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#b3b9c6 !important',
            fontWeight: 'bold',
          },
        }}
      />
    </Paper>
  );
}
