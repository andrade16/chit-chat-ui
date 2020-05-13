import React, {Component} from 'react';
import Avatar from 'react-avatar';
import '../styles/Messages.css';

function Message(props) {
    const fromUser = props.fromCurrentUser ? 'current-user' : 'other-user';
    const avatarStyles = {
        marginRight: 7,
        display: fromUser === 'current-user' ? 'none' : 'inline'
    }
    return (
        <div className={`message-${fromUser}`}>
            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                <Avatar
                    round={true}
                    size={35}
                    style={avatarStyles}
                    name={props.username}
                />
                <div>
                    <div className={`${fromUser}-name-container`}>
                        <div className={`username-${fromUser}`}>{props.username}</div>
                    </div>
                    <div className={`message-body-${fromUser}`}>{props.message}</div>
                </div>
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
    messages: [],
    picture: null
};

export default Messages;
