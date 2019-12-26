import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap";
import {Link} from "react-router-dom"
import "./Style.css"
 class Cart extends Component {
    render() {
        const {user}=this.props
        return (
            <div>
                <Card style={{ width: '18rem' }}>
  
  <Card.Body style={{ width: '18rem' }}>
      <Card.Text className="card"> </Card.Text>
      <Card.Img  className="image" variant="top" src="https://www.w3schools.com/howto/img_avatar.png" />
    <Card.Title>Name:{user.name}</Card.Title>
    <Card.Text>UserName:{user.username} </Card.Text>
    <Card.Text>Email{user.email} </Card.Text>
    <Card.Text>Address:{user.address.street} </Card.Text>
    <Card.Text>Address:{user.address.city} </Card.Text>
    <Card.Text>Address:{user.phone} </Card.Text>
    <Card.Text>{user.website} </Card.Text>
    <Link to={`/posts/${user.id}`}>
         
    <Button variant="primary">Folowing</Button>
    </Link>
  </Card.Body>
</Card>
            </div>
        )
    }
}



export default Cart;