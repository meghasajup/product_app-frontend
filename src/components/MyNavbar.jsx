import React from 'react'
import Box from '@mui/material/Box';
import './MyNavbar.css';
import { Stack, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import useAuthStore from '../store/authStore';

export default function MyNavbar() {

    const navigate = useNavigate();
    const { logoutAuth } = useAuthStore();
    const logOut = () => {
        logoutAuth();
        toast.info("Logout successful");
        navigate('/login')
    }

    return (
        <>
            <Box components="section" sx={{ p: 2, backgroundColor: 'purple' }}>
                <Stack direction="row" justifyContent="space-around" alignItems="center" spacing={5}>

                    <Link to={'/'} style={{ textDecoration: "none" }} >
                        <Typography variant="h6" sx={{ color: 'white', cursor: 'pointer' }}>Home</Typography>
                    </Link>

                    <Link to={'/add-form'} style={{ textDecoration: "none" }} >
                        <Typography variant="h6" sx={{ color: 'white', cursor: 'pointer' }}>Add Product</Typography>
                    </Link>

                    <Typography variant="h6" sx={{ color: 'white', cursor: 'pointer' }} onClick={logOut}>Logout</Typography>
                </Stack>
            </Box>
        </>
    )
}
