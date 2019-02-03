import React, {Component} from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from "react-native-navigation";

import HeaderView from './subviews/HeaderView';

class MainFavoriteView extends Component {

  constructor(props) {
      super(props);
      this.state = { selected_index: 'Your games' };
  }

  onTabPress = (index) => {
    this.setState({selected_index: index})
  }

  render() {
    return (
      <View>
        <HeaderView selected_index={this.state.selected_index} onTabPress={(index)=>this.onTabPress(index)} tabs={['Your games', 'Your favorites']} title={"Liked"}/>
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
