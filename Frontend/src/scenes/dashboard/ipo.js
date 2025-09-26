import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Icon from "@mui/material/Icon";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../../components/Headers";
// import { abc } from "../../mockData";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useAuthContext } from "../../hooks/useAuthContext.jsx";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { CleaningServices } from "@mui/icons-material";
import React from "react";

const Watchlist = () => {
  // const { user } = useAuthContext();
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log(user);
  const history = useNavigate();
  // const [abc, setAbc] = useState([]);
  const [rows, setRows] = useState([]);

  // const [rows: GridRowsProp, setRows] = React.useState([]);

  // console.log(url);

  const fetchData = async () => {
    let abc = [];
    const temp = [];
    let idz = 1;

    let newData = [];
    const url =
      "https://finnhub.io/api/v1/calendar/ipo?from=2022-01-01&to=2022-12-31&token=ce80b8aad3i4pjr4v2ggce80b8aad3i4pjr4v2h0";
    await axios
      .get(url)
      .then((res) => {
        const pData = res.data["ipoCalendar"];
        // console.log(pData);

        // .then((response) => {
        pData.map((d) => newData.push(d));
        //     newData.push(pData);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(newData);
    for (let i = 0; i < 50; i++) {
      const ab = {
        id: i,
        date: newData[i]["date"],
        exchange: newData[i]["exchange"],
        name: newData[i]["name"],
        numberOfShares: newData[i]["numberOfShares"],
        price: newData[i]["price"],
        status: newData[i]["status"],
        symbol: newData[i]["symbol"],
        totalSharesValue: newData[i]["totalSharesValue"],
      };
      // console.log(pData[key].name)

      temp.push(ab);
    }
    // const ab = {
    //   id: idz,
    //   date: newData[0]["date"],
    //   exchange: newData[0]["exchange"],
    //   name: newData[0]["name"],
    //   numberOfShares: newData[0]["numberOfShares"],
    //   price: newData[0]["price"],
    //   status: newData[0]["status"],
    //   symbol: newData[0]["symbol"],
    //   totalSharesValue: newData[0]["totalSharesValue"],
    // };
    // // console.log(pData[key].name)

    // temp.push(ab);

    // idz++;
    console.log(temp);

    // console.log(s);
    setRows(temp);
    // setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "date",
      headerName: "Date",
      flex: 0.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "exchange",
      headerName: "Exchange",
      flex: 0.5,
      cellClassName: "symbol-column--cell",
    },
    {
      field: "name",
      headerName: "Name",

      flex: 0.5,
      cellClassName: "symbol-column--cell",
    },
    {
      field: "numberOfShares",
      headerName: "Number Of Shares",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },

    {
      field: "status",
      headerName: "Status",
      flex: 0.3,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "symbol",
      headerName: "Symbol",
      flex: 0.3,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "totalSharesValue",
      headerName: "Total Shares Value",
      flex: 0.3,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
  ];

  return (
    <>
      {/* {isLoading && <h1>Loading Data...</h1>} */}
      <Box m="20px">
        {/* <Header title="Watchlist" /> */}
        <Header title="IPO" subtitle="View upcoming IPO details here" />
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          {rows && (
            <DataGrid
              rows={rows}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Watchlist;
