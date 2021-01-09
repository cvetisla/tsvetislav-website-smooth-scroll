import React from "react";
import loginImg from '../images/login.svg'; 
import '../images/style.scss'; 
export class LogIn extends React.Component {

    constructor (props) {
super(props);
    }

    render () {
        return <div className="base-container" ref={this.props.containerRef}> 
        <div className="header">Log In</div>
        <div className="content"> 
        <div className="image">
            <img src={loginImg} />
         
        </div>
         <div className="form">
          <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"/>
          </div>
          <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"/>
          </div>
          <div className ="footer">
    <button type="button" className="btn">Let's go</button>
</div>
         </div>
        </div>
        </div>

}
}