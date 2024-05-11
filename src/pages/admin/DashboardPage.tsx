import Statistics from "../../components/admin/statistics/Statistics";
import AreaChart from "../../components/admin/area-chart/AreaChart";
import Chart from "../../components/admin/consultation/BarChartWithData";
import Content from "../../components/admin/content/Content";
import AdminLayout from "../../layouts/admin/AdminLayout";

const DashboardPage = () => {
  return (
    <AdminLayout>
      <Content>
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
