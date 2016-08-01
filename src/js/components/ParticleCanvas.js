/* @flow */
import SnowFlake from 'js/particles/SnowFlake';
import RainDrop from 'js/particles/RainDrop';
import React, {Component} from 'react';
import {PARTICLES} from 'js/constants';

type ParticleCanvasProps = {
  isPlaying: boolean,
  particle: string
};

//- Place to store all my raindrops
const raindrops = [],
      snowflakes = [];

const SETTINGS = {
  //- How many rain particles do I add for each rendering loop
  raindropCount: 10,
  rainColor: 'rgba(0, 112, 193, 0.65)',
  //- How many snow particles for each loop
  snowflakeCount: 5,
  snowColor: 'rgb(255, 255, 255)'
};

export default class ParticleCanvas extends Component {

  displayName: 'ParticleCanvas';
  props: ParticleCanvasProps;

  //- Local Properties
  ctx: any;
  width: number;
  height: number;

  componentDidMount () {
    const {particleBoard} = this.refs;
    const {isPlaying} = this.props;
    this.ctx = particleBoard.getContext('2d');
    this.width = particleBoard.width;
    this.height = particleBoard.height;
    if (isPlaying) {
      this.renderNewParticle();
    }
  }

  componentDidUpdate (prevProps: ParticleCanvasProps) {
    const {particle, isPlaying} = this.props;
    //- Only update the canvas if the value has been updated
    //- Or if the isPlaying has been updated and is true
    // if (prevProps.particle !== particle || (isPlaying !== prevProps.isPlaying && isPlaying)) {
    if (isPlaying && (prevProps.particle !== particle || isPlaying !== prevProps.isPlaying)) {
      this.renderNewParticle();
    }
  }

  renderNewParticle () {
    const {particle} = this.props;
    //- Start rendering the given particle type
    switch (particle) {
      case PARTICLES.rain:
        requestAnimationFrame(this.renderRainDrops);
      break;
      case PARTICLES.snow:
        requestAnimationFrame(this.renderSnowFlakes);
      break;
    }
  }

  renderRainDrops = () => {
    const {particle, isPlaying} = this.props;
    let i = 0, end = SETTINGS.raindropCount, drop;
    //- Give the raindrop the width of the canvas so it can give it a good starting x coord
    for (; i <= end; ++i) {
      raindrops.push(new RainDrop(this.width));
    }
    //- Clear the canvas
    this.clearCanvas();
    //- Set the color
    this.ctx.fillStyle = SETTINGS.rainColor;
    //- Reset loop params
    i = raindrops.length - 1;
    end = 0;
    for (; i > end; --i) {
      drop = raindrops[i];
      drop.draw(this.ctx);
      if (drop.y + drop.height > this.height) {
        raindrops.splice(i, 1);
      }
    }

    //- Continue the animation while this isPlaying and the particle is rain
    if (particle === PARTICLES.rain && isPlaying) {
      requestAnimationFrame(this.renderRainDrops);
    }
  };

  renderSnowFlakes = () => {
    const {particle, isPlaying} = this.props;
    let i = 0, end = SETTINGS.snowflakeCount, flake;
    //- Give the snowflake the width of the canvas so it can give it a good starting x coord
    for (; i <= end; ++i) {
      snowflakes.push(new SnowFlake(this.width));
    }
    //- Clear the canvas
    this.clearCanvas();
    //- Set color
    this.ctx.fillStyle = SETTINGS.snowColor;
    //- Reset loop params
    i = snowflakes.length - 1;
    end = 0;
    for (; i > end; --i) {
      flake = snowflakes[i];
      flake.draw(this.ctx);
      if (flake.y + flake.diameter > this.height) {
        snowflakes.slice(i, 1);
      }
    }

    //- Continue the animation while this isPlaying and the particle is snow
    if (particle === PARTICLES.snow && isPlaying) {
      requestAnimationFrame(this.renderSnowFlakes);
    }
  };

  clearCanvas = () => {
    this.ctx.clearRect(0, 0, this.width, this.height);
  };

  render () {
    return (
      <canvas width='600' height='400' ref='particleBoard' />
    );
  }

}
