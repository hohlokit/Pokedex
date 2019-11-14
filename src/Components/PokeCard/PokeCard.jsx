import React, { Component } from 'react';
import { withRouter } from 'react-router';
import './PokeCard.scss';

class PokeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonUrl: '',
            pokemonName: '',
        };
    }
    componentDidMount() {
        this.createCard();
    }
    createCard() {
        let a = `https://pokeapi.co/api/v2/pokemon/${this.props.id}`;
        let tempUrl;
        fetch(a)
            .then(res => res.json())
            .then(pokemon => {
                tempUrl = pokemon.sprites.front_default;
                this.setState({
                    pokemonUrl: tempUrl,
                    pokemonName: pokemon.forms[0].name,
                })
            });
    }
    render() {
        return (
            <div className='pokemonCard'>
                <img src={this.state.pokemonUrl} />
                <p>{this.state.pokemonName}</p>
            </div>
        );
    }
}

export default withRouter(PokeCard);