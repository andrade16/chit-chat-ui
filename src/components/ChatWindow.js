import React, {Component} from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput';
import io from 'socket.io-client';
import config from '../config/config';
import {Alert} from 'react-bootstrap';
import Avatar from 'react-avatar';
import '../styles/ChatWindow.css';


class ChatWindow extends Component {
    socket = {};

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            otherUser: null,
            showUserAlert: false,
            typingFeedback: ''
        };

        this.handleChatSend = this.handleChatSend.bind(this);
        this.handleChatInput = this.handleChatInput.bind(this);
        this.closeAlert = this.closeAlert.bind(this);

        // Connect to server by passing in address it's running on
        this.socket = io(`${config.dev.HOST}:${config.dev.PORT}`, {query: `username=${props.username}`}).connect();
    }

    componentDidMount() {

        // listen for user connections from server
        this.socket.on('client:connection', username => {
            this.setAlert(username, true)
        });

        // listens for messages from server
        this.socket.on('server:message', message => {
            this.addMessage(message);
        });

        // listens for typing event from server
        this.socket.on('server:typing', input => {
            this.setTypingFeedback(input);
        });
    }

    setAlert(username, alertTriggered) {
        this.setState({otherUser: username, showUserAlert: alertTriggered});
    }

    closeAlert() {
        this.setState({otherUser: '', showUserAlert: false});
    }

    addMessage(message) {
        // add messages to current state, avoid updating state directly
        let messages = [...this.state.messages];
        messages.push(message);
        this.setState({messages: messages, typingFeedback: ''})
    }

    setTypingFeedback(input) {
        if (input.data.length > 0) {
            this.setState({typingFeedback: `${input.user} is typing...`});
        } else {
            this.setState({typingFeedback: ''});
        }
    }

    handleChatSend(message) {
        const {username} = this.props;
        const timestamp = new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});

        const messagePayload = {
            username: username,
            message: message,
            timestamp: timestamp
        };

        // send data to server
        this.socket.emit('client:message', messagePayload);
        messagePayload.fromCurrentUser = true; // this property will later be used to help render messages (sender vs other user)
        this.addMessage(messagePayload);
    }

    handleChatInput(input) {
        // send typing data to server
        this.socket.emit('client:typing', input)
    }

    render() {
        const {otherUser, messages, showUserAlert, typingFeedback} = this.state;
        const {username, profilePicture} = this.props;
        const greeting = `Welcome to Chit-Chat, ${username}!`;
        const alertRef = React.createRef();


        // Need to use a forward ref to avoid findDomNode deprecation warnings
        const UserAlert = React.forwardRef((props, ref) => (
            <Alert
                ref={ref}
                style={{marginBottom: 0}}
                dismissible={true}
                variant="info"
                show={props.showAlert}
                onClose={this.closeAlert}
            >
                {`${props.otherUser} has joined the chat!`}
            </Alert>
        ));

        return (
            <div className="chat-window">
                <h3 id="welcome-header">
                    {greeting}
                    <Avatar
                        src={profilePicture.image}
                        round={true}
                        size={55}
                        style={{marginLeft: 15}}
                        name={username}
                    />
                </h3>
                <UserAlert ref={alertRef} otherUser={otherUser} showAlert={showUserAlert}/>
                <Messages messages={messages}/>
                <span className="text-feedback">{typingFeedback}</span>
                <ChatInput onChatSend={this.handleChatSend} onChatInput={this.handleChatInput}/>
            </div>
        );
    }
}

ChatWindow.defaultProps = {
    username: 'Eno',
    profilePicture: ''
};

export default ChatWindow;
