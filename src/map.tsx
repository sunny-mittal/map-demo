import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

import {data, region} from './constants';
import {Marker} from './marker';

export const Map = () => {
  return (
    <MapView style={styles.map} initialRegion={region}>
      {data.map(datum => (
        <Marker {...datum} key={datum.id} />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
