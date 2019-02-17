import React, { Component } from 'react'
import Header from './Header'
import MainSection from './MainSection'

const initialState = [
  {
    text : 'React ES6 TodoMVC',
    completed : false,
    id : 0
  }
]

// App 에서 텍스트 값 리스트에 추가한 내용 상태에 저장, id로 state에 있는 리스트값 삭제 
// id 로 수정, complete로 고치기, 컴플리트 한거 지우기
// 컨트롤러에서 하던 역할 (id값 받고 모델에 전달 -> 렌더링 요청 view에 )
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos : initialState
    }
  }

  addTodo = (text) => {
    const todos = [
      {
        id: this.state.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        completed: false,
        text: text

      },
      ...this.state.todos
    ]
    this.setState({todos})
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({todos})

  }

 editSubmit = () => {

  }

  // editTodo = () => {
  //   console.log(todo)
  //   this.setState({editing : todo.id})

  // }

  actions = {
    addTodo : this.addTodo,
    deleteTodo : this.deleteTodo,
    editSubmit : this.editSubmit
    
  }
  render() {
    return (
      <div>
        <Header addTodo = {this.actions.addTodo} />
        <MainSection todos = {this.state.todos} actions = {this.actions} />
        
      </div>
    );
  }
}

export default App;
