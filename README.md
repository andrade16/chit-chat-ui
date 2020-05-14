## Chit-Chat UI
This is a simple UI for a chat application. To properly run this application, you will need to also download and run [chit-chat-api](https://gitlab.com/william.andrade/chit-chat-api).


## Usage Steps 

* First and foremost, download the [chit-chat-api](https://gitlab.com/william.andrade/chit-chat-api) repo and follow the steps to set that up. 
* After you have the chit-chat-api running in the background, install all dependencies in this repo by running `npm install`.
* To start the application, run `npm start`.
* Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.
* Enter a username. This is required to enter the chat room. Adding a profile picture is optional.
* Press [Enter] or press the [Get started] button.
* Wait for other users to join the room and start chatting away. 

## Functionality

* Multiple users can enter this chat room.
* All users have the option of uploading a profile picture.
* When a new user enters the chat room, all other existing users will receive an alert notification. 
* Hover over messages to view when they were sent. 

## Other Available Scripts

#### `npm run build`

Builds the app for production to the `build` folder.


## Resources

* The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* For the initial development of this project, I followed parts of this [tutorial](https://medium.com/@coderacademy/you-can-build-an-fb-messenger-style-chat-app-with-reactjs-heres-how-intermediate-211b523838ad).
* [Socket.io](https://socket.io/docs/) was used for both the client and api sides of this project. It brought the two repos together!
* The main UI library used is [React Bootstrap](https://react-bootstrap.github.io/).
* I also used [react-avatar](https://github.com/Sitebase/react-avatar) as a 3rd party UI component
