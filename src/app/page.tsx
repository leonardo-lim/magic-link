'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import {
    Alert,
    Box,
    Button,
    Divider,
    FormControl,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import { grey } from '@mui/material/colors';

const Login: NextPage = () => {
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const { value } = e.target;

        if (!emailRegex.test(value) && value) {
            setIsError(true);
        } else {
            setIsError(false);
        }

        setEmail(value);
    };

    const handleLogin = () => {
        if (!isError && email) {
            setEmail('');
            setIsSuccess(true);
        }
    };

    return (
        <Box
            minHeight="100vh"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Stack
                width={{
                    xs: '100%',
                    sm: 400,
                    md: 450,
                    lg: 500,
                    xl: 600
                }}
                p={4}
                borderRadius={4}
                boxShadow="0 0 5px 5px rgba(0, 0, 0, 0.1)"
            >
                <Typography
                    variant="h5"
                    mb={1}
                    fontWeight="bold"
                    textAlign="center"
                >
                    Welcome!
                </Typography>
                <Typography
                    variant="subtitle1"
                    textAlign="center"
                    lineHeight={1.5}
                >
                    Login with your email to continue
                </Typography>
                <Divider
                    sx={{
                        width: 60,
                        mx: 'auto',
                        my: 3
                    }}
                />
                {isSuccess && (
                    <Alert
                        variant="filled"
                        severity="success"
                        sx={{
                            mb: 2,
                            borderRadius: 3
                        }}
                    >
                        A verification email has been sent to your inbox.{' '}
                        <Link href="/inbox" target="_blank">
                            <Typography
                                component="span"
                                sx={{
                                    fontSize: 14,
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                }}
                            >
                                Check
                            </Typography>
                        </Link>
                    </Alert>
                )}
                <FormControl>
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        size="small"
                        placeholder="Enter your email"
                        value={email}
                        error={isError}
                        helperText={isError ? 'Invalid email format' : ''}
                        onChange={handleChangeEmail}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 3
                            }
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={handleLogin}
                        disabled={isError || !email}
                        sx={{
                            width: '100%',
                            marginTop: 2,
                            background: grey[800],
                            fontSize: 16,
                            textTransform: 'initial',
                            borderRadius: 3,
                            '&:hover': {
                                background: grey[900]
                            }
                        }}
                    >
                        Login
                    </Button>
                </FormControl>
            </Stack>
        </Box>
    );
};

export default Login;