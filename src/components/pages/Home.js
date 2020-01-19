import React, { Component } from "react";

const containerStyle = {
width : '100%',
height : '650px',
backgroundImage : 'linear-gradient(180deg,#6978E9,#6D04A6)',
}


class Home extends Component {



constructor(){


super()
  this.state = {

  sayHello : 'HELLO',
  sayBye : 'Bye!',
  humanInput : '',
  humanlyTalking : '',
  humanlyResponses : [{humanInputSpeedMemory : 0, humanInputMemory : 'Hello', humanlyResponseMemory : 'hi' }]

  }

  this.Speak = this.Speak.bind(this);

}

Speak(event){

//this.setState({humanInput : event.target.value})
console.log(event.target.value)

// let getSpeed = setInterval(function(){
// console.log(this.state.humanInput)
// }, 3000)


let {humanlyResponses} = this.state

let Memory = humanlyResponses.find(index => index.humanInputMemory === event.target.value)

if(Memory !== undefined){
this.setState({humanlyTalking : Memory.humanlyResponseMemory})
}else{
this.setState({humanlyTalking : ''})
let humanlyResponsesCopy = humanlyResponses
humanlyResponsesCopy.push({humanInputMemory : event.target.value, humanlyResponseMemory : event.target.value.length})
this.setState({humanlyResponses : humanlyResponsesCopy})
}

}

render() {

    //#0B1EAC
    let {sayHello, sayBye, humanlyTalking} = this.state
    let {Speak} = this
    let loginBox = {width : '300px', height : '500px', backgroundColor : 'white', margin : 'auto', marginTop : '50px', border : '1px solid black', borderRadius: '10px'}
    let loginHeader = {marginTop : '30px', marginBottom: '50px',color : 'black' || '#2A3FE2'}
    let textBox = {width : '250px', marginBottom : '30px'}
    let submitBox = {width : '250px', height : '50px', border : 'none', color : 'white',backgroundImage : 'linear-gradient(180deg,#B65DE7,#0B1EAC)'}
    let loginLabels = {paddingRight : '176px'}

    return (
     
        <div style={containerStyle} className="no-gutter">
          <div className="row">
            <div className="col-xl-12">
              <div className="Friends text-center" style={loginBox}>
                <h3 style={loginHeader}>Login</h3>

                <form>
                <div style={loginLabels}>Username</div> 
                <input type="text" name="firstname" style={textBox}></input>
                <div style={loginLabels}>Password</div> 
                <input type="text" name="lastname" style={textBox}></input>
                <input type="submit" name="lastname" value="Login" style={submitBox}></input>
                </form>

              </div>
            </div>
          </div>
        </div>
    );
  }

}

export default Home;
