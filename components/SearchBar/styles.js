import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    SearchBarDiv: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    SearchItemDiv: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'baseline',
        width: '60%',
    },
    item:{
        width: '30%',
        marginLeft: 20,
        marginTop: 20,
    },
    itembtn:{
        width: '20%',
        marginLeft: 20,
    },
})

export default styles;