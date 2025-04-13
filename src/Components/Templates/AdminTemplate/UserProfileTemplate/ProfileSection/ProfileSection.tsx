'use client';
import WidgetProfile from './WidgetProfile/WidgetProfile';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import ProfileTab from './ProfileTab/ProfileTab';
import ProfileReport from './ProfileReport/ProfileReport';
import ProfileEdit from './ProfileEdit/ProfileEdit';
import { useState } from 'react';

export default function ProfileSection() {
    const [tab, setTab] = useState<1 | 2>(1);

    return (
        <section className="box mt-8 text-zinc-500">
            <div className="grid grid-cols-1 lg:grid-cols-8">
                <div className="lg:col-span-2 lg:border-r border-zinc-200">
                    <WidgetProfile />
                    <ProfileInformation />
                </div>
                <div className="lg:col-span-6">
                    <ProfileTab tab={tab} setTab={setTab} />
                    {tab === 1 && <ProfileReport />}
                    {tab === 2 && <ProfileEdit />}
                </div>
            </div>
        </section>
    );
}
