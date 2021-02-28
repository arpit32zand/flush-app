// import { Divider } from '@material-ui/core';
import React,{Component} from 'react';
import N2 from '../ranks/2.svg';
import N3 from '../ranks/3.svg';
import N4 from '../ranks/4.svg';
import N5 from '../ranks/5.svg';
import N6 from '../ranks/6.svg';
import N7 from '../ranks/7.svg';
import N8 from '../ranks/8.svg';
import N9 from '../ranks/9.svg';
import NT from '../ranks/T.svg';
import NJ from '../ranks/J.svg';
import NQ from '../ranks/Q.svg';
import NK from '../ranks/K.svg';
import NA from '../ranks/A.svg';
import S from '../suits/S.svg';
import C from '../suits/C.svg';
import H from '../suits/H.svg';
import D from '../suits/D.svg';

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            r_value: N5,
            s_value: D,
        }
    }

    static getDerivedStateFromProps(props,state) {
        state.r_value = 'N'+props.values.rank;
        state.s_value = props.values.suit;
        // console.log(state.r_value)
        // state.r_value = state.r_value.substr(1,state.r_value.length-2);
        // state.s_value = state.s_value.substr(1,state.s_value.length-2);
        // return state;
    }
    

    render() {

        const classes= {
            outer: {
                position: "relative",
                left: "300px",
                height: "300px",
                width: "200px",
                border: "3px solid black",
                borderRadius: "7px",
            },
            rank: {
                position: "relative",
                height: "27%",
                width: "30%",
                lineHeight: "100%",
                fontWeight: "bold",
            },
            rank_img: {
                height: "100%",
                padding: "0 10%"
            },
            suit: {
                position: "relative",
                height: "50%",
                width: "70%",
                left: "15%",
                top: "11.5%",
            },
        }

        return (
            
            <div style={classes.outer} >
                {/* {this.handleValue} */}
                {/* {console.log(this.state.r_value)} */}
                <div style={classes.rank} ><img src={this.state.r_value} style={classes.rank_img} alt={this.state.value}/></div>
                <div style={classes.suit} ><img src={this.state.s_value} style={classes.rank_img} alt={this.state.suit} /></div>
            </div>
        )
    }
} 