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
  const [isLoading, setIsLoading] = useState(true);

  const url = "http://localhost:8080/temp/".concat(user.id);
  // console.log(url);

  const fetchData = async () => {
    let abc = [];
    const temp = [];

    await fetch(url)
      .then((response) => response.json())
      // .then((response) => setAbc(response));
      .then((response) => {
        response.map((d) => abc.push(d));
      });
    // console.log(abc);
    for (var key in abc) {
      if (!abc.hasOwnProperty(key)) continue;
      let newData = [];
      const url = "https://finnhub.io/api/v1/quote?symbol=".concat(
        abc[key].symbol,
        "&token=ce80b8aad3i4pjr4v2ggce80b8aad3i4pjr4v2h0"
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
      // console.log(newData);

      const ab = {
        id: abc[key]._id,
        name: abc[key].name,
        symbol: abc[key].symbol,
        delete: abc[key]._id,
        ids: abc[key]._id,
        today: newData[0]["c"],
        Percent: newData[0]["dp"] + " %",
        open: newData[0]["o"],
        high: newData[0]["h"],
        low: newData[0]["l"],
        close: newData[0]["pc"],
      };
      // console.log(pData[key].name)
      let flag = false;
      for (var k in temp) {
        if (temp[k].symbol === abc[key].symbol) {
          flag = true;
        }
      }
      if (!flag) {
        temp.push(ab);
      }
    }
    console.log(temp);
    const s = new Set(temp);
    // console.log(s);
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
      field: "ids",
      headerName: "ids",
      hide: true,
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
      field: "Percent",
      headerName: "Percent Chamge",
      flex: 0.5,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "open",
      headerName: "Open",
      flex: 0.3,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "high",
      headerName: "High",
      flex: 0.3,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "low",
      headerName: "Low",
      flex: 0.3,
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "close",
      headerName: "Close",
      flex: 0.3,
      type: "number",
      headerAlign: "left",
      align: "left",
    },

    {
      field: "Buy",
      headerName: "Buy",
      sortable: false,
      renderCell: (params) => {
        const Add = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          console.log(thisRow);
          history("/buyStock", { state: thisRow });
          return;
        };

        return (
          <Button onClick={Add} variant="contained" color="success">
            Buy
          </Button>
        );
      },
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
          console.log(thisRow);
          history("/sellStock", { state: thisRow });
        };

        return (
          <Button onClick={Remove} variant="outlined" color="error">
            Sell
          </Button>
        );
      },
    },

    {
      field: "Delete",
      headerName: "Delete",

      sortable: false,
      renderCell: (params) => {
        const Delete = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );

          async function deleteRow() {
            await fetch("http://localhost:8080/temp/".concat(thisRow.ids), {
              method: "DELETE",
            });
            for (var key in rows) {
              const a = rows[key];
              setRows((rows) => rows.filter((a) => a.ids != thisRow.ids));
            }
          }
          deleteRow();

          // console.log(thisRow);
          // return alert(
          //   JSON.stringify(thisRow.symbol, null, 4) + " " + "Deleted"
          // );
          // //
        };

        return <DeleteIcon onClick={Delete}></DeleteIcon>;
      },
    },
    {
      field: "Details",
      headerName: "Details",
      sortable: false,
      renderCell: (params) => {
        const Details = (e) => {
          e.stopPropagation(); // don't select this row after clicking

          const api: GridApi = params.api;
          const thisRow: Record<string, GridCellValue> = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== "__check__" && !!c)
            .forEach(
              (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
            );
          // console.log(thisRow);
          history("/details", { state: thisRow });
          return;
        };

        return <AddCircleOutlineIcon onClick={Details}></AddCircleOutlineIcon>;
      },
    },
  ];

  return (
    <>
      {/* {isLoading && <h1>Loading Data...</h1>} */}
      <Box m="20px">
        {/* <Header title="Watchlist" /> */}
        <Header title="Watchlist" subtitle="Watchlist" />
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
