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
this.messagesRef = React.createRef();
this.pollsRef = React.createRef();
this.mrtgRef = React.createRef();
this.messageGraph = this.messageGraph.bind(this);
this.pollsGraph = this.pollsGraph.bind(this);
this.messageResponseTimeGraph = this.messageResponseTimeGraph.bind(this);

//---------------------------------------------------------------------------

this.calcheight = this.calcheight.bind(this)

//---------------------------------------------------------------------------
this.messagesRefTwo = React.createRef();
this.pollsRefTwo = React.createRef();
this.mrtgRefTwo = React.createRef();
this.messageGraphTwo = this.messageGraphTwo.bind(this);
this.pollsGraphTwo = this.pollsGraphTwo.bind(this);
this.messageResponseTimeGraphTwo = this.messageResponseTimeGraphTwo.bind(this);


}

componentWillMount(){

console.log(window.screen.height)

this.calcheight()

let profileImageWidth = width => {if(width < 490){return window.screen.width}else{return 490}  }

this.setState({profileHeight : profileImageWidth(window.screen.width) * .96})

}

componentDidMount(){

this.messageGraph()  
this.pollsGraph()
this.messageResponseTimeGraph()
this.messageGraphTwo()  
this.pollsGraphTwo()
this.messageResponseTimeGraphTwo()

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

calcheight(){

  if(window.screen.width < 576){

  this.setState({height: 2700})

  }else{

  this.setState({height: 2150})

  }



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


  messageResponseTimeGraph(event){


    var bar = new ProgressBar.Circle(this.mrtgRef.current, {
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

    messageGraphTwo(event){


      var bar = new ProgressBar.Circle(this.messagesRefTwo.current, {
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
      
      pollsGraphTwo(event){
      
      
        var bar = new ProgressBar.Circle(this.pollsRefTwo.current, {
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
      
      
        messageResponseTimeGraphTwo(event){
      
      
          var bar = new ProgressBar.Circle(this.mrtgRefTwo.current, {
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


    const containerStyle = {
      width : '100%',
      margin: '0px',
      padding: '0px',
      height: this.state.height+'px',
      overflowX: 'hidden',
      backgroundImage : 'linear-gradient(180deg,#6978E9,#6D04A6)',
    }

    let profileImageWidth = width => {if(width < 490){return '100%'}else{return '490px'}  }
    let SeeData = {color: '#E70032'}
    let divider = {borderBottom : '1px solid #0B1EAC', width : '96%', margin : 'auto', marginTop: '40px', marginBottom: '40px'}
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
              <div style={{backgroundColor: 'white', width: profileImageWidth(window.screen.width),height: this.state.height+'px', margin: 'auto'}}>
                <div style={userProfilePicture}></div>
                <h2 style={{width: '100%', marginLeft: '10px', marginTop: '10px'}}>KaVaughn Irons, 19</h2>
                <h5 style={{width: '100%', marginLeft: '10px', marginTop: '10px'}}>Job: Atlas Cinema</h5>
                <h5 style={{width: '100%', marginLeft: '10px', marginTop: '10px'}}>School: Case Western Reserve</h5>
                <h5 style={{width: '100%', marginLeft: '10px', marginTop: '10px'}}>Sex: Male</h5>
                <h5 style={{width: '100%', marginLeft: '10px', marginTop: '10px'}}>City: Cleveland</h5>
                <div style={divider}></div>

              
                <h5 style={SeeData} className="text-center">Messenger</h5>

                <div style={divider}></div>

                <h5 style={SeeData} className="text-center">Polls Answered</h5>

                <div style={divider}></div>


                <h5 style={SeeData} className="text-center">Created Posts</h5>

                <div style={divider}></div>


                <div className="no-gutter text-center">

                  <div className="row"> 
                      <div style={{verticalAlign: 'middle'}} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                          <h5>(You Set)</h5>
                          <h6 style={commonalitiesThresholdText}> Polls Answered Threshold: 2,000,000</h6>
                          <div style={{position: 'relative', width: '170px',height: '170px', margin: 'auto'}} ref={this.pollsRef}></div>
                          <h5 style={commonalitiesThresholdBoolText}> Not Met</h5>
                      </div>

                      <div style={{verticalAlign: 'middle'}} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                          <h5>(They Set)</h5>
                          <h6 style={commonalitiesThresholdText}> Polls Answered Threshold: 2,000,000</h6>
                          <div style={{position: 'relative', width: '170px',height: '170px', margin: 'auto'}} ref={this.pollsRefTwo}></div>
                          <h5 style={commonalitiesThresholdBoolText}> Not Met</h5>
                      </div>
                  </div>

                  <div style={divider}></div>


                  <div className="row">
                    
                    <div style={{verticalAlign: 'middle'}} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <h5>(You Set)</h5>
                      <h6 style={messageThresholdText}> Messages Sent Threshold: 2,000</h6>
                      <div style={{position: 'relative', width: '170px',height: '170px', margin: 'auto', verticalAlign: 'middle'}} ref={this.messagesRef}></div>
                      <h5 style={messageThresholdBoolText}> Not Met</h5>
                    </div>

                    <div style={{verticalAlign: 'middle'}} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                       <h5>(They Set)</h5>
                      <h6 style={messageThresholdText}> Messages Sent Threshold: 2,000</h6>
                      <div style={{position: 'relative', width: '170px',height: '170px', margin: 'auto', verticalAlign: 'middle'}} ref={this.messagesRefTwo}></div>
                      <h5 style={messageThresholdBoolText}> Not Met</h5>
                    </div>

                  </div>

                  <div style={divider}></div>


                  <div className="row"> 
                    <div style={{verticalAlign: 'middle'}} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <h5>(You Set)</h5>
                        <h6 style={commonalitiesThresholdText}> Message Response Time</h6>
                        <div style={{position: 'relative', width: '170px',height: '170px', margin: 'auto'}} ref={this.mrtgRef}></div>
                    </div>

                    <div style={{verticalAlign: 'middle'}} className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <h5>(They Set)</h5>
                        <h6 style={commonalitiesThresholdText}> Message Response Time</h6>
                        <div style={{position: 'relative', width: '170px',height: '170px', margin: 'auto'}} ref={this.mrtgRefTwo}></div>
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
