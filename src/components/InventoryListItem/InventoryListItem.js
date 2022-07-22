
const InventoryListitem = () => {
    
    return (
        <main>
                    <article className="warehouse-list-item">
            <div className="warehouse-info">
                <div className="warehouse-info__name-address">
                    <div>
                        <h4>Inventories</h4>
                        <Link to={`//${id}`}>
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
                <img src={editIcon} alt="edit"/>
            </div>
        </article>
        </main>
    )
}


export default InventoryListitem;