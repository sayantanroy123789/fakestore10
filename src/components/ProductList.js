
import '../App.css';
function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '33%', }}>
                            <div className='product-item'>
                                <img src={productItem.image} width="160px" height="200px" />
                                
                                <h2>{productItem.name} | {productItem.category} </h2>
                                <p>{productItem.category}</p>
                                <p> {productItem.seller} </p>
                                <p> $ {productItem.price} /-</p>
                                <button
                                    onClick={() => addToCart(productItem)}
                                 style={{backgroundColor:"violet", height:"36px", width:"120px", cursor:"pointer"}}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList;