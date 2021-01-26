import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const ReviewDetails = () => {
    return (
        <View style={tailwind('p-4')}>
            <Text style={tailwind('text-lg')}>Review details screen</Text>
        </View>
    )
}

export default ReviewDetails