import React, {Component} from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';


class ChatInput extends Component {


    render() {

        return (
            <div className="chat-input">
                <InputGroup>
                    <FormControl
                        required
                        placeholder="Write a message..."
                        aria-label="Chat input"
                        aria-describedby="basic-addon1"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }
}

export default ChatInput;
