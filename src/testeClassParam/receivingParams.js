import dayjs from "dayjs";
import react, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Context } from "../Provider";

export default class TesteParamsWithClass extends Component {
    static contextType = Context
    
    constructor(props, context){
        super(props)
        this.ano = this.props.route.params.ano
        this.randomNumber = this.props.route.params.randomNumber
        this.nome = this.props.route.params.nome
        this.testando = context.test
        this.count = context.count
    }

    render(){
        
        return(
            <View style={styles.container}>
                <View style={{ backgroundColor:'gray', flex:1 }}>
                    <Text>Tela feita só para mostrar se os parâmetros foram passados!</Text>
                    <Text>Ano, passado como Parâmetro: {this.ano}</Text>
                    <Text>randomNumber passado como Parâmetro: {this.randomNumber}</Text>
                    <Text>Nome passado como Parâmetro: {this.nome}</Text>
                </View>
                <View style={{ backgroundColor:'white', flex:1 }}>
                    <Text>Teste de Context API com class component:</Text>
                    <Text>{this.testando}</Text>
                    <Text>{this.count}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
})