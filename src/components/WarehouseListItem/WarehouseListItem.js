import "./WarehouseListItem.scss";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

const WarehouseListItem = ({ id, name, address, city, country, contact }) => {
  return (
    <article className="warehouse-list-item">
      <div className="warehouse-info">
        <div className="warehouse-info__name-address">
          <div>
            <h4>Warehouse</h4>
            <Link to={`/warehouse/${id}`}>
              <p>{name}</p>
            </Link>
          </div>
          <div>
            <h4>Address</h4>
            <p>{`${address}, ${city}, ${country}`}</p>
          </div>
        </div>
        <div className="warehouse-info__contacts">
          <div>
            <h4>Contact Name</h4>
            <p>{contact.name}</p>
          </div>
          <div>
            <h4>Contact Information</h4>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
          </div>
        </div>
      </div>
      <div className="warehouse-actions">
        <img src={deleteIcon} alt="delete" />
        <Link to={`./warehouse/${id}/edit`}>
          <img src={editIcon} alt="edit" />
        </Link>
      </div>
    </article>
  );
};

export default WarehouseListItem;
