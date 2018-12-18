import React from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

export default function Controls({ elememt, onPressControl }) {
  return (
    <TouchableOpacity
      onPress={() => onPressControl()}
    >
      {elememt}
    </TouchableOpacity>
  );
}

Controls.propTypes = {
  styles: PropTypes.array.isRequired,
  onPressControl: PropTypes.func.isRequired,
};
