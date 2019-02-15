import React, {PropTypes} from 'react'
import TodoTextInput from './TodoTextInput'

const Header = ({addTodo}) => {

    const handleSave = text => {
        if(text.length !== 0){
            addTodo(text)

        }
    }
    return(
        <header className = "header"> 
            <h1> todos</h1>
            <TodoTextInput
                onSave = {handleSave}
                placeholder = "What needs to be done ?"
             />
        </header>
    )

}



export default Header

// handleSave랑 this.handleSave랑 뭐가 차이지