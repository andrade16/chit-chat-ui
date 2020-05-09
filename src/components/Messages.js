import React, {Component} from 'react';
import '../styles/Messages.css';

function Message(props) {
    const fromCurrentUser = props.fromCurrentUser ? 'from-current-user' : '';
    return (
        <div className={`message ${fromCurrentUser}`}>
            <div className='username'>
                {props.username}
            </div>
            <div className="message-body">
                {props.message}
            </div>
        </div>
    );
}

class Messages extends Component {
    componentDidUpdate() {
        const messageListDiv = document.getElementById('message-list');
        messageListDiv.scollTop =messageListDiv.scrollHeight;
    }

    render() {
        const {messages} = this.props;
        const messageList = messages.map((message, index) => {
            return (
                <Message
                    key={index}
                    username={message.username}
                    message={message.message}
                    fromCurrentUser={message.fromMe}
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
