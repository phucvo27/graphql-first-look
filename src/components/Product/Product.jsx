import React from 'react';

const Product = (props) => {
    //console.log(props)
    const { image, name, price } = props.product;
    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={()=>{
                props.addItemToCart(props.product)
                }}>Add To Cart</button>
        </div>
    )
}

export default Product;