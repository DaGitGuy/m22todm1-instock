import React from "react";
import AddNewInventory from "./components/AddNewInventory/AddNewInventory";
import EditInventory from "./components/EditInventory/EditInventory";
import InventoryList from "./components/InventoryList/InventoryList";
import { Route } from "react-router-dom";

export default class InventoryPage extends React.Component {
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
    const warehouseNames = this.props.warehouseList.map((warehouse) => {
      return { id: warehouse.id, name: warehouse.name };
    });
    return (
      <div>
        <Route
          path="/inventory"
          exact
          render={(routeProps) => {
            return (
              <InventoryList
                {...routeProps}
                inventoryList={this.props.inventoryList}
              />
            );
          }}
        />

        <Route
          exact
          path="/inventory/add"
          render={(routeProps) => {
            return (
              <AddNewInventory
                {...routeProps}
                inventorylist={this.props.inventoryList}
                warehouselist={this.props.warehouseList}
              />
            );
          }}
        />

        <Route
          path="/inventory/:id/edit"
          render={(routeProps) => {
            return (
              <EditInventory {...routeProps} warehouseNames={warehouseNames} />
            );
          }}
        />

        <Route
          exact
          path="/inventory/item/:id"
          render={(routeProps) => {
            return <InventoryDetails {...routeProps} />;
          }}
        />
      </div>
    );
  }
}
