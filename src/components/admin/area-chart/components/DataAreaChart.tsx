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
import { useDarkMode } from "../../../../context/DarkModeContext";

const DataAreaChart = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const data = [];

  for (let i = 1; i <= 7; i++) {
    const date = `${i} Feb`;
    const uv = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000; // Random value between 1000 and 5000
    const pv = Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000; // Random value between 1000 and 10000
    data.push({ name: date, uv, pv });
  }

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
          tick={{ fill: isDarkMode ? "#fff" : "#4D8389" }}
          tickLine={{ stroke: "#CCDCDD" }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={{ fill: isDarkMode ? "#fff" : "#4D8389" }}
        />
        <CartesianGrid strokeDasharray="3 0.5" vertical={false} />
        <Tooltip cursor={false} />
        <Area
          name="Income (previous)"
          type="monotone"
          dataKey="uv"
          stroke={isDarkMode ? "#E6F2F3" : "#014E56"}
          strokeWidth="2"
          fillOpacity={0}
          fill="url(#colorUv)"
        />
        <Area
          name="Income"
          type="monotone"
          dataKey="pv"
          stroke="#F2957C"
          strokeWidth="2"
          fillOpacity={0}
          fill="url(#colorPv)"
        />
        <Legend verticalAlign="bottom" height={36} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DataAreaChart;
