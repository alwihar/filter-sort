import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends Component {
  render() {
    return (
      <div className="checkboxes">
        <Checkbox checked={this.props.nameCheckbox}
                  name='nameCheckbox'
                  onChange={this.props.handleChange}/>
        <label>Name</label>
        <Checkbox checked={this.props.ageCheckbox} name='ageCheckbox'
                  onChange={this.props.handleChange}/>
        <label>Age</label>
      </div>
    );
  }
}

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nameCheckbox: PropTypes.bool.isRequired,
  ageCheckbox: PropTypes.bool.isRequired,
};

export default Filter;