import deleteIcon from '../../assets/icons/delete_outline-24px';
import editIcon from '../../assets/icons/edit-24px';

function WarehouseDetails() {
    return(
        <main>
            <section>
            <h2>Washington</h2>
            </section>
            
            <section>
                <p>WAREHOUSE ADDRESS:</p>
                <p> 33 Pearl Street SW, Washington, USA</p>
            </section>
            <article>
                <section>
                    <p>CONTACT NAME:</p>
                    <p> Graeme Lyon</p>
                    <p>Warehouse Manager</p>
                </section>

                <section>
                    <p>CONTACT INFORMATION:</p>
                    <p> +1(647) 504-0911</p>
                    <p>glyon@instock.com</p>
                </section>
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