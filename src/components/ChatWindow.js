import React, {Component} from 'react';
import Messages from './Messages';

const testMessages = [
    {fromMe: true, user: 'William', message: 'text'},
    {fromMe: false, user: 'Billy', message: 'text one'},
    {fromMe: false, user: 'Dylan', message: 'text two'}
];

class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };

    }


    render() {
        const {text} = this.state
        const {username} = this.props;

        return (
            <div className="chat-window">
                <h3>Welcome to Chit Chat!</h3>
                <Messages messages={testMessages}/>
            </div>
        );
    }
}

export default ChatWindow;
