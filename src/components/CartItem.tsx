import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShopingCartContext"
import StoreItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number,
    quantity: number,
}

function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = StoreItems.find(item => item.id === id)
    if (item == null) return null;
    return <>
        <img className="col-3 p-0" src={item.imgUrl} style={{ objectFit: "cover" }}></img>
        <div className="col-5 p-0">
            <div className="fs-6">{item.name}<span className="text-muted">{quantity > 1 ? " x" + quantity : null}</span></div>
            <p className="fs-6 text-muted">{formatCurrency(item.price)}</p>
        </div>
        <div className="col-3 p-0">{formatCurrency(item.price * quantity)}</div>
        <div className="col-1 p-0">
            <Button size="sm" onClick={() => removeFromCart(id)} variant="outline-danger">X</Button>
        </div>
    </>
}

export default CartItem;