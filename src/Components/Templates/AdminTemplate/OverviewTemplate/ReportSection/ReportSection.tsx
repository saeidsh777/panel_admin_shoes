import React from 'react';
import ReportCard from './ReportCard/ReportCard';

export default function ReportSection() {
    return (
        <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8 mb-8">
            <ReportCard title="Daily Signups" value={2350} type={1} />
            <ReportCard title="Daily Visitors" value={2350} type={2} />
            <ReportCard title="Daily Order" value={2350} type={3} />
            <ReportCard title="Daily Revenue" value={2350} type={4} />
        </section>
    );
}

