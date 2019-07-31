import React from "react";
import Card from "react-bootstrap/Card";
import CommentIndex from "./CommentIndex"

class Post extends React.Component {
  render() {
    return (
        <div className="postsContainer">
            <Card className="cards">
              <Card.Header>{this.props.user.username}</Card.Header>
              <Card.Body>
                <Card.Title>{this.props.content}</Card.Title>
              </Card.Body>
              <div className="comments-container">
                <CommentIndex comments={this.props.comments}/>
              </div>
            </Card>
        </div>
    );
  }
}
export default Post;
