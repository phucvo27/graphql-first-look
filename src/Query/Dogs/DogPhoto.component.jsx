import React from 'react';
import { gql, useQuery, NetworkStatus, useLazyQuery } from '@apollo/client';
const GET_DOG_PHOTO = gql`
    query Dog ($breed: String!) {
        dog(breed: $breed) {
            id
            displayImage
        }
    }
`;

// const DogPhoto = ( {breed }) => {
//     const { loading, data, error, refetch, networkStatus } = useQuery(GET_DOG_PHOTO, {
//         variables: {breed},
//         notifyOnNetworkStatusChange: true
//     })
//     // if(breed){
//     //     return <p>Please select breed</p>
//     // }
//     if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
//     if(loading) return null
    
//     if(error) return <p>We have an error</p>
//     console.log(data)
//     return (
//         <div>
//             <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
//             <button onClick={()=>{refetch()}}>Refetch</button>
//         </div>
//     )
// }
// ==================== Manually Fetch Data ====================
const DogPhoto = ( {breed }) => {
    const [getData, { loading, data, error, refetch, networkStatus } ] = useLazyQuery(GET_DOG_PHOTO, {
        notifyOnNetworkStatusChange: true
    })
    // if(breed){
    //     return <p>Please select breed</p>
    // }
    if (networkStatus === NetworkStatus.refetch) return 'Refetching!';
    if(loading) return null
    
    if(error) return <p>We have an error</p>
    console.log(data)
    return (
        <div>
            {data && data.dog && <div><img src={data.dog.displayImage} /></div>}
            <button onClick={() => {refetch()}}>Refetch</button>
            <button onClick={() => getData({ variables: { breed } })}>Get Data</button>
        </div>
    )
}

export default DogPhoto;