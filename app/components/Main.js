// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Main.css';

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className={styles.left} data-tid="left-panel" >
          <p>this panel contains<br/>
            File System<br/>
            Data Management</p>
        </div>
        <div className={styles.center} data-tid="center-panel" >
          <p>this panel contains<br/>
            Live Render<br/>
            Editor</p>
        </div>
        <div className={styles.right} data-tid="right-panel" >
          <p>this panel contains<br/>
            Global Attribute<br/>
            Local Attribute<br/>
            JSON Input</p>
        </div>
      </div>
    );
  }
}
