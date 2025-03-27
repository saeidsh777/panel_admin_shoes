import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Link href={'/admin'}>Panel Admin</Link>
        </div>
    );
}
