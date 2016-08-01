/* @flow */
import ParticleBase from './ParticleBase';
// Type Import
import type {DrawOptions} from './ParticleTypes';

/**
* SnowFlake particle class
* This should be created for each snowflake and can be drawn with the draw method
* See src/js/components/ParticleCanvas for implementation
*/
export default class SnowFlake extends ParticleBase {
  //- Types specific for a snow flake
  diameter: number;

  constructor (canvasWidth: number) {
    const props = {};
    //- Defaults for our flake
    props.y = 0;
    //- Random location along x axis
    props.x = Math.floor((Math.random() * (canvasWidth + 150)) - 150);
    //- Give it a small y velocity and stornger x velocity as it is more susceptible to wind and falls slower
    //- Also multiply by a value -1, 0, or 1 since the snowflake could fall either way, unless its windy
    props.vx = Math.floor((Math.random() * 1) + 1) * Math.floor((Math.random() * 2) - 1);
    props.vy = Math.floor(Math.random() * 2) + 3; // 3 - 5
    super(props);
    //- Give the snowflakes a random size from 2 - 5
    this.diameter = Math.floor(Math.random() * 3) + 2;
  }

  /**
  * Override the draw method
  * @param {object} options - Set of options
  * @param {context} options.ctx - Canvas Context that the rain drop belongs to
  * @param {boolean} options.windy - Boolean indicating if there is wind
  */
  draw (options: DrawOptions) {
    const {ctx, windy} = options;
    //- Make a simple circle
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.diameter / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    this.y += this.vy;
    this.x += windy ? (this.vx * 2) : this.vx;
  }

}
