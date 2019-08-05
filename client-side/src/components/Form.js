import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class PostForm extends React.Component {
  state = {
    user_id: this.props.user.id,
    content: "",
    flags: 0
  };

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    });
  };

  submitForm = () => {
    this.props.addPost(this.state);
    this.setState({
      user_id: this.props.user.id,
      content: "",
      flags: 0
    });
  };

  render() {
    return (
      <div className="postsContainer">
        <Card>
          <Form
            onSubmit={event => {
              event.preventDefault();
              this.submitForm();
            }}
            onChange={event =>
              this.handleChange(event.target.name, event.target.value)
            }
          >
            <Form.Group controlId="newScream">
              <Form.Control
                type="text"
                name="content"
                value={this.state.content}
                placeholder="Let It Rip"
              />
              <div className="submitButton">
              <Button variant="primary" type="submit" >
                Scream
              </Button>
              </div>
            </Form.Group>
          </Form>
        </Card>
      </div>
    );
  }
}
export default PostForm;
