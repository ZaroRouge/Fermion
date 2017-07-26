//app/components
import React, { Component } from 'react';
import styles from './photon.css';
import corestyles from './Core.css';
import Left from './left';
import Right from './right';
import { Link } from 'react-router-dom';

class Core extends Component {
  // props : {
  //
  // }

  render() {
    return (
      <div className = {styles["window-content"] + ' ' + corestyles.container}>
        <div className = {styles["pane-group"]}>
          <Left />
          <div className = {styles.pane + ' ' + corestyles.main}>
            <header className = {corestyles.footer + ' ' + corestyles.header}>
              <h1 className={styles.title + ' ' + corestyles.title}>Web View</h1>
            </header>
            <div className = {corestyles.pads} data-tid="AppContainer">
              {/*this is the main component*/}
            </div>
            <footer className ={corestyles.footer}>
              <h1 className = {styles.title + ' ' + corestyles.title}>Footer</h1>
              <div className={corestyles.backButton} data-tid="backButton">
                <Link to="/">
                  <i className="fa fa-arrow-left" />
                </Link>
              </div>
            </footer>
          </div>
          <Right />
        </div>
      </div>
    )
  }



}

export default Core;
