import React, { useState } from 'react'
import { FlatList, Text, View, TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
import { globalStyles } from '../styles/global'

const Home = ({ navigation }) => {

    const [reviews, setReviews] = useState([
        {id: 1, title: "Zelda, breath of fresh air", rating: 5, body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"},
        {id: 2, title: "Gotta catch them all again", rating: 5, body: "Lorem Ipsum has been the industry's standard dummy text ever since."},
        {id: 3, title: 'Not so "Final" Fantasy', rating: 5, body: "Lorem Ipsum has been the industry's standard."},
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={globalStyles.review}>
                        <TouchableOpacity onPress={() => navigation.navigate('Details', {item})} >
                                <Text style={globalStyles.titleText}>{item.title}</Text>
                        </TouchableOpacity>
                        <Text style={globalStyles.paragraph}>{item.body}</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default Home

