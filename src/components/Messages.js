import React, {Component} from 'react';
import '../styles/Messages.css';

function Message(props) {
    const fromUser = props.fromCurrentUser ? 'current-user' : 'other-user';
    return (
        <div className={`message-${fromUser}`}>
            <div>
                <div className={`${fromUser}-name-container`}>
                    <div className={`username-${fromUser}`}>{props.username}</div>
                </div>
                <div className={`message-body-${fromUser}`}>{props.message}</div>
            </div>
            <div className={`timestamp-${fromUser}`}>{props.timestamp}</div>
        </div>
    );
}

class Messages extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        const messageListDiv = document.getElementById('message-list');
        messageListDiv.scrollTop = messageListDiv.scrollHeight;
    }

    render() {
        const {messages} = this.props;
        const messageList = messages.map((message, index) => {
            return (
                <Message
                    key={index}
                    username={message.username}
                    message={message.message}
                    fromCurrentUser={message.fromCurrentUser}
                    timestamp={message.timestamp}
                />
            );
        });

        return (
            <div className="messages" id="message-list">
                {messageList}
            </div>
        );
    }
}

Messages.defaultProps = {
    messages: []
};

export default Messages;
