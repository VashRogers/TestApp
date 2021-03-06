import react, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, FlatList, Modal } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from "dayjs";

const resp = [
    {id:1, hora:'18:25:00'},
    {id:2, hora:'17:45:00'},
    {id:3, hora:'08:20:00'},
]

export default function EditingFlatlist (){

    const [ data, setData ] = useState(resp)
    const [ isRender, setIsRender ] = useState(false)
    const [ isPickerVisible, setIsPickerVisible ] = useState(false)
    const [ inputDate, setInputDate ] = useState();
    const [ auxInputDate, setAuxInputDate ] = useState();
    const [ editItem, setEditItem ] = useState();

    

    const onPressItem = (item) => {
        setIsPickerVisible(true)
        setInputDate(item.hora)
        // console.log(inputDate)
        setEditItem(item.id)
        // console.log(data)
    }

    const handleEditItem = async (newId) => {
        const newData = data.map(item => {
            if(item.id == newId){
                item.hora = auxInputDate;
            }
            return item
        })
        setData(newData)
        setIsRender(!isRender)
        // console.log(data)
    }

    const onChangeTimePicker = (event, selectedDate) => {
        const slcDate = (selectedDate);
        setIsPickerVisible(false)
        if(event?.type === 'dismissed'){
          return setInputDate(inputDate)
        }
        const updateDate = dayjs(slcDate).format('HH:mm')
        // console.log(updateDate)
        setAuxInputDate(updateDate)
        console.log(auxInputDate)
        handleEditItem(editItem)
      }

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity
                style={styles.item}                
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>{item.hora}</Text>
            </TouchableOpacity>
        )
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                extraData={editItem}
            />

        {isPickerVisible && (
            <DateTimePicker 
              testID="timePicker"
              value={dayjs().toDate()}
              mode="time"
              onChange={onChangeTimePicker}
            />
          )}
            
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center'
    },
    item:{
        borderBottomWidth:1,
        borderBottomColor:'grey',
        alignItems:'center'
    },
    text:{
        marginVertical:30,
        fontSize:25,
        fontWeight:'bold',
        marginLeft:10
    },
    textInput:{
        width:'90%',
        height:70,
        borderColor:'grey',
        borderWidth:1,

    },
    modalView:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    touchableSave:{
        backgroundColor:'orange',
        paddingHorizontal:100,
        alignItems:'center',
        marginTop:20,
    },
})