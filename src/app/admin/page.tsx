import OverviewTemplate from '@/Components/Templates/AdminTemplate/OverviewTemplate/OverviewTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Panel Admin',
};
export default function AdminPage() {
    return <OverviewTemplate />;
}
