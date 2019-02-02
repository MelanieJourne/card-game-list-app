import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from "react-native-navigation";
import LinearGradient from 'react-native-linear-gradient';

class MainFavoriteView extends Component {
  render() {
    return (
      <View>
        <Text>
          Wow favorite piece of cake.
        </Text>

        <LinearGradient colors={['#592941', '#383961']} style={styles.linearGradient}>
          <TouchableOpacity onPress={() => this.goToAddGameTab()}>
            <Text> Press Me </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }

  goToAddGameTab = () => {
    Navigation.mergeOptions(this.props.componentId, {
      bottomTabs: {
        currentTabIndex: 3,
      }
    });
  }

}

export default MainFavoriteView;

var styles = StyleSheet.create({
  linearGradient: {
    height: 100,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: 100,
  },
});
