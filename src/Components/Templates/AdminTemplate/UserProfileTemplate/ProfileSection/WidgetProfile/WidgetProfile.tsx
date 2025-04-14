import EditablePhotoProfile from '@/Components/Modules/EditablePhotoProfile/EditablePhotoProfile';
import React from 'react';

export default function WidgetProfile() {
    return (
        <div className="px-4 pt-6">
            <div className="border-b border-zinc-200">
                <EditablePhotoProfile />
                <div className="my-4">
                    <h3 className="text-center font-semibold">Saeid Shojaei</h3>
                    <h4 className="text-center text-sm text-zinc-400">
                        Saeid@gmail.com
                    </h4>
                </div>
            </div>
        </div>
    );
}
