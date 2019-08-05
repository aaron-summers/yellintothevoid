import React from "react";
import API from "../adapters/API";
import Post from "./Post";
import PostForm from "./Form";

class Container extends React.Component {
  state = {
    posts: [],
    sortToggle: false,
    sortedPosts: []
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

  handleClick = () => {
    if (this.state.sortToggle === true) {
      console.log("sorting...")
      this.setState({
        sortToggle: false
      })
    } else {
      console.log("default preview")
      this.getSortedPosts();
      this.setState({
        sortToggle: true
      })
    }
    // this.state.sortToggle ? this.setState({sortToggle: false}), console.log("sorting...") : console.log("default preview")
  }

  getSortedPosts = () => {
    // const spreadPost = {...this.state.posts}
    // console.table(spreadPost.map())
    const preview = this.state.posts.map(post => (post.comments.length))
    preview.sort(function(a, b) {
      return b - a
    })
    console.log(preview)
    // this.setState({
    //   sortedPosts: pre
    // })
  }

  render() {
    return (
      <div className="container">
        <button className="btn btn-warning" onClick={this.handleClick}>Toggle</button>
        <div className="containerWidth">
          <div className="postForm">
            <PostForm addPost={this.addPost} currentUser={this.props.user} />
          </div>
        </div>
        <div>
          {this.state.posts.map(post => (
            <Post {...post} currentUser={this.props.user}/>
          ))}
        </div>
      </div>
    );
  }
}
export default Container;
