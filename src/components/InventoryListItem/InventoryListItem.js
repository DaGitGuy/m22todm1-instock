import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";


const InventoryListitem = ({id, category, itemName, status, quantity, warehouseName}) => {
    
    return (
        <main>
            <article className="inventory-list-item">
            <div className="inventory-info">
                <div className="inventory-info__name-address">
                    <div>
                        <h4>Inventories</h4>
                        
                            <p>{itemName}</p>
                        
                    </div>
                    <div>
                        <h4>Address</h4>
                        {/* <p>{`${address}, ${city}, ${country}`}</p> */}
                    </div>
                </div>
                <div className="warehouse-info__contacts">
                    <div>
                        <h4>Contact Name</h4>
                        {/* <p>{contact.name}</p> */}
                    </div>
                    <div>
                        <h4>Contact Information</h4>
                        {/* <p>{contact.phone}</p> */}
                        {/* <p>{contact.email}</p> */}
                    </div>
                </div>
            </div>
            <div className="warehouse-actions">
                <img src={deleteIcon} alt="delete" />
                <img src={editIcon} alt="edit"/>
            </div>
        </article>
        </main>
    )
}


export default InventoryListitem;