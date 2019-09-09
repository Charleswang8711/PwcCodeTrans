
import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    homeDiv: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#96b3f2'
    },
    homePageImage: {
        width: '5%',
        height: '10%',
    },
    header: {
        marginTop:20,
        backgroundColor: 'green',
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        ...Platform.select({
            ios: {
                fontFamily: 'Heiti SC'
            },
            android: {
                fontFamily: 'monospace'
            }
        })
    },
})

export default styles;