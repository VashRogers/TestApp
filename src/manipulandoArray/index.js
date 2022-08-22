import React, { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import axios from 'axios';

//response == Schedule
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
//responseTeste == get-employees-punches
 const responseTeste = [
    {
        "id": 5,
        "funcionario_id": 1,
        "horario_id": 1,
        "hora": "08:30:00",
        "data": "2022-07-18",
        "dispositivo": "Operational System: android, Version: 32",
        "localizacao": "{\"latitude\": -22.2239, \"longitude\": -54.8057667 }",
        "justificativa": null
    },
    {
        "id": 6,
        "funcionario_id": 1,
        "horario_id": 1,
        "hora": "08:30:00",
        "data": "2022-07-18",
        "dispositivo": "Operational System: android, Version: 32",
        "localizacao": "{\"latitude\": -22.2239, \"longitude\": -54.8057667 }",
        "justificativa": null
    },
    // {
    //     "id": 7,
    //     "funcionario_id": 1,
    //     "horario_id": 1,
    //     "hora": "08:30:00",
    //     "data": "2022-07-18",
    //     "dispositivo": "Operational System: android, Version: 32",
    //     "localizacao": "{\"latitude\": -22.2239, \"longitude\": -54.8057667 }",
    //     "justificativa": null
    // },
    // {
    //     "id": 8,
    //     "funcionario_id": 1,
    //     "horario_id": 1,
    //     "hora": "08:50:00",
    //     "data": "2022-07-18",
    //     "dispositivo": "Operational System: android, Version: 32",
    //     "localizacao": "{\"latitude\": -22.2239, \"longitude\": -54.8057667 }",
    //     "justificativa": null
    // },
    // {
    //     "id": 9,
    //     "funcionario_id": 1,
    //     "horario_id": 1,
    //     "hora": "10:41:00",
    //     "data": "2022-07-18",
    //     "dispositivo": "Operational System: android, Version: 32",
    //     "localizacao": "{\"latitude\": -22.2239, \"longitude\": -54.8057667 }",
    //     "justificativa": null
    // },
    // {
    //     "id": 10,
    //     "funcionario_id": 1,
    //     "horario_id": 1,
    //     "hora": "11:01:00",
    //     "data": "2022-07-18",
    //     "dispositivo": "Operational System: android, Version: 32",
    //     "localizacao": "{\"latitude\": -22.2239, \"longitude\": -54.8057667 }",
    //     "justificativa": null
    // },
    // {
    //     "id": 11,
    //     "funcionario_id": 1,
    //     "horario_id": 1,
    //     "hora": "11:22:00",
    //     "data": "2022-07-18",
    //     "dispositivo": "Operational System: android, Version: 32",
    //     "localizacao": null,
    //     "justificativa": null
    // },
    // {
    //     "id": 12,
    //     "funcionario_id": 1,
    //     "horario_id": 1,
    //     "hora": "13:06:00",
    //     "data": "2022-07-18",
    //     "dispositivo": "Operational System: android, Version: 32",
    //     "localizacao": "{\"latitude\": -22.2239, \"longitude\": -54.8057667 }",
    //     "justificativa": null
    // },
    // {
    //     "id": 13,
    //     "funcionario_id": 1,
    //     "horario_id": 1,
    //     "hora": "14:05:00",
    //     "data": "2022-07-18",
    //     "dispositivo": "Operational System: android, Version: 32",
    //     "localizacao": "{\"latitude\": -22.2239, \"longitude\": -54.8057667 }",
    //     "justificativa": null
    // }
]


export default function ManipulandoArray (){

    const [ schedule, setSchedule ] = useState(response)
    const [ punches, setPunches ] = useState(responseTeste)
    const [newDateTeste, setNewDateTeste] = useState([])

    // const [ auxState, setAuxState ] = useState(mainData[0].hours)

    

    const arrayOfOrganizedPoints = useMemo(() => {
        const arr = []

        const { hours: fieldHoursArray }= schedule[0];

        const punchesArray = punches;

        fieldHoursArray.forEach((element, otherKey) => {

           const thereIsPoint = punchesArray.find((_, key) => key === element.ordem);

           if(thereIsPoint){

            return arr.push(thereIsPoint);

           } 

            
            // return console.log('aqui seria a logica para adicionar o campo vazio que falta preencher'); 
            return arr.push({teste: '', id: otherKey , outros: ''});        

          })

        return arr

    }, [schedule, punches])



    useEffect(() => {       
        setNewDateTeste(arrayOfOrganizedPoints)
    }, [])


  
    // console.log(mainData[0].hours
    // console.log(auxState)
    const renderItem = ({item}) => {
    
        return(
            <View style={styles.field}> 

                <Text>{item.hora}</Text>
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