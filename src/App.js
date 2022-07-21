import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
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
          <Route path="/warehouse/add" component={AddNewWarehouse} />
          <Route
            path="/inventory"
            render={(routeProps) => {
              // return (
              //   <InventoryPage
              //     {...routeProps}
              //     warehouseList={this.state.warehouseList}
              //     inventoryList={this.state.inventoryList}
              //   />
              // );
            }}
          />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
