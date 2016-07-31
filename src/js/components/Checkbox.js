/* @flow */
import React, {Component} from 'react';

type CheckboxProps = {
  value: string,
  label: string,
  checked: boolean,
  onChange: Function
};

export default class Checkbox extends Component {

  displayName: 'Checkbox';
  props: CheckboxProps;

  change = () => {
    const {value, onChange} = this.props;
    //- Pass the value back to the callback so I can turn on the correct checkbox
    onChange(value);
  };

  render () {
    const {checked, label} = this.props;
    return (
      <div className={`checkbox pointer ${checked ? 'active' : ''}`} onClick={this.change}>
        <span className='checkbox__background'><span className='checkbox__switch' /></span>
        <span className='checkbox__label'>{label}</span>
      </div>
    );
  }

}
