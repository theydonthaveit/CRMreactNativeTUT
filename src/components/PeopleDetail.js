import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { connect } from 'react-redux'
import { getTheme } from 'react-native-material-kit'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import * as actions from '../actions'


const theme = getTheme()

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        paddingBottom: 20,
        marginBottom: 20,
        borderColor: 'lightgrey',
        borderWidth: 0.5
    },
    title1: {
        top: 10,
        left: 80,
        fontSize: 24
    },
    title2: {
        top: 35,
        left: 82,
        fontSize: 18
    },
    image: {
        flex: 0,
        height: 100,
        width: 333,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        left: 295,
        color: 'purple',
        backgroundColor: 'transparent'
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)'
    },
    textArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        width: 200
    },
    textIcons: {
        color: '#26a69a'
    },
    actionArea: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
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
                <View
                    style={[theme.cardStyle, styles.card]} >
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
                                source={{uri: 'http://www.clker.com/cliparts/0/f/c/2/1195445181899094722molumen_phone_icon.svg.hi.png'}}
                                style={styles.actionImage} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {this.handleClick(`sms:${this.props.person.phone}`)}} >
                            <Image
                                source={{uri: 'https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-sms-4.png'}}
                                style={styles.actionImage} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {this.handleClick(`mailto:${this.props.person.email}`)}} >
                            <Image
                                source={{uri: 'https://pbs.twimg.com/profile_images/378800000867648452/OD4xS4Gx.png'}}
                                style={styles.actionImage} />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={styles.actionArea} >
                        <Text>call</Text>
                        <Text>sms</Text>
                        <Text>email</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        person: state.personSelected
    }
}

export default connect(mapStateToProps, actions)(PeopleDetail)
