import React from "react";
import "./Modal.scss";
import DeleteButton from "../../assets/icons/close-24px.svg";

export default class WarehouseModel extends React.Component {
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
            <button className="modal-cancel button">Cancel</button>
            <button className="modal-delete button">Delete</button>
            <a href="/" onClick={this.props.closeModal}>
              <img
                className="modal__x-icon"
                src={DeleteButton}
                alt="x button"
              />
            </a>
          </div>
        </div>
      </>
    );
  }
}
