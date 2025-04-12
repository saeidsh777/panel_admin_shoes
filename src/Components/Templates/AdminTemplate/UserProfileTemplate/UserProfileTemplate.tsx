import React from 'react';
import BreadCrumbPanel from '../BreadCrumbPanel/BreadCrumbPanel';
import ProfileSection from './ProfileSection/ProfileSection';

export default function UserProfileTemplate() {
    return (
        <div>
            <BreadCrumbPanel title="User Profile" />
            <ProfileSection />
        </div>
    );
}
