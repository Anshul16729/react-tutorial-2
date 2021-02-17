import React, { Component, PureComponent } from 'react';

//  class User extends Component {
class User extends PureComponent {

    render() {
        // console.log("Render Method",this.state.email)
         console.log("User Component Check-Rendering");
        return (
            <div>
                {/* <h1>User Component </h1>
                <button onClick={()=>this.setState({email: 'manish@test.com'})}>Update Email</button> */}

                {/*  Pure component in ReactJs */}
                <h1>User Component {this.props.count}</h1>


            </div>
        )
    }
}

export default User;