import React, {Component} from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';
import '../styles/ChatWindow.css';

const testMessages = [
    {fromMe: true, username: 'William', message: 'text'},
    {fromMe: false, username: 'Billy', message: 'text one'},
    {fromMe: false, username: 'Dylan', message: 'text two'}
];

class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };

    }


    render() {

        return (
            <div className="chat-window">
                <h3 id="welcome-header">Welcome to Chit Chat!</h3>
                <Messages messages={testMessages}/>
                <ChatInput/>
            </div>
        );
    }
}

export default ChatWindow;
