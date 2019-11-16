import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../../reducers/index';
import { Pagination } from 'antd';
import { connect } from 'react-redux';

import 'antd/dist/antd.css';
import './Main.scss';

class Main extends Component {

    componentDidMount() {
        console.log(this.props)
    }
    onShowSizeChange = (current, pageSize) => {
        console.log('@')

    }
    pageChanger = () => { }

    render() {
        const { onShowSizeChange, pageChanger } = this;
        return (
            <div>
                <Pagination
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    onChange={pageChanger}
                    defaultCurrent={1}
                    total={100}
                    pageSizeOptions={[10, 20, 50]}
                />
            </div>
        );
    }
}

export default connect(
    state => ({
        pokemonArray: state.pokemonArray,
    }),
    dispatch => ({
        onChangePokemonArray: (pokemonArray) => {
            dispatch({ type: 'CHANGE_POKEMON_ARRAY', payload: pokemonArray });
        }
    })
)(Main);