import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShopingCartContext"
import CartItem from "../components/CartItem"
import { formatCurrency } from "../utilities/formatCurrency";
import StoreItems from "../data/items.json"

function ShoppingCart({ isOpeningCart }: { isOpeningCart: boolean }) {
    const { closeCart, cartItems } = useShoppingCart();
    return (
        <Offcanvas show={isOpeningCart} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cartItems.length > 0 ? cartItems.map(item => <div className="row align-items-center p-3">
                        <CartItem key={item.id} {...item} />
                    </div>) : <span> Your cart is empty.</span>
                }
                {
                    cartItems.length > 0 && <div className="fs-5 text-end">
                        Total: {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = StoreItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0))}
                    </div>
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ShoppingCart;