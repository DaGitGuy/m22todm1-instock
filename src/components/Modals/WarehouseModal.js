import React from "react";
import "./Modal.scss";
import XIcon from "../../assets/icons/close-24px.svg";

export default class WarehouseModel extends React.Component {
  // This will be the starting state which will also be in warehouse List component

  // state = {
  //   showModal: false
  // }

  // These can be passed in as props  from the warehouse list page

  // this will be the modal that is displayed when the user clicks on the "Garbage" button on the warehouse list

  // showModal = () => {
  //   this.setState(
  //     {showModal: true}
  //   )
  // }

  // this will be the modal that is displayed when the user clicks on the "cancel button

  // closeModal = () => {
  //   this.setState({ showModal: false });
  // };

  // this will delete the warehouse, This will go in the delete function in the warehouse details ie delete={() => this.handleDelete(this.handleDelete)}/>

  // handleDelete() {
  //   axios.delete(`http://localhost:8080/warehouse/${this.props.id}`)
  //   .then(res => {
  //     this.setState({
  //       showModal: false,
  //     })
  //    console.log(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
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
              <img className="modal__x-icon" src={XIcon} alt="close window" />
            </a>
          </div>
        </div>
      </>
    );
  }
}
