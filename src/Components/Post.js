import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap";
import {Link} from "react-router-dom"
 class Post extends Component {
    render() {
        const {contact}=this.props
        return (
            <div>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Text>
     Title: {contact.title}
    </Card.Text>
    <Card.Text>
     Body: {contact.body}
    </Card.Text>
    <Link to={`/details/${contact.id}`}>
    <Button variant="primary">Details</Button>
    </Link>
  </Card.Body>
</Card>    
            </div>
        )
    }
}
export default Post;