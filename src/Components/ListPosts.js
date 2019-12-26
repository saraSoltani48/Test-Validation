import React, { Component } from 'react'
import Post from "./Post";
import axios from "axios";
import "./Style.css"
class ListPosts extends Component {
    state={
        listPost:[]
    }
    componentDidMount = () => {
        this.getUsers();
      };
    
      getUsers = () => {
        axios.get( `https://jsonplaceholder.typicode.com/posts?userId=${this.props.match.params.id}`).then(res =>
          this.setState({
            listPost: res.data
          })
        );
      };
    render() {
        return (
            <div className="mylist">
                {this.state.listPost.map((el,key)=>(
                 <div key={key}>
                  
                    <Post  contact={el}/>
                 </div>
             ))} 
            </div>
        )
    }
}
export default ListPosts;