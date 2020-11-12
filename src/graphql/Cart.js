import { gql } from '@apollo/client'
export const GET_CART = gql`
    query getCart {
        cartItems @client
    }

`;


export const addItemToCart = (client) => {
    const { cartItems } = client.readQuery(GET_CART);
    console.log(cartItems)
}