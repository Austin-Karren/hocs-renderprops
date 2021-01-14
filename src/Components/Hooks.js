// import React, { Component } from 'react';

// class Hooks extends Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0,
//             name: ''
//         }
//     }

//     handleAdd(){
//     this.setState({ count: this.state.count + 1})
// }

//     handleInput(e){
//      this.setState({name: e.target.value})
// }

//     render(){
//         return(
//             <div>
//                 {this.state.count}
//                  <input onChange={(e) => this.handleInput(e.target.value)}/>
//             </div>
//         )
//     }
// }

// export default Hooks;

import React, {useState, useEffect} from 'react';
import NameDisplay from './NameDisplay'
import Axios from 'axios';

const Hooks = props => {
    const [count, setCount] = useState(0),
          [name, setName] = useState(''),
          [user, setUser] = useState({});

    useEffect(() => {
        Axios.get('request-url')
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        console.log('UseEffect simulating componentDidUpdate');
    }, [count, name])

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <NameDisplay name={name}/>
            <input onChange={(e) => setName(e.target.value)}/>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default Hooks;