import React, { Component } from 'react'
import Details from "./Details"
import axios from "axios"
import "./Style.css"
 class DetailsList extends Component {

    state={
        listDelais:[]
    }
    componentDidMount = () => {
        this.getUsers();
      };
    
      getUsers = () => {
        axios.get( `https://jsonplaceholder.typicode.com/comments?postId=${this.props.match.params.id}`).then(res =>
          this.setState({
            listDelais: res.data
          })
        );
      };
    render() {
        return (
            <div className="mylist">
                 {this.state.listDelais.map((el,key)=>(
                 <div key={key}>
                  
                    <Details mydetails={el}/>
                 </div>
             ))}    
            </div>
        )
    }
}
export default DetailsList;