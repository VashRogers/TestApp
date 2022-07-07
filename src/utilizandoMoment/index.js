import react, { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import moment from "moment";
import axios from "axios";
import dayjs from "dayjs";

export default function UsandoMoment (props){

  const[ dataState, setDataState ] = useState('');

  const horaAtual = moment().format('DD/MM/YYYY hh:mm a')
  const dataWDayjs = dayjs().format('DD/MM/YYYY hh:mm a').t
  const dataWjsDate = new Date()

  const onPress = async () => {
    const data = await time()
    const dayDate = data.datetime
    const dataFormatada = dayjs(dayDate).format('DD/MM/YYYY HH:mm:ss a')
    setDataState(dataFormatada)
    console.log(dataState)
    // console.log(dataFormatada)
    // console.log(dataWjsDate)

  }

  const time = async () => {
    try{
      const req = await axios.get(`https://worldtimeapi.org/api/timezone/America/Campo_Grande`);
      const res = req.data

      return res;
    }catch(e){
      console.log(e, 'erro de requisição');
    }
  }


  return(
    <View style={styles.container}>
      <Text>Olha pro Console, ANIMAL!</Text>
      <Text>Hora Atual: {horaAtual}</Text>
      <Text>Data com DayJs: {dataWDayjs}</Text>
      
      <TouchableOpacity 
        style={{margin:25, backgroundColor:'gray'}}
        onPress={onPress}
      >
        <Text>Aperte para consumir api de Horario</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },

})