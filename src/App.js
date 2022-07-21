import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import axios from 'axios';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AddNewWarehouse from './components/AddNewWarehouse/AddNewWarehouse';
import AddNewInventory from './components/AddNewInventory/AddNewInventory';
import './App.scss';

class App extends React.Component{

  state = {
    warehouseData: [],
    inventoryData: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5050/warehouse")
      .then((res) => {
        this.setState({
          warehouseData: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://localhost:5050/inventory")
      .then((res) => {
        this.setState({
          inventoryData: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
render(){
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Redirect to='/warehouse' />
          </Route>
          {/* <Route
          path="/warehouse"
          exact
          render={(routeProps) => {
            return (
              <WarehouseList
                {...routeProps}
                warehouseData={this.state.warehouseData}
              />
            );
          }}
        /> */}
          <Route
            path='/warehouse/add'
            render={(routeProps) => {
              return <AddNewWarehouse {...routeProps} />;
            }}
          />

          {/* <Route
          exact
          path="/warehouse/:id"
          render={(routeProps) => {
            return (
              <WarehouseDetails
                {...routeProps}
                inventoryData={this.state.inventoryData}
                warehouseData={this.state.warehouseData}
              />
            );
          }}
        /> */}

          {/* <Route
          path="/warehouse/:id/edit"
          render={(routeProps) => {
            return (
              <EditWarehouse
                {...routeProps}
                warehouseData={this.state.warehouseData}
              />
            );
          }}
        /> */}
          {/* <Route
          path="/inventory"
          exact
          render={(routeProps) => {
            return (
              <InventoryList
                {...routeProps}
                inventoryList={this.state.inventoryData}
              />
            );
          }}
        /> */}

          <Route
            exact
            path='/inventory/add'
            render={(routeProps) => {
              return (
                <AddNewInventory
                  {...routeProps}
                  // inventorylist={this.state.inventoryData}
                  // warehouselist={this.state.warehouseData}
                />
              );
            }}
          />

          {/* <Route
          path="/inventory/:id/edit"
          render={(routeProps) => {
            return (
              <EditInventory {...routeProps} warehouseNames={warehouseNames} />
            );
          }}
        /> */}

          {/* <Route
          exact
          path="/inventory/item/:id"
          render={(routeProps) => {
            return <InventoryDetails {...routeProps} />;
          }}
        /> */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
}

export default App;
