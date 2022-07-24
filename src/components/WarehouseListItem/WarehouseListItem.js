import './WarehouseListItem.scss';
import chevronRight from '../../assets/icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import { Link } from 'react-router-dom';
import React from 'react';

class WarehouseListItem extends React.Component {
    render () {
    return (
        <article className="warehouse-list-item">
            <div className="warehouse-info">
                <div className="warehouse-info__name-address">
                    <div>
                        <h4>Warehouse</h4>
                        <Link to={`/warehouse/${this.props.id}`}>
                            <p>{this.props.name}</p>
                            <img src={chevronRight} alt=""/>
                        </Link>
                    </div>
                    <div>
                        <h4>Address</h4>
                        <p>{`${this.props.address}, ${this.props.city}, ${this.props.country}`}</p>
                    </div>
                </div>
                <div className="warehouse-info__contacts">
                    <div>
                        <h4>Contact Name</h4>
                        <p>{this.props.contact.name}</p>
                    </div>
                    <div>
                        <h4>Contact Information</h4>
                        <p>{this.props.contact.phone}</p>
                        <p>{this.props.contact.email}</p>
                    </div>
                </div>
            </div>
            <div className="warehouse-actions">
                <img src={deleteIcon} alt="delete" />
                <Link to={`/warehouse/${this.props.id}/edit`}>
                  <img src={editIcon} alt="edit"/>     
                </Link>
            </div>
        </article>
    );
};
}

export default WarehouseListItem;
