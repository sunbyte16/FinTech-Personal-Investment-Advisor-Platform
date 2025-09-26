import * as React from "react";
import { Box,useTheme} from "@mui/system";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import TablePagination from "@mui/material/TablePagination";
import { rows } from "../../finalStockData";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import axios from "axios";
import { tokens } from "../../theme";

import { useAuthContext } from "../../hooks/useAuthContext";

const Dashboard = () => {
  const { user } = useAuthContext();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const history = useNavigate();

//   async function OnAdd(props) {
//     console.log("Button pressed");
//     const item = {
//       userId: user.id,
//       symbol: props.symbol,
//       name: props.description,
//     };

//     const url = "http://localhost:8080/temp/";

//     await axios
//       .post(url, {
//         userId: user.id,
//         symbol: props.symbol,
//         name: props.description,
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     // const response = await fetch(url, {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/json" },

//     //   body: JSON.stringify(item),
//     // });
//     // const json = await response.json();
//     history("../watchlist");
//   }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "symbol",
      headerName: "Symbol",
      flex: 1,
      cellClassName: "symbol-column--cell",
    },
    {
      field: "figi",
      headerName: "FIGI",
      
      flex: 1,

      cellClassName: "symbol-column--cell",
    },

    {
      field: "mic",
      headerName: "MIC",
      flex: 1,
      
      headerAlign: "left",
      align: "left",
    },
    // {
    //   field: "Add to watchlist",
    //   headerName: "Add to Watchlist",
    //   flex: 1,
      
    //   headerAlign: "left",
    //   align: "left",
    // }
    {
        field: "Details",
        headerAlign: "center",
        headerName: "Add to Watchlkist",
        flex:1,
        align:"center",
        sortable: false,
        renderCell: (params) => {

            const  OnAdd = async (e) => {


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
                    




                console.log("Button pressed");
                const item = {
                  userId: user.id,
                  symbol: thisRow.symbol,
                  name: thisRow.description,
                };
            
                const url = "http://localhost:8080/temp/";
            
                await axios
                  .post(url, {
                    userId: user.id,
                    symbol: thisRow.symbol,
                    name: thisRow.description,
                  })
                  .then((response) => {
                    console.log(response);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
            

                  history("/watchlist", { state: thisRow });
                    return;
                // const response = await fetch(url, {
                //   method: "POST",
                //   headers: { "Content-Type": "application/json" },
            
                //   body: JSON.stringify(item),
                // });
                // const json = await response.json();
                //history("../watchlist");
              }
        //   const Details = (e) => {
        //     e.stopPropagation(); // don't select this row after clicking
  
        //     const api: GridApi = params.api;
        //     const thisRow: Record<string, GridCellValue> = {};
  
        //     api
        //       .getAllColumns()
        //       .filter((c) => c.field !== "__check__" && !!c)
        //       .forEach(
        //         (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
        //       );
        //     console.log(thisRow);
        //     history("/watchlist", { state: thisRow });
        //     return;
        //   };
  
          return <AddCircleOutlineIcon onClick={OnAdd}></AddCircleOutlineIcon>;
        },
      }]

  return (
    <>

      <Header
        title="Stock Listings With Symbols"
        subtitle="Welcome to home page"
      />
      
      {/* <Table size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Symbol</TableCell>
            <TableCell>Figi</TableCell>
            <TableCell>MIC</TableCell>
            <TableCell>Add in watch list</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, i) => (
              <TableRow key={i}>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.symbol}</TableCell>
                <TableCell>{row.figi}</TableCell>
                <TableCell>{row.mic}</TableCell>
                <TableCell>
                  <AddCircleOutlineIcon
                    type="submit"
                    value={row}
                    aria-label="fingerprint"
                    onClick={() => OnAdd(row)}
                    color="success"
                  ></AddCircleOutlineIcon>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      {/* <DataGrid
              rows={rows}
              columns={columns}
              components={{ Toolbar: GridToolbar }}
            /> */}
                  <Box m="20px">
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

export default Dashboard;
