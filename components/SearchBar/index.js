import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import { Input, Button, DatePicker } from 'native-base';

var searchValue =null;

const onChange = (value) =>
{
    searchValue = value;

    if(value === 'Train')
        searchValue = 0;
    if(value === 'Bus')
        searchValue = 1;
};

const SearchBar = ({onPress}) => {

    const formatChosenDate = (date) => [date.getDate(), '/', date.getMonth() + 1, '/', date.getFullYear()];

    return (
        <View style={styles.SearchBarDiv}>

            <View style={styles.SearchItemDiv}>
                <Input
                        onChangeText={text => onChange(text)}
                        placeholder='Eg: Train Or  Bus?'
                        placeholderTextColor={'#DAE1E7'}
                        keyboardType='default' />
                <Button primary style={styles.itembtn} onPress={() => onPress('typeId',searchValue)}><Text> Mode </Text></Button>
            </View>
        
            <View style={styles.SearchItemDiv}>
                <DatePicker
                        style={styles.item}
                        placeHolderText={'Select departure Time'}
                        defaultDate={new Date()}
                        minimumDate={new Date(2000, 1, 1)}
                        maximumDate={new Date(2050, 12, 31)}
                        onDateChange={newDate => onChange(newDate)}
                        locale={'en'}
                        modalTransparent={false}
                        animationType={'fade'}
                        androidMode={'calendar'}
                        textStyle={{ color: '#000' }}
                        placeHolderTextStyle={{ color: '#DAE1E7' }}
                        formatChosenDate={formatChosenDate}
                    />
                <Button primary style={styles.itembtn} onPress={() => onPress('departureTimeMin',searchValue)}><Text> After The Time </Text></Button>
                <Button primary style={styles.itembtn} onPress={() => onPress('departureTimeMax',searchValue)}><Text> before The Time </Text></Button>
            </View>
        </View>  
    )   

};


export default SearchBar;