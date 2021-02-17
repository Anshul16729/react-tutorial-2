import React,{Component} from 'react';
import {CommonContext} from './CommonContext'

class Header extends Component {

  
    render() {

        return(
            <CommonContext.Consumer>
                {
                    ({color})=>(
                     <h1 style={{ backgroundColor:color}}>Header page</h1>
                    )
                }
            </CommonContext.Consumer>
        )
    }

}

export default Header;