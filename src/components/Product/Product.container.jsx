import React from 'react';
import { useMutation, gql } from '@apollo/client';
import ProductComponent from './Product'


export const GET_CART = gql`
    query getCart {
        cartItems @client
    }

`;
const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($type: String!){
        AddItemToCart(product: $type) @client
    }
`;

const ProductContainer =  (props) =>{
    const [addItem, { data, client}] = useMutation(ADD_ITEM_TO_CART)
    
    const handleAdd = async (item)=>{
        console.log('preparing run mutation')
        console.log(item)
        addItem({variables: { product: '1111'}})
        // addItem({variables: { product: item}}).then(()=>{
        //     console.log(item)
        //     const { cartItems } = client.readQuery({
        //         query: GET_CART
        //     })
        //     console.log(cartItems);
        //     client.writeQuery({
        //         query: GET_CART,
        //         data: {
        //             cartItems: {...cartItems, [item.id]: item}
        //         }
        //     })

        // })
    }
    return <ProductComponent {...props} addItemToCart={handleAdd} />
}


export default ProductContainer;