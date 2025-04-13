import React from 'react';

export default function ProfileEdit() {
    return (
        <div className="p-6">
            <form action="">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="mb-2 inline-block" htmlFor="">
                            Name
                        </label>
                        <input
                            type="text"
                            className="border border-zinc-200 rounded-xl py-2 px-4 w-full bg-zinc-50 outline-none"
                        />
                    </div>
                    <div>
                        <label className="mb-2 inline-block" htmlFor="">
                            Email
                        </label>
                        <input
                            type="Email"
                            className="border border-zinc-200 rounded-xl py-2 px-4 w-full bg-zinc-50 outline-none"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="mb-2 inline-block" htmlFor="">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            className="border border-zinc-200 rounded-xl py-2 px-4 w-full bg-zinc-50 outline-none"
                        />
                    </div>
                    <div className="place-content-end">
                        <button type="submit" className="btn_global">
                            Update Profile
                        </button>
                    </div>
                </div>
            </form>
            <hr className="my-8 text-zinc-100" />

            <h3 className="font-semibold mb-8">Change Password</h3>
            <form action="">
                <div className="mb-4">
                    <label className="mb-2 inline-block" htmlFor="">
                        New Password
                    </label>
                    <input
                        type="text"
                        className="border border-zinc-200 rounded-xl py-2 px-4 w-full bg-zinc-50 outline-none"
                    />
                </div>
                <button type="submit" className="btn_global">
                    Change Password
                </button>
            </form>
        </div>
    );
}
