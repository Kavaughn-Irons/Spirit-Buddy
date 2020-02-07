import React, { Component } from "react";
import FullHeight from "react-full-height";
import 'whatwg-fetch';
import ProfilePlaceholder from "../../Assets/Profile-Placeholder.png";

const containerStyle = {
width : '100%',
margin: '0px',
padding: '0px',
height: '2300px',
overflowX: 'hidden',
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

    let loginBox = {width : '300px', height : '500px', backgroundColor : 'white', margin : 'auto', marginTop : '50px', border : '1px solid black', borderRadius: '10px'}
    let buddyListHeader = {marginTop : '50px', color : '#0B1EAC', borderBottom : '1px solid #0B1EAC', width : '250px', margin : 'auto', paddingTop : '20px', paddingBottom : '20px'}
    let usernameHeader = {marginTop : '50px', color : '#0B1EAC', borderBottom : '1px solid #0B1EAC', width : '250px', margin : 'auto', paddingTop : '20px', paddingBottom : '20px'}
    let name = {color : '#E70032', fontSize : '17px',height : '40px', width : '150px', paddingTop : '10px'}
    let option = {color : '#E70032', marginTop : '10px'}
    let profilePictureContainer = { display : 'inline-block', height : '60px', width : '50px', paddingTop : '10px', paddingBottom : '10px', verticalAlign: 'middle'}
    let profileNameContainer = { display : 'inline-block', height : '60px', width : '50px', paddingTop : '10px', paddingBottom : '10px', verticalAlign: 'middle', marginRight : '150px'}
    let divider = {borderBottom : '1px solid #0B1EAC', width : '250px', margin : 'auto'}
    let profilePicture = {height:'40px', width: '40px', backgroundColor: '#bbb', borderRadius: '50%'}
    let userProfilePicture = {backgroundSize : '150px',backgroundRepeat : 'no-repeat', backgroundPosition: 'center',backgroundImage : 'url( '+ProfilePlaceholder+')', height:'250px', width: '100%', borderRadius: '10px', margin : 'auto', border : '1px solid black'}
    let textBox = {width : '250px', marginBottom : '30px', border : 'none'}
    let submitBox = {width : '250px', height : '50px', border : 'none', color : 'white',backgroundImage : 'linear-gradient(180deg,#B65DE7,#0B1EAC)'}
    let loginLabels = {paddingRight : '176px'}

    let {Login} = this

    return (
     
        <div style={containerStyle} className="no-gutter">
          <div className="row">
            <div className="col-xl-12">

               <div className="Friends text-center" style={loginBox}>

                  <div style={userProfilePicture}></div>
                  <h5 style={usernameHeader}>KaVaughn Irons</h5>
                  <h6 style={option}>Settings</h6>
                  <div style={divider}></div>                  
                  <h6 style={option}>Create Post</h6>
                  <div style={divider}></div>
                  <h6 style={option}>Create Poll</h6>
                  <div style={divider}></div>
                  <h6 style={option}>View Profile</h6>

                 


 

              </div>

              <div className="Friends text-center" style={loginBox}>

              <h5 style={buddyListHeader}>Statistics</h5>
                  <h6 style={option}>Polls Created: 100</h6>
                  <div style={divider}></div> 
                  <h6 style={option}>Polls Seen: 60</h6>
                  <div style={divider}></div>                  
                  <h6 style={option}>Posts: 50</h6>
                  <div style={divider}></div>
                  <h6 style={option}>Crushers: 5</h6>
                  <div style={divider}></div>
                  <h6 style={option}>Crushes: 10</h6>
              </div>

              <div className="Friends text-center" style={loginBox}>
                <h5 style={buddyListHeader}>Spirit Crushers</h5>
                
                <div style={profilePictureContainer}>
                  <div style={profilePicture}></div>
                  
                </div>  
                
                <div style={profileNameContainer}>
                  <h6 style={name}>KaVaughn Irons </h6>
                </div>
                

                
                
                

              </div>

              <div className="Friends text-center" style={loginBox}>

                <h5 style={buddyListHeader}>Spirit Crushes</h5>

              </div>

            </div>
          </div>
        </div>
    );
  }

}

export default Home;
