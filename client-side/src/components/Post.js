import React from "react";
import API from "../adapters/API";
import Card from "react-bootstrap/Card";

class Post extends React.Component {
  render() {
    return (
        <div className="postsContainer">
            <Card className="cards">
              <Card.Header>{this.props.user.username}</Card.Header>
              <Card.Body>
                <Card.Title>{this.props.content}</Card.Title>
              </Card.Body>
            </Card>
        </div>
    );
  }
}
export default Post;
