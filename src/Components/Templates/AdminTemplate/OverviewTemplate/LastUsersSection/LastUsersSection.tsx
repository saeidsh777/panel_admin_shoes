import UsersTable from '@/Components/Modules/Tables/UsersTable/UsersTable';
import Link from 'next/link';
import React from 'react'

export default function LastUsersSection() {
  return (
      <section className="box">
          <div className="px-6 py-3 border-b border-zinc-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-zinc-500">
                  Last Users
              </h2>
              <Link
                  href={'/admin/users'}
                  className="text-blue-400 hover:text-blue-500"
              >
                  View All
              </Link>
          </div>
          <div className="p-6">
              <div className="max-h-80 overflow-scroll">
                  <UsersTable />
              </div>
          </div>
      </section>
  );
}
