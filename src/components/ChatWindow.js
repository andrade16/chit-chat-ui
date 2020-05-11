import React, {Component} from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';
import io from 'socket.io-client';
import config from '../config/config';
import '../styles/ChatWindow.css';


class ChatWindow extends Component {
    socket = {};

    constructor(props) {
        super(props);
        this.state = {messages: []};

        this.handleChatSend = this.handleChatSend.bind(this);

        // Connect to server by passing in address it's running on
        this.socket = io(`${config.dev.HOST}:${config.dev.PORT}`, {query: `username=${props.username}`}).connect();
    }

    componentDidMount() {
        // listens for messages from server
        this.socket.on('server:message', message => {
            this.addMessage(message);
        });
    }

    handleChatSend(message) {
        const {username} = this.props;
        const timestamp = new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});


        const messagePayload = {
            username: username,
            message: message,
            timestamp: timestamp
        };

        this.socket.emit('client:message', messagePayload);

        messagePayload.fromCurrentUser = true;
        this.addMessage(messagePayload);
    }

    addMessage(message) {

        // add messages to current state, avoid updating state directly
        let messages = [...this.state.messages];
        messages.push(message);

        this.setState({messages: messages})
    }

    render() {
        const messages = this.state.messages;
        const greeting = `Welcome to Chit-Chat, ${this.props.username}!`;
        return (
            <div className="chat-window">
                <h3 id="welcome-header">{greeting}</h3>
                <Messages messages={messages}/>
                <ChatInput onChatSend={this.handleChatSend}/>
            </div>
        );
    }
}

ChatWindow.defaultProps = {
    username: 'Eno'
};

export default ChatWindow;
