import React from 'react';
import { connect } from 'react-redux';
import { taskCreate } from '../../../actions/taskActions';
import {Form, Button} from 'semantic-ui-react';
import '../Task.css';

class TaskFormContainer extends React.Component {

    state = {
        body: ''
    };

    onSubmit = (e) => {
        e.preventDefault();
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        const {body} = this.state;

        return(
            <div className="form-wrapper">
                <Form className="inline-form">
                    <Form.Field>
                        <input
                            type="text"
                            name="body"
                            id="body"
                            placeholder='Type your post here'
                            value={body}
                            onChange={this.onChange}
                        />
                    </Form.Field>
                    <Button primary>Save post</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {taskCreate})(TaskFormContainer);