import React from 'react';
import { connect } from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
import {searchRequest} from '../../../actions/usersActions';
import {Link} from 'react-router-dom';
import './SearchForm.css';

class SearchFormContainer extends React.Component {
    state = {
        body: ''
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = () => {

        this.props.history.push(`/user/${this.state.body}`);

    };

    render() {
        const {body} = this.props;
        return(
            <div className="search-form">
                <Form className="inline-form" onSubmit={this.onSubmit}>
                    <div className="input-row">
                        <Form.Field>
                            <input
                                type="text"
                                name="body"
                                id="body"
                                placeholder='User nickname'
                                value={body}
                                onChange={this.onChange}
                            />
                        </Form.Field>
                        <Link className="search-params" to="/search">
                            P
                        </Link>
                    </div>
                    <Button primary>Go</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {searchRequest})(SearchFormContainer);