import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../styles/global'

const ReviewDetails = ({ route }) => {

    const {item} = route.params

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
            <Text style={globalStyles.paragraph}>{item.body}</Text>
        </View>
    )
}

export default ReviewDetails