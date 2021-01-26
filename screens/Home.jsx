import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const Home = () => {
    return (
        <View style={tailwind('p-4')}>
            <Text style={tailwind('text-lg')}>Home screen</Text>
        </View>
    )
}

export default Home
