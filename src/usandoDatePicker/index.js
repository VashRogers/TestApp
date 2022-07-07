import react, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import moment from "moment";
import dayjs from "dayjs";
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { Context } from "../Provider";


export default function UsandoDatePicker (props){

    const {test} = useContext(Context);

    const[ date1, setDate1 ] = useState(moment().toDate());
    const[ date2, setDate2 ] = useState(dayjs().toDate());
    const[ date1Formatted, setDate1Formatted ] = useState('');
    const[ date2Formatted, setDate2Formatted ] = useState('');
    const[ mode, setMode ] = useState('date');
    const[ showDate1, setShowDate1 ] = useState(false);
    const[ showDate2, setShowDate2 ] = useState(false);
    
    useEffect(() => {
        setDate1Formatted(moment(date1).format('DD/MM/YYYY'))
    }, [date1])

    useEffect(() => {
        setDate2Formatted(dayjs(date2).format('DD/MM/YYYY'))
    }, [date2])

    
    const showDatePicker1 = () => {
        setShowDate1(true)
    }
    const onChangeDate1 = (event, selectedDate) => {
        const currentDate = (selectedDate)
        setShowDate1(false);
        setDate1(currentDate);
    }

    const showDatePicker2 = () => {
        setShowDate2(true)
    }
    const onChangeDate2 = (event, selectedDate) => {
        const currentDate = (selectedDate)
        setShowDate2(false);
        setDate2(currentDate);
    }

    return(
        <View style={styles.container}>
            <View style={styles.dateInput1}>
                <Text>Data1: {date1Formatted} </Text>
                <TouchableOpacity 
                    onPress={showDatePicker1}
                >
                    <FontAwesome name="calendar" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ height:20 }}/>
            <View style={styles.dateInput1}>
                <Text>Data2: {date2Formatted} </Text>
                <TouchableOpacity 
                    onPress={showDatePicker2}
                >
                    <FontAwesome name="calendar" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {showDate1 && (
                <DateTimePicker 
                    testID="dateTimePicker1"
                    value={date1}
                    mode={mode}
                    onChange={onChangeDate1}
                />
            )}

            {showDate2 && (
                <DateTimePicker 
                    testID="dateTimePicker2"
                    value={date2}
                    mode={mode}
                    onChange={onChangeDate2}
                    style={{ backgroundColor:'black' }}
                />
            )}
            
        </View>
    )
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  },
    dateInput1:{
        borderWidth:1,
        width:'70%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
        input:{
            backgroundColor:'white',
            width:'50%',
            margin:5
        },
})