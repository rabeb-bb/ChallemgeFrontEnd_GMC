import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Category({ category }) {
  const classes = useStyles();

  return (
    <div style={{ margin: "2%", width: "10%" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={category.strCategoryThumb}
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="h3">
              {category.strCategory}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`/categories/${category.strCategory}`}>
              Checky it out
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
