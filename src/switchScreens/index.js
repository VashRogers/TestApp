import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Switcher(props){

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}
                onPress={() => props.navigation.navigate('DatePicker')}
            >
                <Text style={styles.btnText}>Go to DatePicker</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.btn}
                onPress={() => props.navigation.navigate('Moment')}
            >
                <Text style={styles.btnText}>Go to UsandoMoment</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
                onPress={() => props.navigation.navigate('Local')}
            >
                <Text style={styles.btnText}>Go to Local</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}
                onPress={() => props.navigation.navigate('ContextTeste')}
            >
                <Text style={styles.btnText}>Go to teste de Context</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
        btn:{
            backgroundColor:'green',
            padding:8,
            borderRadius:5,
            borderWidth:2,
            borderColor:'black',
            margin:10
        },
            btnText:{
                color:'white',
                fontWeight:'bold'
            },
})
