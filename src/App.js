import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import DrinksList from "./Pages/Drinks/DrinksList";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Drink from "./Pages/Drink/Drink";
import Error from "./Pages/Error/Error";
import ByCategory from "./Pages/Category/ByCategory";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/food" component={DrinksList} />
        <Route path="/foods/meal/:id" component={Drink} />
        <Route path="/categories/:category" component={ByCategory} />
        <Route path="*/" component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
