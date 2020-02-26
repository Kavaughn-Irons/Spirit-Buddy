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
      overflowX: 'hidden',
      backgroundImage : 'linear-gradient(180deg,#6978E9,#6D04A6)',
    }

    return (
     
        <FullHeight style={containerStyle} className="no-gutter">
        
        </FullHeight>
    );
  }

}

export default Profile;
