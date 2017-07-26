import React, { Component } from 'react';
import styles from './photon.css';
import buttonstyle from './Core.css';
// import { Link } from 'react-router-dom';
import Tree from './CompTree.js';
import List from './CompList.js';
function Left(props){
  return (
    <div className = {styles["pane-med"] + " " + buttonstyle.sidebar}>

      {/* probably want some stuff here */}
    <List />
    <Tree />
    </div>
  )
}


export default Left;
