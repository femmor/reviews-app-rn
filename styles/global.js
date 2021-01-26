import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#eee",
        minHeight: '100%'
    },
    titleText: {
        fontFamily: "nunito-bold",
        color: "#333",
        fontSize: 28
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    review: {
        backgroundColor: "#fff",
        marginBottom: 15,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    }
})