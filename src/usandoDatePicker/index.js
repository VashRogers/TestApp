import react, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome } from '@expo/vector-icons';
import { Context } from "../Provider";


export default function UsandoDatePicker (props){

    const {test} = useContext(Context);

    const[ mainDate, setMainDate ] = useState(new Date())
    const[ date1, setDate1 ] = useState(new Date());
    const[ date2, setDate2 ] = useState()
    const[ mode, setMode ] = useState('date');
    const[ isVisible, setIsVisible ] = useState(false);
    
    
    const showDatePicker = () => {
        setIsVisible(true)
    }
    const onChange = (event, selectedDate) => {
        const auxCurrentDate = (selectedDate)
        const currentDate = auxCurrentDate.toLocaleString()
        setIsVisible(false);
        setDate1(currentDate);
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity
                onPress={showDatePicker}
            >
                <FontAwesome name="calendar" size={24} color="blue" />
            </TouchableOpacity>
            {isVisible && (
                <DateTimePicker 
                    testID="dateTimePicker do Roger"
                    value={mainDate}
                    mode={mode}
                    onChange={onChange}
                />
            )}
            <View style={{height: 25}}/>
            <Text>Date 1:</Text>
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