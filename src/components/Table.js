import React, {Component} from 'react';
import Card from './Card'

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state= {
            rank: '4',
            suit: 'C',
        }
    }

    render() {
        return (
            <Card values={this.state} />
        )
    }

}