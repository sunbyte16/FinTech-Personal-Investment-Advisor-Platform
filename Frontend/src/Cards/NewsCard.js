import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";

export default function NewsCard(props) {
  return (
    <Card sx={{ maxWidth: 345, display: "block" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.data.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.headline}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={props.data.url}>
          Know more
        </Button>
      </CardActions>
    </Card>
  );
}
