'use client';

import type { NextPage } from 'next';
import { Alert, Box, Stack, Typography } from '@mui/material';
import { useAuthStore } from '@/stores/auth-store';

const Authenticated: NextPage = () => {
    const { token } = useAuthStore();

    return (
        <Box
            minHeight="100vh"
            p={6}
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
                <Alert
                    variant="filled"
                    severity="success"
                    sx={{
                        mb: 2,
                        borderRadius: 3
                    }}
                >
                    Authentication successful
                </Alert>
                <Typography
                    variant="h6"
                    mb={1}
                    fontWeight="bold"
                >
                    Your email address has been successfully verified.
                </Typography>
                <Typography
                    variant="subtitle1"
                    lineHeight={1.5}
                    sx={{
                        wordBreak: 'break-all'
                    }}
                >
                    {token}
                </Typography>
            </Stack>
        </Box>
    );
};

export default Authenticated;