import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CART } from '../../graphql/Cart';
import Cart from './Cart'

const CartContainer = ()=>{
    const { data, loading, error } = useQuery(GET_CART);
    if(loading) return <p>Loading...</p>

    const cart = data.cartItems
    return <Cart cart={cart} />
}

export default CartContainer;