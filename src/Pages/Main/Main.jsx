import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PokeCard from '../../Components/PokeCard/'
import { Pagination } from 'antd';
import './Main.scss';
import 'antd/dist/antd.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageSize: 10,
            currentPage: 1,
            idArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        };
    }
    componentDidMount() { }


    onShowSizeChange = (current, pageSize) => {
        console.log('@')
        this.pageChanger(current, pageSize);
    }

    pageChanger = (page, pageSize) => {
        let idArr = [];
        for (let i = page * pageSize - pageSize + 1; i <= page * pageSize; i++) {
            idArr.push(i)
        }
        this.setState({
            idArray: idArr,
        })
    }

    render() {
        return (
            <div>
                <div className='headerBlock'>

                </div>
                <div className='mainBlock'>
                    <div className='pokemonsInfo' >
                        {this.state.idArray.map((a) => (
                            console.log(a),
                            <PokeCard id={a} key={a} />
                        ))}
                    </div>
                    <Pagination
                        showSizeChanger
                        onShowSizeChange={this.onShowSizeChange}
                        onChange={this.pageChanger}
                        defaultCurrent={this.state.currentPage}
                        total={810}
                        pageSizeOptions={[10, 20, 50]}
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Main)