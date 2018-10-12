import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ChatRoom extends Component {

    constructor() {
        super();
        this.state = {
            message: '',
            messages: [
               /*  {id:0, text: 'text1'},
                {id:1, text: 'text2'},
                {id:2, text: 'text3'} */
            ]
        }
    }

    updateMessage(e) {
        this.setState({message: e.target.value});
    }

    componentDidMount() {
        window.firebase.database().ref('messages/').on('value', snap => {
            const currentmessages = snap.val();
            if(currentmessages !== null) {
                this.setState({
                    messages: currentmessages
                })
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('perra');

        const list = this.state.messages;
        const newMessage = {
            id: this.state.messages.length,
            text: this.state.message
        };
       /*  list.push(newMessage);
        this.setState({messages: list}); */
        window.firebase.database().ref(`messages/${newMessage.id}`)
            .set(newMessage);
        this.setState({message: ''});
    }

    render() {

        const { messages } = this.state;
        const messagesList = messages.map(message => {
            return <li key={message.id}>{message.text}</li>
        });

        return (
            <div>
                <ol>
                    {messagesList}
                </ol>
                
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        type="text"
                        value={this.state.message}
                        onChange={this.updateMessage.bind(this)}
                    />
                    <Button variant="contained" color="primary" onClick={this.handleSubmit.bind(this)}>
                        Send
                    </Button>
                </form>
            </div>
        )
    }
}

export default ChatRoom;