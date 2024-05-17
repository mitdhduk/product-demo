import { Link } from "react-router-dom";

const ProductList = ({ data }) => {
    return (
        data?.map((product, index) => {
            return (
                <Link to={`/product/${product?.id}`}>
                    <div className="product" key={index}>
                        <div className="image-box">
                            <img className="images" id="image-1" src={product?.thumbnail} />
                        </div>

                        <div className="text-box">
                            <h2 className="item" title={product?.title}>{product?.title?.length > 15 ? `${product?.title.slice(0, 15)}...` : product?.title}</h2>
                            <h4 className="item" brand={product?.brand}>{product?.brand?.length > 15 ? `${product?.brand.slice(0, 15)}...` : product?.brand}</h4>
                            <h2 className="item" category={product?.category}>{product?.category?.length > 15 ? `${product?.category.slice(0, 15)}...` : product?.category}</h2>
                            <h3 className="price"> ₹{product?.price}/-</h3>
                            <p style={{ fontSize: '12px' }} className="description" title="description">{product?.description?.length > 12 ? `${product.description.slice(0, 65)}...` : product?.description}</p>

                            <label type="number" for="item-1-quantity">Quantity:</label>
                            <input type="text" name="item-1-quantity" id="item-1-quantity" value="1" />
                            <button type="button" name="item-1-button" id="item-1-button">Add to Cart</button>
                        </div>
                    </div>
                </Link>
            )
        })
    )
}

export default ProductList;