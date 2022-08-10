import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';
import {StyleSheet, View} from 'react-native';
import {Map} from './src/map';

export const Context = createContext(
  {} as {
    active: string | null;
    setActive: Dispatch<SetStateAction<string | null>>;
  },
);

export default () => {
  const [active, setActive] = useState<string | null>(null);

  const ctx = useMemo(() => ({active, setActive}), [active]);

  return (
    <View style={styles.container}>
      <Context.Provider value={ctx}>
        <Map />
      </Context.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: StyleSheet.absoluteFillObject,
});
