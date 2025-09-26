import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import NewsCard from "../Cards/NewsCard";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function News() {
  const [news, setNews] = React.useState([]);

  const fetchData = () => {
    let url =
      "https://finnhub.io/api/v1/news?category=general&token=ce80b8aad3i4pjr4v2ggce80b8aad3i4pjr4v2h0";

    axios.get(url).then((res) => {
      const pData = res.data;
      //console.log(url);
      setNews(pData);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  let final1 = [];
  for (let i = 0; i < news.length && i < 21; i++) {
    final1.push(
      <Grid item xs={12} md={6} lg={4} key={i}>
        <Paper
          sx={{
            p: 4,
            display: "flex",
            height: 400,
            //width: 300,
            flexDirection: "column",
          }}
        >
          <NewsCard data={news[i]} />
        </Paper>
      </Grid>
    );
  }

  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        height: 450,
      }}
    >
      {final1}
    </Grid>
  );
}
