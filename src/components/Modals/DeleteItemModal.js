import axios from 'axios';
import { Link } from 'react-router-dom';
import './DeleteItemModal.scss';
import closeIcon from '../../assets/icons/close-24px.svg';


const SERVER_URL =
  process.env.REACT_APP_SERVER_URL || process.env.REACT_APP_SERVER_URL_BACKUP;

const DeleteItemModal = (props) => {
  /// CODE BELOW TO BE REVIEWED ONCE INVENTORY LIST COMPONENT IS READY
  // ADD TO INVENTORY LIST and WAREHOUSE DETAILS COMPONENTS CODE

  // Default state

  // state = {
  //   showModal: false
  // }

  // code to conditionally show/hide delete modal -

  // if (this.state.showModal){
  //   return <DeleteItemModal itemId={this.state.selectedItem} closeModal={this.closeModal}/>
  //}

  // show modal (called by clicking the trash can icon)
  // showModal = (id) => {
  //   this.setState(
  //     {showModal: true, selectedItemId:{id}}
  //   )
  // }

  // hide modal without deleting item (called from modal)
  // const closeModal = () => {
  //   this.setState({ showModal: false });
  // };

  // ----- END OF CODE TO BE TRANSFERRED TO INVENTORY LIST AND WAREHOUSE DETAILS ----

  // ADD TO INVENTORY LIST ITEM COMPONENT CODE

  // Add to delete button attributes and pass item id
  // onClick = this.showModal(id);

  // ----- END OF CODE TO BE TRANSFERRED TO INVENTORY LIST ITEM ----

  // Send delete item request to the API
  const handleDelete = () => {
    axios
      .delete(`${SERVER_URL}/warehouse/${this.props.id}`)
      .then((res) => {
        alert("Item deleted!");
        <Link to="/inventory" />;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleCancelClick = () => {
    this.props.handleCancel();
  };

  if (!this.props) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="container">
      <div className="modal">
        {/* Will need to receive itemDetails from props */}
        <a href="/" onClick={handleCancelClick}>
          <img className="modal__x-icon" src={closeIcon} alt="close" />
        </a>
        <h1 className="modal__header">Delete {selectedItem} inventory item?</h1>
        <p className="modal__text">
          Please confirm that you'd like to delete {selectedItem} from the
          inventory list. You won't be able to undo this action.
        </p>
        <div className="modal__button-container">
          {/* When keyboarding, cancel should be first to prevent accidental selection of destructive action */}
          <button
            className="modal__button modal__button--cancel"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
          <button
            className="modal__button modal__button--delete"
            onClick={() => {
              handleDelete(this.props.selectedItemId);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
