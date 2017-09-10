import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class EditForm extends Component {
    
    state = {
        name: '',
        age: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        this.props.changeProfileRequest(this.state);
    }
    
    render() {

        const {name, age} = this.state;

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label htmlFor="name">Your name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder={this.props.currentInfo.name && this.props.currentInfo.name !== '' ? this.props.currentInfo.name : 'Enter your name'}
                            value={name}
                            onChange={this.onChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label htmlFor="age">Your age</label>
                        <input
                            type="text"
                            name="age"
                            id="age"
                            placeholder={this.props.currentInfo.age && this.props.currentInfo.age !== '' ? this.props.currentInfo.age : 'Enter your age'}
                            value={age}
                            onChange={this.onChange}
                        />
                    </Form.Field>

                    <div className="row">
                        <Button primary>Save changes</Button>
                        <Link to='/'>Back</Link>
                    </div>
                    
                </Form>
            </div>
        )
    }
}
