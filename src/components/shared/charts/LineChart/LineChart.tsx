import * as React from 'react';
import { useYScale, useDrawingArea } from '@mui/x-charts/hooks';
import { LineChart as MuiLineChart, areaElementClasses } from '@mui/x-charts/LineChart';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const dataY = ['0', '100', '200', '300', '400', '500'];

const LineChart = () => {
  return (
    <MuiLineChart
      grid={{ horizontal: true }}
      xAxis={[{ data: [0, 100, 200, 300, 400, 500] }]}
      series={[
        {
          data: [300, 340, 220, 190, 370, 350],
          area: true,
        },
      ]}
      height={300}
      sx={{
        [`& .${areaElementClasses.root}`]: {
          fill: 'url(#switch-color-id-2)',
          filter: 'none', // Remove the default filter.
        },
        '& .MuiLineElement-root': {
          //   strokeDasharray: '10 5',
          stroke: '#1976d2',
          strokeWidth: 8,
          strokeLinecap: 'square',
          strokeDasharray: '2 5.5',
        },
        '& .MuiMarkElement-root': {
          //   strokeDasharray: '10 5',
          // strokeWidth: 8,
          //   margin: 12,
          r: 4, // circle radius (size)
          fill: '#fff',
          stroke: '#1976d2',
          strokeWidth: 1,
        },
        '.MuiChartsLineElement-root': {
          strokeWidth: 2,
        },
        '.MuiChartsMarkElement-root': {
          r: 6,
          strokeWidth: 3,
        },
        '.MuiChartsAxis-directionY .MuiChartsAxis-tickLabel': {
          fontSize: 16,
          // fill: '#DDE0E3',
          fontWeight: 600,
          fontFamily: 'monospace',
        },
        '.MuiChartsAxis-directionX .MuiChartsAxis-tickLabel': {
          fontSize: 16,
          fill: '#DDE0E3',
          fontWeight: 600,
          letterSpacing: '0.5px',
        },

        '.MuiChartsAxis-directionX .MuiChartsAxis-line': {
          display: 'none',
        },
        '.MuiChartsAxis-directionY .MuiChartsAxis-line': {
          display: 'none',
        },
      }}
    >
      <ColorPalette id="switch-color-id-2" />
    </MuiLineChart>
  );
};

function ColorPalette({ id }: { id: string }) {
  const { top, height, bottom } = useDrawingArea();
  const svgHeight = top + bottom + height;

  return (
    <defs>
      <linearGradient
        id={id}
        x1="0"
        x2="0"
        y1="0"
        y2={`${svgHeight}px`}
        gradientUnits="userSpaceOnUse" // Use the SVG coordinate instead of the component ones.
      >
        <stop
          // offset={scale(5000) / svgHeight}
          stopColor={'green'[400]}
          stopOpacity={1}
        />
        <stop
          // offset={scale(4000) / svgHeight}
          stopColor={'green'[100]}
          stopOpacity={1}
        />
        <stop
          // offset={scale(4000) / svgHeight}
          stopColor={'green'[50]}
          stopOpacity={0.5}
        />
      </linearGradient>
    </defs>
  );
}

export default LineChart;
