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
      overflowY: 'hidden',
      backgroundImage : 'linear-gradient(180deg,#6978E9,#6D04A6)',
    }

    let middleContainer = width => {if(width < 490){return '100%'}else{return '490px'}  }

    let textboxFooter = {height: '150px', width: middleContainer(window.screen.width), backgroundColor: 'green', bottom: '0', position: 'fixed'}


    return (
     
        <FullHeight style={containerStyle} className="no-gutter">

          <div className="row">

            <div className="col-xl-12">
              <div style={{backgroundColor: 'white', width: middleContainer(window.screen.width),height: window.screen.height, margin: 'auto'}}>
                <div style={textboxFooter}></div>
              </div>
            </div>

          </div>

          

        </FullHeight>
    );
  }

}

export default Profile;
