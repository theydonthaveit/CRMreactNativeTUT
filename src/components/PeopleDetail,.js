import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcon'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import * as actions from '../actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 380,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 30
  }
});

class PeopleDetail extends Component<{}> {
    handleClick = (link) => {
        Linking
            .canOpenURL(link)
            .then(supported => {
                if (supported) {
                    Linking.openURL(link)
                }
                else {
                    console.log('cant open URI: ' + link)
                }
            })
    }

    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false} >
                <Image
                    source={{uri: 'http://cdn.pcwallart.com/images/light-blue-background-wallpaper-1.jpg'}}
                    style={[theme.cardImageStyle, styles.image]} />
                <EvilIcon
                    name={'user'}
                    size={100}
                    style={styles.icon} />
                <SimpleIcon
                    name={'close'}
                    size={30}
                    style={styles.closeIcon}
                    onPress={() => this.props.noneSelected()} />
                <Text
                    style={[theme.cardTitleStyle, styles.title1]}
                    >
                    {this.props.person.first_name}
                    {this.props.person.last_name}
                </Text>
                <Text
                    style={[theme.cardTitleStyle, styles.title2]}
                    >
                    from {this.props.person.company}
                </Text>
                <View
                    style={styles.textArea} >
                    <MaterialIcon
                        name={'phone'}
                        size={40}
                        style={styles.textIcons} />
                    <Text
                        style={theme.cardContentStyle}
                        >
                        {this.props.person.phone}
                    </Text>
                </View>
                <View
                    style={styles.textArea} >
                    <MaterialIcon
                        name={'email'}
                        size={40}
                        style={styles.textIcons} />
                    <Text
                        style={theme.cardContentStyle}
                        >
                        {this.props.person.email}
                    </Text>
                </View>
                <View
                    style={styles.textArea} >
                    <MaterialIcon
                        name={'assignment'}
                        size={40}
                        style={styles.textIcons} />
                    <Text
                        style={theme.cardContentStyle}
                        >
                        {this.props.person.project}
                    </Text>
                </View>
                <View
                    style={styles.textArea} >
                    <MaterialIcon
                        name={'mode-edit'}
                        size={40}
                        style={styles.textIcons} />
                    <Text
                        style={theme.cardContentStyle}
                        >
                        {this.props.person.notes}
                    </Text>
                </View>
                <View
                    style={styles.actionArea} >
                    <TouchableOpacity
                        onPress={() => {this.handleClick(`tel:${this.props.person.phone}`)}} >
                        <Image
                            source={{uri: 'http://free-icon-rainbow.com/i/icon_05985/icon_059850.svg'}}
                            style={styles.actionImage} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.people,
        personSelected: state.personSelected
    }
}

export default connect(mapStateToProps, actions)(PeopleDetail)
