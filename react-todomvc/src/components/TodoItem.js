import React, {Component, PropTypes} from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

export default class TodoItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing : false
        }
    }

    handleDoubleClick = () => {
        this.setState({editing : true})

    }

    handleSave = (id, text) => {
        if(text.length === 0){
            this.props.deleteTodo(id)
        }else{
            this.props.editTodo(id, text)
        }
        this.setState({editing : false})
    }

    render(){

        const {todo, deleteTodo} = this.props
        if(this.state.editing){
            element = (
                <TodoTextInput
                    text = {todo.text}
                    editing = {this.state.editing}
                    onSave = {(text) => this.handleSave(todo.id, text)}
                 />
            )
        }else{
            element = (
                <div className="view">
                <input 
                    className="toggle"
                    type="checkbox"
                    checked = {todo.completed}
                />
                <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
                <button 
                    className="destroy"
                    onClick = { () => deleteTodo(todo.id)}
                />
            </div>
            )
        }
        return(
            <li className = {classnames({
                editing : this.state.editing
            })}>
                {element}
            </li>
        )
    }
}

// {this.handleDoubleClick} 이랑 deleteTodo의 차이 ... constructor는 뭐고
// handleInput은 뭐란 말임.. state가 어디에 있어야 할지 헷갈림