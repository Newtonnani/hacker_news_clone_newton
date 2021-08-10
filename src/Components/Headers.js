import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './comp.css'

export default class Headers extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className='container'>
                <div className='topnav'>
                    <Link to="/top">Top Stories</Link>
                    <Link to="/new">Latest Stories</Link>
                    <Link to="/best">Best Stories</Link>
                </div>
            </div>
        )
    }
}
