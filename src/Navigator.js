import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Provider from "./Provider";

import UsandoDatePicker from "./usandoDatePicker"; 
import UsandoMoment from "./utilizandoMoment";
import Local from "./usandoLocalizacao";
import Switcher from "./switchScreens";
import testandoContext from "./contextTest";

const Stack = createNativeStackNavigator();

export default function Navigator(){

    return(
        <Provider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Menu">
                    <Stack.Screen name="Menu" component={Switcher} />
                    <Stack.Screen name="DatePicker" component={UsandoDatePicker}/>
                    <Stack.Screen name="Moment" component={UsandoMoment}/>
                    <Stack.Screen name="Local" component={Local} />
                    <Stack.Screen name="ContextTeste" component={testandoContext} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}