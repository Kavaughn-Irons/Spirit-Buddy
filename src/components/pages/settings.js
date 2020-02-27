import React, { Component } from "react";
import FullHeight from "react-full-height";
import 'whatwg-fetch';
import ProfilePlaceholder from "../../Assets/Profile-Placeholder.png";
import ProgressBar from '../../../node_modules/progressbar.js'


class Profile extends Component {



constructor(){



super()
  this.state = {

  profileHeight : '',
  message: '',
  height: ''


  }

}

componentWillMount(){

console.log(window.screen.height)



}

componentDidMount(){



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


    const containerStyle = {
      width : '100%',
      margin: '0px',
      padding: '0px',
      height: '1000px',
      overflowX: 'hidden',
      backgroundImage : 'linear-gradient(180deg,#6978E9,#6D04A6)',
    }

    let middleContainer = width => {if(width < 490){return '100%'}else{return '490px'}  }
    let divider = {borderBottom : '1px solid #0B1EAC', width : '96%', margin : 'auto', marginTop: '15px', marginBottom: '15px'}
    let Header = {paddingTop: '30px', marginBottom: '30px'}
    let birthdayHeader = {marginBottom: '10px', fontSize: '20px'}
    let birthdaySettingBox = {width: '250px', margin: 'auto'}
    let textBox = (widthVar = '250px') => {return {width : widthVar, marginBottom : '30px',border : 'none', borderBottom : '2px solid #6978E9'}}
    let submitBox = {width : '250px', height : '50px', border : 'none', color : 'white',backgroundImage : 'linear-gradient(180deg,#B65DE7,#0B1EAC)', borderRadius: '3px', marginTop : '30px'}
    let settingsLabel = paddingAmount => { return {paddingRight : paddingAmount}}
    let {Login} = this


    return (
     
        <div style={containerStyle} className="no-gutter">

          <div className="row">

            <div className="col-xl-12">
              <div style={{backgroundColor: 'white', width: middleContainer(window.screen.width),height: '1000px', margin: 'auto'}}>
                  <h2 className="text-center" style={Header}>Settings</h2>
                  
                  <form className="text-center">
                    <div style={settingsLabel(177)}>First Name</div> 
                    <input type="text" name="firstname" style={textBox()}></input>
                    <div style={settingsLabel(177)}>Last Name</div> 
                    <input type="text" name="lastname" style={textBox()}></input>                    
                    <div style={settingsLabel(195)}>Birthday</div> 
                    <input type="date" name="lastname" style={textBox()}></input> 
                    <div style={settingsLabel(225)}>Job</div> 
                    <input type="text" name="job" style={textBox()}></input>
                    <div style={settingsLabel(200)}>School</div> 
                    <input type="text" name="school" style={textBox()}></input>
                    <div style={settingsLabel(225)}>Sex</div> 
                    <input type="text" name="sex" style={textBox()}></input>
                    <div style={settingsLabel(220)}>City</div> 
                    <input type="text" name="city" style={textBox()}></input>
                    <div style={settingsLabel(150)}>Poll Threshold</div> 
                    <input type="number" name="poll-threshold" style={textBox()}></input>
                    <div style={settingsLabel(110)}>Message Threshold</div> 
                    <input type="number" name="message-threshold" style={textBox()}></input>
                    <input type="submit" name="confirmation" value="Confirm" style={submitBox} onClick={Login}></input>
                </form>

              </div>
            </div>

          </div>
        
        </div>
    );
  }

}

export default Profile;
