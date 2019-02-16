import React, {PropTypes, Component} from 'react'
import classnames from 'classnames'

export default class Footer extends Component {
    render(){
        return(
        <footer className="footer">
            <ul>
                <li>All</li>
                <li>Active</li>
                <li>Completed</li>
            </ul>

        </footer>
        )
    }
}