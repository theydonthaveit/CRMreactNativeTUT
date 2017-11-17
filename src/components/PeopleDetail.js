import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { connect } from 'react-redux'
import { getTheme } from 'react-native-material-kit'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit'

import UpdatePerson from './UpdatePerson'
import DetailsView from './DetailsView'

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
    },
    editIcon: {
        color: '#26a6e4',
    },
    sections: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingLeft: 10,
        width: 150
    },
    deleteIcon: {
        color: '#e9a69a'
    },
    editDeleteArea: {
        flexDirection: 'row',
        paddingRight: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(211,211,211,0.3)',
        marginBottom: 10
    }
});

class PeopleDetail extends Component<{}> {
    renderDetails() {
        if ( this.props.toUpdate ) {
            return <UpdatePerson />
        }
        else {
            return <DetailsView />
        }
    }

    render() {
        return (
            <View>
                {this.renderDetails()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        toUpdate: state.toUpdate
    }
}

export default connect(mapStateToProps, actions)(PeopleDetail)
