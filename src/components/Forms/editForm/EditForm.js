import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

export default class EditForm extends Component {
    
    state = {
        name: '',
        age: '',
        surname: '',
        country: '',
        city: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {
        this.props.changeProfileRequest(this.state);
    };
    
    render() {

        const {name, age, surname, country, city} = this.state;

        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label htmlFor="name">Name</label>
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
                        <label htmlFor="age">Surname</label>
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            placeholder={this.props.currentInfo.surname && this.props.currentInfo.surname !== '' ? this.props.currentInfo.surname : 'Enter your surname'}
                            value={surname}
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

                    <Form.Field>
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            name="country"
                            id="country"
                            placeholder={this.props.currentInfo.country && this.props.currentInfo.country !== '' ? this.props.currentInfo.country : 'Enter your country'}
                            value={country}
                            onChange={this.onChange}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            id="city"
                            placeholder={this.props.currentInfo.city && this.props.currentInfo.city !== '' ? this.props.currentInfo.city : 'Enter your city'}
                            value={city}
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
