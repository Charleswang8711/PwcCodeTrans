import React, { PureComponent } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';
import styles from './styles';
export default class Home extends PureComponent {
    render() {
        return (
            <View style={styles.homeDiv}>
                    <Image source={{uri: 'https://img.icons8.com/officel/100/000000/train.png'}}
                    style={styles.homePageImage} />
                    <TouchableOpacity onPress={() => Actions.TransList()}>
                        <Text style={styles.header}>Go for transport information</Text>
                    </TouchableOpacity>
            </View>     
        )
    }
}
