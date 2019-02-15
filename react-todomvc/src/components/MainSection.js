import React, {Component, PropTypes} from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'

export default class MainSection extends Component {
    render(){
        const {todos, actions} = this.props
        return(
            <section className="main">
                <ul className= "todo-list">
                    {todos.map(todo => 
                        // <div> {todo.text}</div>
                        <TodoItem key = {todo.id} todo= {todo} />
                    )}
                </ul>
            </section>
        )
    }
}