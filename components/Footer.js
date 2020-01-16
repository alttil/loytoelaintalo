import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = props => {
    return(
        <View style={styles.footer}>
            <Text style={styles.footerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerTitle: {
        color: 'black',
        fontSize: 18
    }
});

export default Footer;