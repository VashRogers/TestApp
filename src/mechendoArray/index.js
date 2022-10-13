import { useState, useEffect, useMemo } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import dayjs from "dayjs";
import moment from "moment";

const respostaDelTest = [
    {
      "date": "2022-10-01",
      "value": [
            {
            "data": "2022-10-06",
            "dispositivo": "GÊNESIS 30",
            "funcionario_id": 81,
            "hora": "17:02:00",
            "horario_id": 1,
            "id": 7197,
            "justificativa": null,
            "localizacao": null,
            "saldo": {
                "minutos": 2,
                "tempo": "00:02",
            },
            "tipo": "saida",
            },
            {
            "data": "2022-10-05",
            "dispositivo": "GÊNESIS 30",
            "funcionario_id": 81,
            "hora": "13:00:00",
            "horario_id": 1,
            "id": 7180,
            "justificativa": null,
            "localizacao": null,
            "saldo": {
                "minutos": 0,
                "tempo": "00:00",
            },
            "tipo": "entrada",
            },
            {
            "data": "2022-10-05",
            "dispositivo": "GÊNESIS 30",
            "funcionario_id": 81,
            "hora": "11:33:00",
            "horario_id": 1,
            "id": 7171,
            "justificativa": null,
            "localizacao": null,
            "saldo": {
                "minutos": 33,
                "tempo": "00:33",
            },
            "tipo": "saida",
            },
            {
            "data": "2022-10-05",
            "dispositivo": "GÊNESIS 30",
            "funcionario_id": 81,
            "hora": "07:40:00",
            "horario_id": 1,
            "id": 7158,
            "justificativa": null,
            "localizacao": null,
            "saldo": {
                "minutos": -40,
                "tempo": "00:40",
            },
            "tipo": "entrada",
            },
        ],

    },
    {
        "date": "2022-10-08",
        "value": [
              {
              "data": "2022-10-08",
              "dispositivo": "GÊNESIS 30",
              "funcionario_id": 81,
              "hora": "17:02:00",
              "horario_id": 1,
              "id": 7197,
              "justificativa": null,
              "localizacao": null,
              "saldo": {
                  "minutos": 2,
                  "tempo": "00:02",
              },
              "tipo": "saida",
              },
              {
              "data": "2022-10-08",
              "dispositivo": "GÊNESIS 30",
              "funcionario_id": 81,
              "hora": "13:00:00",
              "horario_id": 1,
              "id": 7180,
              "justificativa": null,
              "localizacao": null,
              "saldo": {
                  "minutos": 0,
                  "tempo": "00:00",
              },
              "tipo": "entrada",
              },
              {
              "data": "2022-10-08",
              "dispositivo": "GÊNESIS 30",
              "funcionario_id": 81,
              "hora": "11:33:00",
              "horario_id": 1,
              "id": 7171,
              "justificativa": null,
              "localizacao": null,
              "saldo": {
                  "minutos": 33,
                  "tempo": "00:33",
              },
              "tipo": "saida",
              },
              {
              "data": "2022-10-08",
              "dispositivo": "GÊNESIS 30",
              "funcionario_id": 81,
              "hora": "07:40:00",
              "horario_id": 1,
              "id": 7158,
              "justificativa": null,
              "localizacao": null,
              "saldo": {
                  "minutos": -40,
                  "tempo": "00:40",
              },
              "tipo": "entrada",
              },
          ],
          
      },
]

export default function MechendoArray(props) {
    const [ resp, setResp ] = useState([]);

    useEffect(() => {
        setResp(respostaDelTest);
    }, [])


    function getRange(startDate, endDate, type) {

        let fromDate = moment(startDate)
        let toDate = moment(endDate)
        let diff = toDate.diff(fromDate, type)
        let auxRange = []
        let range = []
        for (let i = 0; i <= diff; i++) {
            auxRange.push(moment(startDate).add(i, type))
        }
        auxRange.forEach((value, index) => {
            range.push(moment(value).format('YYYY-MM-DD'));
        })
        return range
    }

    let lastDate = respostaDelTest[respostaDelTest.length - 1].date;
    
    let startDate = respostaDelTest[0].date;

    let range = getRange(startDate, lastDate, 'days');

    const setArray = () => {
        let newArr = []
        range.forEach((value, index) => {
            let thereIsDate = respostaDelTest.find((item) => item.date === value )

            if(thereIsDate){
                return newArr.push(thereIsDate);
            }

            return newArr.push({ date:value, value:'Abajur' }) //lembrar de adcionar um id aleatorio
            
        })

        return newArr;
    }
    // setArray();
    console.log('new Array: \n ', setArray());
    let items = setArray();
    // console.log('Array novo: \n', array)
    // console.log(respostaDelTest)



    return(
        <View style={styles.container}>
            <Text>Tentando inserir range de datas no maldito Array</Text>
            <View>
                {items.map((item, key) => {
                    return(
                        <Text>{item.toString()}</Text>    
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})