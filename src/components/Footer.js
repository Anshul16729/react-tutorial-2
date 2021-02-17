import React,{Component} from 'react';
import {CommonContext} from './CommonContext'

class Footer extends Component {

  
    render() {

        return(
            <CommonContext.Consumer>
                {
                    ({color})=>(
                     <h1 className="footer" style={{ backgroundColor:color}}>Footer page</h1>
                    )
                }
            </CommonContext.Consumer>
        )
    }

}

export default Footer;