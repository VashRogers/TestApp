import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import axios from 'axios';

const response = [
    {
        id: 1,
        nome: "Semanal",
        descricao: "teste",
        tipo_horario: 1,
        tipo_tolerancia: 1,
        tolerancia: 15,
        hours: [
            {
                id: 1,
                hora: "07:00:00",
                horario_id: 1,
                dia_semana: 0,
                ordem: 0
            },
            {
                id: 2,
                hora: "11:00:00",
                horario_id: 1,
                dia_semana: 0,
                ordem: 1
            },
            {
                id: 3,
                hora: "13:00:00",
                horario_id: 1,
                dia_semana: 0,
                ordem: 2
            },
            {
                id: 4,
                hora: "17:00:00",
                horario_id: 1,
                dia_semana: 0,
                ordem: 3
            }
        ]
    }
]

const responseTeste = [
    {
        id: 0,
        texto:'Teste de Draggable',
        desc:'Descrição curta pra caceta',
        background:'red'
    },
    
    {
        id: 1,
        texto:'Teste de Draggable2',
        desc:'Descrição longa lorem ipsum sit dolor amet, dolor, lit, zapdos, pokemon radpidfire. Je sui Madmouseille, tomato juice; song of madness',
        background:'blue'
    },
    
    {
        id: 2,
        texto:'TerraFirmação',
        desc:'Terra transform the earth on the table in the react native app',
        background:'green'
    },
   
    
]

export default function ManipulandoArray (){

    const [ mainData, setMainData ] = useState(response)
    const [ data, setData ] = useState(responseTeste)
    const [newDateTeste, setNewDateTeste] = useState([])

    const [ auxState, setAuxState ] = useState(mainData[0].hours)

    

    const createViewItemsDrag = useCallback(() => {
        const data = []
        response[0]?.hours.forEach((element, otherKey) => {
           const isElement = responseTeste.find((_, key) => key === element.ordem) || false
          
           if(isElement){
             return data.push(isElement)
           } 
            
        //    data.push({ id: otherKey, texto: null , desc: null,background: null })
           return setNewDateTeste(data)
        })

    }, [])



    useEffect(() => { createViewItemsDrag()}, [])


  
    // console.log(mainData[0].hours
    // console.log(auxState)
    const renderItem = ({item}) => {
    
        return(
            <View style={styles.field}> 

                <Text>{item.desc}</Text>
            </View>
        )
    }

    return(
        <View>
            <FlatList 
               data={newDateTeste}
               keyExtractor={item => item.id}
               renderItem={renderItem}
            />

            
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    field:{
        backgroundColor:'red',
        padding:25,
        borderRadius:4,
        marginVertical:10,
    },
})