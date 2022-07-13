import dayjs from "dayjs";
import react, { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, TextInput, FlatList, Modal } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const resp = [
    {id:1, hora:'18:25'},
    {id:2, hora:'17:45'},
    {id:3, hora:'08:20'},
]

export default function EditFLatlistWithDateTimePickerModal (){

    const[ data, setData ] = useState(resp)
    const[ isRender, setIsRender ] = useState(false)
    const[ isModalVisible, setIsModalVisible ] = useState(false)
    const[ inputText, setInputText ] = useState();
    const[ editItem, setEditItem ] = useState();

    const onPressItem = (item) => {
        setIsModalVisible(true)
        setInputText(item.hora)
        setEditItem(item.id)
        console.log(data)
    }

    const handleEditItem = (formatedDate) => {
        const newData = data.map(item => {
            if(item.id == editItem){
                item.hora = formatedDate;
                return item
            }
            return item;
        })
        setData(newData)
        setIsRender(!isRender)
        console.log(data)
    }

    const onHandleConfirm = (date) => {
        let formatedDate = dayjs(date).format('HH:mm')
        handleEditItem(formatedDate)
        setIsModalVisible(false)//close modal
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
                extraData={isRender}
            />
            <DateTimePickerModal
                isVisible={isModalVisible}
                mode="time"
                onConfirm={onHandleConfirm}
                onCancel={() => setIsModalVisible(false)}
            />
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