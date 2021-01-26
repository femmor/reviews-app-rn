import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const About = () => {
    return (
        <View style={tailwind('p-4')}>
            <Text style={tailwind('text-lg')}>About screen</Text>
        </View>
    )
}

export default About