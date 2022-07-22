import React from 'react';
import './DeleteItemModal.scss';
import closeIcon from '../../assets/icons/close-24px.svg';

const SERVER_URL =
  process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL_BACKUP;

class DeleteItemModal extends React.Component {
  // This will be the starting state which will also be in inventory list component

  // state = {
  //   showModal: false
  // }

  // These can be passed in as props from the inventory list component
  // this will be the modal that is displayed when the user clicks on the "Trash Can" button on the inventory list

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
  //   axios.delete(`${SERVER_URL}/warehouse/${this.props.id}`)
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
    if (!this.props) {
      return <h1>Loadings...</h1>;
    }
    console.log(this.props);
    return (
      <div className="container">
        <div className="modal">
          {/* Will need to receive itemDetails from props */}
          {/* <a href="/" onClick={this.props.closeModal}> */}
          <img className="modal__x-icon" src={closeIcon} alt="close" />
          {/* </a> */}
          <h1 className="modal__header">Delete an inventory item?</h1>
          <p className="modal__text">
            Please confirm that you'd like to delete this item from the
            inventory list. You won't be able to undo this action.
          </p>
          <div className='modal__button-container'>
            <button
              className="modal__button modal__button--cancel"
              // onClick={this.props.closeModal}
            >
              Cancel
            </button>
            {/* When keyboarding, cancel should be first to prevent accidental selection of destructive action */}
            <button
              className="modal__button modal__button--delete"
              onClick={this.props.delete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteItemModal;
