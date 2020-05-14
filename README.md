# Chit-Chat UI
This is a simple UI for a chat application. To properly run this application, you will need to also download and run [chit-chat-api](https://gitlab.com/william.andrade/chit-chat-api).


## Usage Steps 

1. First and foremost, clone the [chit-chat-api](https://gitlab.com/william.andrade/chit-chat-api) repo and follow the set up steps. 
2. After you have the chit-chat-api running in the background, clone this repo and install all dependencies by running `npm install`.
3. To start the application run `npm start`.
4. Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.
5. Enter a username. This is required to enter the chat room. Adding a profile picture is optional.
6. Press [Enter] or press the [Get started] button. You should now be in the chat room.
7. Follow steps 4-6 to start another instance of the chat application.
8. Start chatting away!

## Functionality

* Multiple users can enter this chat room.
* All users have the option of uploading a profile picture that's displayed in the chat room header.
* When a new user enters the chat room, all other existing users will receive an alert notification. 
* Hover over messages to view their time stamps
* User should get typing feedback when other users in the room are typing

## Other Available Scripts

#### `npm run build`

Builds the app for production to the `build` folder.


## Resources

* The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* For initial guidance on this project, I followed parts of this [tutorial](https://medium.com/@coderacademy/you-can-build-an-fb-messenger-style-chat-app-with-reactjs-heres-how-intermediate-211b523838ad).
* [Socket.io](https://socket.io/docs/) was used for both the client and api sides of this project. It brought the two repos together!
* The main UI library used is [React Bootstrap](https://react-bootstrap.github.io/).
* I also used [react-avatar](https://github.com/Sitebase/react-avatar) as a 3rd party UI component
* [react-icons](https://react-icons.github.io/react-icons/) was used for a basic icon on the login page.
