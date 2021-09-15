import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import clsx from 'clsx';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import Collapse from '@material-ui/core/Collapse';
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: "350px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MealCard({ meal }) {
  const classes = useStyles();

  return (
    <div style={{ margin: "1%", width: "12%" }}>
      <Card className={classes.root}>
        <Link to={`/foods/meal/${meal.idMeal}`}>
          <CardHeader title={meal.strMeal} subheader={meal.strArea} />
        </Link>
        <CardMedia
          className={classes.media}
          image={meal.strMealThumb}
          title={meal.strMeal}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {meal.strYoutube}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>*/}
        </CardActions>
      </Card>
    </div>
  );
}
