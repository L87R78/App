import { LineChart as MuiLineChart, areaElementClasses } from '@mui/x-charts/LineChart';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
const data = [220, 340, 220, 190, 370, 350, 380];

const LineChart = () => {
  return (
    <MuiLineChart
      grid={{ horizontal: true }}
      xAxis={[{ data: months, scaleType: 'point' }]}
      series={[
        {
          data,
          area: true,
        },
      ]}
      height={300}
      sx={{
        [`& .${areaElementClasses.root}`]: {
          fill: 'url(#gradient-opacity)',
          filter: 'none',
        },
        '.MuiChartsGrid-line': {
          stroke: 'var(--clr-text-disabled)',
          opacity: 0.2,
          strokeWidth: 1.5,
        },
        '& .MuiLineElement-root': {
          stroke: 'var(--clr-info)',
          strokeWidth: 8,
          strokeLinecap: 'square',
          strokeDasharray: '2 5.5',
          zIndex: 1,
        },
        '& .MuiMarkElement-root': {
          r: 4,
          fill: 'var(--clr-bg-1)',
          stroke: '#1976d2',
          strokeWidth: 1,
        },
        '.MuiChartsLineElement-root': {
          strokeWidth: 6,
        },
        '.MuiChartsMarkElement-root': {
          r: 6,
          strokeWidth: 2,
        },
        '.MuiChartsAxis-directionY .MuiChartsAxis-tickLabel': {
          fontSize: 16,
          fontWeight: 600,
          fill: 'var(--clr-text-label)',
        },
        '.MuiChartsAxis-directionX .MuiChartsAxis-tickLabel': {
          fontSize: 16,
          fontWeight: 600,
          fill: 'var(--clr-text-label)',
        },
        '.MuiChartsAxis-directionX .MuiChartsAxis-line': {
          display: 'none',
        },
        '.MuiChartsAxis-directionY .MuiChartsAxis-line': {
          display: 'none',
        },
      }}
    >
      <linearGradient id="gradient-opacity" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--clr-info)" stopOpacity="0.3" />
        <stop offset="100%" stopColor="var(--clr-info)" stopOpacity="0" />
      </linearGradient>
    </MuiLineChart>
  );
};

export default LineChart;
