import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Ionicons'
import FoodForm from './views/FoodForm'
import FoodList from './views/FoodList'

const Stack = createNativeStackNavigator()

export default props =>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FoodList"
                screenOptions={
                    {
                        headerStyle:{
                            backgroundColor: '#7e57c2'
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle:{
                            fontWeight: 'bold'
                        }
                    }
                }>

            <Stack.Screen
                name='FoodList'
                component={FoodList}
                options={({navigation})=>{
                    return {
                        title: 'Lista de produtos',
                        headerRight:()=>(
                            <Button
                                onPress={()=> navigation.navigate('FoodForm')}
                                type='clear'
                                icon={<Icon name='add' size={25} color='white'/>}
                            />
                        )
                    }
                }}
            />

            <Stack.Screen name='FoodForm' component={FoodForm}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}