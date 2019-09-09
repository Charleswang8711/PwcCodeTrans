 import React from 'react'
 import styles from './styles';
 import { View,Text } from 'react-native';
const TransItem = ({item} ) =>{

    return (
            <View  style={styles.listItemContainer}>
                {item && item.result.transportation.modes.map(mode => (
                    <Text style={styles.ItemHeader}>route:{mode.route} name:{mode.name} departureTime:{mode.departureTime}</Text>
                ))}
            </View>
    )
}

export default TransItem;


