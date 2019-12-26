import React, { Component } from 'react'
import axios from "axios";
import Cart from './Cart';
import "./Style.css"
class CartList extends Component {
    state={
        list:[]
    }

    componentDidMount = () => {
        this.getUsers();
      };
    
      getUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res =>
          this.setState({
            list: res.data
          })
        );
      };
    render() {
        return (
            <div className="mylist">
             {this.state.list.map((el,key)=>(
                 <div key={key}>
                   <Cart user={el} />  

                 </div>
             ))}   
            </div>
        )
    }
}
export default  CartList;