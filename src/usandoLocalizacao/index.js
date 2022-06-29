import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';


export default function Local (props){

    const[ origin, setOrigin ] = useState(null)
    const[ destination, setDestination ] = useState(null)

    useEffect(() => {
        
        setaPosicaoStart();

    }, [])

    const pressTouch = () => {
        pegaPosicao();
    }

    const setaPosicaoStart = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if(status == 'granted'){
            let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest, maximumAge: 10000 })
            console.log(location)
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421,
            })
        } else{
            console.log('Permissao de Localização não garantida')
        }

    }

    const pegaPosicao = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status == 'granted'){
            let local = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest, maximumAge: 10000 })

            console.log('----POSICAO----')
            console.log(local)
        } else {
            console.log('Não conseguiu achar a posição');
        }
    }

    return(
        <View style={styles.container}>
            <View style={{borderWidth:1, borderColor:'black', width:'70%', height:'50%',}}>
              <MapView style={styles.map}
                initialRegion={origin}
                showsUserLocation={true}
              >
                
              </MapView>
            </View>
            

            {/* <TouchableOpacity onPress={pressTouch}>
                <Text>Seta Posição Atual</Text>
            </TouchableOpacity> */}
        </View>
    )
};

const styles = StyleSheet.create({

    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
    },
    map:{
        width:'100%',
        height:'100%',
        borderWidth:1,
        borderColor:'black',
    },

})