import "./App.scss";
import {
  BroweserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/warehouse" />
          </Route>
          <Route
            path="/warehouse"
            render={(routeProps) => {
              // return (
              // 	<WarehousePage
              // 		{...routeProps}
              // 		warehouseList={this.state.warehouseList}
              // 		inventoryList={this.state.inventoryList}
              // 	/>
              // );
            }}
          />
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
        <Footer />
      </Router>
    </div>
  );
};

export default App;
