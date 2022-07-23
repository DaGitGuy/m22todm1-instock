import SearchBar from "../SearchBar/SearchBar";
import sortArrow from "../../assets/icons/sort-24px.svg";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

import "./InventoryList.scss";
// import InventoryListitem from "../InventoryListItem/InventoryListItem";
import "../WarehouseDetails/WarehouseDetails.scss";

const InventoryList = ({ inventoryData }) => {

    if (!inventoryData) {
        return <h1>Loading...</h1>;
    }
    console.log(inventoryData);
    return (
        <main className="inventory-list">
            <article className="inventory-list__header">
                <h1 className="inventory-list__title" >Inventory</h1>
                <div className="inventory-list-nav">
                    <SearchBar />
                    <button className="inventory-list-nav__button">+ Add New Item</button>
                </div>
            </article>
            
               <article className="inventory-list__tablet-heading" >  
                {/* { Hide this in mobile} */}
                    <div className='details__header' >
                            <p className='details__inventory-title details__header--selected' >INVENTORY ITEM</p>
                            <img className='details__sort-arrows' src={sortArrow} />
                        </div>
                        <div className='details__header'>
                            <p className='details__inventory-status details__header--selected' >STATUS</p>
                            <img className='details__sort-arrows' src={sortArrow} />
                        </div>
                        <div className='details__header'>
                            <p className='details__category details__header--selected' >CATEGORY</p>
                            <img className='details__sort-arrows' src={sortArrow} />
                        </div>
                        <div className='details__header' >
                            <p className='details__quantity details__header--selected' >WAREHOUSE</p>
                            <img className='details__sort-arrows' src={sortArrow} />
                        </div>
                        <div className='details__header' >
                            <p className='details__quantity details__header--selected' >QTY</p>
                            <img className='details__sort-arrows' src={sortArrow} />
                        </div>
                        <p className='details__inventory-action'>ACTIONS</p>
               </article>

            {inventoryData.map((inventory) => (

                <article className='details__inventory'>
                    <section className='details__inventory-box' >
                        <p className='details__inventory-title details__header--selected' >INVENTORY ITEM</p>

                            {/* { Add Headings here that are visible in mobile + none in tablet} */}
                        <div className='details__item-box' >
                            <a className='details__inventory-item' >{inventory.itemName}</a>
                            <img className='details__chevron' src={chevronRight} />
                        </div>

                    </section>

                    <section className='details__inventory-box'>
                         <p className='details__inventory-status details__header--selected' >STATUS</p>
                        <div className='details__stock-box'>
                            <p className='details__inventory-message'>{inventory.status}</p>
                        </div>

                    </section>

                    <section className='details__inventory-box'>
                    <p className='details__category details__header--selected' >CATEGORY</p>
                        <div>
                            <p className='details__category-item' >{inventory.category}</p>
                        </div>
                    </section>

                    <section className='details__inventory-box' >
                        <p className='details__quantity details__header--selected' >QTY</p>
                        <div>
                          <p className='details__quantity-item'>{inventory.quantity}</p>
                        </div>
                    </section>

                    <section className='details__inventory-box' >
                    <p className='details__quantity details__header--selected' >WAREHOUSE</p>

                        <div>
                            <p className='details__quantity-item'>{inventory.warehouseName}</p>
                        </div>
                    </section>

                    <section className='details__inventory-icon' >
                        <div className='details__action-icons' >
                            <img className='details__delete-icon' src={deleteIcon} />
                            <img className='details__edit-icon' src={editIcon} />
                        </div>

                    </section>
                </article>
            ))
            }




        </main>
    )
}

export default InventoryList;