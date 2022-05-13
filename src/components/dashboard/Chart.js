import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Label,
    ResponsiveContainer
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}

const data = [
    createData("january ", 0),
    createData("february", 300),
    createData("march", 600),
    createData("april", 800),
    createData("may", 1500),
    createData("june", 2000),
    createData("july", 2400),
    createData("august", 2400),
    createData("septmber", 2700)
];

export default function Chart() {
    return (
        <React.Fragment>
            <Title>Today</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24
                    }}
                >
                    <XAxis dataKey="time" />
                    <YAxis>
                        <Label angle={270} position="left" style={{ textAnchor: "middle" }}>
                       number of questions
                        </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
