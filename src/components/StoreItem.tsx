interface StoreItemProps {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    return (
        <div className="col-sm-12 col-lg-4">
            <div className="col-content border border-light text-center p-3">
                <img className="col-12" src={imgUrl} style={{ maxWidth: "350px" }}></img>
                <div className="row justify-content-between">
                    <h4 className="col-6 text-start">{name}</h4>
                    <div className="col-6 text-end">{price}</div>
                </div>
                {/* Add butoms remove, plus, minus */}
            </div>
        </div>
    )
}

export default StoreItem;