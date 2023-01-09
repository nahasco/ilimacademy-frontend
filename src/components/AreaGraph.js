import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AreaGraph({ data }) {
    return (
        <ResponsiveContainer width="99%" height="99%">
            <AreaChart data={data}
            margin={{
                top: 30,
                right: 10,
                left: -20,
                bottom: 10,
            }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid horizontal="true" vertical="" stroke='#f2f2f2'/>
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={false}/>
                <YAxis axisLine={false} tickLine={false} tickCount={7} tickMargin={10}/>
                <Tooltip wrapperClassName='graphwrapper'/>
                <Area type="monotone" dataKey="global_progress" name="Progress" stroke="var(--primary)" strokeWidth="4px" fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>
    );
}
