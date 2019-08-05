import React from 'react';
import {Form, Button} from 'react-bootstrap';
import API from "../adapters/API";


export default class CommentForm extends React.Component {
    state = {
        content: "",
        user_id: this.props.currentUser.id,
        post_id: this.props.post
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    handleSubmit = () => {
        API.addComment(this.state)
        this.setState({content: "", user_id: this.props.currentUser.id, post_id: this.props.post})
        // window.location.reload();
    }

    render() {
        return (
            <Form onSubmit={event => {
                event.preventDefault();
                this.handleSubmit();
            }}
            onChange={event => {
                this.handleChange(event.target.name, event.target.value)
            }}>
                <Form.Group controlId="comment">
                    <Form.Control type="text" name="content" placeholder="Heckle" value={this.state.content} />
                    <Button variant="primary" type="submit">Heckle</Button>
                </Form.Group>
            </Form>
        )
    }
}