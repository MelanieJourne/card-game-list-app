import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { Navigation } from "react-native-navigation";

class MainFavoriteView extends Component {
  render() {
    return (
      <View>
        <Text>
          Wow favorite piece of cake.
        </Text>
        <TouchableOpacity onPress={() => this.goToAddGameTab()}>
          <Text> Press Me </Text>
        </TouchableOpacity>
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
