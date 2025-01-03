import * as React from 'react';
import { Box, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function DetailCategory () {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    return (
        <Box className='box-main-category-detail'>
            <Typography variant="h5" className="text-header-category">Thêm danh mục sản phẩm</Typography>
            <Box>
                <TextField
                    label="Mã"
                    id="Code"
                    sx={{ m: 1, width: '120vh' }}
                    disabled
                />
                <TextField
                    label="Tên danh mục"
                    id="Name"
                    sx={{ m: 1, width: '120vh' }}
                />
            </Box>      
            <Box className='box-btn-detail'>
                <Button variant="contained">Lưu</Button>
                <Button variant="outlined" onClick={handleBack}>Quay lại</Button>
            </Box>           
        </Box>
    )
}

export default DetailCategory;