import dayjs from "dayjs";
import react, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { Context } from "../Provider";

export default class TesteClasseParam extends Component {
    static contextType = Context

    constructor(props){
        super(props)
        this.state = {
            nome:'',
            ano:dayjs().format('DD/MM/YYYY'),
            randomNumber:15245
        }
        // this.addOneMore = this.addOneMore.bind(this)
    }

    render(){
        const { count, setCount } = this.context
        return(
            <View style={styles.container}>
                <Text>Testando Componentes de classe e Passando Parâmetros com o Navigator</Text>
                <Text>{this.context.test}</Text>
                <TextInput 
                    style={styles.textInput}
                    value={this.state.nome}
                    onChangeText={(text) => this.setState({ nome:text })}  
                    placeholder="Digite algo para mudar o estado de this.state.nome"
                    multiline={true}
                />
                <Text>O que mostra quando this.state.nome é atualizado: </Text>
                <Text>{this.state.nome}</Text>
                <TouchableOpacity style={styles.btnOneMore}
                    onPress={this.addOneMore.bind(this)}
                >
                    <Text style={{ color:"white" }}>Adicione +1 ao randomNumber</Text>
                </TouchableOpacity>
                <Text>randomNumber: {this.state.randomNumber}</Text>
                
                <View style={{ height:45 }}/>
                
                <TouchableOpacity style={styles.navBtn}
                    onPress={() => this.props.navigation.navigate('TesteParams', { nome:this.state.nome, ano:this.state.ano, randomNumber:this.state.randomNumber })}
                >
                    <Text>Ir para próxima Tela passando Parametros!</Text>
                </TouchableOpacity>
            </View>
        )
    }

    addOneMore(){
        const { count, setCount } = this.context
        setCount(count + 1)
        this.setState(valorAntigo => ({
            randomNumber: valorAntigo.randomNumber + 1,
        }))
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    textInput:{
        borderWidth:1,
        padding:8,
        borderRadius:5,
        margin:10
    },
    btnOneMore:{
        borderWidth:1,
        backgroundColor:'purple',
        borderRadius:5,
        padding:8
    },
    navBtn:{
        borderWidth:1,
        backgroundColor:'gold',
        borderRadius:5,
        padding:8
    },
})