import React from "react";
import { Box, Typography, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import InputSearch from "../../components/InputSearch";
import CustomTable from '../../components/CustomTable';
import { Link } from "react-router-dom";

const columns = [
  { field: 'Code', headerName: 'Mã', width: 400 },
  { field: 'Name', headerName: 'Tên danh mục', width: 400 }
];

const rows = [
  { id: 1, Code: 'Snow', Name: 'Jon' },
  { id: 2, Code: 'Lannister', Name: 'Cersei' },
];

const paginationModel = { page: 0, pageSize: 2 };

function Category () {
  return (
    <Box className='box-main-category'>
      <Box className='box-title-category'>
        <Typography variant="h5" className="text-header-category">Danh mục sản phẩm</Typography>
        <Link to='/categories/add'>
          <Button variant="contained" className="text-header-category">
              <AddIcon /> Thêm
          </Button>
        </Link>
        
      </Box>
      <Box className='box-table-category'>
        <InputSearch />
        <CustomTable
          rows={rows}
          columns={columns}
          paginationModel={paginationModel}
          checkboxSelection
        />
      </Box>   
    </Box>
  );
};

export default Category;