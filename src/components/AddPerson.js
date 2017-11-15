import React, { Component } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit'
import { connect } from 'react-redux'
import * as actions from '../actions'

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-between'
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange
  },
  addButton: {
    marginTop: 20
  }
});

const AddButton =
  MKButton
    .coloredButton()
    .withText('Add')
    .build()

class AddPerson extends Component<{}> {
  static navigationOptions = {
      tabBarLabel: 'Add Person',
      tabBarIcon: ({ tintColor }) => (
              <Icon
                  name={'plus'}
                  size={70}
                  style={[{color: tintColor}, styles.icon ]} />
          )
  }

  onAddPress() {
    const { first_name, last_name, phone, email, company, project, notes } = this.props
    this.props.createNewContact({ first_name, last_name, phone, email, company, project, notes })
    this.props.navigation.navigate('PeopleList')
  }

  render() {
    return (
        <ScrollView
          showsVerticalScrollIndicator={false} >
          <View
            style={styles.form} >
            <Text>
              Add a Contact
            </Text>
            <MKTextField
              value={this.props.first_name}
              onChangeText={this.props.formUpdate({props: 'first_name', value})}
              textInputStyle={styles.fieldStyles}
              placeholder={'first name'}
              tintColor={MKColor.Teal} />

            <MKTextField
              value={this.props.last_name}
              onChangeText={this.props.formUpdate({props: 'last_name', value})}
              textInputStyle={styles.fieldStyles}
              placeholder={'last name'}
              tintColor={MKColor.Teal} />

            <MKTextField
              value={this.props.phone}
              onChangeText={this.props.formUpdate({props: 'phone', value})}
              textInputStyle={styles.fieldStyles}
              placeholder={'phone'}
              tintColor={MKColor.Teal} />

            <MKTextField
              value={this.props.email}
              onChangeText={this.props.formUpdate({props: 'email', value})}
              textInputStyle={styles.fieldStyles}
              placeholder={'email'}
              tintColor={MKColor.Teal} />
            
            <MKTextField
              value={this.props.company}
              onChangeText={this.props.formUpdate({props: 'company', value})}
              textInputStyle={styles.fieldStyles}
              placeholder={'company'}
              tintColor={MKColor.Teal} />

            <MKTextField
              value={this.props.project}
              onChangeText={this.props.formUpdate({props: 'project', value})}
              textInputStyle={styles.fieldStyles}
              placeholder={'project'}
              tintColor={MKColor.Teal} />

            <MKTextField
              value={this.props.notes}
              onChangeText={this.props.formUpdate({props: 'notes', value})}
              textInputStyle={styles.fieldStyles}
              placeholder={'notes'}
              tintColor={MKColor.Teal} />

            <View
              style={styles.addButton} >
              <AddButton onPress={this.onAddPress.bind(this)} />
            </View>
          </View>
        </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  const { first_name, last_name, phone, email, company, project, notes } = state
  return {
    first_name, last_name, phone, email, company, project, notes
  }
}
export default connect(mapStateToProps, actions)(AddPerson)