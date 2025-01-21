'use client';

import type { NextPage } from 'next';
import Link from 'next/link';
import { Box, Button, Chip, Divider, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

const Inbox: NextPage = () => {
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
                <Stack gap={1} direction="row" alignItems="center" justifyContent="space-between">
                    <Typography
                        variant="h5"
                        fontWeight="bold"
                    >
                        Inbox
                    </Typography>
                    <Chip label="1" size="small" color="error" />
                </Stack>
                <Divider
                    sx={{
                        my: 2
                    }}
                />
                <Typography
                    variant="h6"
                    mb={1}
                    fontWeight="bold"
                >
                    Email Verification
                </Typography>
                <Typography
                    variant="subtitle1"
                    lineHeight={1.5}
                >
                    To complete your account setup, please verify your email address by clicking
                    the link button below.
                </Typography>
                <Link href="/verify" target="_blank">
                    <Button
                        variant="contained"
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
                        Verify
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
};

export default Inbox;