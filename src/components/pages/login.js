import React, { Component } from "react";
import FullHeight from "react-full-height";
import 'whatwg-fetch';


const containerStyle = {
width : '100%',
margin: '0px',
padding: '0px',
overflowX: 'hidden',
backgroundImage : 'linear-gradient(180deg,#6978E9,#6D04A6)',
}


class Login extends Component {



constructor(){


super()
  this.state = {

  sayHello : 'HELLO',
  sayBye : 'Bye!',
  humanInput : '',
  humanlyTalking : '',
  humanlyResponses : [{humanInputSpeedMemory : 0, humanInputMemory : 'Hello', humanlyResponseMemory : 'hi' }]

  }


}

Login(event){

event.preventDefault()

console.log("event")

let getID = 1

fetch('http://localhost:5000/api/test', {
  mode : 'cors',
  method: 'post',
  headers: {
    'access-Control-Allow-Origin':  'https://localhost:5000/api/test',
    'Content-Type': 'application/json'
  },body: JSON.stringify({getID}) }).then(res => res.json()).then(json => console.log(json.success))


}

render() {

    let loginBox = {width : '300px', height : '470px', backgroundColor : 'white', margin : 'auto', marginTop : '100px', border : '1px solid black', borderRadius: '10px'}
    let loginHeader = {marginTop : '30px', marginBottom: '50px',color : 'black' || '#2A3FE2'}
    let textBox = {width : '250px', marginBottom : '30px',border : 'none', borderBottom : '2px solid #6978E9'}
    let submitBox = {width : '250px', height : '50px', border : 'none', color : 'white',backgroundImage : 'linear-gradient(180deg,#B65DE7,#0B1EAC)', borderRadius: '3px', marginTop : '30px'}
    let loginLabels = {paddingRight : '176px'}

    let {Login} = this

    return (
     
        <FullHeight style={containerStyle} className="no-gutter">
          <div className="row">
            <div className="col-xl-12">
              <div className="Friends text-center" style={loginBox}>
                <h3 style={loginHeader}>Login</h3>

                <form>
                <div style={loginLabels}>Username</div> 
                <input type="text" name="firstname" style={textBox}></input>
                <div style={loginLabels}>Password</div> 
                <input type="text" name="lastname" style={textBox}></input>
                <input type="submit" name="lastname" value="Login" style={submitBox} onClick={Login}></input>
                </form>

              </div>
            </div>
          </div>
        </FullHeight>
    );
  }

}

export default Login;
