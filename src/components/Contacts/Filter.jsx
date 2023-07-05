import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelFilter, InputFilter, LabelName } from './Contacts-styled';

export class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <LabelFilter>
        <LabelName>Find contacts by name</LabelName>
        <InputFilter type="text" name="filter" value={filter} onChange={onChange} />
      </LabelFilter>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};