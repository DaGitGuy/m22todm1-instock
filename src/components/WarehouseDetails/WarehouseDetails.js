import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import chevronRight from '../../assets/icons/chevron_right-24px.svg';
import sortArrow from '../../assets/icons/sort-24px.svg';
import './WarehouseDetails.scss';


function WarehouseDetails( { warehouseData, inventoryData }) {
    return(
        <main className='details' >

            <section className='details__title-box' >
                <div className='details__title-row1' >
                    <img src={arrowBack} />
                    {/* <h2 className='details__title' >{warehouseData.name}</h2> */}
                    <h2 className='details__title' >Washington</h2>
                </div>
              
                <div className='details__title-row2' >
                    <img src={editIcon} />
                </div>
            </section>

            <article className='details__address' >
                <section className='details__address-box' >
                    <p className='details__address-title' >WAREHOUSE ADDRESS:</p>
                    {/* <p className='details__address-location' >{`${warehouseData.address}, ${warehouseData.city}, ${warehouseData.country}`}</p> */}
                    <p className='details__address-location' > 33 Pearl Street SW, Washington, USA</p>
                </section>

                <article className='details__manager'>
                    <section className='details__manager-box' >
                        <p className='details__manager-contact' >CONTACT NAME:</p>
                        {/* <p className='details__manager-name' >{warehouseData.contact.name}</p> */}
                        <p className='details__manager-name' > Graeme Lyon</p>
                        {/* <p className='details__manager-title' >{warehouseData.contact.position}</p> */}
                        <p className='details__manager-title' > Warehouse Manager</p>

                    </section>

                    <section className='details__contact' >
                        <p className='details__contact-info' >CONTACT INFORMATION:</p>
                        {/* <p className='details__contact-number' >{warehouseData.contact.phone}</p> */}
                        <p className='details__contact-number' > +1(647) 504-0911</p>
                        {/* <p className='details__contact-email' >{warehouseData.contact.email}</p> */}
                        <p className='details__contact-email' >glyon@instock.com</p>
                    </section>
                </article>

            </article>
           

            <article className='details__inventory'>
                <section className='details__inventory-box' >
                    <div className='details__header' >
                        <p className='details__inventory-title details__header--selected' >INVENTORY ITEM</p>
                        <img className='details__sort-arrows' src={sortArrow} />
                    </div>
                   
                    <div className='details__item-box' >
                        <a className='details__inventory-item' >Television</a>
                        <img  className='details__chevron' src={chevronRight} />
                    </div>
                    
                </section>

                <section className='details__inventory-box'>
                    <div className='details__header'>
                        <p className='details__inventory-status details__header--selected' >STATUS</p>
                        <img className='details__sort-arrows' src={sortArrow} />
                    </div>
                    <div className='details__stock-box'>
                        <p className='details__inventory-message'>IN STOCK</p>
                    </div>
                    
                </section>

                <section className='details__inventory-box'>
                    <div className='details__header'>
                        <p className='details__category details__header--selected' >CATEGORY</p>
                        <img className='details__sort-arrows' src={sortArrow} />
                    </div>
                    <p className='details__category-item' >Electronics</p>
                </section>

                <section className='details__inventory-box' >
                    <div className='details__header' >
                        <p className='details__quantity details__header--selected' >QTY</p>
                        <img  className='details__sort-arrows' src={sortArrow} />
                    </div>
                    <p className='details__quantity-item'>500</p>
                </section>
                <section className='details__inventory-icon' >
                    <p className='details__inventory-action'>ACTIONS</p>
                    <div className='details__action-icons' >
                        <img className='details__delete-icon' src={deleteIcon} />
                        <img className='details__edit-icon' src={editIcon} />
                    </div>
                    
                </section>
            </article>
            
        
        </main>
    )
}

export default WarehouseDetails;