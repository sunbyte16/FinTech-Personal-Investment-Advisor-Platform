import * as React from "react";
import { Suspense } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "./RSIChart";
import Orders from "./Orders";
//import { fetchData } from "../charts/data.js";
import TradingWidget from "../../Charts/tradingView";
import Quotes from "../../Charts/Quotes";
import NewsLoad from "../../Charts/NewsLoad";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

import {
  MarketOverview,
  TechnicalAnalysis,
} from "react-ts-tradingview-widgets";
import { useAuthContext } from "../../hooks/useAuthContext.jsx";

const DashboardContent = () => {
  const history = useNavigate();
  const location = useLocation();

  if (location.state.symbol === null) {
    history("/");
  }

  function AdvanceChart(props) {
    console.log("CALLING LIGHT WEIGHT CHART", props);
    history("/lightWeight", { state: props });
  }
  return (
    <>
      {/* Chart */}
      {/* <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Chart symbol={location.state.symbol} />
        </Paper>
      </Grid> */}
      {/* Recent Deposits */}

      {/* Recent Orders */}

      {/* Recent Orders */}

      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Suspense fallback={<h1>Loading profile...</h1>}>
            <TradingWidget symbol={location.state.symbol} />
          </Suspense>
        </Paper>
      </Grid>

      <br></br>
      <br></br>

      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Orders symbol={location.state.symbol} />
        </Paper>
      </Grid>

      <br></br>
      <br></br>

      {/* <TechnicalAnalysis symbol={location.state.symbol} dark locale="en" /> */}

      {/* <MarketOverview locale="en" /> */}

      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            //flexDirection: "column",
            // height: 240,
          }}
        >
          <TechnicalAnalysis symbol={location.state.symbol} dark locale="en" />

          <MarketOverview locale="en" />

          {/* <Quotes symbol={location.state.symbol} /> */}
        </Paper>
      </Grid>

      <br></br>
      <br></br>
      {/* Recent Orders */}
      {/* <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Button onClick={() => AdvanceChart(location.state)}>
            Advance Chart
          </Button>
        </Paper>
      </Grid> */}
      {/* Recent Deposits */}
      <br></br>
      <br></br>
      <NewsLoad symbol={location.state.symbol} basic="company-news?symbol=" />
    </>
  );
};

export default function NewDashboard(async) {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <DashboardContent />
    </Suspense>
  );
}
