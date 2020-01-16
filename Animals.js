import React, { Component} from 'react';
import {  FlatList, StyleSheet, Text, View, List, ListItem, ScrollView, Button } from 'react-native';


export default class Animals extends Component {
   render() {
        return (
            <View style={styles.screen}>
                <View style={styles.animalContainer}>
                <FlatList
                    data={[
                        {
                            id: 1,
                            type: "koira",
                            breed: "saksanpaimenkoira",
                            gender: "uros",
                            description: "neljä tassua ja häntä",
                            extraInfo: "Nähty juoksemassa edellisenä päivänä samassa paikassa",
                            discoveryLocation: "katu 7",
                            time: "15.00",
                            discoveryDate: "15.04.2019",
                            pickUpLocation: "katu 7a",
                            firstName: "maija",
                            lastName: "meikalainen",
                            phone: "0401234567",
                            email: "maija@meikalainen.fi"        
                        },
                        {
                            id: 2,
                            type: "koira",
                            breed: "kiinanharjakoira",
                            gender: "uros",
                            description: "neljä tassua ja häntä, naku",
                            extraInfo: "Kaivanut kuoppia kiinniottajan pihassa viime viikolla",
                            discoveryLocation: "tie 10",
                            time: "11.15",
                            discoveryDate: "22.02.2019",
                            pickUpLocation: "tie 10a",
                            firstName: "matti",
                            lastName: "meikalainen",
                            phone: "0401234567",
                            email: "matti@meikalainen.fi"        
                        },
                        {
                            id: 3,
                            type: "koira",
                            breed: "kultainennoutaja",
                            gender: "naaras",
                            description: "neljä tassua ja häntä",
                            extraInfo: "Käynyt viime viikolla päivittäin pihalla nuuhkimassa pensaita",
                            discoveryLocation: "kuja 52",
                            time: "22.30",
                            discoveryDate: "01.04.2019",
                            pickUpLocation: "kuja 53b",
                            firstName: "esko",
                            lastName: "esimerkki",
                            phone: "0507654321",
                            email: "esko@esimerkki.fi"        
                        },
                    
                    ]}
                    renderItem={({item}) => 
                    <View style={styles.animalContainer}> 
                        <Text>Häkkipaikka (id): {item.id + "\n"}</Text> 
                        <Text>Laji: {item.type + "\n"}</Text> 
                        <Text>Rotu: {item.breed + "\n"}</Text>
                        <Text>Sukupuoli: {item.gender + "\n"}</Text> 
                        <Text>Tuntomerkit: {item.description + "\n"}</Text>
                        <Text>Lisätiedot: {item.extraInfo + "\n"}</Text>  
                        <Text>Löytöpaikka: {item.discoveryLocation + "\n"}</Text> 
                        <Text>Löytoaika: {item.time + "\n"}</Text>
                        <Text>Löytopaiva: {item.discoveryDate + "\n"}</Text> 
                        <Text>Noutopaikka: {item.pickUpLocation + "\n"}</Text> 
                        <Text>Etunimi: {item.firstName + "\n"}</Text> 
                        <Text>Sukunimi: {item.lastName + "\n"}</Text> 
                        <Text>Puhelin: {item.phone + "\n"}</Text> 
                        <Text>Sähköposti: {item.email + "\n"}</Text>
                    </View>}
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    animalContainer: {
        padding: 10,
        marginVertical: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    textContainer: {
        alignItems: 'center',
        fontSize: 20
      },
      
})

//export default Animals
