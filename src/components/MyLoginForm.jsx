import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import useLoginStore from '../store/loginStore';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { login } from '../apis/Index.jsx';

export default function MyLoginForm() {

    const { setToggle } = useLoginStore();
    const { register, handleSubmit, reset,} = useForm();
    const navigate = useNavigate();

    const toLogin = async (data) => {
        try {
            let res = await login(data);
            console.log(res);
            toast.success("Success")
            navigate('/')
        } catch (error) {
            toast.error(error.response.data.error)
            reset();
        }
    }

    return (
        <>
            <Box height={500} width={500} m={4} >
                <Typography variant="h4" align='center' sx={{ marginY: 5 }}>Login</Typography>
                <form onSubmit={handleSubmit(toLogin)}>
                    <Stack spacing={3}>
                        <TextField label="Email" variant="outlined" {...register("email")} />
                        <TextField label="Password" variant="outlined" {...register("password")} />
                        <Button variant="contained" type='submit'>Login</Button>
                    </Stack>
                </form>
                <Typography variant="subtitle1" align='center'>New? <Link onClick={setToggle} sx={{ cursor: 'pointer' }}>SignUp Here</Link></Typography>
            </Box>
        </>
    )
}