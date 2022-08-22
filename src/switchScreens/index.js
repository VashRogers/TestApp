import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Context } from "../Provider";

export default function Switcher(props){

    const { count, setCount } = useContext(Context)

    return(
        <ScrollView >
            <View style={styles.container}>
                <Text>{count}</Text>
                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('DatePicker')}
                >
                    <Text style={styles.btnText}>Go to DatePicker</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('Moment')}
                >
                    <Text style={styles.btnText}>Go to UsandoMoment</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('Local')}
                >
                    <Text style={styles.btnText}>Go to Local</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('ContextTeste')}
                >
                    <Text style={styles.btnText}>Go to teste de Context</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('TesteDeApi')}
                >
                    <Text style={styles.btnText}>Go to teste de API</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('EditFlatlist')}
                >
                    <Text style={styles.btnText}>Go to Edit FlatList</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('EditFlatlistW/AnotherDatePicker')}
                >
                    <Text style={styles.btnText}>Go to Edit FlatList com outro DateTimePickerModal</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('ManipulandoArray')}
                >
                    <Text style={styles.btnText}>Go to Manipulação de Array</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('TestandoEncode')}
                >
                    <Text style={styles.btnText}>Go to Teste Encode</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('TestandoPushNotification')}
                >
                    <Text style={styles.btnText}>Go to Teste Push Notification</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}
                    onPress={() => props.navigation.navigate('TesteComponenteClasse')}
                >
                    <Text style={styles.btnText}>Go to Teste TelaClassComponent e Teste de route params</Text>
                </TouchableOpacity>

            </View>
            
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
        btn:{
            backgroundColor:'green',
            padding:8,
            borderRadius:5,
            borderWidth:2,
            borderColor:'black',
            margin:10
        },
            btnText:{
                color:'white',
                fontWeight:'bold'
            },
})
