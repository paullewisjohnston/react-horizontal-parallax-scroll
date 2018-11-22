import React, { Component } from 'react';
import {Segment, Button, Icon} from 'semantic-ui-react'

export default class HorizontalScrollContainer extends Component {

  render() {
    return (
      <div style={{background:'blue',height:'100vh',width:'100vw'}}>
        <div style={{background:'red',height:'50vh',width:'50vw'}}>
          <div style={{background:'green',height:'10vh',width:'10vw'}}>
          </div>
        </div>
      </div>
    );
  }
}
