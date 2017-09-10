import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import validateInput from '../../../common/validateInput'

export default class SigninForm extends React.Component {

    state = {
        login: '',
        password: '',
        loading: false,
        errors: {}
    };

    onSubmit = () => {
        if (this.isValid()) {
            this.setState({errors: {}});
            this.props.signupRequest(this.state)
                .then(()=> {
                    this.props.history.replace('/signin');
                })
                .catch(error => {
                    console.log(error);
                    switch (error.response.status) {
                        case 400: {
                            this.setState({errors: {login: 'This username already exist'}});
                            break;
                        }
                        default: this.setState({errors: {}});
                    }
                });
        }
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    render() {

        const {login, password, errors} = this.state;

        return(
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.login}>
                    <label htmlFor="login">Login</label>
                    <input
                        type="text"
                        name="login"
                        id="login"
                        placeholder="Enter your login"
                        value={login}
                        onChange={this.onChange}
                    />
                    {errors.login && <span style={{color: "#ae5856"}}>{errors.login}</span>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="login">Password</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={this.onChange}
                    />
                    {errors.password && <span style={{color: "#ae5856"}}>{errors.password}</span>}
                </Form.Field>
                <Button primary>Signup</Button>
            </Form>
        )
    }
}