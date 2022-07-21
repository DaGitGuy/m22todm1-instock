import deleteIcon from '../../assets/icons/delete_outline-24px.svg';
import editIcon from '../../assets/icons/edit-24px.svg';

function WarehouseDetails() {
    return(
        <main className='details' >
            <section className='details__title-box' >
                <h2 className='details__title' >Washington</h2>
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
           

            <article>
                <section>
                <p>INVENTORY ITEM</p>
                <a>Television</a>
                </section>
                <section>
                    <p>CATEGORY</p>
                    <p>Electronics</p>
                </section>
                <section>
                    <p>STATUS</p>
                    <p>IN STOCK</p>
                </section>
                <section>
                    <p>QTY</p>
                    <p>500</p>
                </section>
                <section>
                    <img src={deleteIcon} />
                    <img src={editIcon} />
                </section>
                
            </article>
        
        </main>
    )
}

export default WarehouseDetails;