import React, { Component } from "react";
import AddNewWarehouse from "./components/AddNewWarehouse/AddNewWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import { Route } from "react-router-dom";

export default class WarehousePage extends React.Component {
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

  render() {
    return (
      <div>
        <Route
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
        />

        <Route
          path="/warehouse/add"
          render={(routeProps) => {
            return <AddNewWarehouse {...routeProps} />;
          }}
        />

        <Route
          exact
          path="/warehouse/warehouse/:id"
          render={(routeProps) => {
            return (
              <WarehouseDetails
                {...routeProps}
                inventoryData={this.state.inventoryData}
                warehouseData={this.state.warehouseData}
              />
            );
          }}
        />

        <Route
          path="/warehouse/:id/edit"
          render={(routeProps) => {
            return (
              <EditWarehouse
                {...routeProps}
                warehouseData={this.state.warehouseData}
              />
            );
          }}
        />
      </div>
    );
  }
}
