import React, { useCallback, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { debounce } from "lodash";

export default function DebounceScreen (props) {
    
    // const debounce = (func, wait) => {
    // // console.log('Entra? antes retorno')
    //     let timer = null;
    //     return function () {
    //         console.log('dentro do retorno')
    //         clearTimeout(timer);
    //         timer = setTimeout(func, wait);
    //     }
    // }
    const debounceExe = debounce(() => greetings(), 2000)
    
    const handlePress = () => {
        debounceExe()
    }
    
    const greetings = () => {
        Alert.alert('Essa merda funcionará ahora??????????')
    }
    
    return(
        <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
            
            
            <TouchableOpacity 
                style={styles.btn}
                onPress={handlePress}
            >
                <Text style={styles.text}>Debounce Porra!!!</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({

    btn:{
        backgroundColor:'green',
        padding:16,
        borderRadius:8
    },
    text:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    }

})