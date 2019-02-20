import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Navigation } from "react-native-navigation";

import LinearGradient from 'react-native-linear-gradient';

import { palet_green_primary, palet_green_secondary, inactive_tab_color, selected_tab_color } from '../managers/LayoutManager';

class MainRandomView extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <View>
        <LinearGradient colors={[palet_green_primary, palet_green_secondary]} style={styles.container}>
        </LinearGradient>
      </View>
    );
  }
}

export default MainRandomView;

var styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
});
