import AreaChart from "../../components/admin/area-chart/AreaChart";
import Chart from "../../components/admin/consultation/BarChartWithData";
import Content from "../../components/admin/content/Content";
import StatisticsCard from "../../components/admin/statistics-card/StatisticsCard";
import Statistics from "../../components/admin/statistics/Statistics";
import AdminLayout from "../../layouts/admin/AdminLayout";

const DashboardPage = () => {
  return (
    <AdminLayout>
      <Content>
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
        <StatisticsCard />
        <AreaChart />
        <Statistics />
        <Chart text="Consultations this week" />
        <Chart text="New clients this week" />
        <Chart text="New visitors this week" />
      </Content>
    </AdminLayout>
  );
};

export default DashboardPage;
