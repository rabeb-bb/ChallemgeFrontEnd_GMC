import React from "react";
import { makeStyles, createTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import "./Navbar.css";
import { Link } from "react-router-dom";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navigLink: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    fontSize: "4em",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));
function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="white">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <RestaurantMenuIcon style={{ fontSize: 60 }} />
          </IconButton>
          <Typography className={classes.title} variant="h1" noWrap>
            Culinary Delights
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography variant="h6" className={classes.navigLink}>
              <Link to="/">Home</Link>
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.navigLink}
            >
              <Link to="/about">About</Link>
            </Typography>
            <Typography
              variant="h6"
              color="inherit"
              className={classes.navigLink}
            >
              <Link to="/food">Food</Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <div>
//       <section
//         style={{ background: "#34495e", color: "rgba(255, 255, 255, 0.5)" }}
//       >
//         <h1>Culinary Delights</h1>
//         <nav className="circle">
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/food">Food</Link>
//             </li>

//             {/* <li>More</li>
//               <li>Nice staff</li> */}
//           </ul>
//         </nav>
//       </section>
//     </div>
//   );
// };

export default Navbar;
