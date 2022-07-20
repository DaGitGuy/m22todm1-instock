import React from "react";
import "./Modal.scss";
import XIcon from "../../assets/icons/close-24px.svg";

export default class WarehouseModel extends React.Component {
  // These can be passed in as props in the future from the warehouse details page
  // this will be the modal that is displayed when the user clicks on the "Add Warehouse" button

  // showModal = (id) => {
  //   this.setState({ showModal: true, itemID: id });
  // };

  // this will be the modal that is displayed when the user clicks on the "cancel button

  // closeModal = () => {
  //   this.setState({ showModal: false });
  // };

  // this will delete the inventory assoiciated with the warehouse, This will go in the delete function in the warehouse details ie delete={() => this.handleDelete(this.state.itemID)}/>

  // handleDelete(id) {
  //   axios
  //     .delete(`http://localhost:8080/inventory/${id}`)
  //     .then((res) => {
  //       this.setState({
  //         showModal: false,
  //         inventoryList: res.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <>
        <div className="modal">
          <div className="delete-modal">
            <h1 className="modal__header">Delete Washington warehouse?</h1>
            <p className="modal__text">
              Please confirm that you'd like to delete the Washington from the
              list of warehouses. You won't be able to undo this action.
            </p>
            <button
              className="modal-cancel button"
              onClick={this.props.closeModal}
            >
              Cancel
            </button>
            <button className="modal-delete button" onClick={this.props.delete}>
              Delete
            </button>
            <a href="/" onClick={this.props.closeModal}>
              <img className="modal__x-icon" src={XIcon} alt="x button" />
            </a>
          </div>
        </div>
      </>
    );
  }
}
