import logo from '../logo.svg'
import React,{Component} from 'react';
// import { Typography } from '@material-ui/core';

export default class Club extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        const classes ={ 
            h1: {
                fontSize : "50px",
            },
            working: {
                textAlign: "center",
            }
        } 

        return (
            <div style={classes.working}>
                <div style={classes.h1}>Work in Progress...</div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}