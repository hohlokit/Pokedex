import { connect } from 'tls';

export default connect(
    state => ({
        pokemonArray: state.pokemonArray,
    }),
    dispatch => ({
        onChangePokemonArray: (pokemonArray) => {
            dispatch({ type: 'CHANGE_POKEMON_ARRAY', payload: pokemonArray });
        }
    })
)(App);