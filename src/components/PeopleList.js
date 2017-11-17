import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView } from 'react-native';
import { connect } from 'react-redux'
import { loadInitialContacts } from '../actions'
import _ from 'lodash'
import PeopleItem from './PeopleItem'
import PeopleDetail from './PeopleDetail'
import Icon from 'react-native-vector-icons/EvilIcons'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 380,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 30
  }
});

class PeopleList extends Component<{}> {
  static navigationOptions = {
      tabBarLabel: 'People',
      tabBarIcon: ({ tintColor }) => (
              <Icon
                  name={'user'}
                  size={50}
                  style={{color: tintColor}} />
          )
  }

  componentDidMount() {
    this.props.loadInitialContacts()
  }

  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    })

    this.dataSource = ds.cloneWithRows(this.props.people)

    if ( this.props.detailView === true ) {
      return (
        <PeopleDetail />        
      )    
    }
    else {
      return ( <ListView
        enableEmptySections={true}
        dataSource={this.dataSource}
        renderRow={(rowData) =>
          <PeopleItem people={rowData} />
        } />
      )
    }
  }

  render() {
    return (
        <View
          style={styles.container} >
          {this.renderInitialView()}
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  const people = _.map(state.people, (val, uid) => {
    return {
      ...val,
      uid
    }
  })

  return {
    people,
    detailView: state.detailView
  }
}

export default connect(mapStateToProps, {loadInitialContacts})(PeopleList)
