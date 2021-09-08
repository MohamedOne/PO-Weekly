import React from 'react'
import{ StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

const ItemCard = (props: any) => {

    const dispatch = useDispatch();

    const onPress = () => {
        dispatch({
            type: 'INSERT_PRESIDENT',
            payload: {
                presidentObject: props.data
            }
        })
    }
    return (
        <View style={styles.encasingView}>
        <TouchableOpacity 
            onPress={onPress}
        >
            <Text style={styles.name}>{props.data.name}</Text>
        </TouchableOpacity>

        </View>

    )
}
export default ItemCard

const styles = StyleSheet.create({
    name: {
        fontWeight: 'bold',
        fontSize: 22
    },
    encasingView: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth
    }
})