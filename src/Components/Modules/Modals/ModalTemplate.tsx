'use client';
import { useAppDispatch, useAppSelector } from '@/redux/reduxHooks';
import { hideModal } from '@/redux/slices/showModal';
import React, { Suspense } from 'react';
import Loading from '../Loading/Loading';

const loadComponent = (name: string) => {
    return React.lazy(
        () => import(`@/Components/Modules/Modals/${name}/${name}`)
    );
};

export default function ModalTemplate() {
    const dispatch = useAppDispatch();
    const isShow = useAppSelector((state) => state.modal.isShow);
    const componentName = useAppSelector((state) => state.modal.componentName);

    const SelectedComponent = componentName
        ? loadComponent(componentName)
        : null;

    if (isShow) {
        return (
            <section className="w-svw h-svh fixed top-0 z-50 flex justify-center items-center">
                <div
                    className="w-full h-full bg-black/20 absolute top-0 left-0"
                    onClick={() => dispatch(hideModal())}
                ></div>
                <Suspense fallback={<Loading />}>
                    {SelectedComponent && <SelectedComponent />}
                </Suspense>
            </section>
        );
    }
}
