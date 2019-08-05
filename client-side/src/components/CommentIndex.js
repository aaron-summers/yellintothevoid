import React from 'react';
import CommentShow from './CommentShow';


export default class CommentIndex extends React.Component {
    render() {
        return (
            <div>{this.props.comments.map(comment => (
                <CommentShow {...comment} />
            ))}</div>
        )
    }
}
