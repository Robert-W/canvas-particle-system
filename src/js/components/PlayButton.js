/* @flow */
import React, {Component} from 'react';

type PlayButtonProps = {
  active: boolean,
  onClick: Function
};

//- Possible strings for the button
const LABELS = {
  start: 'Start',
  stop: 'Stop'
};

export default class PlayButton extends Component {

  displayName: 'PlayButton';
  props: PlayButtonProps;

  render () {
    const {active, onClick} = this.props;
    const label = active ? LABELS.stop : LABELS.start;
    const buttonClass = active ? 'animation-toggle__stop' : 'animation-toggle__start';

    return (
      <div className='animation-toggle pointer' onClick={onClick}>
        <span className={buttonClass}></span>
        <span className='animation-toggle__label'>{label}</span>
      </div>
    );
  }

}
