'use client';
import { useEffect, useState } from 'react';
import { PiClockCounterClockwise } from 'react-icons/pi';

export default function ShippingTime({ time }: { time: string }) {
    const [elapsedTime, setElapsedTime] = useState<number | string>(0);
    const [timeType, setTimeType] = useState('-');
    useEffect(() => {
        const timeNow = Date.now();
        const submissionTime = Date.parse(time);

        const elapsedMilliseconds = timeNow - submissionTime;
        const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
        const elapsedMinutes = Math.floor(elapsedSeconds / 60);
        const elapsedHours = Math.floor(elapsedMinutes / 60);
        const elapsedDays = Math.floor(elapsedHours / 24);

        if (elapsedMinutes < 60) {
            setElapsedTime(Math.floor(elapsedMinutes));
            setTimeType('min');
        } else if (elapsedMinutes > 60 && elapsedHours < 24) {
            setElapsedTime(Math.floor(elapsedHours));
            setTimeType('hrs');
        } else if (
            elapsedMinutes > 60 &&
            elapsedHours > 24 &&
            elapsedDays < 29
        ) {
            setElapsedTime(Math.floor(elapsedDays));
            setTimeType('day');
        } else {
            setElapsedTime(new Date(time).toLocaleDateString());
            setTimeType('');
        }
    }, []);

    return (
        <small className="text-zinc-400 flex items-center gap-1">
            <PiClockCounterClockwise />
            {elapsedTime} {timeType} age...
        </small>
    );
}
