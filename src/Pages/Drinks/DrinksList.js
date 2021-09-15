import { makeStyles } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MealCard from "../../Components/MealCard/MealCard";
import PageNav from "../../Components/PageNav";
import Search from "../../Components/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  root2: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
  searching: {
    marginLeft: theme.spacing(3),
    border: "white",
    width: "40ch",
  },
}));

const DrinksList = () => {
  //setting variables for api
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  //style
  const classes = useStyles();
  //pagination
  // const [currentPage, setCurrentPage] = useState(1);
  // const [foodsPerPage] = useState(14);
  // const indexOfLastPost = currentPage * foodsPerPage;
  // const indexOfFirstPost = indexOfLastPost - foodsPerPage;
  // const currentFoods = foods.slice(indexOfFirstPost, indexOfLastPost);
  //change page
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //getting the meals when the component did mount
  useEffect(() => {
    getFoods();
  }, [searchTerm]);

  // get the data from the api
  const getFoods = async () => {
    setIsLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((response) => {
        setFoods(response.data.meals);
        setIsLoading(false);
      })
      .catch((error) => console.log("Can not fetch Api"));
  };
  console.log();

  return (
    <div style={{ margin: "2%", marginBottom: "5%" }}>
      <Search setSearchTerm={setSearchTerm} />

      {isLoading ? (
        <img
          style={{ width: "50px" }}
          src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"
        />
      ) : null}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          margin: "2%",
        }}
      >
        {foods === null ? (
          <h2>Meal does not exist</h2>
        ) : (
          foods.map((el) => <MealCard meal={el} key={el.idMeal} />)
        )}
      </div>
      {/* <PageNav
              foodsPerPage={foodsPerPage}
              totalFoods={foods.length}
              paginate={paginate}
            /> */}
    </div>
  );
};

export default DrinksList;
