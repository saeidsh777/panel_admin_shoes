import React from 'react';
import WidgetProfile from './WidgetProfile/WidgetProfile';
import ProfileInformation from './ProfileInformation/ProfileInformation';

export default function ProfileSection() {
    return (
        <section className="box mt-8 text-zinc-500">
            <div className="grid grid-cols-8">
                <div className="col-span-2 lg:border-r border-zinc-200">
                    <WidgetProfile />
                    <ProfileInformation />
                </div>
                <div className="col-span-6">wewe</div>
            </div>
        </section>
    );
}
