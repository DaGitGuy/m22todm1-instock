import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import "./App.scss";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/warehouse" />
          </Route>
          <Route exact path="/warehouse" component={WarehousePage} />
          <Route exact path="/inventory" component={InventoryPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
