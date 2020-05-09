import React, {Component} from 'react';

class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };

    }


    render() {
        const {text} = this.state
        const {username} = this.props;

        return (
            <div className="chat-window">
            <div>{username}</div>
            </div>
        );
    }
}

export default ChatWindow;
