import SearchBar from "../SearchBar/SearchBar";
import sortArrow from "../../assets/icons/sort-24px.svg";
import "./InventoryList.scss";

const InventoryList = ({inventoryData}) => {
    console.log(inventoryData)
    return (
        <main className="inventory-list">
            <article className="inventory-list__header">
                <h1 className="inventory-list__title" >Inventory</h1>
                <div className="inventory-list-nav">
                    <SearchBar />
                    <button className="inventory-list-nav__button">+ Add New Item</button>
                </div>
            </article> 
            <article className="inventory-list__headings">

                <div className='inventory-list__header-box'>
                    <p className="inventory-list__header-title" >INVENTORY ITEM</p>
                    <img className='details__sort-arrows' src={sortArrow} /> 
                </div>

                <div className='inventory-list__header-box'>
                    <p className="inventory-list__header-title">CATEGORY</p>
                    <img className='details__sort-arrows' src={sortArrow} />
                </div>

                <div className='inventory-list__header-box'>
                    <p className="inventory-list__header-title">STATUS</p>
                    <img className='details__sort-arrows' src={sortArrow} />
                </div>

                <div className='inventory-list__header-box'>
                    <p className="inventory-list__header-title">QTY</p>
                    <img className='details__sort-arrows' src={sortArrow} />
                </div>
               <div className='inventory-list__header-box'>
                    <p className="inventory-list__header-title">WAREHOUSE</p>
                    <img className='details__sort-arrows' src={sortArrow} />
               </div>
                <div className='inventory-list__header-box'>
                     <p className="inventory-list__header-title">ACTIONS</p>
                </div>
            </article>
        </main>
    )
}

export default InventoryList;