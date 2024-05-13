import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";

export default ({route, navigation}) =>{
    const [food, setFood] = useState(route.params ? route.params : {})

    return (
        <View style={style.from}>
                <Text style={style.text}>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={nome => setFood({...food, nome})}
                placeholder="Informe o nome do produto"
                value={food.nome}
            />

            <Text style={style.text}>Sobre</Text>
            <TextInput
                style={style.input}
                onChangeText={sobre => setFood({...food, sobre})}
                placeholder="Descreva o produto"
                value={food.sobre}
            />

            <Text style={style.text}>Preço</Text>
            <TextInput
                style={style.input}
                onChangeText={preco => setFood({...food, preco})}
                placeholder="Insira o preço"
                value={food.preco}
            />

            <Text style={style.text}>URL Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={imgURL => setFood({...food, imgURL})}
                placeholder="Informe a URL do produto"
                value={food.imgURL}
            />

            <View style={style.margin}>
                <TouchableOpacity style={style.btn} onPress={()=>{navigation.goBack()}}>
                        <Text style={style.txtBnt}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create(
    {
        form: {
            margin:20
        },
        input:{
            height: 40,
            borderColor: 'gray',
            borderRadius:5,
            borderWidth: 1,
            marginBottom:10,
            marginLeft:10,
            marginRight:10
        },
        text:{
            fontSize:15,
            marginLeft:10
        },
        btn:{
            backgroundColor: '#7e57c2',
            paddingTop: 20,
            paddingBottom: 20,
            borderRadius: 50,
            textAlign: 'center',
            justifyContent:'center',
            alignItems: 'center'
        },
        txtBnt:{
            color: '#fff',
            fontWeight: 'bold'
        },
        margin:{
            marginTop: 15,
            marginLeft:10,
            marginRight:10,
        }
    }
)