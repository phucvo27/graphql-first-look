import React from 'react';
// import DogContainer from './Query/Dogs/Dog.container'
// import DogPhoto from './Query/Dogs/DogPhoto.component'
import Todos from './Mutation/Todos/Todos.component';
import AddTodo from './Mutation/Todos/AddTodo.component';
import Cart from './components/Cart/Cart.container';
import fakeData from './data/fake-data';
import ProductContainer from './components/Product/Product.container'
class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            breed: 'akita'
        }
    }
    onDogSelected = ({target}) => {
        this.setState(()=>({breed: target.value}))
    }
    render(){
        //console.log(this.state.breed)
        return (
            <div>
                {/* <DogContainer onDogSelected={this.onDogSelected}/>
                <DogPhoto breed={this.state.breed} /> */}
                <AddTodo />
                <Todos />
                {/* <Cart />
                {
                    fakeData.map((p, idx)=>{
                        return <ProductContainer key={idx} product={p}/>
                    })
                } */}

            </div>
        )
    }
};


export default App;