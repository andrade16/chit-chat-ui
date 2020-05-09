import React, {Component} from 'react';
import {Button, FormGroup, FormControl, FormLabel, FormText} from 'react-bootstrap';
import ChatWindow from './ChatWindow';
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            submitted: false
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        this.setState({
            submitted: true,
            username: this.state.username
        });
        console.log('EVENT: ', event);
    }


    render() {
        const {username, submitted} = this.state;
        const submitDisabled = username.length > 0;
        if (submitted) {
            return (<ChatWindow username={username}/>);
        }

        return (

            <div className="login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bssize="large">
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            placeholder="Enter a username"
                            value={username}
                            onChange={this.handleUsername}
                        />
                        <FormText className="text-muted">
                            This is the name that will be displayed as you chat
                        </FormText>
                    </FormGroup>
                    <Button
                        bssize="large"
                        disabled={!submitDisabled}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}

export default App;
