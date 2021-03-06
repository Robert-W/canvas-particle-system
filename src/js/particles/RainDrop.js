/* @flow */
import ParticleBase from './ParticleBase';
// Type Import
import type {DrawOptions} from './ParticleTypes';

/**
* RainDrop particle class
* This should be created for each raindrop and can be drawn with the draw method
* See src/js/components/ParticleCanvas for implementation
*/
export default class RainDrop extends ParticleBase {
  //- Types specific to the RainDrop class, remaining types defined in ParticleBase
  height: number;
  width: number;

  constructor (canvasWidth: number) {
    const props = {};
    //- Set some defaults for values that make sense for a raindrop
    props.y = 0;
    //- Place it at a random location along the xAxis
    props.x = Math.floor((Math.random() * (canvasWidth + 150)) - 150);
    //- Give the rainsdrops a slight slant as they fall
    props.vx = 2;
    //- Give the raindrops a varying velocity
    props.vy = Math.floor((Math.random() * 3) + 4);
    //- Shorten the ttl for each drop since the velocity is greater than some other particles
    props.ttl = 60;
    //- Pass props to ParticleBase
    super(props);
    //- Give the raindrops a height and width, this should be a derivative of speed, faster raindrops should be bigger
    this.height = props.vy * 1.1;
    this.width = props.vy / 3;
  }

  /**
  * Override the draw method
  * @param {object} options - Set of options
  * @param {context} options.ctx - Canvas Context that the rain drop belongs to
  * @param {boolean} options.windy - Boolean indicating if there is wind
  */
  draw (options: DrawOptions) {
    const {ctx, windy} = options;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.y += this.vy;
    this.x += windy ? (this.vx * 1.5) : this.vx;
  }

}
