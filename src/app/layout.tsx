import type { Metadata } from 'next';
import './globals.css';

const metadata: Metadata = {
    title: 'Magic Link',
    description: 'Login via Magic Link'
};

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};

export { metadata };
export default RootLayout;