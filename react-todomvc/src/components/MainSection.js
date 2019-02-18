import React, {Component, PropTypes} from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'

const TODO_FILTERS = {
    SHOW_ALL : () => true,
    SHOW_ACTIVE : todo => !todo.completed,
    SHOW_COMPLETED : todo => todo.completed
}
export default class MainSection extends Component {
    constructor(props){
        super(props)
        this.state = {
            filter : 'SHOW_ALL'
        }
    }
    
    
    handleShow = filter => {
        console.log(filter);
        this.setState({filter})
    }

    //todos.completed : false 인애를 Active에 나타나게함

    render(){
        const {todos, actions} = this.props
        const filteredTodos = todos.filter(TODO_FILTERS[this.state.filter])
        return(
            <section className="main">
                <ul className= "todo-list">
                    {filteredTodos.map(todo => 
                        // <div> {todo.text}</div>
                        <TodoItem key = {todo.id} todo= {todo} {...actions}/>
                    )}
                </ul>
                <Footer onShow = {this.handleShow.bind(this)}></Footer>
            </section>
        )
    }
}