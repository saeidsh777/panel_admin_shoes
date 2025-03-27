import AdminAside from '@/Components/Templates/AdminTemplate/AdminAside/AdminAside';

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div className='flex'>
                <AdminAside />
                {children}
            </div>
        </div>
    );
}
