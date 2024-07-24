import React from 'react'
import MyNavbar from '../components/MyNavbar'
import MyTable from '../components/MyTable'
import { Box, Container, Paper } from '@mui/material'

export default function HomePage() {
    return (
        <div>
            <MyNavbar />
            <Container>
                <Box sx={{ margin: 5, borderRadius: 5, bgcolor: 'grey' }}>
                    <Paper elevation={24}>
                        <MyTable />
                    </Paper>
                </Box>
            </Container>
        </div>
    )
}
