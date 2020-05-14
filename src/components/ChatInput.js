import React, {Component} from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';


class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {chatText: ''};

        this.onChatSubmit = this.onChatSubmit.bind(this);
        this.onChatChange = this.onChatChange.bind(this);
    }

    onChatSubmit(event) {
        const {chatText} = this.state;

        // stops form from refreshing on chat submit
        event.preventDefault();

        // send data to ChatWindow for sending to message to server and state
        this.props.onChatSend(chatText);

        // clear the chat text
        this.setState({chatText: ''});
    }

    onChatChange(event) {
        // send data to ChatWindow for displaying typing feedback
        this.props.onChatInput(event.target.value);

        // set chat text
        this.setState({chatText: event.target.value})
    }

    render() {
        const {chatText} = this.state;
        const sendDisabled = chatText.length > 0;

        return (
            <div className="chat-input">
                <form onSubmit={this.onChatSubmit}>
                    <InputGroup>
                        <FormControl
                            autoFocus
                            placeholder="Write a message..."
                            aria-label="Chat input"
                            aria-describedby="basic-addon1"
                            value={chatText}
                            onChange={this.onChatChange}
                        />
                        <InputGroup.Append>
                            <Button
                                onClick={this.onChatSubmit}
                                disabled={!sendDisabled}
                                variant="primary"
                                type="submit"
                            >
                                Send
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>

                </form>
            </div>
        );
    }
}

export default ChatInput;
