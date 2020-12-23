import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';

const Filter = ({state, onChange}) => {

    return (
      <div className="checkboxes">
        <Checkbox
            checked={state==='first'}
            onChange={() => {onChange('first', 'name')}}
        />
        <label>Name</label>
        <Checkbox
            checked={state==='second'}
            onChange={() => {onChange('second', 'dob')}}
        />
        <label>Age</label>
      </div>
    );
}

export default Filter;
