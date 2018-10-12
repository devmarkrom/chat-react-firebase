import React, { Component } from 'react';
import ChatRoom from './components/ChatRoom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component{
    render() {
        return(
            <div className="App">
               { <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography type="title" color="inherit">
                            Chat React
                        </Typography>
                    </Toolbar>
                </AppBar>}
                <ChatRoom/>
            </div>
        )
    }
}

export default App;