import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, FlatList, StyleSheet, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import axios from 'axios';



export default function TesteApi() {
  const [dado, setDado] = useState([])
  const [load, setLoad] = useState(false)


  const loadData = async () => {
    const req = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1%27`);
    const response = req.data;
    return response
  }

  const onPress = async () => {
    setLoad(true)
    const resposta = await loadData()
    testeCallback(resposta)
  }
  const testeCallback = useCallback((response) => {
    setDado(Object.values(response))
    setLoad(false)
  })


  return(
    <View style={styles.flatListContainer}>
        <TouchableOpacity
            style={{ borderWidth:1, padding:10, margin:10, borderRadius:5, backgroundColor:'cyan' }}
            onPress={onPress}  
        >
          <Text>Consumo de Array</Text>
        </TouchableOpacity>
        
        
            <FlatList 
                data={dado}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    return(
                        <View style={styles.renderStyle}>
                            
                            <Text>{item.id}</Text>
                        </View>
                    )
                }}
                refreshControl={
                    <RefreshControl refreshing={load} onRefresh={onPress}/>
                }
            />
        </View>
        
   
  )
}


const styles = StyleSheet.create({
    flatListContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    renderStyle:{
        margin:15,
    },
})