import { useEffect, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DataAreaChart = () => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const [chartWidth, setChartWidth] = useState(0);
  const data = [
    { name: "1 Feb", uv: 4000, pv: 2400 },
    { name: "2 Feb", uv: 3000, pv: 1398 },
    { name: "3 Feb", uv: 2000, pv: 9800 },
    { name: "4 Feb", uv: 2780, pv: 3908 },
    { name: "5 Feb", uv: 1890, pv: 4800 },
    { name: "6 Feb", uv: 2390, pv: 3800 },
    { name: "7 Feb", uv: 3490, pv: 4300 },
  ];

  useEffect(() => {
    const updateWidth = () => {
      if (chartContainerRef.current) {
        setChartWidth(chartContainerRef.current.offsetWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
    }
  }, []);

  const CustomYTick: React.FC<any> = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={-10} dy={16} textAnchor="end" fill="#7e7e7e">
          ${payload.value}
        </text>
      </g>
    );
  };

  const CustomXTick: React.FC<any> = ({ x, y, payload }) => {
    return (
      <g transform={`translate(${x},${y})`}>
        <text x={15} y={3} dy={16} textAnchor="end" fill="#7e7e7e">
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <div ref={chartContainerRef}>
      <AreaChart
        width={chartWidth}
        height={315}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" tick={<CustomXTick />} />
        <YAxis tickLine={false} axisLine={false} tick={<CustomYTick />} />
        <CartesianGrid
          strokeDasharray="3 0.5"
          vertical={false}
          stroke="#303030"
        />
        <Tooltip cursor={false} />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
};

export default DataAreaChart;
