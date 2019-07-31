import React from "react";
import API from "../adapters/API";
import Post from "./Post";
import PostForm from "./Form";

class Container extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    API.getPosts().then(posts => this.setState({ posts }));
  }

  addPost = newPost => {
    API.postPost(newPost).then(post =>
      this.setState({
        posts: [...this.state.posts, post]
      })
    );
  };

  render() {
    return (
      <>
        <div>
          <PostForm addPost={this.addPost} user={this.props.user} />
        </div>
        <div>
          {this.state.posts.map(post => (
            <Post {...post} user={this.props.user} />
          ))}
        </div>
      </>
    );
  }
}
export default Container;
