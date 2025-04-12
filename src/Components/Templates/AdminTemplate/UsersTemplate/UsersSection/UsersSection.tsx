import SearchInput from '@/Components/Modules/Inputs/SearchInput/SearchInput';
import Pagination from '@/Components/Modules/Pagination/Pagination';
import UsersTable from '@/Components/Modules/Tables/UsersTable/UsersTable';

export default function UsersSection() {
    return (
        <section className="box mt-8">
            <div className="p-6">
                <div className="mb-6">
                    <SearchInput />
                </div>
                <div className="overflow-x-scroll">
                    <UsersTable />
                </div>
                <div className='flex justify-center mt-6'>
                    <Pagination />
                </div>
            </div>
        </section>
    );
}
