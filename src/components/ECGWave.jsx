// ECGWave.js
import React from 'react';
import { View } from 'react-native';
import Svg, { Polyline } from 'react-native-svg';

const ECGWave = ({ data, width, height }) => {
  // Generate the points for the polyline
  const points = data.map((point, index) => `${index * (width / data.length)},${height - point}`).join(' ');

  return (
    <View>
      <Svg height={height} width={width}>
        <Polyline
          points={points}
          fill='none'
          stroke="red"
          strokeWidth="3"
        />
      </Svg>
    </View>
  );
};

export default ECGWave;
