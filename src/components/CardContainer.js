import React, { Component } from 'react';
import Card from './Card';
import data from '../data/data.js';

export class CardContainer extends Component {
    constructor() {
        super();
        this.state = {
            monthly: true
        };
    }

    setDataToState = () => {
        this.setState({
            cards: data.cards
        });
    }

    componentDidMount() {
        this.setDataToState();
    }

    render() {
        if (!this.state.cards) {
            return <div>Loading...</div>
        } else {
            return (
                <ul>
                    {this.state.cards.map((card, i) => {
                        return (<Card
                            key={i}
                            name={card.name}
                            price={this.state.monthly ? card.monthlyPrice : card.annualPrice}
                            storage={card.storage}
                            maxUsers={card.maxUsers}
                            sendLimit={card.sendLimit}
                            promoted={card.promoted}
                        />)
                    })}
                </ul>
            )
        }
    }
}

export default CardContainer
