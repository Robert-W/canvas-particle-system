/* @flow */
import {PARTICLES, VIEW_MODE} from 'js/constants';
import React, {Component} from 'react';
import ParticleCanvas from './ParticleCanvas';
import PlayButton from './PlayButton';
import Background from './Background';
import ModeSwitch from './ModeSwitch';
import Checkbox from './Checkbox';

//- Description of the state of our application
type AppState = {
  isPlaying: boolean,
  particle: string,
  mode: string
};

export default class App extends Component {

  displayName: 'App';
  state: AppState;
  props: any;

  constructor (props: any) {
    super(props);
    //- Set the defaults for the application here
    //- defulat particle can be rain or snow, mode can be light or dark
    //- isWindy can effect rain or snow more
    this.state = {
      particle: PARTICLES.snow,
      mode: VIEW_MODE.light,
      isPlaying: false
    };
  }

  setIsPlaying = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
  };

  setParticle = (value: string) => {
    //- If the user clicked the particle that is already on, then turn it off
    this.setState({ particle: value });
  };

  setViewMode = () => {
    this.setState({ mode: this.state.mode === VIEW_MODE.light ? VIEW_MODE.dark : VIEW_MODE.light });
  };

  render () {
    const {
      mode,
      particle,
      isPlaying
    } = this.state;

    const isSnowing = particle === PARTICLES.snow;
    const isRaining = particle === PARTICLES.rain;

    return (
      <div className={`app ${mode}`}>
        <h1 className='app__header'>HTML5 Canvas Particle System</h1>
        <div className='app_controls inner'>
          <PlayButton active={isPlaying} onClick={this.setIsPlaying} />
          <Checkbox label='Let it snow' checked={isSnowing} onChange={this.setParticle} value={PARTICLES.snow}/>
          <Checkbox label='Make it rain' checked={isRaining} onChange={this.setParticle} value={PARTICLES.rain}/>
          <ModeSwitch checked={mode === VIEW_MODE.dark} onChange={this.setViewMode} />
        </div>
        <div className='app__canvas relative'>
          <Background mode={mode} />
          <ParticleCanvas isPlaying={isPlaying} particle={particle} />
        </div>
      </div>
    );
  }
}
