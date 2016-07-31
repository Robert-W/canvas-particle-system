/* @flow */
/**
* Class representing the minimum properties needed for a particle
*/

type ParticleProps = {
  x: number,
  y: number,
  vx: number,
  vy: number
};

export default class ParticleBase {
  /**
  * Types for this class
  */
  x: number;
  y: number;
  vx: number;
  vy: number;

  /**
  * Create a simple particle
  * @param {object} props
  * @param {number=} props.x - Starting x coordinate
  * @param {number=} props.y - Starting y coordinate
  * @param {number=} props.vx - Starting x velocity
  * @param {number=} props.vy - Starting y velocity
  */
  constructor (props: ParticleProps) {
    this.x = props.x || 0;
    this.y = props.y || 0;
    //- These should be between 2 and 5 if not provided
    this.vx = props.vx || Math.floor((Math.random() * 3) + 2);
    this.vy = props.vy || Math.floor((Math.random() * 3) + 2);
  }

  /**
  * Draw function that each subclass should use to describe how the particle should draw itself
  */
  draw () {
    throw new Error('Missing Implementation. Your subclass must override the draw method.');
  }


}
