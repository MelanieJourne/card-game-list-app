import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';

import HeaderView from './subviews/HeaderView';

class MainListView extends Component {

  constructor(props) {
      super(props);
      this.state = { selected_index: 'All' };
  }

  onTabPress = (index) => {
    this.setState({selected_index: index})
  }

  render() {
    return (
      <View>
        <HeaderView selected_index={this.state.selected_index} onTabPress={(index)=>this.onTabPress(index)} tabs={['All', 'Coop', 'Battle']} title={"List"}/>
      </View>
    );
  }
}

export default MainListView;

var styles = StyleSheet.create({
  header_background: {
    height: 150,
    width: '100%',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
});
