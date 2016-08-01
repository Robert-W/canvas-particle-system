/* @flow */
import React, {Component} from 'react';

type SwitchProps = {
  checked: boolean,
  onChange: Function
};

const sunIcon = '<use xlink:href="#sun-icon" />';
const moonIcon = '<use xlink:href="#moon-icon" />';

/**
* Similar to checkbox, but instead of labels, has icons on each side of it
*/
export default class ModeSwitch extends Component {

  displayName: 'ModeSwitch';
  props: SwitchProps;

  render () {
    const { checked, onChange } = this.props;

    return (
      <div className={`checkbox pointer ${checked ? 'active' : ''}`} onClick={onChange}>
        <svg className='sun-icon' dangerouslySetInnerHTML={{ __html: sunIcon }}/>
        <span className='checkbox__background'><span className='checkbox__switch' /></span>
        <svg className='moon-icon' dangerouslySetInnerHTML={{ __html: moonIcon }}/>
      </div>
    );
  }

}
