import React from 'react'
import API from '../adapters/API';

class Post extends React.Component {    
    render() {
        return (
            <div className="postContainers">
                <div className="content">
                    {this.props.content}
                </div>
            </div>
        )
    }
}
export default Post