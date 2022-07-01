import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: "all"
                },
                {
                    key: 'stol',
                    name: "stol"
                },
                {
                    key: 'divan',
                    name: "divan"
                },
                {
                    key: 'televizor',
                    name: "televizor"
                }, {
                    key: 'baxniq',
                    name: "baxniq"
                }

            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}
export default Categories