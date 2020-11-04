import { gql, useQuery } from '@apollo/client';
import Posts from './Dog.component'

const getPosts = gql`
    query {
        dogs {
            id
            breed
            displayImage
            images {
            url
            }
        }
    }
`;

const PostContainer = ({onDogSelected})=>{
    const { loading, error, data } = useQuery(getPosts);
    if(loading) return <p>Loading...</p>
    if(error) return <p>We have an error</p>
    console.log(data)
    return (
        <select name="dog" onChange={onDogSelected}>
            {data.dogs.map(dog => (
                <option key={dog.id} value={dog.breed}>
                {dog.breed}
                </option>
            ))}
        </select>
    )
}

export default PostContainer;