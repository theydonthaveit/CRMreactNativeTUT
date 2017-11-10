import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ListView
} from 'react-native';
import { connect } from 'react-redux'
import PeopleItem from './PeopleItem'

const { height, width } = Dimensions.get('window')
const formWidth = (width/10)*9

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: formWidth,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20
  }
});

class PeopleList extends Component<{}> {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 != r2
    })

    this.dataSource = ds.cloneWithRows(this.props.people)
  }

  render() {
    return (
        <View
          style={styles.container} >
          <ListView
            enableEmptySections={true}
            dataSource={this.dataSource}
            renderRow={(rowData) =>
              <PeopleItem people={rowData} />
            } />
        </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps)(PeopleList)
