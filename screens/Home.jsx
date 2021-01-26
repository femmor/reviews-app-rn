import React from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { globalStyles } from '../styles/global'

const Home = () => {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home screen</Text>
            <Text style={globalStyles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium sed nisi quos a excepturi placeat vero recusandae enim, quisquam iusto, fugiat officiis sunt suscipit debitis? Voluptate praesentium iste aliquam?</Text>
        </View>
    )
}

export default Home

