import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Category from "../../Components/Category";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [load, setLoad] = useState(false);
  const [isError, setisEerror] = useState(false);
  const getCategories = async () => {
    try {
      setLoad(true);
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      setCategories(response.data.categories);
      setLoad(false);
    } catch (error) {
      setisEerror(true);
      console.log(`can't fetch, ${error}`);
      setLoad(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <div>
        <h2 style={{ color: "white" }}>Culinary Delights</h2>
        <h3 style={{ fontSize: "3em" }}>
          You choose what you want to eat and we provide you with the
          instructions you need
        </h3>
        <p>check out our categories</p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginBottom: "5%",
          }}
        >
          {categories.map((el) => (
            <Category category={el} key={el.idCategory} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
