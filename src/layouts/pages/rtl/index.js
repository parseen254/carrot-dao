import { useEffect, useMemo, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// React Project components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// React Project example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ProgressLineChart from "examples/Charts/LineCharts/ProgressLineChart";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import MasterCard from "examples/Cards/MasterCard";
import MiniInfoCard from "examples/Cards/InfoCards/MiniInfoCard";
import ControllerCard from "examples/Cards/ControllerCard";
import Calendar from "examples/Calendar";
import CategoriesList from "examples/Lists/CategoriesList";

// Widgets page components
import Steps from "layouts/pages/rtl/components/Steps";
import FullBody from "layouts/pages/rtl/components/FullBody";
import MediaPlayer from "layouts/pages/rtl/components/MediaPlayer";
import OrdersOverview from "layouts/pages/rtl/components/OrdersOverview";
import UpcomingEvents from "layouts/pages/rtl/components/UpcomingEvents";
import Chart from "layouts/pages/rtl/components/Chart";

// Data
import progressLineChartData from "layouts/pages/rtl/data/progressLineChartData";
import calendarEventsData from "layouts/pages/rtl/data/calendarEventsData";
import categoriesListData from "layouts/pages/rtl/data/categoriesListData";
import incomeChartData from "layouts/pages/rtl/data/incomeChartData";
import caloriesChartData from "layouts/pages/rtl/data/caloriesChartData";

// React Project contexts
import { useSoftUIController, setDirection } from "context";

function RTL() {
  const [, dispatch] = useSoftUIController();
  const [lights, setLights] = useState(false);

  const handleSetLights = () => setLights(!lights);

  // Changing the direction to rtl
  useEffect(() => {
    setDirection(dispatch, "rtl");

    return () => setDirection(dispatch, "ltr");
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox my={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <SoftBox mb={3}>
                <MiniStatisticsCard
                  bgColor="info"
                  title={{ text: "?????? ????????????????", fontWeight: "regular" }}
                  count="99 %"
                  icon={{ component: "sports_esports" }}
                />
              </SoftBox>
              <MiniStatisticsCard
                bgColor="info"
                title={{ text: "???????? ?????? ????????????????", fontWeight: "regular" }}
                count="15/100"
                icon={{ color: "info", component: "music_note" }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Chart
                title="??????"
                count="$130,832"
                percentage={{ color: "success", label: "+90%" }}
                chart={incomeChartData}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <ProgressLineChart
                icon="date_range"
                title="????????"
                count={480}
                progress={60}
                chart={progressLineChartData}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <UpcomingEvents />
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
              <DefaultInfoCard
                icon="account_balance"
                title="????????"
                description="?????????? ??????????????????"
                value="+$2000"
              />
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
              <DefaultInfoCard
                icon="paypal"
                title="?????? ??????"
                description="?????? ?????????????? ??????????"
                value="$455.00"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <MasterCard number={4562112245947852} holder="?????? ??????????????" expires="11/22" />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={3}>
              <FullBody />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <ControllerCard
                state={lights}
                icon={
                  <Icon className={lights ? "text-white" : "text-dark"} fontSize="large">
                    lightbulb
                  </Icon>
                }
                title="???????? ??????????"
                onChange={handleSetLights}
              />
            </Grid>
            <Grid item xs={12} lg={3}>
              <Chart
                title="?????????? ????????????"
                count={97}
                percentage={{ color: "success", label: "+5%" }}
                chart={caloriesChartData}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <MiniInfoCard
                icon="shortcut"
                title={
                  <>
                    754&nbsp;
                    <SoftTypography variant="button" color="secondary" fontWeight="medium">
                      ??
                    </SoftTypography>
                  </>
                }
                description="?????????? ??????????????"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={2}>
              <Steps />
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            {useMemo(
              () => (
                <Calendar
                  header={{ title: "??????????", date: "Monday, 2021" }}
                  headerToolbar={false}
                  initialView="dayGridMonth"
                  initialDate="2021-08-10"
                  events={calendarEventsData}
                  selectable
                  editable
                />
              ),
              [calendarEventsData]
            )}
          </Grid>
          <Grid item xs={12} lg={3}>
            <SoftBox mb={3}>
              <CategoriesList title="????????" categories={categoriesListData} />
            </SoftBox>
            <MediaPlayer />
          </Grid>
          <Grid item xs={12} lg={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default RTL;
