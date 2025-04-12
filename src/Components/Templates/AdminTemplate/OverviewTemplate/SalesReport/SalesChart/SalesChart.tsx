import React, { PureComponent } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

interface MyComponentProps {
    data: { name: string; uv: number; pv: number; amt: number }[];
}

export default class SalesChart extends PureComponent<MyComponentProps> {
    render() {
        const { data } = this.props;
        return (
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 0,
                        bottom: 30,
                    }}
                >
                    <CartesianGrid vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" fontSize={12} />
                    <YAxis fontSize={10} />
                    <Tooltip contentStyle={{ fontSize: '.7rem' }} />
                    <Area
                        type="monotone"
                        dataKey="uv"
                        stroke="#8884d8"
                        fill="#8884d8"
                        strokeWidth={3}
                    />
                    <Area
                        type="monotone"
                        dataKey="pv"
                        stroke="#f86d6d"
                        fill="#ffb5b5"
                        strokeWidth={3}
                    />
                    <Area
                        type="monotone"
                        dataKey="amt"
                        stroke="#8cd28c"
                        fill="#bfb"
                        strokeWidth={3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
