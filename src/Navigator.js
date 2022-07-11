import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Provider from "./Provider";

import UsandoDatePicker from "./usandoDatePicker"; 
import UsandoMoment from "./utilizandoMoment";
import Local from "./usandoLocalizacao";
import Switcher from "./switchScreens";
import testandoContext from "./contextTest";
import TesteApi from "./testandoApi";
import EditingFlatlist from "./editFlatlist";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Menu" component={Switcher} />
            <Drawer.Screen name="Usando Date Picker" component={UsandoDatePicker}/>
            <Drawer.Screen name="Usando Moment" component={UsandoMoment}/>
            <Drawer.Screen name="Usando Localização" component={Local} />
            <Drawer.Screen name="Teste de Context API" component={testandoContext} />
            <Drawer.Screen name="Testando Consumo de API" component={TesteApi} />
            <Drawer.Screen name="Editando FlatList" component={EditingFlatlist} />
        </Drawer.Navigator>
    )
};

export default function Navigator(){

    return(
        <Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name='Home' component={DrawerNavigator} options={{ headerShown:false }}/>
                    <Stack.Screen name="DatePicker" component={UsandoDatePicker}/>
                    <Stack.Screen name="Moment" component={UsandoMoment}/>
                    <Stack.Screen name="Local" component={Local} />
                    <Stack.Screen name="ContextTeste" component={testandoContext} />
                    <Stack.Screen name="TesteDeApi" component={TesteApi} />
                    <Stack.Screen name="EditFlatlist" component={EditingFlatlist} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}