import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: 20,
    backgroundColor: '#e5e5e5'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 10
  }
});

export default class CompanyList extends Component<{}> {
  static navigationOptions = {
      tabBarLabel: 'Companies',
      tabBarIcon: ({ tintColor }) => (
              <Icon
                  name={'business'}
                  size={45}
                  style={{color: tintColor}} />
          )
  }

  render() {
    return (
        <View
          style={styles.container} >
          <Text>Companies</Text>
        </View>
    );
  }
}