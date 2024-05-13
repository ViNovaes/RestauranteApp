import React from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import food from '../data/Food';
import { ListItem, Avatar, ThemeProvider } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Ionicons'

export default props => {

    function getFoodItem({ item: food }) {
        return (
            <ThemeProvider style={style.body}>
                <ListItem 
                style={style.body}
                    bottomDivider
                    onPress={() => {
                        props.navigation.navigate('FoodFrom')
                        
                    }}
                >
                    <Avatar source={{ uri: food.imgURL }} style={style.img} />
                    <ListItem.Content>
                        <ListItem.Title style={style.titulo}>{food.nome}</ListItem.Title>
                        <ListItem.Title style={style.textDescricao}>{food.sobre}</ListItem.Title>
                        <ListItem.Title style={style.preco}>{food.preco}</ListItem.Title>
                    </ListItem.Content>

                    <ListItem.Chevron
                        name='remove-circle'
                        color='orange'
                        size={25}
                        onPress={
                            () => props.navigation.navigate('FoodFrom', food)
                        } />
                    <Text>0</Text>

                    <ListItem.Chevron
                        name='add-circle'
                        color='orange'
                        size={25}
                        // onPress={
                        //     () => confirmFoodAdd(food)
                        // } 
                        />
                </ListItem>
            </ThemeProvider>
        )
    }

    return (
        <View >
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={food}
                renderItem={getFoodItem}
            />

            {/* <View style={style.margin}>
                <TouchableOpacity style={style.btn} onPress={()=>{navigation.goBack()}}>
                        <Text style={style.txtBnt}>Cadastrar</Text>
                </TouchableOpacity>
            </View> */}
        </View>
    )
}


const style = StyleSheet.create(
    {
        body:{
            backgroundColor: "#FFFFFF",
            borderRadius: 30,
            borderWidth: 10,
            borderColor: "#FFF",
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            padding:10
        },
        img:{
            width: 100,
            height: 100,
        },
        titulo:{
            fontSize: 20,
            color: "black",
            fontFamily: "Radio Canada Big",
            fontWeight: "bold"
        },
        preco:{
            fontSize: 20,
            color: "#43AA48",
            fontFamily: "Platypi",
            fontWeight: "bold"
        },
        textDescricao: {
            fontSize: 15,
            color: "gray",
            fontFamily: "Platypi",
            fontWeight: "bold",
            textAlign: "left",
            justifyContent: 'center',
        },
    })