import AreaChartComponent from "../../components/admin/area-chart/AreaChart";
import ConsultationComponent from "../../components/admin/consultation/Consultation";
import Content from "../../components/admin/content/Content";
import Statistics from "../../components/admin/Statistics/Statistics";
import AdminLayout from "../../layouts/admin/AdminLayout";

const AdminHome = () => {
  return (
    <>
      <AdminLayout>
        <Content>
          <AreaChartComponent />
          <Statistics />
          <ConsultationComponent />
          <ConsultationComponent />
          <ConsultationComponent />
        </Content>
      </AdminLayout>
    </>
  );
};

export default AdminHome;
