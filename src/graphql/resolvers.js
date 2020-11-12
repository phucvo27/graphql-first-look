import { gql } from '@apollo/client';

export const typeDefs = gql`

    type Product {
        name: String!
        image: String!
        id: String!
        price: String!
    }
    extend type Mutation {
        AddItemToCart(product: String!): Boolean! @client
        addTodo(todo: String!): Todo!
    }
`;
export const GET_CART = gql`
    query getCart {
        cartItems @client
    }
`;
export const resolvers = {
    Mutation: {
        AddItemToCart: (_root, args , { cache }) => {
            const { cartItems } = cache.readQuery({
                query: GET_CART
            })
            console.log('on add item to cart ')
            console.log(args);
            console.log(cartItems)
            console.log('running mutation')
            // console.log(cartItems)
            // const updateCart = {
            //     ...cartItems,
            //     [item.id]: item
            // }

            // cache.writeQuery({
            //     query: GET_CART,
            //     data: {
            //         cartItems: updateCart
            //     }
            // })
        },
        addTodo: (_root, args, context) =>{
            console.log(context)
            console.log(args);
            // return 'hi'
        }
    }
}