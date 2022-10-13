import { Offcanvas } from "react-bootstrap";
import { useShoppingCart } from "../context/ShopingCartContext"
import CartItem from "../components/CartItem"

function ShoppingCart({ isOpeningCart }: { isOpeningCart: boolean }) {
    const { closeCart, cartItems } = useShoppingCart();
    return (
        <Offcanvas show={isOpeningCart} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                    cartItems.map(item => <div className="row align-items-center p-3">
                        <CartItem key={item.id} {...item} />
                    </div>)
                }
            </Offcanvas.Body>
            {/* TODO: implement  total count*/}
        </Offcanvas>
    )
}

export default ShoppingCart;