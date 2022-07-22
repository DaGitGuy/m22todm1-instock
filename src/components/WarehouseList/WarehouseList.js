import './WarehouseList.scss';
import SearchBar from '../../components/SearchBar/SearchBar';
import WarehouseListItem from '../../components/WarehouseListItem/WarehouseListItem';

const WarehouseList = ({ warehouseData }) => {
  return (
    <div className="warehouse-list">
        <div className="warehouse-list__header">
            <h1>Warehouses</h1>
            <div className="warehouse-list-nav">
                <SearchBar />
                <button className="warehouse-list-nav__button">+ Add New Warehouse</button>
            </div>
        </div>
        <div className="warehouse-list__headings">
            <p>Warehouse</p>
            <p>Address</p>
            <p>Contact Name</p>
            <p>Contact Information</p>
            <p>Actions</p>
        </div>
      
      {warehouseData.map((warehouse) => {
        return (
          <WarehouseListItem 
            key={warehouse.id}
            id={warehouse.id}
            name={warehouse.name}
            address={warehouse.address}
            city={warehouse.city}
            country={warehouse.country}
            contact={warehouse.contact}
          />
        )
      })

      }
      
    </div>
  );
};

export default WarehouseList;