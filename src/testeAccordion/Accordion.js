import React, {useState} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Accordion (props) {
    const[ expanded, setExpanded ] = useState(false)

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
      }
  
  

    return (
        <TouchableOpacity style={styles.container} onPress={toggleExpand}>
            <View style={styles.secondaryContainer}>
                <AntDesign name={expanded ? 'upcircleo' : 'downcircleo'} size={20} color={colors.green}  />
                <View style={{ width:'10%' }}/>
                <Text style={styles.title}>  {props.title}</Text>
            </View>
            {expanded && 
                <View style={styles.expanseContainer}>
                    {props.data}
                </View>
            }
        
        </TouchableOpacity>
            
       
    )
  }

const styles = StyleSheet.create({
    
    container:{
        backgroundColor:'white',
        margin:5,
        borderRadius:5,
        // height:50,
        borderWidth:1,
        borderColor:'#aaa',
        // flexWrap:'wrap',
    },
        secondaryContainer:{
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            padding:20,
        },

            title:{
                fontFamily:'Mulish-medium',
                fontSize: 20,
                color: 'black',
                flexWrap:'wrap'
            },
        
        expanseContainer:{
            // flexDirection:'row',
            justifyContent:'space-around',
            padding:10,
            borderWidth:1,
            borderColor:"#aaa",
            backgroundColor:'#aaa',
            margin:10,
            borderRadius:5,
        },
    
});