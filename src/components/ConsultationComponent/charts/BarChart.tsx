import { useEffect, useRef, useState } from "react";
import {
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  TooltipProps as RechartsTooltipProps,
} from "recharts";

interface CustomTooltipProps extends RechartsTooltipProps<number, string> {
  payload?: any[];
  label?: string;
}

const ChartBar = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  // Information on the number of consultations during a certain period
  const [data, setData] = useState([
    { name: "1 Feb - 7 Feb", consultations: 35 },
    { name: "8 Feb - 14 Feb", consultations: 36 },
    { name: "3", consultations: 34 },
    { name: "4", consultations: 33 },
    { name: "5", consultations: 42 },
    { name: "6", consultations: 36 },
    { name: "7", consultations: 40 },
  ]);

  // Custom tooltip when hovering over a bar
  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    label,
    payload,
  }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="w-28">
          <p className="bg-slate-600 rounded-t p-1 font-semibold text-gray-300">
            {label}
          </p>
          <p className="bg-slate-300 rounded-b p-1">
            Consultations: {payload[0].value}
          </p>
        </div>
      );
    }

    return null;
  };

  // update width of ChartBar dynamically(it's imposible without this useEffect)
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

  // To ensure the BarChart always displays only the last 7 items
  useEffect(() => {
    data.length > 7 && setData((data) => data.slice(-7));
  }, [data]);

  return (
    <div ref={chartContainerRef} className="w-full">
      <BarChart
        margin={{ left: 16, right: 16 }}
        width={chartWidth}
        height={120}
        data={data}
      >
        <XAxis dataKey="name" hide={true} />
        {/* cursor={{fill: "color"}} */}
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Bar radius={[3, 3, 0, 0]} dataKey="consultations" fill="blue" />
      </BarChart>
    </div>
  );
};

export default ChartBar;
