import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import DetailedView from './DetailedView';
import ItemCard from './ItemCard';

const MasterDetail = (props: any) => {

    const listOPresidents = [
        {
            id: "101",
            name: "Abraham Lincoln",
            age: 57,
            party: "Republican"
        },
        {
            id: "102",
            name: "Franklin Roosevelt",
            age: 63,
            party: "Democrat"
        },
        {
            id: "103",
            name: "Herbert Hoover",
            age: 72,
            party: "Democrat"
        },
        {
            id: "104",
            name: "Ronald Reagan",
            age: 59,
            party: "Republican"
        }
    ]

    return(
        <View style={styles.outerEncasingView}>
            <View style={styles.leftView}>
                <FlatList 
                    data={listOPresidents}
                    renderItem={({item}) => <ItemCard data={item}/>}
                />
            </View>
            <View style={styles.rightView}>
                <DetailedView/>
            </View>
        </View>
    )
}
export default MasterDetail

const styles = StyleSheet.create({
    outerEncasingView: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        paddingTop: 100
    },
    leftView: {
        alignContent: 'center',
        maxWidth: 300
    },
    rightView: {
        alignContent: 'center',
        maxWidth: 300

    },
    name: {
        fontWeight: 'bold',
        fontSize: 22
    }
})