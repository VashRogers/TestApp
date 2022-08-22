import react from "react";
import { View, Text, StyleSheet } from 'react-native'
import Iconv from "iconv-lite";
import {Buffer} from "buffer";

export default function TestandoEncode () {

    let IsoString = 'AÃ§Ã£o'
    let stringTeste = 'AĂ§ĂŁo'

    let utfString = Iconv.decode(Buffer.from("Açaí"), ('ISO-8859-2'))

    let formated = Iconv.encode(Buffer.from(utfString), ('UTF-8'))
    
    let teste = Iconv.decode(Buffer.from(formated), ('UTF-8'))

    console.log(teste)

    return(
        <View style={styles.container}>
            <Text>Testando: </Text>
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