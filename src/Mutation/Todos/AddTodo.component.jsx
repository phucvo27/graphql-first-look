import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { GET_TODOS } from './Todos.component'
const ADD_TODO = gql`
    mutation AddTodo($type: String!) {
        addTodo(type: $type) {
            id
            type
        }
    }
`;

const AddTodo = () => {
    let input;
    const [addTodo, { data, client }] = useMutation(ADD_TODO);
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements[0].value;
        console.log(value);
        addTodo({ variables: { type: value } }).then(res => {
            const { todos } = client.readQuery({
                query: GET_TODOS
            })
            client.writeQuery({
                query: GET_TODOS,
                data: {todos: [...todos, res.data.addTodo]}
            })
        }).catch(e => {
            console.log("in catch clause")
        })
    }
    return (
        <div>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    name="todo"
                    placeholder="Please enter your todo here"
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
}

export default AddTodo