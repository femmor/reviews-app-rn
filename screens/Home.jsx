import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'

const Home = () => {
    return (
        <View style={tailwind('p-4')}>
            <Text style={[styles.titleText, tailwind('text-2xl')]}>Home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        fontFamily: "nunito-bold",
    }
})

export default Home

