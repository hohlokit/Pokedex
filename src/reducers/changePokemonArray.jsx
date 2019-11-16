const initState = [];

export default function pokemonArray(state = initState, action) {
    if (action.type === 'CHANGE_POKEMON_ARRAY') {
        return action.payload;
    }
    return state;
}