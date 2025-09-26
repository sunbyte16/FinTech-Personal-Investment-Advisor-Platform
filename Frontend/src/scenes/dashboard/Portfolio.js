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
// import NewsCard from "../Cards/NewsCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Portfolio = () => {
  // const { user } = useAuthContext();
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const history = useNavigate();
  // const [abc, setAbc] = useState([]);
  const [rows, setRows] = useState([]);
  const [invAmt, setInvAmt] = useState(0);
  const [currAmt, setCurrAmt] = useState(0);
  const [tProfit, setTProfit] = useState(0);

  // const [rows: GridRowsProp, setRows] = React.useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = "http://localhost:8080/portfolio/".concat(user.id);
  // console.log(url);

  const fetchData = async () => {
    let abc = [];
    const temp = [];
    let totalAmount = 0;
    let totalProfit = 0;
    let totalCurrAmount = 0;

    await fetch(url)
      .then((response) => response.json())
      // .then((response) => setAbc(response));
      .then((response) => {
        response.map((d) => abc.push(d));
      });
    console.log(abc);
    for (var key in abc) {
      if (!abc.hasOwnProperty(key)) continue;
      let newData = [];
      const url = "https://finnhub.io/api/v1/quote?symbol=".concat(
        abc[key].symbol,
        "&token=demo"
      );
      await axios
        .get(url)
        .then((res) => {
          const pData = res.data;
          newData.push(pData);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(newData);

      const ab = {
        id: abc[key]._id,
        name: abc[key].name,
        symbol: abc[key].symbol,
        today: newData[0]["c"],
        buyPrice: abc[key].price,
        shares: abc[key].shares,
        currAmount: abc[key].shares*newData[0]["c"],
        invAmount: abc[key].shares*abc[key].price,
        profit: abc[key].shares*newData[0]["c"] - abc[key].shares*abc[key].price
        // id: abc[key]._id,
        // name: abc[key].name,
        // symbol: abc[key].symbol,
        // delete: abc[key]._id,
        // ids: abc[key]._id,
        // today: newData[0]["c"],
        // Percent: newData[0]["dp"] + " %",
        // open: newData[0]["o"],
        // high: newData[0]["h"],
        // low: newData[0]["l"],
        // close: newData[0]["pc"],
      };

      totalAmount+=ab.invAmount;
      totalProfit+=ab.profit;
      totalCurrAmount += ab.currAmount
      // console.log(pData[key].name)
      temp.push(ab);

    }
    setInvAmt(totalAmount)
    setTProfit(totalProfit);
    setCurrAmt(totalCurrAmount)
    console.log(temp);
    const s = new Set(temp);
    console.log(s);
    setRows(Array.from(s));
    // setIsLoading(false);
  };

  useEffect(() => {
    // abc = [];
    // temp = [];
    fetchData();
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "name",
      headerName: " Company Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "symbol",
      headerName: "Symbol",
      flex: 0.5,
      cellClassName: "symbol-column--cell",
    },
    {
      field: "today",
      headerName: "Current Price",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "buyPrice",
      headerName: "Average Price",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "shares",
      headerName: "Quantity",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "currAmount",
      headerName: "Current Amount",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "invAmount",
      headerName: "Invested Amount",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "profit",
      headerName: "Profit/Loss",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Sell",
      headerName: "Sell",
      sortable: false,
      renderCell: (params) => {
        const Remove = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          // return alert(JSON.stringify(thisRow.name, null, 4));
          // return;
          console.log(thisRow)
              history('/sellStock',{state:thisRow});
        };

        return (
          <Button onClick={Remove} variant="outlined" color="error">
            Sell
          </Button>
        );
      },
    },
  ];

  return (
    <>
      {/* {isLoading && <h1>Loading Data...</h1>} */}
      <Box m="20px">
        <Header title="Portfolio" />
        <Paper elevation={3}>

        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 5,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          }}
        >
        <div style = {{margin: "5px 15px 5px 15px", "font-weight":"bolder", "padding-right":"50px", "fontSize":"x-large"}}>{"Invested Amount: "}  <div style={{"color":"blue","textAlign":"center"}}>$ {invAmt.toFixed(2)}</div></div>
        <div style = {{margin: "5px 15px 5px 15px", "font-weight":"bolder", "padding-right":"50px","fontSize":"x-large"}}>{"Current Amount: "} <div style={{"color":"blue","textAlign":"center"}}>$ {currAmt.toFixed(2)}</div> </div>
        <div style = {{margin: "5px 15px 5px 15px", "font-weight":"bolder", "padding-right":"50px","fontSize":"x-large"}}>{"Profit/Loss: "} <div style={{"color":"#03C03C","textAlign":"center"}}>$ {tProfit.toFixed(2)}</div></div>
      </Box>

          {/* <div sx={{ display: 'inline' }}>{"Invested Amount: " + invAmt.toFixed(2)}</div>
          <div sx={{ display: 'inline' }}>{"Current Amount: " + currAmt.toFixed(2)}</div>
          <div sx={{ display: 'inline' }}>{"Profit/Loss: " + tProfit.toFixed(2)}</div> */}
          {/* <List component="nav" aria-label="mailbox folders">
            <ListItem>
              <ListItemText primary={"Invested Amount: " + invAmt.toFixed(2)}/>
            </ListItem>
            <Divider />
            <ListItem divider>
              <ListItemText primary={"Current Amount: " + currAmt.toFixed(2)} />
            </ListItem>
            <Divider />
            <ListItem divider>
              <ListItemText primary={"Profit/Loss: " + tProfit.toFixed(2)} />
            </ListItem>
          </List> */}
        </Paper>
        {/* {invAmt}
        {tProfit} */}
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

export default Portfolio;
