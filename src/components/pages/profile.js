import React, { Component } from "react";
import FullHeight from "react-full-height";
import 'whatwg-fetch';
import ProfilePlaceholder from "../../Assets/Profile-Placeholder.png";
import ProgressBar from '../../../node_modules/progressbar.js'

const containerStyle = {
width : '100%',
margin: '0px',
padding: '0px',
height: '2300px',
overflowX: 'hidden',
backgroundImage : 'linear-gradient(180deg,#6978E9,#6D04A6)',
}


class Profile extends Component {



constructor(){


super()
  this.state = {

  profileHeight : '',
  message: ''


  }
this.messagesRef = React.createRef();
this.pollsRef = React.createRef();
this.messageGraph = this.messageGraph.bind(this);
this.pollsGraph = this.pollsGraph.bind(this);


}

componentWillMount(){

console.log(window.screen.height)

let profileImageWidth = width => {if(width < 490){return window.screen.width}else{return 490}  }

this.setState({profileHeight : profileImageWidth(window.screen.width) * .96})

}

componentDidMount(){

this.messageGraph()  
this.pollsGraph()

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

messageGraph(event){


var bar = new ProgressBar.Circle(this.messagesRef.current, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 2500,
    text: {
      autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';
  
  bar.animate(1.0);


}

pollsGraph(event){


  var bar = new ProgressBar.Circle(this.pollsRef.current, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 2500,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#333', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
    
        var value = Math.round(circle.value() * 1000);
        if (value === 0) {
          circle.setText('Threshold Met!');
        } else {
          circle.setText(value);
        }
    
      }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';
    
    bar.animate(1.0);
  
  
  }

render() {

    let profileImageWidth = width => {if(width < 490){return '100%'}else{return '490px'}  }
    let divider = {borderBottom : '1px solid #0B1EAC', width : '96%', margin : 'auto', marginTop: '25px'}
    let messageThresholdText = {marginTop: '10px'}
    let commonalitiesThresholdText = {marginTop: '10px'}
    let messageThresholdBoolText = {marginTop: '10px'}
    let commonalitiesThresholdBoolText = {marginTop: '10px'}
    let { profileHeight } = this.state
    let userProfilePicture = {backgroundSize : '150px',backgroundRepeat : 'no-repeat', backgroundPosition: 'center',backgroundImage : 'url( '+ProfilePlaceholder+')', height: profileHeight+'px', width: '100%',backgroundColor: '#FDBECC'}
    
    console.log(profileHeight,"here!!!")

    let messages = <div>COW!!!</div>


    return (
     
        <div style={containerStyle} className="no-gutter">
          <div className="row">

            <div className="col-xl-12">
              <div style={{backgroundColor: 'white', width: profileImageWidth(window.screen.width),height: '2300px', margin: 'auto'}}>
                <div style={userProfilePicture}></div>
                <h2 style={{width: '100%', marginLeft: '10px', marginTop: '10px'}}>KaVaughn Irons, 19</h2>
                <h5 style={{width: '100%', marginLeft: '10px', marginTop: '10px'}}>Job: Atlas Cinema</h5>
                <h5 style={{width: '100%', marginLeft: '10px', marginTop: '10px'}}>School: Case Western Reserve</h5>
                <h5 style={{width: '100%', marginLeft: '10px', marginTop: '10px'}}>Sex: Male</h5>
                <h5 style={{width: '100%', marginLeft: '10px', marginTop: '10px'}}>City: Cleveland</h5>
                <div style={divider}></div>
                <div className="no-gutter text-center">
                  <div className="row">
                    
                    <div style={{verticalAlign: 'middle'}} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <h6 style={messageThresholdText}> Message Threshold: 2000</h6>
                      <div style={{position: 'relative', width: '170px',height: '170px', margin: 'auto', verticalAlign: 'middle'}} ref={this.messagesRef}></div>
                      <h5 style={messageThresholdBoolText}> Not Met</h5>
                    </div>
                    
                    <div style={{verticalAlign: 'middle'}} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <h6 style={commonalitiesThresholdText}> Commonalites Threshold: 2,000,000</h6>
                      <div style={{position: 'relative', width: '170px',height: '170px', margin: 'auto'}} ref={this.pollsRef}></div>
                      <h5 style={commonalitiesThresholdBoolText}> Not Met</h5>
                    </div>


                  </div>
                </div>
                

                

              </div>
            </div>

          </div>
        </div>
    );
  }

}

export default Profile;
