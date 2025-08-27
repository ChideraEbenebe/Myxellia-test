'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: 'January', inflow: 35, mrr: 28, gmv: 10 },
  { month: 'February', inflow: 5, mrr: 28, gmv: 10 },
  { month: 'March', inflow: 15, mrr: 8, gmv: 5 },
  { month: 'April', inflow: 12, mrr: 24, gmv: 9 },
  { month: 'May', inflow: 9, mrr: 2, gmv: 7 },
  { month: 'June', inflow: 37, mrr: 49, gmv: 8 },
  { month: 'July', inflow: 23, mrr: 38, gmv: 18 },
  { month: 'August', inflow: 25, mrr: 8, gmv: 16 },
  { month: 'September', inflow: 36, mrr: 34, gmv: 9 },
];

const chartConfig = {
  inflow: {
    label: 'Inflow',
    color: '#4545fe',
  },
  mrr: {
    label: 'Mrr',
    color: '#12b76a',
  },
  gmv: {
    label: 'gmv',
    color: '#f04438',
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <ChartContainer
      config={chartConfig}
      className='h-[160px] w-full'>
      <BarChart
        accessibilityLayer
        data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey='month'
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickMargin={10}
          domain={[0, 50]}
          ticks={[0, 10, 20, 30, 40, 50]}
          axisLine={false}
          tickLine={false}
          label={{ angle: -90, position: 'insideLeft' }}
          tickFormatter={(value) => value + 'm'}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey='inflow'
          fill='#4545fe'
          radius={2}
        />
        <Bar
          dataKey='mrr'
          fill='#12b76a'
          radius={2}
        />
        <Bar
          dataKey='gmv'
          fill='#f04438'
          radius={2}
        />
      </BarChart>
    </ChartContainer>
  );
}
