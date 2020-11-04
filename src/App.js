import React from 'react';
// import DogContainer from './Query/Dogs/Dog.container'
// import DogPhoto from './Query/Dogs/DogPhoto.component'
import Todos from './Mutation/Todos/Todos.component';
import AddTodo from './Mutation/Todos/AddTodo.component'
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
            </div>
        )
    }
};


export default App;