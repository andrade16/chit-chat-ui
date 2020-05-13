import React, {Component} from 'react';
import {Button, FormGroup, FormControl, FormLabel, FormText, Jumbotron} from 'react-bootstrap';
import bsCustomFileInput from 'bs-custom-file-input'
import ChatWindow from './ChatWindow';
import {BsChatSquareDotsFill} from 'react-icons/all';
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            submitted: false,
            fileData: {type: '', image: null}
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.fileInput = React.createRef(); // Uncontrolled component reference
    }

    componentDidMount() {
        bsCustomFileInput.init();
    }

    handleUsername(event) {
        this.setState({username: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault(); // prevent refreshing

        let pictureFile = this.fileInput.current.files[0];

        if (pictureFile) {

            const pictureType = pictureFile.type;
            const reader = new FileReader();

            new Promise((resolve, reject) => {
                reader.onload = function (event) {
                    resolve(event.target.result);
                };
                reader.readAsDataURL(pictureFile)
                reader.onerror = reject;
            })
                .then(data => {
                    this.setState({
                        submitted: true,
                        username: this.state.username,
                        fileData: {type: pictureType, image: data}
                    });
                })
                .catch((err) => {
                    console.error(err);
                });
        } else {
            this.setState({
                submitted: true,
                username: this.state.username
            });
        }

    }

    render() {
        const {username, submitted, fileData} = this.state;
        const submitDisabled = username.length > 0;

        if (submitted) {
            return (<ChatWindow username={username} profilePicture={fileData}/>);
        }

        return (
            <div>
                <Jumbotron fluid className="login-jumbotron">
                    <div className="login-header">
                        <BsChatSquareDotsFill size={120}/>
                        <label>Welcome to Chit-Chat!</label>
                        <h3 className="login-subheader">A simple chat application to stay connected with your
                            friends</h3>
                    </div>
                </Jumbotron>

                <div className="login">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="username" bssize="large">
                            <FormLabel>Username</FormLabel>
                            <FormControl
                                autoFocus
                                type="text"
                                placeholder="Enter a username"
                                value={username}
                                onChange={this.handleUsername}
                            />
                            <FormText className="text-muted">
                                This is the name that will be displayed as you chat
                            </FormText>
                            <div className="custom-file">
                                <input
                                    ref={this.fileInput}
                                    id="profile-picture"
                                    type="file"
                                    className="custom-file-input"
                                />
                                <label className="custom-file-label" htmlFor="profile-picture">Add a profile
                                    picture</label>
                            </div>
                        </FormGroup>
                        <Button
                            bssize="large"
                            disabled={!submitDisabled}
                            type="submit"
                            variant="success"
                        >
                            Get started
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
