import React, { ReactElement } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Label, Legend, ResponsiveContainer } from 'recharts';
import getChartMockData from './ChartMockData';

export const LineChartRenderer = (): ReactElement => {
  const curveData = getChartMockData();
  const minYAxisScale = 70;
  const maxYAxisScale = 160;
  const minXAxisScale = 100;
  const maxXAxisScale = 10000;

  return (
    <>
      <h1>Line Chart Rendering...</h1>
      <ResponsiveContainer width={'30%'} height={400}>
        <LineChart width={600} height={500} data={curveData} margin={{ top: 50, right: 20, bottom: 50, left: 20 }}>
          <Line type='monotone' dot={false} dataKey='FogCurve' stroke='purple' strokeWidth={1} />
          <Line type='monotone' dot={false} dataKey='OSPL90Curve' stroke='blue' strokeWidth={1} />
          <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />

          <XAxis dataKey={'frequency'} type='number' domain={[minXAxisScale, maxXAxisScale]} scale='log'>
            <Label value='Hz' offset={0} position='insideBottomRight' />
          </XAxis>
          <YAxis type='number' domain={[minYAxisScale, maxYAxisScale]} tickCount={4}>
            <Label value='dB SPL' offset={-15} position='insideTopLeft' />
          </YAxis>
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};
