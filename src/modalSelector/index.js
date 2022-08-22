import React, { useState } from 'react'
import { View, Text, StyleSheet, Modal, TouchableOpacity, SafeAreaView } from 'react-native'

export default function ModalSelector (props) {
    const [ chooseData, setChooseData ] = useState('Select item...');
    const [ isModalVisible, setIsModalVisible ] = useState(false);

    const changeModalVisibility = (bool) => {
        setIsModalVisible(bool)
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity}
                onPress={() => changeModalVisibility(true)}
            >
                <Text style={styles.text}>{chooseData}</Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisible}
                onRequestClose={() => changeModalVisibility(false)}
            >

            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        padding:20,
    },
    text:{
        marginVertical:20,
        fontSize:25,

    },
    touchableOpacity:{
        backgroundColor:'orange',
        alignSelf:'stretch',
        paddingHorizontal:20
    },


})