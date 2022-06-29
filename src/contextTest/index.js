import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Context } from "../Provider";

export default function TestandoContext(props){

    const { test, setTest } = useContext(Context)
    const { count, setCount } = useContext(Context)

    return(
        <View style={styles.container}>
            <Text>Testando Context:</Text>
            <Text>{ test }</Text>
            
            <TouchableOpacity 
                onPress={()=>{
                    setTest('Foi Atualizado o Valor de test')
                }}
            >
                <Text>Incrementa Teste Context</Text>
            </TouchableOpacity>

            <View style={styles.countContainer}>
                <TouchableOpacity 
                    onPress={()=>{
                        setCount(count + 1);
                    }}
                >
                    <Text>Incrementa Contador</Text>
                </TouchableOpacity>
                <Text>{ count }</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
        countContainer:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',

        }
})
