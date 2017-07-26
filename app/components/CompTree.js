import React, { Component } from 'react';
import styles from './photon.css';
import treeStyles from './Tree.css';
import { Link } from 'react-router-dom';
function Tree(props){
  return (
    <div className = {treeStyles.container}>
      <header className = {treeStyles.header}>

        <h1 className={styles.title + ' ' + treeStyles.title}>Components</h1>
      </header>
      <div className = {treeStyles.main}>
        {/* stuff goes here */}
      </div>
    </div>
  )
}


export default Tree;
