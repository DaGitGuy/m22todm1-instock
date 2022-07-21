import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';
import arrowBack from '../../assets/icons/arrow_back-24px.svg';
import chevronRight from '../../assets/icons/chevron_right-24px.svg';
import './WarehouseDetails.scss';


function WarehouseDetails() {
    return(
        <main className='details' >

            <section className='details__title-box' >
                <div className='details__title-row1' >
                    <img src={arrowBack} />
                    <h2 className='details__title' >Washington</h2>
                </div>
              
                <div className='details__title-row2' >
                    <img src={editIcon} />
                </div>
            </section>

            <article className='details__address' >
                <section className='details__address-box' >
                    <p className='details__address-title' >WAREHOUSE ADDRESS:</p>
                    <p className='details__address-location' > 33 Pearl Street SW, Washington, USA</p>
                </section>

                <article className='details__manager'>
                    <section className='details__manager-box' >
                        <p className='details__manager-contact' >CONTACT NAME:</p>
                        <p className='details__manager-name' > Graeme Lyon</p>
                        <p className='details__manager-title' >Warehouse Manager</p>
                    </section>

                    <section className='details__contact' >
                        <p className='details__contact-info' >CONTACT INFORMATION:</p>
                        <p className='details__contact-number' > +1(647) 504-0911</p>
                        <p className='details__contact-email' >glyon@instock.com</p>
                    </section>
                </article>

            </article>
           

            <article className='details__inventory'>
                <section className='details__inventory-box' >
                    <p className='details__inventory-title' >INVENTORY ITEM</p>
                    <div className='details__item-box' >
                        <a className='details__inventory-item' >Television</a>
                        <img  className='details__chevron' src={chevronRight} />
                    </div>
                    
                </section>
                <section className='details__inventory-box'>
                    <p className='details__inventory-status' >STATUS</p>
                    <p className='details__inventory-message'>IN STOCK</p>
                </section>

                <section className='details__inventory-box'>
                    <p className='details__category' >CATEGORY</p>
                    <p className='details__category-item' >Electronics</p>
                </section>

                <section className='details__inventory-box' >
                    <p className='details__quantity' >QTY</p>
                    <p className='details__quantity-item'>500</p>
                </section>
                <section className='details__inventory-icon' >
                    <img className='details__delete-icon' src={deleteIcon} />
                    <img className='details__edit-icon' src={editIcon} />
                </section>
            </article>
            
        
        </main>
    )
}

export default WarehouseDetails;