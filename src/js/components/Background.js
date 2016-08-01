/* @flow */
import React, {Component} from 'react';
import {VIEW_MODE} from 'js/constants';

type BackgroundProps = {
  mode: string
};

const COLORS = {};
//- Assign RGB values for each viewing mode
COLORS[VIEW_MODE.light] = 'rgba(221, 221, 221, 0.85)';
COLORS[VIEW_MODE.dark] = 'rgba(51, 51, 51, 0.85)';

/**
* Background Canvas, It's a good idea to have a separate background canvas so I can manipulate the background
* and the particles in the foreground separate of each other
*/
export default class Background extends Component {

  displayName: 'Background';
  props: BackgroundProps;

  componentDidMount () {
    this.setBackgroundColor();
  }

  componentDidUpdate (prevProps: BackgroundProps) {
    const {mode} = this.props;
    //- Only update the canvas if the value has been updated
    if (prevProps.mode !== mode) {
      this.setBackgroundColor();
    }
  }

  setBackgroundColor () {
    const {background} = this.refs;
    const {mode} = this.props;
    //- Get the context and set the fill based on the apps VIEW_MODE
    const context = background.getContext('2d');
    context.fillStyle = COLORS[mode];
    //- Clear out the canvas and update it
    context.clearRect(0, 0, background.width, background.height);
    context.fillRect(0, 0, background.width, background.height);
  }

  render () {
    return (
      <canvas width='600' height='400' ref='background' />
    );
  }

}
