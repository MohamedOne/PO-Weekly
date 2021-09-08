import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const PlaceHolder = () => {

    return (
        <View style={{ flex: 1, alignContent: 'center', maxWidth: 190 }}>
            <Text style={{fontSize: 22}}>President's info will show here!</Text>
        </View>
    )

}

const DetailedView = (props: any) => {

    const currPresident = useSelector((state: any) => state.presidentObject);
    const hasPresident = useSelector((state: any) => state.hasPresident)

    return (

        <View style={styles.encasingView}>
            {hasPresident? 
                    <View style={styles.encasingText}>
                    <Text style={styles.name}>{currPresident.name}</Text>
                    <Text style={styles.age}>Age: {currPresident.age}</Text>
                    <Text style={styles.party}>Party: {currPresident.party}</Text>
                </View> 
                :
                <PlaceHolder />   
        }


        </View>
    )
}
export default DetailedView

const styles = StyleSheet.create({
    encasingView: {
        flex: 1,
        alignContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 9
    },
    name: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    age: {
        fontSize: 19
    },
    party: {
        fontSize: 19
    },
    encasingText: {

    }
})