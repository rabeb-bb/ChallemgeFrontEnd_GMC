import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    marginLeft: theme.spacing(3),
  },
  input: {
    marginLeft: theme.spacing(3),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function Search({ setSearchTerm }) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search for meals"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
