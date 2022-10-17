import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShopingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

interface StoreItemProps {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
    const quaintity = getItemQuantity(id);
    return (
        <div className="col-sm-12 col-lg-4">
            <div className="col-content border border_light_300 text-center p-3">
                <img className="col-12" src={imgUrl} style={{ maxWidth: "350px" }}></img>
                <div className="row justify-content-between align-items-baseline">
                    <h4 className="col-9 text-start fs-5">{name}</h4>
                    <div className="col-3 text-end text-muted">{formatCurrency(price)}</div>
                </div>
                {quaintity ?
                    <>
                        <div className="row justify-content-center align-items-center fs-5 p-3 gap-4">
                            <Button
                                className="col btn btn-primary"
                                size="sm"
                                onClick={() => increaseCartQuantity(id)}
                            >+
                            </Button>
                            <div className="col-4"><span>{quaintity} in cart</span></div>
                            <Button
                                className="col btn btn-primary"
                                size="sm"
                                onClick={() => decreaseCartQuantity(id)}
                            >-
                            </Button>
                        </div>
                        <Button
                            className="col-3 btn btn-danger mt-3" size="sm"
                            onClick={() => removeFromCart(id)}
                        >Remove
                        </Button>
                    </>
                    :
                    <Button
                        className="w-100 mt-3"
                        onClick={() => increaseCartQuantity(id)}
                    >+ Add to Cart
                    </Button>}
            </div>
        </div>
    )
}

export default StoreItem;