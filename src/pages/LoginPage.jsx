import React from 'react'
import MySignupForm from '../components/MySignupForm'
import MyLoginForm from '../components/MyLoginForm'
import useLoginStore from '../store/loginStore';
import { Box } from '@mui/material';

export default function LoginPage() {

  const { isToggle } = useLoginStore()

  return (
    <div>
      <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {isToggle ? <MyLoginForm /> : <MySignupForm />}
      </Box>
    </div>
  );
}