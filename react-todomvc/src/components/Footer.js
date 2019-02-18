import React, {PropTypes, Component} from 'react'
import classnames from 'classnames'

// click 되면 MainSection에서 All, Active, Completed에 따라 렌더링 다르게함 
// 일단 onClick 붙이자 MainSection에서 prop으로 줄거임
export default class Footer extends Component {
    render(){
        
        const {onShow} = this.props
        return(
        <footer className="footer">
            <ul className = "filters">
                <li> 
                    <a
                    onClick = {() => onShow('SHOW_ALL')}
                    >
                        All
                    </a>
                </li>
                <li>
                    <a
                    onClick = {() => onShow('SHOW_ACTIVE')}
                    >Active</a>
                </li>
                <li>
                    <a
                    onClick = {() => onShow('SHOW_COMPLETED')}
                    >Completed</a>
                </li>
            </ul>

        </footer>
        )
    }
}