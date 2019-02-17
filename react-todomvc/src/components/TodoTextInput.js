import React , {Component , PropTypes} from 'react'
import classnames from 'classnames'

export default class TodoTextInput extends Component {
    state = {
        editText : this.props.text || ''
    }

    handleChange = event => {
        this.setState({editText : event.target.value});

    }

    handleSubmit = event => {
        
        const text = event.target.value.trim();
        if(event.which === 13){
            this.props.onSave(text);
            this.setState({editText : ''});
        }
    }

   
    render(){
        return (
            <input 
                className = {
                    classnames({
                        edit: this.props.editing,
                        'new-todo' : this.props.newTodo
                    })
                }
                value = {this.state.editText}
                onChange = {this.handleChange}
                placeholder = {this.props.placeholder}
                onKeyDown = {this.handleSubmit}
            />
        )
    }
}