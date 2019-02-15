import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

export default class Todoitem extends Component {
    render(){
        const {todo} = this.props
        return(
            <li>
                <div className="view">
                    <input 
                        className="toggle"
                        type="checkbox"
                        checked = {todo.completed}

                    />
                    <label>{todo.text}</label>
                    <button className="destroy"/>
                </div>
            </li>
        )
    }
}
