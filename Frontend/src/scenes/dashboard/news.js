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
import GeneralNews from "../../Charts/generalNews";

import { useAuthContext } from "../../hooks/useAuthContext.jsx";

const DashboardContent = () => {
  return (
    <>
      <GeneralNews />
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
