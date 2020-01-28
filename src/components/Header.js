import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
  
    <div className='no-gutter' style={{height : '60px', width : '100%', backgroundImage : 'linear-gradient(270deg,#FA5C7D,#6D04A6)',overflowX: 'hidden'}}>
      <div className='row'>
        <div className='col-xl-12 text-center'>
            <h3 style={{color : 'white', marginTop : '8px'}}>Spirit Buddy</h3>
        </div>
      </div>  
    </div>

  );
}

export default Header;
