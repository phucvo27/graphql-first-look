import React from 'react';
import { useQuery, gql } from '@apollo/client';


export const GET_TODOS = gql`
    query GetTodos {
        todos {
            id
            type
        }
    }

`;

const Todos = () => {
    const {loading, error, data } = useQuery(GET_TODOS)
    if(loading) return <p>Loading....</p>;
    if(error) return <p>Error...</p>
    console.log(data)
    return data.todos.map((todo, idx) => {
        return (
            <p key={idx}>{todo.type}</p>
        )
    })
}

export default Todos;