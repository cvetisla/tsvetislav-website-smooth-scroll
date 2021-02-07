import React from "react";
import loginImg from '../images/login.svg'; 
import './style.scss'; 

export class Reg extends React.Component {

    constructor (props) {
super(props);
    }

    render () {
        return <div className="base-container"ref={this.props.containerRef} > 
        <div className="header">Registration</div>
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
          <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email"/>
          </div>
          <div className ="footer">
    <button type="button" className="btn">Register</button>
</div>
         </div>
        </div>

        </div>

}
}