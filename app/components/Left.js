import React, { Component } from 'react';
import styles from './photon.css';
import buttonstyle from './Core.css';
import { Link } from 'react-router-dom';
function Left(props){
  return (
    <div className = {styles["pane-med"] + " " + buttonstyle.sidebar}>
      <div className={buttonstyle.backButton} data-tid="backButton">
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      {/* probably want some stuff here */}

    </div>
  )
}


export default Left;
