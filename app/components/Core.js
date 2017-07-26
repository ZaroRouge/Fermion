//app/components
import React, { Component } from 'react';
import styles from './photon.css';
import Left from './left';
import Right from './right';


class Core extends Component {
  // props : {
  //
  // }

  render() {
    return (
      <div className = {styles["window-content"]}>

          <div className = {styles["pane-group"]}>
            <Left />
            <div className = {styles.pane} data-tid="AppContainer">
              {/*this is the main component*/}
            </div>
            <Right />
          </div>

      </div>
    )
  }



}

export default Core;
