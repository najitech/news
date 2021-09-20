import React from 'react'
import './LinearChart.css'
import { Chart } from "react-google-charts";

function LinearChart() {
    return (
        <div className="LinearChart">
            <Chart
                width={'100%'}
                height={'100px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['x', 'dogs'],
                    [0, 0],
                    [1, 10],
                    [2, 23],
                    [3, 17],
                    [4, 18],
                    [5, 9],
                    [6, 11],
                    [7, 27],
                    [8, 33],
                    [9, 40],
                    [10, 32],
                    [11, 35],
                ]}
                options={{
                    hAxis: {
                    title: 'Time',
                    },
                    vAxis: {
                    title: 'Popularity',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default LinearChart
