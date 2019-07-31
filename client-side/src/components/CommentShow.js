import React from 'react';

export default class CommentShow extends React.Component {
    render() {
        return (
            <div>{this.props.content}</div>
        )
    }
}