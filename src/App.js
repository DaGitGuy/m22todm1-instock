import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Header from './components/Header/Header'
import AddNewWarehouse from './pages/AddNewWarehouse/AddNewWarehouse';
import WarehouseDetails from './components/WarehouseDetails/WarehouseDetails';
import './App.scss';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <WarehouseDetails/>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/warehouse' />
          </Route>

          <Route
            exact
            path='/warehouse'
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
          <Route path='/warehouse/add' component={AddNewWarehouse} />
          <Route
            path='/inventory'
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
          {/* <Route path='' component={WarehouseDetails} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
