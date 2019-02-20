import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { palet_green_primary, palet_green_secondary, inactive_tab_color, selected_tab_color } from '../../managers/LayoutManager';

class HeaderView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient elevation={4} colors={[palet_green_primary, palet_green_secondary]} style={styles.header_background}>
        </LinearGradient>
        <View style={styles.tab_container} elevation={10}>
          {this.renderTabs()}
        </View>
      </View>
    );
  }

  renderTabs() {
    const list = this.props.tabs.map(cat =>
      (
        <TouchableOpacity key={cat} style={styles.tab_button} onPress={()=>this.props.onTabPress(cat)}>
          <Text style={this.getTextStyles(cat)}> {cat} </Text>
        </TouchableOpacity>
      ));
    return list;

  }

  getTextStyles = (name) => {
    if(name === this.props.selected_index) {
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
    height: 80,
    width: '100%',
    //borderBottomLeftRadius:20,
    //borderBottomRightRadius:40,
  },
  tab_container: {
    position: 'absolute',
    top:25,
    width:'70%',
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
  container_title: {
    position: 'absolute',
    top:25,
    width:'70%',
    height:50,
  },
  text_title: {
    color:'white',
    textAlign:'center',
    fontSize:40,
  }
});
