import React, { Component } from 'react';
import styles from './photon.css';
import buttonstyle from './Core.css';
import treeStyles from './Tree.css';

function Right(props){
  return (
    <div className = {styles["pane-med"] + " " + buttonstyle.sidebar}>
      <header className = {treeStyles.header}>
        <h1 className={styles.title + ' ' + treeStyles.title}>Right Panel</h1>
      </header>
      {/* probably want some stuff here */}
    </div>
  )
}


export default Right;
