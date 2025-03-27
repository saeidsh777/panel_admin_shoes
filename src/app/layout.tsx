import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = {
    title: {
        template: 'Shop | %s',
        default: 'Shop',
    },
};

const roboto = Roboto({
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body cz-shortcut-listen="true" className={roboto.className}>
                {children}
            </body>
        </html>
    );
}
