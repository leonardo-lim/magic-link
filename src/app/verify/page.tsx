'use client';

import type { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useAuthStore } from '@/stores/auth-store';

const Verify: NextPage = () => {
    const { setToken } = useAuthStore();
    const router = useRouter();

    const generateToken = (length: number) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';

        for (let i = 0; i < length; i++) {
            token += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        setToken(token);
    };

    useEffect(() => {
        generateToken(155);

        setTimeout(() => {
            router.push('/authenticated');
        }, 1000);
    }, []);

    return (
        <Box
            minHeight="100vh"
            p={6}
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Typography
                variant="h6"
                fontWeight="bold"
            >
                Verifying your email...
            </Typography>
        </Box>
    );
};

export default Verify;