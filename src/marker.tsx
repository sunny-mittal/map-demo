import React, {useContext} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Marker as RNMarker} from 'react-native-maps';
import {Context} from '../App';
import selected from './assets/selected.png';
import unselected from './assets/unselected.png';

type Props = {
  latitude: number;
  longitude: number;
  id: string;
};

const anchor = {x: 0.5, y: 0.5};
export const Marker = ({id, ...coords}: Props) => {
  const {active, setActive} = useContext(Context);

  const isActive = active === id;
  return (
    <RNMarker
      anchor={anchor}
      centerOffset={anchor}
      identifier={id}
      style={isActive ? styles.active : {}}
      coordinate={coords}
      onPress={() => {
        alert(id);
        setActive(id);
      }}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={isActive ? selected : unselected}
      />
    </RNMarker>
  );
};

const styles = StyleSheet.create({
  active: {
    zIndex: 10000,
  },
  image: {
    height: 28,
    width: 40,
  },
});
