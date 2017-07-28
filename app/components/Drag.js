//app/components
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import buttonstyle from './Core.css';
import styles from './Core.css';
import Figure from './Figure';
import Square from './Square';
import Board from './Board';
import { observe } from './Game';


export default class Drag extends Component {
  render() {
           
            return (<div className={styles.boardContainer}>
                <div className={buttonstyle.backButton} data-tid="backButton">
                    <Link to="/">
                        <i className="fa fa-arrow-left fa-3x" />
                    </Link>
                </div>
                <div className={styles.squareContainer}>
                    <Board figurePosition={[3,4]} />
                </div>
            </div>
            );
    }
}
