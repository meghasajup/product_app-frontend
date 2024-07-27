import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import useLoginStore from '../store/loginStore';

export default function MySignupForm() {

    const { setToggle } = useLoginStore();

    return (
        <>
            <Box height={500} width={500} m={4}>
                <Typography variant="h4" align='center' sx={{ marginY: 5 }}>Sign Up</Typography>
                <Stack spacing={3}>
                    <TextField label="Email" variant='outlined' />
                    <TextField label="New Password" variant='outlined' />
                    <TextField label="Confirm Password" variant='outlined' />
                    <Button variant='contained'>SignUp</Button>
                </Stack>
                <Typography variant="subtitle1" align='center'>Already Existing?<Link onClick={setToggle} sx={{ cursor: 'pointer' }}> Login Here</Link></Typography>
            </Box>
        </>
    )
}