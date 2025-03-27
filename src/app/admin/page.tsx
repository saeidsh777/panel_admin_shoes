import AdminTemplate from '@/Components/Templates/AdminTemplate/AdminTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Panel Admin',
};
export default function AdminPage() {
    return <AdminTemplate />;
}
