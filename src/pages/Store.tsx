import StoreItems from "../data/items.json"
import StoreItem from "../components/StoreItem"

function Store() {
    return (
        <div className="row g-3">
            {StoreItems.map(item =>
                <StoreItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    imgUrl={item.imgUrl}
                />)}
        </div>
    )
}
export default Store;