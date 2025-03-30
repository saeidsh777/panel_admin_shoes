import AdminAside from '@/Components/Templates/AdminTemplate/AdminAside/AdminAside';
import AdminHeader from '@/Components/Templates/AdminTemplate/AdminAside/AdminHeader/AdminHeader';
import AdminTemplate from '@/Components/Templates/AdminTemplate/AdminTemplate';
import StoreProvider from '@/redux/StoreProvider';

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <StoreProvider>
                <AdminAside />
                <AdminHeader />
                <AdminTemplate>{children}</AdminTemplate>
            </StoreProvider>
        </div>
    );
}
