import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import API from "../adapters/API";
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
