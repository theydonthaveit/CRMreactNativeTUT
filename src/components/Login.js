import React, { Component } from 'react'
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit'
import firebase from 'firebase'

import Loader from './Loader'

const { height, width } = Dimensions.get('window')
const formWidth = (width/10)*8

const LoginButton =
    MKButton
        .coloredButton()
        .withText('LOGIN')
        .build()

const styles = StyleSheet.create({
    errorMessage: {
        marginTop: 15,
        fontSize: 15,
        color: MKColor.Red,
        alignSelf: 'center'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 70,
        paddingBottom: 10,
        width: formWidth
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: formWidth
    },
    loginButtonArea: {
        marginTop: 20
    }
});

export default class Login extends Component<{}> {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    }

    onAuthSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }
    onAuthFailed() {
        this.setState({
            error: 'Authentication Failed',
            loading: false
        })
    }

    onButtonPress() {
        const { email, password } = this.state
        this.setState({
            error: '',
            loading: true
        })

        firebase
            .auth()
            .signInWithEmailAndPassword(
                email,
                password
            )
            .then(this.onAuthSuccess.bind(this))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(
                        email,
                        password
                    )
                    .then(this.onAuthSuccess.bind(this))
                    .catch(this.onAuthFailed.bind(this))
            })
    }

    renderLoader() {
        if (this.state.loading) {
            return <Loader size="large" />
        }
        else {
            return <LoginButton onPress={this.onButtonPress.bind(this)} />
        }
    }

    render() {
        const { errorMessage, form, fieldStyles, loginButtonArea } = styles

        return (
            <View
                style={form} >
                <Text style={styles.welcome}>
                    Login or Create an Account
                </Text>
                <MKTextField
                    text={this.state.email}
                    onTextChange={email => this.setState({email})}
                    textInputStyle={fieldStyles}
                    placeholder={'Email...'}
                    tintColor={MKColor.Teal} />
                
                <MKTextField
                    text={this.state.password}
                    onTextChange={password => this.setState({password})}
                    textInputStyle={fieldStyles}
                    placeholder={'Password...'}
                    tintColor={MKColor.Teal}
                    password={true} />
                
                <Text
                    style={errorMessage} >
                    {this.state.error}
                </Text>

                <View
                    style={loginButtonArea} >
                    {this.renderLoader()}
                </View>
            </View>
        )
    }
}