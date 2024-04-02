import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DataAreaChart = () => {
  const data = [
    { name: "1 Feb", uv: 4000, pv: 2400 },
    { name: "2 Feb", uv: 3000, pv: 1398 },
    { name: "3 Feb", uv: 2000, pv: 9800 },
    { name: "4 Feb", uv: 2780, pv: 3908 },
    { name: "5 Feb", uv: 1890, pv: 4800 },
    { name: "6 Feb", uv: 2390, pv: 3800 },
    { name: "7 Feb", uv: 3490, pv: 4300 },
  ];

  return (
    <ResponsiveContainer width="100%" height={430}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E6F2F3" />
            <stop offset="100%" stopColor="#E6F2F3" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FDF2EF" />
            <stop offset="100%" stopColor="#FDF2EF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          stroke="#CCDCDD"
          dataKey="name"
          tick={{ fill: "#4D8389" }}
          tickLine={{ stroke: "#CCDCDD" }}
        />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: "#4D8389" }} />
        <CartesianGrid strokeDasharray="3 0.5" vertical={false} />
        <Tooltip cursor={false} />
        <Area
          name="Income (previous)"
          type="monotone"
          dataKey="uv"
          stroke="#014E56"
          strokeWidth="2"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          name="Income"
          type="monotone"
          dataKey="pv"
          stroke="#F2957C"
          strokeWidth="2"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <Legend verticalAlign="bottom" height={36} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DataAreaChart;
