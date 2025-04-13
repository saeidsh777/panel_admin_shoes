'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function BreadCrumbPanel({ title }: { title: string }) {
    const path = usePathname();
    const [pathNames, setPathNames] = useState<string[] | []>([]);
    useEffect(() => {
        const pathNamesArray = path.split('/').filter((p) => p);
        setPathNames(pathNamesArray);
    }, [path]);

    const generatePath = () => {
        const linkGenerator = (index: number): string => {
            const createLinkeArray = pathNames.slice(0, index + 1);
            const createLinkString = createLinkeArray.join('/');
            const createLinkUrl = `/${createLinkString}`;
            return createLinkUrl;
        };
        return (
            <div className="text-zinc-400">
                {pathNames.map((item, index) => {
                    if (item === 'admin') {
                        return (
                            <React.Fragment key={index}>
                                <Link className="text-blue-400" href={'/admin'}>
                                    Home
                                </Link>

                                {pathNames.length != index + 1 ? (
                                    <span> / </span>
                                ) : (
                                    ''
                                )}
                            </React.Fragment>
                        );
                    }
                    return (
                        <React.Fragment key={index}>
                            {pathNames.length == index + 1 ? (
                                <span className=" capitalize">
                                    {item.includes('-')
                                        ? item.split('-').join(' ').toString()
                                        : item}
                                </span>
                            ) : (
                                <Link
                                    className="text-blue-400 capitalize"
                                    href={linkGenerator(index)}
                                >
                                    {item.includes('-')
                                        ? item.split('-').join(' ').toString()
                                        : item}
                                </Link>
                            )}

                            {pathNames.length != index + 1 ? (
                                <span> / </span>
                            ) : (
                                ''
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        );
    };

    return (
        <div>
            <h3 className="font-semibold text-2xl text-zinc-600">{title}</h3>

            {generatePath()}
        </div>
    );
}
