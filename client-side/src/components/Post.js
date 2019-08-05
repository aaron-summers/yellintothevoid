import React from "react";
import Card from "react-bootstrap/Card";
import CommentIndex from "./CommentIndex"
import CommentForm from "./CommentForm";
import API from "../adapters/API"

class Post extends React.Component {

  // componentDidMount() {
  //   API.addComment().then(comments => this.setState({
  //     comments
  //   }));
  // }

  // addPost = newComment => {
  //   API.postPost(newComment).then(comment =>
  //     this.setState({
  //       comments: [...this.state.comments, comment]
  //     })
  //   );
  // };

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
                <CommentForm post={this.props.id} currentUser={this.props.user}/>
              </div>
            </Card>
        </div>
    );
  }
}
export default Post;
