import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { getTheme } from 'react-native-material-kit'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

const theme = getTheme()

const styles = StyleSheet.create({
    card: {
        marginTop: 20
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 48
    },
    image: {
        height: 100
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
        paddingBottom: 5,
        paddingTop: 5
    },
    icon: {
        position: 'absolute',
        top: 10,
        left: 10,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)'
    }
})

const CompanyItem = (props) => {
    return (
        <View>
            <View
                style={[theme.cardStyle, styles.card]} >
                <Image
                    source={{uri: 'http://cdn.pcwallart.com/images/light-blue-background-wallpaper-1.jpg'}}
                    style={[theme.cardImageStyle, styles.image]} />
                <MaterialIcon
                    name={'business'}
                    size={80}
                    style={styles.icon} />
                <Text
                    style={[theme.cardTitleStyle, styles.title]}>
                    {props.companies.company}
                </Text>
                {
                    props.companies.names.map((name, index) => {
                        return (
                            <Text
                                key={index}
                                style={[theme.cardActionStyle, styles.action]}>
                                {
                                    name.first_name
                                } {
                                    name.last_name
                                } - Project: {
                                    name.project
                                }
                            </Text>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default CompanyItem