import React,{Component} from 'react';
import {CommonContext} from './CommonContext'

function UpdateButton() {

        return(
            <CommonContext.Consumer>
                {
                    ({updateColor})=>(
                    <div>
                    <button 
                     onClick={()=>updateColor('yellow')}>
                     Update Yellow Color</button>
                     <button 
                     onClick={()=>updateColor('blue')}>
                     Update Blue Color</button>
                     <button 
                     onClick={()=>updateColor('orange')}>
                     Update Red Color</button>
                    </div>
                    )
                }
            </CommonContext.Consumer>
        )
    

}

export default UpdateButton;