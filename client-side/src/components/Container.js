import React from 'react'
import API from '../adapters/API'
import Post from './Post';
// import { Card } from 'semantic-ui-react';

class Container extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        API.getPosts()
            .then(posts => this.setState({ posts }))
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map(post => <Post {...post} />)
                }
            </div>
        )
    }
}
export default Container