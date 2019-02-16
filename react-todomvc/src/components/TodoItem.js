import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'

export default class TodoItem extends Component {
    render(){
        const {todo, deleteTodo} = this.props
        return(
            <li>
                <div className="view">
                    <input 
                        className="toggle"
                        type="checkbox"
                        checked = {todo.completed}

                    />
                    <label>{todo.text}</label>
                    <button 
                        className="destroy"
                        onClick = { () => deleteTodo(todo.id)}
                        />
                </div>
            </li>
        )
    }
}
