import React, {Component} from 'react';
import '../styles/Messages.css';


function Message(props) {
    // const fromCurrentUser = props.fromCurrentUser ? 'from-current-user' : 'from-other-user';
    // const usernameDisplay = props.fromCurrentUser ? '' : props.username;

    // return (
    //     <div className={`message ${fromCurrentUser}`}>
    //
    //         <div className='username'>
    //             {props.username}
    //         </div>
    //         <div className="message-body">
    //             {props.message}
    //         </div>
    //
    //         {/*<div className="timestamp">*/}
    //         {/*    {props.timestamp}*/}
    //         {/*</div>*/}
    //
    //     </div>
    // );

    let message;
    if (props.fromCurrentUser) {
        message = (
            <div className="message from-current-user">
                <div className="message-body">{props.message}</div>
                <div className="timestamp-current-user">{props.timestamp}</div>
            </div>
        );
    } else {
        message = (
            <div className="message from-other-user">
                <div>
                    <div className='username'>{props.username}</div>
                    <div className="message-body">{props.message}</div>
                </div>
                <div className="timestamp-other-user">{props.timestamp}</div>
            </div>
        )
    }
    return message;
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
