import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { palet_green_primary, palet_green_secondary, inactive_tab_color, selected_tab_color } from '../../managers/LayoutManager';

class HeaderView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient elevation={2} colors={[palet_green_primary, palet_green_secondary]} style={styles.header_background}>
        </LinearGradient>
        <View style={styles.tab_container} elevation={5}>
          <TouchableOpacity style={styles.tab_button} onPress={()=>this.props.onTabPress(0)}>
            <Text style={this.getTextStyles(0)}> ALL </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab_button} onPress={()=>this.props.onTabPress(1)}>
            <Text style={this.getTextStyles(1)}> COOP </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab_button} onPress={()=>this.props.onTabPress(2)}>
            <Text style={this.getTextStyles(2)}> BATTLE </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  getTextStyles = (index) => {
    if(index === this.props.selected_index) {
      return styles.text_selected;
    }
    return styles.text_unselected;
  }
}

export default HeaderView;

var styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
  },
  header_background: {
    height: 120,
    width: '100%',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  tab_container: {
    width:'80%',
    height:30,
    backgroundColor:'white',
    borderRadius:15,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  tab_button: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  text_selected: {
    color:selected_tab_color,
    textAlign:'center',
  },
  text_unselected: {
    color:inactive_tab_color,
    textAlign:'center',
  },
});
