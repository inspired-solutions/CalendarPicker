import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { Utils } from './Utils';
import Controls from './Controls';

export default function HeaderControls(props) {
  const {
    styles,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    months,
    previousTitle,
    nextTitle,
    textStyle,
  } = props;
  const MONTHS = months ? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const previous = previousTitle ? previousTitle : <Text>'Previous'</Text>;
  const next = nextTitle ? nextTitle : <Text>'Next'</Text>;
  const month = MONTHS[currentMonth];
  const year = currentYear;

  return (
    <View style={[styles.headerWrapper, { justifyContent: 'space-between', width: '100%' }]}>
      <Controls
        elememt={previous}
        onPressControl={onPressPrevious}
        styles={[styles.monthSelector, styles.prev]}
        textStyles={textStyle}
      />
      <View>
        <Text style={[styles.monthLabel, textStyle]}>
          {month} {year}
        </Text>
      </View>
      <Controls
        elememt={next}
        onPressControl={onPressNext}
        styles={[styles.monthSelector, styles.next]}
        textStyles={textStyle}
      />
    </View>
  );
}

HeaderControls.propTypes = {
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func,
};
